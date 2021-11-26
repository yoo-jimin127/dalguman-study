### 21.11.11 GDSC WEB/MOBILE 크롬 익스텐션 플러그인 1주차 스터디 정리 내용 <유지민>
------
##### script.js 코드 리뷰
1. 컨텐츠 페이지의 #user 입력된 값이 변경되었을 때 컨텐츠 페이지에 몇개의 단어가 등장하는지 계산
```
    document.querySelector('#user').addEventListener('change', function () {
        var user = document.querySelector('#user').value;
```
    - document 객체 : DOM의 스펙, 웹 브라우저에서 HTMLDocument 객체로 사용
        - HTMLDocument 객체: 문서 전체를 대표하는 객체
    
    - ```.querySelector()``` : CSS 선택자, 요소 선택하게 해줌. (선택자에 해당하는 첫번째 요소만 선택) 

    - ```addEventListener``` : 이벤트 등록