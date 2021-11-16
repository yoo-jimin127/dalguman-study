### 21.11.16 web/mobile part 2주차 스터디
------
#### 크롬 익스텐션 활용 웹 크롤링 및 키워드 기준 필터링 6번 강의
- script.js에서 content 페이지의 정보를 바깥쪽에서 사용하고자 할 때
    1. 
    ```
        code:'var bodyText =
    ```
    영역에서 ``` 'var bodyText ```를 지움.

    2. ``` ,function(result) { } ``` : 위의 코드가 실행된 후 이 함수를 호출하라, 이 때 result 변수에 code의 결과를 담아 전달함.

    3. ``` alert(result[0]); ``` : 경고창으로 result의 내용을 띄워줌.
    
     
