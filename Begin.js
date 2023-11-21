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
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('touchstart', startDrawing);

// 鼠标移动事件
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchmove', draw);

// 鼠标释放事件
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('touchend', stopDrawing);

// 开始绘制
function startDrawing(e) {
    if (drawing) {
        e.preventDefault();
        ctx.beginPath();
        if (e.type === 'mousedown') {
            ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
        } else if (e.type === 'touchstart') {
            ctx.moveTo(e.touches[0].clientX - canvas.getBoundingClientRect().left, e.touches[0].clientY - canvas.getBoundingClientRect().top);
        }
    }
}

// 绘制
function draw(e) {
    if (drawing) {
        e.preventDefault();
        if (e.type === 'mousemove') {
            ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
        } else if (e.type === 'touchmove') {
            ctx.lineTo(e.touches[0].clientX - canvas.getBoundingClientRect().left, e.touches[0].clientY - canvas.getBoundingClientRect().top);
        }
        ctx.stroke();
    }
}

// 停止绘制
function stopDrawing() {
    canvas.removeEventListener('mousemove', draw);
    canvas.removeEventListener('touchmove', draw);
}

// 清空画布
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 清空按钮
document.getElementById('clearButton').addEventListener('click', clearCanvas);
