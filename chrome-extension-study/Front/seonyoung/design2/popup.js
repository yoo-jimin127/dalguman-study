import filter from './tooltip.js';

const $tooltip = document.getElementById('tooltip');


$tooltip.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.storage.sync.get('keywords', ({ keywords }) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: filter,
      args: [tab.url, keywords],
    });
  });
});
