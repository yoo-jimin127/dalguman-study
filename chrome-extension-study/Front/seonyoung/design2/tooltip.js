/* manifest.json 정상적으로 실행이된다면,
1. 크롬익스텐션 툴팁 실행 버튼 클릭 -> 툴팁이 실행된다.
(아니면 툴팁실행버튼 말고 하이라이트 실행 + 툴팁실행..)=>더 간단한 방법?
2. 툴팁을 실행하면 우리가 원하는 텍스트 가져오게하기.
    - 예) 선택 단어의 횟수 : ㅇㅇ개 (줄바꿈)
          변수에 담긴 해당 문장 가져오기
*/

/*
function handleMouseClick(){
    
}
btnStart.addEventListener('click', handleMouseClick);


let btnStart = document.getElementById('start');
let btnTooltip = document.getElementById('tooltip');

function handleMouseover(event){
    event.document.write("선택단어 횟수 : ")
}


btnTooltip.addEventListener('mouseover', handleMouseover);
*/

const myBestColor = document.getElementById('myBestColor');
const saveBtn = document.getElementById('jsSave');


function handleSavingClick(event){
    const saveColor = myBestColor;
    console.log(saveColor.value);
   
    //임시 fixpo코드
    function fixop(/*parameter wordCount*/) {
        let count = 100; //임시 검색된 건수 (ResultKeyCount)
        // Opacity 컬러코드 투명도 Hex값 : 100% - FF, 75% — BF, 50% — 80, 25% — 40
        if(count>=76&&count<=9999){
            console.log(saveColor.value + FF); 
        } else if(count>=51&&count<=75){
            console.log(saveColor.value + BF);
        } else if(count>=26&&count<=50){
            console.log(saveColor.value + 80);
        } else if(count>=1&&count<=25){
            console.log(saveColor.value + 40);
        } else{
            //하이라이팅 실행안함
        }
    }
}

saveBtn.addEventListener("click",handleSavingClick);