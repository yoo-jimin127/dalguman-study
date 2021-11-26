function func01(e){
    chrome.tabs.executeScript(null,
        {code:"document.querySelector('#stock_items').value='테슬라';"});   
}
    

document.addEventListener("DOMContentLoaded",function(){
    // addEventListener : 특정상황에서 함수 호출할 때 / 기본적으로 웹브라우저는 "DOMContentLoasded"사용
    var btn01 = document.querySelector('#btn');
    // querySelector를 쓰면 좋은 점 : 제이쿼리 같은 지시자를 쓸 수 있다.
    btn01.addEventListener("click",func01); // 클릭시 func01호출 
});