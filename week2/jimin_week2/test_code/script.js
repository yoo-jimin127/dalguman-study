//컨텐츠 페이지의 #user 입력된 값이 변경 되었을 '때'
document.querySelector('#user').addEventListener('change', function () {
    //컨텐츠 페이지에 몇개의 단어가 등장하는지 계산해주세요. 
    var user = document.querySelector('#user').value;
   
    //컨텐츠 페이지를 대상으로 코드를 실행해주세요. 
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
   
  });