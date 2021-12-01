### 1. html & CSS
> 1) index-START.html에서 가져옴   
> 2) 새로 안 내용   
>  - 전체적으로 transition에 대해 공부가 필요하다고 생각들었는데, 강현이가 1주차 피드백에 소개한 링크로 개념 정리를 다시 함   
>    그래도 아직 어려우니까 좀 더 공부해봐야겠다.   
>  - transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
>    transition의 진행속도 조절할 수 있음   
>    cubic-ezier : transition-timing-function 속성에서 전환 시작부터 끝까지 효과를 제어할 때 사용함
>                  베지어 곡선 정의하는 개념으로, 괄호 안에 각 4개의 좌표 p1, p2, p3, p4 입력 (범위 : 0부터 1)
>    https://www.codingfactory.net/10953#transition-timing-function 참고하면 좋을 것 같닿
>    
### 2. JavaScript
> 1) 새로 안 내용
>  - setIerval()
>    일정시간 간격으로 작업 수행가능.
>    작업 중지 : clearInterval
>    setInterval(setData, 1000); // 1000ms(1초) 간격으로 setData실행
>    
>  - rotate(${h_grapics}deg
>    h_grapics 라디안만큼 회전하게만들기
> 2) 중간에 어이없게 시간 잡아 머근 거
>  - const now = new Date();
>   첨에 입력할 때 Data가 변수로 잡혀서 참조되지않은변수 어쩌구 떠서 시간이 좀 걸렸다,, 힝 그래도 찾아서 행복해   
