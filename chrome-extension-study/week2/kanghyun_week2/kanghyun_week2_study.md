default로 body 긁어오는 것을 만들고, 특정 사이트 별로 본문 태그에 대해 가져올 수 있게 만들어주면 좋을듯?



### `chrome.scripting.executeScript` 사용법

https://developer.chrome.com/docs/extensions/reference/scripting/#injection-targets

- <u>**Injection targets**</u>

  : `target` 파라미터를 사용하여 JS 또는 CSS를 삽입할 대상 지정 가능

  - 필수 필드는 `tabId`

- <u>**Injected Code**</u> 

  : 외부 파일이나 런타임 변수를 통해 삽입할 코드를 지정할 수 있음

  - **파일**

  - **Runtime functions (런타임 함수)**

    - This function will be executed in the context of injection target.

    - this will not carry over any of the current execution context of the function

      -> 바인딩된 매개변수( `this`객체 포함 ) 및 외부 참조 변수는 오류를 발생시킵니다

      (`args`속성 을 사용하여 이 문제를 해결 가능)

  - **Runtime strings (런타임 문자열)**

    - 페이지 내에 CSS를 삽입하는 경우 `css`속성에 사용할 문자열을 지정할 수도 있습니다.
    - This option is only available for `scripting.insertCSS()`
    - you can't execute a string using `scripting.executeScript()`.

- <u>**Handling Results**</u>
  - `chrome.scripting.executeScript` 의 두 번째 인자로 들어가는 함수의 매개변수로, 첫 번째 인자의 함수 반환값이 들어간다.
  - 파라미터로 들어오는 값은 **객체로 이루어진 배열 형태**를 띄며, 객체의 프로퍼티에는  `frameId`와 `result`가 있다.



### 어려웠던 점

`chrome.scripting.excuteScript`를 적용하는 과정에서, 

body를 가져와 사용자가 선택한 단어의 개수를 파악하고 팝업창에 띄워주는 콜백 함수를 넘겨주고 싶었다. 그런데 팝업창의 결과를 띄워주는 태그를 가져와서 값을 넣어줘야하는데, 콜백 함수에서 해당 태그가 불러와지지가 않는다는 것을 몰라 헤맸다.



오류 코드)

```js
const inputBox = document.getElementById('user');		// 입력 태그
const resultBox = document.getElementById('result');	// 결과가 들어가는 태그

inputBox.addEventListener('change', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const userWords = inputBox.value;	// 입력값

  chrome.storage.sync.set({		// storage에 입력값 추가
    userWords,
  });

  chrome.scripting.executeScript({	// 웹페이지에서 실행하는 api
    target: { tabId: tab.id},
    function: getCountWords,	// 콜백 함수 getCountWords
  });
});

getCountWords = () => {	// 콜백 함수
  chrome.storage.sync.get('userWords', ({ userWords }) => {	// storage에서 불러오기
    const bodyText = document.body.innerText;
    const wordCounts = bodyText.match(
      new RegExp(`\\b${userWords}\\b`, 'gi')	// 전처리
    ).length;
    
    resultBox.innerText = `개수: ${wordCounts}`;	// 잘못된 코드!!
  });
};

```



- 생각해봤던 해결책

  storage로 값을 넘겨줘서 콜백함수 외부에서 결과 태그에 값을 넣어주는 로직을 구현 (작동은 되지만, 근본적인 해결방법이 아닙니다.(stroage 사용한 방법))

  ```js
  const inputBox = document.getElementById('user'); // 입력 태그
  
  inputBox.addEventListener('change', async () => {
    const resultBox = document.getElementById('result'); // 결과가 들어가는 태그
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    let userWords = inputBox.value; // 입력값
  
    // storage에 입력값 추가
    chrome.storage.sync.set({
      userWords,
    });
  
    // 웹페이지에서 실행하는 api
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: getCountWords, // 콜백 함수 getCountWords
    });
  
    // 결과 보여주기
    chrome.storage.sync.get('wordCounts', ({ wordCounts }) => {
      resultBox.innerText = `counts: ${wordCounts}`;
    });
  });
  
  getCountWords = () => {
    // 콜백 함수
    chrome.storage.sync.get('userWords', ({ userWords }) => {
      // storage에서 불러오기
      let bodyText = document.body.innerText;
      let wordCounts =
        bodyText.match(
          new RegExp(`\\b${userWords}\\b`, 'gi') // 전처리
        )?.length ?? 0;
  
      chrome.storage.sync.set({
        wordCounts,
      });
    });
  };
  ```

  간단한 기능에 생각보다 많은 시간이 들어가 답답해 잔머리를 굴리다가 나온 생각으로, 



- 성공한 해결책

  공식 문서를 보고 콜백 함수의 반환값을 처리할 수 있는 방법에 대해 배움. 

  ```js
  const inputBox = document.getElementById('user'); // 입력 태그
  
  inputBox.addEventListener('change', async () => {
    const resultBox = document.getElementById('result'); // 결과가 들어가는 태그
  
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    let userWords = inputBox.value; // 입력값
  
    // storage에 입력값 추가
    // chrome.storage.sync.set({
    //   userWords,
    // });
  
    // 웹페이지에서 실행하는 api
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        function: getCountWords, // 콜백 함수 getCountWords
        args: [userWords],
      },
      (resultArr) => {
        // 콜백 함수 실행 결과를 인수로 받음 (객체 형태)
        console.log(resultArr);
        resultBox.innerText = `counts: ${resultArr[0].result}`;
      }
    );
  });
  
  // 콜백 함수
  getCountWords = (userWords) => {
    let bodyText = document.body.innerText;
    let wordCounts =
      bodyText.match(
        new RegExp(`\\b${userWords}\\b`, 'gi') // 전처리
      )?.length ?? 0;
  
    return wordCounts;
  };
  ```

  



### 나중에 참고 할만한 자료

- [chrome.runtime.getURL 예시](https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/api/web-accessible-resources/content-script.js)
- [chrome.storage 공식문서](https://developer.chrome.com/docs/extensions/reference/storage/#synchronous-response-to-storage-updates)



### 끄적거린것들

웹페이지 화면에 무언가 변화를 줄건가? (필터링한 단어 존재할 시, 알림?)
-> background.js에서 만들어서 진행하면 알기 쉬울듯



링크별로 다른 방식 필요함 (ex.네이버 블로그)
=> 이전에는 웹페이지에서 바로 가져오는 방식 사용했는데, 링크를 인식해서 다르게 적용시킬 수 있는 방법 필요
-> [chrome.runtime](https://developer.chrome.com/docs/extensions/reference/runtime/)에서 뭔가 가능한가?



host_permissions이란게 있네 뭔지 알아보자 (혹시 카페같이 회원가입 필요한 곳에서 가능?)



테스트할때 편하게 할 수 없을까? 매번 업데이트하고 하나씩 눌러보니깐 빡취넹..

