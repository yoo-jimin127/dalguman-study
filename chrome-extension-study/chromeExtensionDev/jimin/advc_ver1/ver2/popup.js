import filter from './filter.js';

const $addForm = document.querySelector('.add-form');
const $addFormInput = document.querySelector('.add-form__input');
const $highlightBtn = document.getElementById('highlight-btn');
const $container = document.querySelector('.container');

// 우선 keyword 하나 가지고 동작하는 로직

// 초기 & 업데이트 화면
chrome.storage.sync.get('keywords', ({ keywords }) => {
  showKeywordList(keywords);
});

// 추가 시 목록에 표시 (add 버튼)
$addForm.addEventListener('submit', () => {
  chrome.storage.sync.get('keywords', ({ keywords }) => {
    const values = $addFormInput.value.trim().split(',');
    const newValues = values.map((val) => val.trim());
    const addedArr = [...keywords, ...newValues];

    showKeywordList(addedArr);

    $container.textContent = addedArr || 'nothing';
    chrome.storage.sync.set({ keywords: addedArr });
    console.log(addedArr);
  });
});

// find 버튼 클릭 시 이벤트 처리
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
  arr.forEach((keyword) => {
    const $keywordItem = document.createElement('li');
    $keywordItem.className = 'keyword-list__item';
    $keywordItem.textContent = keyword;
    $keywordList.appendChild($keywordItem);
  });
  $container.innerHTML = '';
  $container.appendChild($keywordList);
};