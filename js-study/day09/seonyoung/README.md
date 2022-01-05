<h3>정</h3>   

01. console.log('test~~ %s', 'string');  
    문자열 출력   
    
02. console.warn('text');   
    경고 메세지 출력   
   
03. console.error('text');  
    에러 메세지 출력 
    
04. console.info('text');    
    정보 메세지 출력   
     
05. console.assert();   
    주어진 가정이 거짓인 경우 오류 메세지 출력. 참이면 아무것도 하지 않음   
   
06. console.clear();   
    콘솔에 기록된 메세지 모두 삭제   
   
07. console.dir(p);   
    콘솔에 주어진 객체 목록을 JSON형태의 트리구조로 출력해줌.    

08. group   
    console.groupCollapsed(); : 콘솔의 새로운 인라인 그룹 생성   
    console.groupEnd(); : 호출되면 종료   

09. console.count('text');   
    인자가 같으면 호출횟수를 카운팅함   

10. time   
    console.time('a'); : 작업 시간 추적 가능   
    console.timeEnd('a'); : 호출되면 종료   
   
11. console.table(func);   
    테이블 형태로 출력됨   
