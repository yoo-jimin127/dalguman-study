const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //getContext

canvas.width = window.innerWidth; //innerWidthm, innerHeight
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';//strokeStyle, lineJoin, lineCap
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.linewidth = 100;
//hsl : https://mothereffinghsl.com/
//ctx.globalCompositeOperation = 'multiply'; // blend

let isDrawing= false; // 클릭다운할때 엘레멘트가 움직....
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++; //색깔을 점점 변하게 하는 역할쓰
  if (hue >= 360) {
    hue = 0; //색상 리셋
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}


canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);