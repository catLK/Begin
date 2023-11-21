// 获取画布和上下文
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 获取绘制和擦除按钮
const drawButton = document.getElementById('drawButton');
const eraseButton = document.getElementById('eraseButton');

let drawing = false;

// 绘制模式
drawButton.addEventListener('click', () => {
    drawing = true;
    canvas.style.cursor = 'crosshair';
});

// 擦除模式
eraseButton.addEventListener('click', () => {
    drawing = false;
    canvas.style.cursor = 'default';
});

// 鼠标按下事件
canvas.addEventListener('mousedown', (e) => {
    if (drawing) {
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
        canvas.addEventListener('mousemove', draw);
    }
});

// 鼠标移动事件
function draw(e) {
    if (drawing) {
        ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
        ctx.stroke();
    }
}

// 鼠标释放事件
canvas.addEventListener('mouseup', () => {
    canvas.removeEventListener('mousemove', draw);
});

// 清空画布
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 清空按钮
document.getElementById('clearButton').addEventListener('click', clearCanvas);
