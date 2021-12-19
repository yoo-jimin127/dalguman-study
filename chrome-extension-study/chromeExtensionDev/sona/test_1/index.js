
const proxy = 'https://kh-proxy.herokuapp.com/'; // 왼쪽은 개인 배포, open proxy server: https://cors-anywhere.herokuapp.com/

// 예제 url (뿌링클 후기)
const url = 'https://guswl0863.tistory.com/entry/bhc-%EB%BF%8C%EB%A7%81%ED%81%B4-%EC%B2%98%EC%9D%8C-%EB%A8%B9%EC%96%B4%EB%B3%B8-%ED%9B%84%EA%B8%B0'
const url3 = 'https://meherenow.tistory.com/entry/BHC-%EC%B9%98%ED%82%A8-%EB%A9%94%EB%89%B4-%EB%BF%8C%EB%A7%81%ED%81%B4-%EC%96%91%EB%85%90%EB%B0%98-%ED%9B%84%EB%9D%BC%EC%9D%B4%EB%93%9C%EB%B0%98-%ED%9B%84%EA%B8%B0';
const url2 = 'https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=singree1829&logNo=220671149056';
const url4 = 'https://m.blog.naver.com/PostView.naver?blogId=ejinna&logNo=222596898127';
const url5 = 'https://m.blog.naver.com/PostView.naver?blogId=lasohyoung&logNo=222218173843';
const url6 = 'https://www.smlounge.co.kr/woman/article/43331';

const proxyUrl = proxy + url2; // proxy server에 요청보내기
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
    var parser = new DOMParser();
    var doc = parser.parseFromString(text, 'text/html');
    // const nodeList = doc.querySelectorAll('div.se-main-container > p'); //naver
    // const nodeList = doc.querySelectorAll('div.contents_style > p'); //tistory 
    const nodeList = doc.querySelectorAll('p');
    const contents = [...nodeList]
      .map(node => node.textContent)
      .filter(function(text){ return (text !== "") });
    console.log(contents)
  } catch (error) {
    console.log(error);
  }
};

getHtml(proxyUrl);




// let resultList = []

// // const URL = 'https://m.blog.naver.com/kizaki56/221911259635';
// // const URL = 'https://m.blog.naver.com/gassi00/222372391808';
// const URL = 'https://blog.naver.com/PostView.naver?blogId=smileleap&logNo=222415567808&categoryNo=16&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView';

// axios.get(URL)
//     .then(html => {
//         const $ = cheerio.load(html.data);
//         // console.log($.html());
//         const $bodyList = $('div.se-main-container').children('div.se-component');
//         //네이버 블로그 기준.
//         $bodyList.each(function (index, element) {
//             const text = $(this).find('p.se-text-paragraph span').text();
//             if (text !== '') {
//                 resultList.push(text);
//             } else;
//         })
//         console.log(resultList);
//     })
