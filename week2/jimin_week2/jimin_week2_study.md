### 21.11.16 web/mobile part 2주차 스터디
------
#### 크롬 익스텐션 활용 웹 크롤링 및 키워드 기준 필터링 (6번 강의)
- script.js에서 content 페이지의 정보를 바깥쪽에서 사용하고자 할 때
    ```
        chrome.tabs.executeScript({
        code: 'document.querySelector("body").innerText'
        }, function (result) {
    ```
    1. 
    ```
        code:'var bodyText =
    ```
    영역에서 ``` 'var bodyText ```를 지움.

    2. ``` ,function(result) { } ``` : 위의 코드가 실행된 후 이 함수를 호출하라, 이 때 result 변수에 code의 결과를 담아 전달함.

    3. ``` alert(result[0]); ``` : 경고창으로 result의 내용을 띄워줌.
    
- alert가 아닌 innerText에 내용 띄우기
    ```
        var bodyText = result[0];
        var bodyNum = bodyText.split(' ').length;
        var myNum = bodyText.match(new RegExp('\\b(' + user + ')\\b', 'gi')).length;  

        var per = myNum / bodyNum * 100;
        per = per.toFixed(1);
        document.querySelector('#result').innerText = myNum + '/' + bodyNum + '(' + (per) + '%)';
   
        });
    });
    ```
    - 경고창 대신 id 값이 result인 태그의 하위에 결과를 추가함. -> ``` document.querySelector('#result').innerText = ```
    - ```per = per.toFixed();``` per의 자리수를 원하는만큼 고정시킴

------
#### 크롬 익스텐션 활용 웹 크롤링 및 키워드 기준 필터링 (7번 강의)
- textarea를 만들어 style 설정
- 컨텐츠 페이지의 #user에 입력된 값이 변경되었을 때 컨텐츠 페이지에 몇개의 단어가 등장하는지 계산하는 부분
    ``` 
    document.querySelector('#user').addEventListener('change', function() {
            alert('alert message');     })
    ```
-  user 변수의 value값을 alert창에 출력
    ```     var user = document.querySelector('#user').value; ```


