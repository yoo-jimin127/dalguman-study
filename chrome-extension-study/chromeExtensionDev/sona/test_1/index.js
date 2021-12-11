const axios = require('axios');
const cheerio = require('cheerio');

let resultList = []

// const URL = 'https://m.blog.naver.com/kizaki56/221911259635';
// const URL = 'https://m.blog.naver.com/gassi00/222372391808';
const URL = 'https://blog.naver.com/PostView.naver?blogId=smileleap&logNo=222415567808&categoryNo=16&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView';

axios.get(URL)
    .then(html => {
        const $ = cheerio.load(html.data);
        // console.log($.html());
        const $bodyList = $('div.se-main-container').children('div.se-component');
        //네이버 블로그 기준. 
        $bodyList.each(function (index, element) {
            const text = $(this).find('p.se-text-paragraph span').text();
            if (text !== '') {
                resultList.push(text);
            } else;
        })
        console.log(resultList);
    })