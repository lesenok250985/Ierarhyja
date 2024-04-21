var canvas1 = document.getElementById('animatedShapesCanvas1');
    var ctx1 = canvas1.getContext('2d');
    var canvas2 = document.getElementById('animatedShapesCanvas2');
    var ctx2 = canvas2.getContext('2d');
    var canvas3 = document.getElementById('animatedShapesCanvas3');
    var ctx3 = canvas3.getContext('2d');

    function drawPolygon(ctx, x, y, numSides, radius, angle, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(radius, 20);
        for (var i = 1; i <= numSides; i++) {
            ctx.lineTo(radius * Math.cos(i * 2 * Math.PI / numSides), radius * Math.sin(i * 2 * Math.PI / numSides));
        }
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
    }

    function drawStick(ctx, x1, y1, x2, y2, color, thickness) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.stroke();
    }

    function drawTriangle(ctx, x, y, size, color) {
        ctx.beginPath();
        ctx.moveTo(x, y - size / 2);
        ctx.lineTo(x - size / 2, y + size / 2);
        ctx.lineTo(x + size / 2, y + size / 2);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }

    function draw(canvas, ctx, angle1, angle2) {
        // Очистка canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Рисуем первый многоугольник
        drawPolygon(ctx, 150, 100, 8, 60, angle1, '#00FF00'); // Пятиугольник, зеленый

        // Рисуем второй многоугольник
        drawPolygon(ctx, 350, 150, 8, 60, angle2, '#0000FF'); // Восьмиугольник, синий

        // Рисуем красную палку между многоугольниками
        drawStick(ctx, 150, 100, 350, 150, '#FF0000', 15); // Красная палка

        // Рисуем треугольник
        drawTriangle(ctx, 245, 250, 250, '#FF0000'); // Высокий треугольник

        // Обновляем углы поворота для следующего кадра
        angle1 += Math.PI / 280; // Угол в радианах
        angle2 += Math.PI / 280; // Угол в радианах

        // Запускаем анимацию
        requestAnimationFrame(function() {
            draw(canvas, ctx, angle1, angle2);
        });
    }

    // Запускаем анимацию для каждого canvas
    draw(canvas1, ctx1, 0, 0);
    draw(canvas2, ctx2, Math.PI / 4, Math.PI / 4);
    draw(canvas3, ctx3, Math.PI / 2, Math.PI / 2);

/*
    /*метод обектній
    class AnimatedShapesManager {
    constructor(canvasId, numSides, radius, color) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.numSides = numSides;
        this.radius = radius;
        this.color = color;
        this.angle = 0;
    }

    drawPolygon() {
        this.ctx.save();
        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.rotate(this.angle);
        this.ctx.beginPath();
        this.ctx.moveTo(this.radius, 20);
        for (let i = 1; i <= this.numSides; i++) {
            this.ctx.lineTo(this.radius * Math.cos(i * 2 * Math.PI / this.numSides), this.radius * Math.sin(i * 2 * Math.PI / this.numSides));
        }
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.restore();
    }

    drawStick(x1, y1, x2, y2, color, thickness) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = thickness;
        this.ctx.stroke();
    }

    drawTriangle(x, y, size) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - size / 2);
        this.ctx.lineTo(x - size / 2, y + size / 2);
        this.ctx.lineTo(x + size / 2, y + size / 2);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.drawPolygon();
        this.drawStick(-this.radius, 20, this.radius, 20, '#FF0000', 15);
        this.drawTriangle(this.canvas.width / 2, this.canvas.height - 100, 100);

        this.angle += Math.PI / 280;

        requestAnimationFrame(() => {
            this.draw();
        });
    }
}

// Tworzymy instancje AnimatedShapesManager dla każdego canvas
const manager1 = new AnimatedShapesManager('animatedShapesCanvas1', 8, 60, '#00FF00');
const manager2 = new AnimatedShapesManager('animatedShapesCanvas2', 8, 60, '#0000FF');
const manager3 = new AnimatedShapesManager('animatedShapesCanvas3', 3, 100, '#FF0000');

// Rozpoczynamy animacje dla każdego z managerów
manager1.draw();
manager2.draw();
manager3.draw();*/