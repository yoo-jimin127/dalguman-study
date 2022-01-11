const proxy = 'https://kh-proxy.herokuapp.com/'; // 왼쪽은 개인 배포, open proxy server: https://cors-anywhere.herokuapp.com/

// 예제 url (뿌링클 후기)
const url =
  'https://guswl0863.tistory.com/entry/bhc-%EB%BF%8C%EB%A7%81%ED%81%B4-%EC%B2%98%EC%9D%8C-%EB%A8%B9%EC%96%B4%EB%B3%B8-%ED%9B%84%EA%B8%B0';

const proxyUrl = proxy + url; // proxy server에 요청보내기

const getHtml = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    const text = await response.text();
    const $html = document.createElement('div');
    $html.innerHTML = text;
    console.log($html); // 소나한테 넘겨줄 html
  } catch (error) {
    console.log(error);
  }
};

getHtml(proxyUrl);
