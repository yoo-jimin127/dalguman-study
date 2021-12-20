const h_hand=document.querySelector(".hour-hand");
const m_hand=document.querySelector(".min-hand");
const s_hand=document.querySelector(".second-hand");

function setData(){
// 현재 시간을 가져온다.
    const now = new Date();

//각 변수에 현재 시,분,초를 대입
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

// 시,분,초를 시계모양으로,,,,,, 화면에 보여주기
    const h_grapics = ((h/12) * 360 + ((m/60)*30)+ 90);
    const s_grapics = ((s/60) * 360 + 90);
    const m_grapics = ((m/60) * 360 + ((s/60)*6)+ 90);

    h_hand.style.transform=`rotate(${h_grapics}deg)`; // h_grapics 라디안만큼 회전하게만들기
    m_hand.style.transform=`rotate(${m_grapics}deg)`;
    s_hand.style.transform=`rotate(${s_grapics}deg)`;
}

//setIerval() : 일정시간 간격으로 작업 수행가능. 작업 중지 : clearInterval
setInterval(setData, 1000); // 1000ms(1초) 간격으로 setData실행
setData(); // 함수실행