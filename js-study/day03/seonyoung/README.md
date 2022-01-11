### 1. css
1. :root선택자 : 웹문서 구조에서 가장 상위요소를 선택하는 가상클래스   
  - HTML보다 스타일 적용 우선순위가 더 높음   
  - 변수 선언: --변수명으로 선언한다.   
  - 접근 : 변수명: var(--변수명);   
```js
:root{
  --base: #ffc600;
  --spacing: 3px;
  --blur: 2px;   
}

img{
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
```

### 2. js

1. document.documentElement : document의 루트요소인 Element를 리턴함   
2. style.setProperty() : CSS속성 재할당   
3. forEach 반복문 : 배열에서만 사용하는 메서드   
  - 배열의 처음~끝까지 반복하여 실행함   
  - 인자로 콜백함수 받아오며, 주어진 콜백함수를 배열 요소 각각에 대해 실행함   
  - 주로 querySelectorAll() 전체 선택자를 이용해 사용   
4. addEventListner()   
  - change : 마우스 움직임 끝나는 순간 포착   
  - mousemove : change의 문제를 해결하기 위해 사용됨. input을 드래그하는 도중의 값을 알 수 있음   

### 나는,, 걷는법부터 배워야할지도,, 😔
