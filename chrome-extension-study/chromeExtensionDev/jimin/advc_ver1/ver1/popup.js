const $button = document.getElementById('highlight');

$button.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['script.js'],
  });
});

function btnclick() {
  var value = $('#inputval').val();
  console.log(value);
}