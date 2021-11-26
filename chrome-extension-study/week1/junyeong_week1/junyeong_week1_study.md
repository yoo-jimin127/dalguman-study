# 첫주차 공부 내용

### 1. 생활코딩 <크롬 익스텐션 강의 수강>

### 2. 수강 내용 실습

### 실습 내용
// 이 문서에서 body tag 아래에 있는 모든 텍스트를 가져온다.
// 그 결과를 body text 변수에 담는다.
var bodyText = document.querySelector('body').innerText;
// bodyText에 있는 모든 단어를 추출하고 그 숫자를 센다. 그 결과를 bodyNum에 담는다.

var bodyNum = bodyText.split(' ').length;

// bodyText에서 the가 몇번 등장?
// \\b 사이에 필요한 단어를 넣어야 한다. gi는 대소문자 구분x 
var myNum = bodyText.match(new RegExp('\\b(the|is|was)\\b','gi')).length;

myNum + '/' + bodyNum +'(' +(myNum/bodyNum*100)+'%)';


### 이후 공부할것. 마저 강의 수강하기!!