#### Google

##### 검색 결과 (전부 동일?)

- *#search .g .yuRUbf > a*
  - 하이라이트를 추가해줄 요소는 *h3.LC20lb*



#### Naver (View)

##### **전체 검색 결과**

- *.api_subject_bx > .svp_list > panel-list > .panel*

  - 전체) *ul.(lst_total _list_base) > li.(bx _svp_item) > div.total_wrap > div.total_area > a. (api_txt_lines total_tit _cross_trigger)*

  - 태그 선택) *html-api > ul.(lst_total _list_base) > li.(bx _svp_item) > div.total_wrap > div.total_area > a. (api_txt_lines total_tit _cross_trigger)*

##### **view**

- 위와 동일 (+ infinite scrolling)



#### Daum (블로그, 카페, 웹문서, 브런치)

##### 전체 검색 결과

- article#mArticle > .inner_article > div(.g_comp disp-attr=(블로그: BR1, 카페: CCB, 웹문서: WSA, 브런치: BRC))
  - 블로그) ***#blogColl** > .coll_cont > ul.list_info > li > .wrap_cont > .cont_inner > .(wrap_tit mg_tit) > a*
  - 카페) ***#cafeColl** > .coll_cont > ul.list_info > li > .wrap_cont > .cont_inner > .(wrap_tit mg_tit) > a*
  - 웹문서) ***#webdocColl** > .coll_cont > **.mg_cont** > ul.list_info > li > .wrap_cont > .cont_inner > .(wrap_tit mg_tit) > a*
  - 브런치) *#brcColl > .coll_cont > **.mg_cont** > **.cont_brunch** > **ul.list_brunch** > li > .wrap_cont > **.tit_cont** > a*

- 블로그) article#mArticle > .inner_article > div.(.g_comp disp-attr=(TAB)blog) > (하위는 동일)
- 카페) article#mArticle > .inner_article > div.(.g_comp disp-attr=(TAB)cafe)
- 웹문서) article#mArticle > .inner_article > div.(.g_comp disp-attr=(TAB)web)
- 브런치) article#mArticle > .inner_article > div.(.g_comp disp-attr=(TAB)brunch)



#### 문제점

- 네이버) 태그에 대해서 다 가져올건지, 일부만 가져올건지 (근데 다 가져오기엔 양이 너무 많은듯?)
  - _panel이 태그 종류 (처음에 첫번째값, 다른 태그 클릭 시, 기존 태그 display: none, 다시 이전 태그 클릭 시: display: block)
- 네이버) 전체 검색 결과에 view가 없을 경우 어떻게 처리할 것인지? (ex. 키보드)
- 네이버) view로 들어가면 infinite scrolling으로 구현해놨는데, 어케 처리할지?
- 다음) 블로그, 카페, 웹문서, 브런치 따로 있는데 어떻게 진행할까?