const proxy = 'https://kh-proxy.herokuapp.com/'; // 왼쪽은 개인 배포, open proxy server: https://cors-anywhere.herokuapp.com/

// 예제 urlList 
const urlList = [
  {
    url: 'https://guswl0863.tistory.com/entry/bhc-%EB%BF%8C%EB%A7%81%ED%81%B4-%EC%B2%98%EC%9D%8C-%EB%A8%B9%EC%96%B4%EB%B3%B8-%ED%9B%84%EA%B8%B0',
    target : 'a'
  },
  {
    url: 'https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=singree1829&logNo=220671149056',
    target : 'a'
  },
  {
    url: 'https://blog.daum.net/hong114c/296',
    target : 'a'
  },
  {
    url: 'https://www.smlounge.co.kr/woman/article/43331',
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

    // 본문 글 불러오기.
    // 공백 제거 방법 논의해야함.
    const keyword = '아';
    let keyExist = false;
    let keySentences = [];
    const contents = [...nodeList]
      .map(node => node.textContent)
      .filter(function (text) { return (text !== "") });
    for (let p in contents) {
      if (contents[p].includes(keyword)) {
        keyExist = true;
        keySentences.push(contents[p])
        break;
      }
    }
    let result = { url, keyExist, keySentences }
    return result;

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
