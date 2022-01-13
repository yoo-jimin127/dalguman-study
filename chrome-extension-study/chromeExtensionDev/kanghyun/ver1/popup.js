import filter from './filter.js';

const $addForm = document.querySelector('.add-form');
const $addFormInput = document.querySelector('.add-form__input');
const $highlightBtn = document.getElementById('highlight-btn');
const $container = document.querySelector('.container');

// 우선 keyword 하나 가지고 동작하는 로직

// 초기 & 업데이트 화면
chrome.storage.sync.get('keywords', ({ keywords }) => {
  $container.textContent = keywords || 'nothing';
});

// 추가 시 목록에 표시 (form 자동 업데이트되게 해놨는데, 수정 필요한가?)
$addForm.addEventListener('submit', () => {
  chrome.storage.sync.set({ keywords: $addFormInput.value });
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
