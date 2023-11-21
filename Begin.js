// ... 其他代码 ...

let drawing = false;

function startDrawing(e) {
    if (drawing) {
        return;
    }
    
    e.preventDefault();
    drawing = true;
    
    ctx.beginPath();
    
    if (e.type === 'mousedown') {
        ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    } else if (e.type === 'touchstart') {
        ctx.moveTo(e.touches[0].clientX - canvas.getBoundingClientRect().left, e.touches[0].clientY - canvas.getBoundingClientRect().top);
    }
    
    // 添加明显的边框样式
    canvas.style.border = '2px solid #000';
}

function draw(e) {
    if (!drawing) {
        return;
    }
    
    e.preventDefault();
    
    if (e.type === 'mousemove') {
        ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    } else if (e.type === 'touchmove') {
        ctx.lineTo(e.touches[0].clientX - canvas.getBoundingClientRect().left, e.touches[0].clientY - canvas.getBoundingClientRect().top);
    }
    
    // 使用requestAnimationFrame以便绘制更平滑
    requestAnimationFrame(drawFrame);
}

function drawFrame() {
    ctx.stroke();
}

function stopDrawing() {
    if (drawing) {
        drawing = false;
        canvas.style.border = '1px solid #000'; // 恢复默认边框样式
    }
    canvas.removeEventListener('mousemove', draw);
    canvas.removeEventListener('touchmove', draw);
}

// ... 其他代码 ...
