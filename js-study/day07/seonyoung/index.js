    // ## Array Cardio Day 2

    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
      // some() : 배열 안 요소들이 주어진 함수를 통과하는지 테스트함
      var thisYear = new Date();
      const a1 = people.some(person =>{
        return thisYear.getFullYear() - person.year >= 19;
      });
      console.log(a1);
    

      // Array.prototype.every() // is everyone 19 or older?
      // every(); : 배열 안 모든 요소들이 주어진 함수를 통과하는지 테스트함
      const a2 = people.every(person =>{
        return thisYear.getFullYear() - person.year >= 19;
      });
      console.log(a2);
          

      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
      const a3 = comments.find((comment)=> comment.id === 823423);
      console.log(a3);

      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423
      // id가 83423인 배열을 찾고, splice를 이용해 a4번째(=1번째) 요소 1개 제거
      const a4 = comments.findIndex((comment)=> comment.id === 823423);
      comments.splice(a4, 1); 
      console.log(comments);