1. array.prototype.filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새 배열에 반환   
```js
    const a1 = inventors.filter((inventor) => inventor.year >=1500 && inventor.year <1600);
    console.log(a1);
```
2. Array.prototype.map() : 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새 배열에 반환   
```js
     const a2 = inventors.map((inventor) => inventor.first + inventor.last);
      console.log(a2);
```
3. Array.prototype.sort() :배열 요소를 적절한 위치에 정렬한 후 그 배열을 반환함,  숫자비교시 오름차순 정렬됨   
```js
      const a3 = inventors.sort((a,b) => a.year-b.passed);
      console.log(a3)
```
4. Array.prototype.reduce()   
```js
//처음에 짠 코드
      var all=0;
      const a4 = inventors.reduce((a,b) => all = a.passed - a.year + b.passed- b.year);
      console.log(a4);
	// 결과값 : NaN

//정답코드
const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
}, 0);
```
5-8은,, 좀 더 공부가 필요해   

참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map   

