<h3>1. fetch API</h3>   
  - request, response와 같은 http 파이프라인 구성요소 조작할 수 있다.   
  - 비동기 네트워크 통신을 알기 쉽게 기술 가능하다.   

<h3>2. fetch 사용 방법</h3>   
  - 첫번째 인자로 url,두번째인자로 옵션객체 받음, promise의 객체 반환   
  - 반환된 객체는   
    api호출 성공했을 경우 : 응답 객체를 resolve   
    실패할경우 : 예외(error객체) reject   

```js
fetch(url, option)
	.then((response)=>console.log(“response:”, response))
	.catch((error)=> console.log(“error:”, error)); 
 /* 서버에 url의 파일을 요청함.
 모든 작업이 끝나면 (response)가 호출되며, 그 안에 서버가 응답한 데이터가 들어있음.*/
```
