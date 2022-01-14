export default async function (url, keywords, selectedColor) {
  // 검색 결과 요소(선택자)
  const outerSelectors = {
    google: {
      searchSelector: '#search .g .yuRUbf > a',
      targetSelector: 'h3.LC20lb',
    },
    naver: {
      searchSelector: '.sp_nreview panel-list > ._panel div.total_area > a',
      targetSelector: '',
    },
  };

  // 페이지의 본문 요소(선택자)
  const innerSelector = {
    naver: 'div.se-main-container > p',
    tistory: 'div.contents_style > p',
    daum: '.tt_article_useless_p_margin > p',
    etc: 'p',
  };

  ////////////////////

  // 현재 링크 파악 함수
  const separateSite = (url) => {
    if (url.includes('google')) {
      return 'google';
    } else if (url.includes('naver')) {
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

  // 검색 페이지의 분석 대상 링크 리스트
  const makeSearchList = (currentURL = window.location.href) => {
    const targetSite = separateSite(currentURL);

    if (targetSite) {
      return makeList(
        outerSelectors[targetSite].searchSelector,
        outerSelectors[targetSite].targetSelector
      );
    }
  };

  ////////////////////////
  //본문에서 키워드 찾고 키워드 문장 불러오기
  const getSubString = (contents, keywords) => {
    const ResultArr = [];

    for (let key of keywords) {
      let index = 0;
      const Sub_str = []; // 키워드 포함 하위 문장이 들어가는 배열
      let SubStrSize = 30; // 전체 사이즈
      let FrontSubStrLen = 20; // 앞쪽 사이즈
      let FixIndex = 0; // 최종길이.
      let KeyWordCount = 0;
      let flag = false;

      while (index !== -1) {
        flag = true;
        index = contents.indexOf(key, index + 1);
        if (index !== -1) {
          FixIndex = index - FrontSubStrLen;
          // 키워드 위치 고정을 위한 수식. 음수일 경우 그대로이기 때문에 넣은 코드
          if (FixIndex < 0) {
            FixIndex = 0;
          }
          KeyWordCount += 1;
          Sub_str.push(contents.substr(FixIndex, SubStrSize));
        }
      }
      if (flag) {
        ResultArr.push({
          keyword: key,
          keyCount: KeyWordCount,
          keySubstr: Sub_str,
        });
      }
    }

    return ResultArr;
  };

  // url에 들어가 키워드 포함 여부 및 배열 반환 함수
  const getHtml = async (url, keywords) => {
    try {
      // 개인 배포한 프록시 서버 (***주의 요함***)
      const proxy = 'https://kh-proxy.herokuapp.com/';
      const proxyUrl = proxy + url;

      const response = await fetch(proxyUrl, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      if (!response.ok) {
        throw new Error('error!');
      }

      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');

      //사이트 별로 파싱 방법 나누기.
      let nodeList = [];
      if (url.includes('daum')) {
        nodeList = doc.querySelectorAll(innerSelector.daum);
      } else if (url.includes('naver')) {
        nodeList = doc.querySelectorAll(innerSelector.naver);
      } else if (url.includes('tistory')) {
        nodeList = doc.querySelectorAll(innerSelector.tistory);
      } else {
        nodeList = doc.querySelectorAll(innerSelector.etc);
      }

      //게시물 본문 글 불러오기
      const contents = [...nodeList]
        .map((node) => node.innerText)
        .map((text) => text.trim())
        .filter(function (text) {
          if (
            text !== '' &&
            text !== ' ' &&
            text !== '   ' &&
            text !== '\n\n' &&
            text !== '\n'
          )
            return true;
          return false;
        })
        .join('');

      //본문에 키워드 있는지 확인 후 키워드 문장 가져오기
      const subStrArr = getSubString(contents, keywords);

      const resultObj = {
        keywords: subStrArr,
        url,
      };

      return resultObj;
    } catch (error) {
      console.log(`집계가 불가능한 웹사이트 링크입니다.\n${url}`);
    }
  };

  // 하이라이트 해주는 함수
  const addHighlight = ($target, color = '#ffff00', opacity) => {
    $target.style.backgroundColor = color + opacity;
  };

  // 최종
  const makeResult = async (url, keywords, selectedColor) => {
    const searchList = makeSearchList(url);
    const resultArr = [];

    const allKeywordNum = keywords.length;

    if (allKeywordNum > 0) {
      searchList.forEach(async (obj) => {
        obj.target.style.backgroundColor = 'initial';

        const result = await getHtml(obj.link, keywords);

        // keyCount 배열 중 하나라도 0이 아니면 (본문에 키워드가 하나라도 있을떄) true
        const keyCountArr = result?.keywords.map((res) => res.keyCount);

        // 포함한 키워드 갯수
        const includeKeywordsNum = keyCountArr
          ? keyCountArr.filter((count) => count > 0).length
          : 0;

        if (includeKeywordsNum > 0) {
          // 키워드 등장에 따른 투명도
          const temp = (includeKeywordsNum / allKeywordNum) * 255;
          const targetOp = Math.round(temp).toString(16);

          // 하이라이트 추가
          addHighlight(obj.target, selectedColor, targetOp);

          // 반환할 결과
          result.title = obj.target.textContent;
          resultArr.push(result);
        }
      });
    } else {
      alert('키워드를 입력해주세요!');
      // keyword가 없을 떄 로직 추가
    }

    return resultArr;
  };

  const dataArr = await makeResult(url, keywords, selectedColor);
  console.log(dataArr);

  return dataArr;
}
