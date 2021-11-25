//dom표현
const playground = document.querySelector(".playground >ul"); 
// .playground안의 ul에..

//setting
const GAME_ROWS=20;
const GAME_COLS=10;


//variables
let score=0;
let duration=500;
let downInterval;
let tempMovingItem;

const BLOCKS ={
    // 방향을 돌릴 때
    tree:[
        [[2,1],[0,1],[1,0],[1,1]],
        [],
        [],
        [],
    ]
}
const movingItem={
    type:"tree",
    direction:0,
    top: 0,
    left: 3,
};

init()

//functions
function init(){
    tempMovingItem = {...movingItem}; 
    /* 스프레드오퍼레이터 사용 : 값만 가져와서 넣는 것이므로,
    무빙아이템에 있는 값만 넣은것이기 때문에
    무빙아이템의 값이 변경되더라도 템프 무빙아이템의 값은 변경되지 않는다.*/
    for(let i=0; i < GAME_ROWS; i++){
        preppendNewLine()
    }
    renderBlocks()
}


function preppendNewLine(){
    const li=document.createElement("li");
    const ul=document.createElement("ul");
    for(let j=0; j < GAME_COLS; j++){
        const matrix = document.createElement("li");
        ul.prepend(matrix);

    }
    li.prepend(ul)
    playground.prepend(li)
}

function renderBlocks(){
    const {type, direction, top, left} = tempMovingItem;
    BLOCKS[type][direction].forEach(block=> {
        const x = block[0] + left;
        const y = block[1] + top;
        const target = playground.childNodes[y].childNodes[0].childNodes[x];
        target.classList.add(type)
    })
}


//event handling 방향키로 핸들링하기
document.addEventListener("keydown", e=>{
    console.log(e)
})