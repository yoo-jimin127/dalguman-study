//문자열이 변수에 담겼으면,,

// let str에 찾으려는 본문이 온다.
let str = `정용진 신세계그룹 부회장이 온라인상에서 공유되고 있는 본인과 신세계그룹 계열사에 대한 불매운동 관련 이미지를 자신의 인스타그램에 올렸다.
자신의 '멸공' 관련 발언을 둘러싼 논란이 정치권으로까지 번지고 신세계그룹 주가가 급락하면서 관련 발언을 더는 하지 않겠다고 선언하며 수습에 나선 지 반나절만이다.
정 부회장은 11일 오전 자신의 인스타그램에 '보이콧 정용진, 가지 않습니다. 사지 않습니다'는 문구가 담긴 이미지를 올리며 "업무에 참고하시기 바랍니다"라고 적었다.
이 이미지는 2019년 일본 불매운동 당시의 '노재팬' 포스터를 모방한 것으로, 정 부회장의 '멸공' 발언이 논란이 된 이후 온라인상에서 공유되고 있다.
정 부회장은 또 이날 오전 북한이 동해상으로 탄도미사일로 추정되는 발사체를 발사했다는 기사 내용을 캡처해 올리며 '○○'이라고 적었다.
'멸공'이라는 단어를 직접 쓰는 대신 '○○'으로 표기한 것으로 풀이된다. 정 부회장은 앞서 지난 6일 시진핑 중국 국가주석 사진이 들어간 기사를 자신의 인스타그램에 올리면서 '멸공', '방공방첩', '승공통일' 등의 해시태그를 함께 달았다.
이후 논란이 확산하자 해당 게시물을 삭제하고 김정은 북한 국무위원장의 사진을 올리며 자신의 멸공은 중국이 아닌 '우리 위에 사는 애들'(북한)을 겨냥한 것이라고 해명했다. 
그러나 윤석열 국민의힘 대선 후보가 8일 이마트[139480]를 찾아 '멸공'을 연상시키는 멸치와 콩을 구입하면서 논란이 정치권으로까지 확산했다. 
이에 전날 유가증권시장에서는 신세계[004170] 주가가 전 거래일보다 6.80% 하락했고, 온라인상에서도 스타벅스 등 신세계그룹 계열사에 대한 불매운동을 주장하는 글이 다수 올라왔다. 
정 부회장은 이처럼 논란이 지속되자 전날 오후 늦게 주변에 "더 이상 '멸공' 관련 발언은 하지 않을 것"이라고 말한 것으로 알려졌다.`;

//찾으려는 키(키워드)
// 키워드 배열로 가능
let key = ["멸공", "논란"];

// let key 배열에 사용자가 찾으려는 키워드를 넣으면 된다. 키워드가 1개가 아니라 여러개여도 대응이 가능
let NumOfKey = key.length;

let ResultSubStr = [];
let ResultKeyPoint = [];
let ResultKeyCount = [];

for (let start = 0; start < NumOfKey; start++) {
  let i = 0;

  let key_point = [];
  let Sub_str = [];
  let SubStrSize = 30;
  let FrontSubStrLen = 20;
  let FixIndex = 0;
  let KeyWordCount = 0;

  if (i == -1) {
    KeyWordCount = 0;
    //검색결과가 없는경우. key가 본문에 아예 등장하지 않는 경우.
    continue;
  } else {
    key_point.push(i);
    while (i != -1) {
      i = str.indexOf(key[start], i + 1);
      if (i != -1) {
        key_point.unshift(i); // 필요할수도 있으니까,,
        FixIndex = i - FrontSubStrLen;
        if (FixIndex < 0) {
          FixIndex = 0;
        }
        KeyWordCount += 1;
        Sub_str.unshift(str.substr(FixIndex, SubStrSize));
      }
    }
  }
  ResultKeyCount.unshift(KeyWordCount);
  ResultSubStr.unshift(Sub_str);
  ResultKeyPoint.unshift(key_point);
}

// 유저가 입력한 키워드가 등장하는 위치가 담긴 배열
// 등장 횟수
// 키워드가 들어간 하위문장 앞뒤로 설정한 범위만큼
