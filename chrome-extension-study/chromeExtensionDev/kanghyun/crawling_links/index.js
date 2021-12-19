// 1. Google
let searchSelector = '#search .g .yuRUbf > a';
let targetSelector = 'h3.LC20lb';

// 2. Naver (view만)
let searchSelector = '.sp_nreview panel-list > ._panel div.total_area > a';
let targetSelector = '';

// 3. Daum (블로그, 카페, 웹문서, 브런치)
let searchSelector = '';
let targetSelector = '';

// function
const makeList = (searchSelector, targetSelector) => {
  const searchList = document.querySelectorAll(searchSelector);
  const uniqList = new Set([...searchList]);

  const result = [...uniqList].map((item) => {
    return {
      link: item.href, // 분석할 링크
      target: targetSelector ? item : item.querySelector(targetSelector), // 하이라이트 할 요소
    };
  });

  console.log(result);
  return result;
};

// test
document.querySelectorAll(
  '#blogCoil > .coll_cont > ul.(list_info mg_cont clear) > li > div.wrap_cont > .cont_inner > .(wrap_tit mg_tit) > a'
);
