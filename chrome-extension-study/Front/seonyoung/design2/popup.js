$button = document.getElementById('tooltips');

function handleMouseClick(){
  chrome.scripting.executeScript({
    target:{ tabId: tab.id },
    files: ['script.js']
  });
}

$button.addEventListener('click', async()=>{
  let [tab] = await chrome.tabs.query({
    active: true, currentWindow: true
  });
  handleMouseClick;
});