import filter from './filter.js';

const $addForm = document.querySelector('.add-form');
const $addFormInput = document.querySelector('.add-form__input');
const $highlightBtn = document.getElementById('highlight-btn');
const $container = document.querySelector('.container');

// 초기 & 업데이트 화면
chrome.storage.sync.get('keywords', ({ keywords }) => {
  showKeywordList(keywords || []);
});

// 추가 시 목록에 표시 (form 자동 업데이트되게 해놨는데, 수정 필요한가?)
$addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  chrome.storage.sync.get('keywords', ({ keywords }) => {
    const values = $addFormInput.value
      .trim()
      .split(',')
      .map((keyword) => keyword.toLowerCase().trim());

    const filteredVals = values.filter((val) => !keywords?.includes(val));

    const addedArr =
      keywords && filteredVals.length !== 0
        ? [...keywords, ...filteredVals]
        : values;

    showKeywordList(addedArr);

    chrome.storage.sync.set({ keywords: addedArr });

    $addFormInput.value = '';
  });
});

// async function test(a, b) {
//   const res = await Promise.resolve(100);
//   return res;
// }

$highlightBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const keywordsObj = await chrome.storage.sync.get('keywords');

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id, allFrames: true },
      function: filter,
      args: [tab.url, keywordsObj.keywords],
    },
    (resultArr) => {
      const res = resultArr[0];
      console.log(res.result);
      console.log(resultArr);
    }
  );
});

// hover 시 띄워주는 함수
const showDetails = () => {};

// 돔 요소 생성
const showKeywordList = (arr) => {
  const $keywordList = document.createElement('ul');
  $keywordList.className = 'keyword-list';

  if (arr.length === 0) {
    $keywordList.textContent = 'nothing';
  } else {
    arr.forEach((keyword) => {
      const $keywordItem = document.createElement('li');
      $keywordItem.className = 'keyword-list__item';

      const $keywordContent = document.createElement('span');
      $keywordContent.className = 'keyword-list__content';
      $keywordContent.textContent = keyword;

      const $keywordDel = document.createElement('button');
      $keywordDel.className = 'keyword-list__del';
      $keywordDel.textContent = 'X';
      $keywordDel.addEventListener('click', delKeyword);

      $keywordItem.append($keywordContent, $keywordDel);
      $keywordList.appendChild($keywordItem);
    });
  }

  $container.innerHTML = '';
  $container.appendChild($keywordList);
};

// 삭제 버튼
const delKeyword = (e) => {
  const targetKeyword = e.currentTarget.previousElementSibling.textContent;
  chrome.storage.sync.get('keywords', ({ keywords }) => {
    const filteredVals = keywords.filter(
      (keyword) => keyword !== targetKeyword
    );

    showKeywordList(filteredVals);
    chrome.storage.sync.set({ keywords: filteredVals });
  });
};
