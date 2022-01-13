const proxy = 'https://kh-proxy.herokuapp.com/'; // 왼쪽은 개인 배포, open proxy server: https://cors-anywhere.herokuapp.com/

// 예제 urlList 
const urlList = [
  {
    url: 'https://guswl0863.tistory.com/entry/bhc-%EB%BF%8C%EB%A7%81%ED%81%B4-%EC%B2%98%EC%9D%8C-%EB%A8%B9%EC%96%B4%EB%B3%B8-%ED%9B%84%EA%B8%B0',
    target : 'a'
  },
  {
    url: 'https://www.prestigegorilla.net/posting/R001/62',
    target : 'a'
  },
  {
    url: 'https://jinsnmuory.tistory.com/91',
    target : 'a'
  },
  {
    url: 'https://yunicone.tistory.com/571#:~:text=%EB%BF%8C%EB%A7%81%ED%81%B4%20%EA%B0%80%EB%A3%A8%EA%B0%80%20%EC%97%84%EC%B2%AD%EB%82%98%EA%B2%8C,%EB%90%98%EC%A7%80%EB%A7%8C%20%EB%A7%9B%EC%9D%80%20%EB%84%88%EB%AC%B4%20%EA%B0%95%ED%95%98%EA%B3%A0.',
    target : 'a'
  }
]

const urlSelector = {
  naver: 'div.se-main-container > p',
  tistory: 'div.contents_style > p',
  daum: '.tt_article_useless_p_margin > p',
  etc : 'p'
}

const getHtml = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'
      },
    });
    const text = await response.text();
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, 'text/html');

    //사이트 별로 파싱 방법 나누기.
    let nodeList = [];
    if (url.includes('daum')) {
       nodeList = doc.querySelectorAll(urlSelector.daum); 
    } else if (url.includes('naver')) {
       nodeList = doc.querySelectorAll(urlSelector.naver); 
    } else if (url.includes('tistory')) {
       nodeList = doc.querySelectorAll(urlSelector.tistory)
    } else {
       nodeList = doc.querySelectorAll(urlSelector.etc);
    }


    const contents = [...nodeList]
      .map(node => node.innerText)
      .map(text=>text.trim())
      .filter(function (text) {
        if((text !== '' && text !== ' ' && text !== '   ' && text !== '\n\n' && text !== '\n')) return true;
        // if((text === '' || text === ' ' || text === '   ' || text === '\n\n')) return true;
        return false;
      })
      .join('');
  

    // console.log(contents);
    return contents;

    // 이 부분은 키워드 찾기팀이 구현

    // const keyword = '아';
    // let keyExist = false;
    // let keySentences = [];
    
    // for (let p in contents) {
    //   if (contents[p].includes(keyword)) {
    //     keyExist = true;
    //     keySentences.push(contents[p])
    //     break;
    //   }
    // }
    // let result = { url, keyExist, keySentences }
    // return result;

  } catch (error) {
    console.log(error);
  }
};

const test = async (urlList) => {
  urlList.forEach(urlObj => {
    const proxyUrl = proxy + urlObj.url;
    // let result =  getHtml(proxyUrl);
    getHtml(proxyUrl)
      .then(result => console.log(result));
  })
}

test(urlList);
