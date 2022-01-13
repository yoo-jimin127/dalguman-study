import filter from './filter.js';

const $addForm = document.querySelector('.add-form');
const $addFormInput = document.querySelector('.add-form__input');
const $highlightBtn = document.getElementById('highlight-btn');
const $container = document.querySelector('.container');

// 우선 keyword 하나 가지고 동작하는 로직

// 초기 & 업데이트 화면
chrome.storage.sync.get('keywords', ({ keywords }) => {
  showKeywordList(keywords || []);
});

// 추가 시 목록에 표시 (form 자동 업데이트되게 해놨는데, 수정 필요한가?)
$addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  chrome.storage.sync.get('keywords', ({ keywords }) => {
    const values = $addFormInput.value.trim().split(',').map((keyword) => keyword.toLowerCase().trim());

    const filteredVals = values.filter((val) => !keywords?.includes(val))
    
    const addedArr = keywords && filteredVals.length !== 0 ? [...keywords, ...filteredVals] : values;

    showKeywordList(addedArr);

    chrome.storage.sync.set({ keywords: addedArr });

    $addFormInput.value = '';
  });
});

$highlightBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.storage.sync.get('keywords', ({ keywords }) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: filter,
      args: [tab.url, keywords],
    });
  });
});

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

    showKeywordList(filteredVals)
    chrome.storage.sync.set({ keywords: filteredVals });
  });
};

const myBestColor = document.getElementById('myBestColor');
const saveBtn = document.getElementById('jsSave');


//색상을 선택하고 save버튼을 누르면 hex값 저장
function handleSavingClick(event){
    const saveColor = myBestColor;
    console.log(saveColor.value);

    // console.log(FixOp[0]);
    // 테스트용 코드
    // FixOp 리스트에 각각 hex투명도 값이 들어가 있는데 이거 색깔 뒤에다가 붙이면댐

    // 투명도 결정 코드
    // hex코드 뒤에다가 붙이면 된다.
    let NumOfKey = key_arr.length;
    // 3개
    let FixOp = [];
    let count = 0;

    for (let j = 0; j < str_arr.length; j++) {
        // 몇번째 사이트를 볼건지.
    let op_cnt = 0;
    while (count <= ResultKeyCount.length) {
        // 해당 사이트에 단어가 등장한 유무를 검사
        if (ResultKeyCount[count] > 0) {
        op_cnt += 1;
        }
        if ((count + 1) % NumOfKey === 0) {
        let temp = (1 - op_cnt / NumOfKey) * 100;
        FixOp.push(Math.round(temp).toString(16));
        break;
        }
        count++;
        }
    console.log(saveColor+FixOp[j])
    }
}

saveBtn.addEventListener("click",handleSavingClick);
