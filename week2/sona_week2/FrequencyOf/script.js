function matching(user){
  chrome.tabs.executeScript({
    code: 'document.querySelector("body").innerText'
  }, function (result) {
    var bodyText = result[0];
    var bodyNum = bodyText.split(' ').length;
    var myNum = bodyText.match(new RegExp('\\b(' + user + ')\\b', 'gi')).length;
    var per = myNum / bodyNum * 100;
    per = per.toFixed(1);
    document.querySelector('#result').innerText = myNum + '/' + bodyNum + '(' + (per) + '%)';
  });
}
 
//크롬 스토리지 값 가져오기
chrome.storage.sync.get(function (data) {
  // #user의 값으로 data의 값을 입력해주세요. 
  document.querySelector('#user').value = data.userWords;
 
  matching(data.userWords);
 
});
 
document.querySelector('#user').addEventListener('change', function () {
 
  var user = document.querySelector('#user').value;
 
  // 크롬 스토리지에 입력값 저장
  chrome.storage.sync.set({
    userWords: user
  });
 
  matching(user);
 
});