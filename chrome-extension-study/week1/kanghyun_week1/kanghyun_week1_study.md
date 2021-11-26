스터디 전에 정리해놓은 글입니다. 결정된 사항이 아닌 혼자 생각해본 내용들이니 가볍게 봐주세요! 



## 기능

#### 웹 페이지에서 **1) 선택된 단어**들을 **2) 찾아** **3) 알림 표시**

1) 기능

- 유저의 선택 단어 데이터 보관 (방식 선택)
  - 서버 (로그인 기능, 파이썬 연결)
  - Local Storage API (c.e. [Storage API](https://developer.chrome.com/docs/extensions/reference/storage/)로 대체 가능)

- 단어 추가 (단어를 그룹단위로 관리, 선택하여 적용)



2) 기능

- Python의 Beautiful Soup 라이브러리 이용

- google API 중 비슷한 기능 없는지 찾아보는 중

  ([scripting API](https://developer.chrome.com/docs/extensions/reference/scripting/) 이용해서 html 요소 가져오고 JS에서 처리?)



- [Scraper Crawler V3](https://chrome.google.com/webstore/detail/scraper-crawler-v3/kbhidgghgflkbalnkoeokcipocmigkfh)) chrome extension 프로그램, 이런 방식으로 크롤링하면 좋을 듯



3) 기능 (방식 선택)

- 선택된 단어의 빈도에 따른 아이콘 변경: c.e. [action API](https://developer.chrome.com/docs/extensions/reference/action/)

- 알림: c.e. [alarm API](https://developer.chrome.com/docs/extensions/reference/alarms/)
- 팝업 창에서 단어의 빈도 수 확인 (문장으로 확인?)



## 예상되는 어려움

- 양질의 데이터를 얻기 위해 게시글(본문)의 내용만 크롤링 해야한다. (광고창 제거)

  -> 각 블로그 별로 기능 구현(ex. 네이버 블로그, 티스토리 등)

- 단어의 명확성? ('협찬' 단어에 대해 알림 표시를 한다고 했을 때, 게시글 중 '협찬 아님'이라는 단어는 어떻게 처리할 것인지)

- 이미지로 협찬이라는 것을 알리는 블로그의 경우 대처 방법

  -> 마지막 이미지(혹은 3개 정도) 도출해서 보여주는 방식?



## 문제점

연습하면서 마주쳤던 문제점들

- 네이버 카페는 회원가입 내용이 뜨고, 게시글 크롤링이 정상적으로 되질 않는다.

- 네이버 블로그는 크롤링이 아예 되질 않는다.

  -> 'iframe'태그 안의 src 앞부분에 "https://blog.naver.com/"를 추가한 링크에 접속해 크롤링 해야한다.



## 그 외

참고 자료

- [Chrome Extensions API reference](https://developer.chrome.com/docs/extensions/reference/)

- [ZUM-Chrome-Extension](https://zuminternet.github.io/Zum-Chrome-Extension/) (배포 과정에 참고하면 좋을 것 같아서 가져왔어요)

- 그 외 각 API별로 링크 게시함



크롤링 해봤던 것 (옛날에)

- [Python Beautiful Soup 이용한 일자리 자료 얻기 (Nomad Coder)](https://github.com/kanghyun98/python-study/tree/master/Web_Scrapper)
- [R을 이용한 세월호 뉴스 비교 분석 프로젝트](https://github.com/kanghyun98/news-comparison)



익스텐션 연습

- [공식 사이트에서 제공하는 연습 내용](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
- [연습 결과](https://github.com/kanghyun98/Toy-Projects/tree/main/chrome-extension_test) 