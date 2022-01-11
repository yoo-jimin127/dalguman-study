const selectors = {
  google: {
    searchSelector: '#search .g .yuRUbf > a',
    targetSelector: 'h3.LC20lb',
  },
  naver: {
    searchSelector: '.sp_nreview panel-list > ._panel div.total_area > a',
    targetSelector: '',
  },
};

// 현재 링크 파악 함수
const separateSite = (url) => {
  if (url.includes('https://www.google.co.kr/search')) {
    return 'google';
  } else if (url.includes('https://search.naver.com/search.naver')) {
    return 'naver';
  } else {
    return null;
  }
};

// 링크, 타겟을 포함한 객체 반환 함수
const makeList = (searchSelector, targetSelector) => {
  const searchList = document.querySelectorAll(searchSelector);
  const uniqList = new Set([...searchList]);

  const result = [...uniqList].map((item) => {
    return {
      link: item.href, // 분석할 링크
      target: targetSelector ? item.querySelector(targetSelector) : item, // 하이라이트 할 요소
    };
  });

  return result;
};

// 종합
const makeSearchList = (url) => {
  const site = separateSite(url);
  const res = makeList(
    selectors[site].searchSelector,
    selectors[site].targetSelector
  );
  return res;
};

// 현재 url: window.location.href
