/**
 * ========================================
 * CyberDev Theme - Matrix Rain Background (Light)
 * ========================================
 */

(function () {
    'use strict';

    if (document.getElementById('bg-canvas')?.hasAttribute('data-initialized')) return;

    var canvas = document.getElementById('bg-canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'bg-canvas';
        document.body.prepend(canvas);
    }
    canvas.setAttribute('data-initialized', 'true');

    var ctx = canvas.getContext('2d');
    var w, h, drops = [];
    var chars = '01アイウエオカキクケコサシスセソタチツテト';
    var fontSize = 16;                          // 字号稍大 = 列数减少
    var fadeAlpha = 0.04;                      // 拖尾更淡（原来是 0.08）
    var animId;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        var cols = Math.floor(w / fontSize);
        drops = [];
        for (var i = 0; i < cols; i++) {
            drops[i] = Math.random() * -h / fontSize;
        }
    }

    window.addEventListener('resize', resize);
    resize();

    function draw() {
        ctx.fillStyle = 'rgba(2,4,8,' + fadeAlpha + ')';
        ctx.fillRect(0, 0, w, h);

        ctx.font = fontSize + 'px "JetBrains Mono"';

        for (var i = 0; i < drops.length; i++) {
            var char = chars[Math.floor(Math.random() * chars.length)];
            var x = i * fontSize;
            var y = drops[i] * fontSize;

            // 头部 — 淡白
            ctx.fillStyle = 'rgba(226,226,240,0.35)';
            ctx.fillText(char, x, y);

            // 尾部 — 淡蓝
            ctx.fillStyle = 'rgba(0,212,255,0.12)';
            ctx.fillText(char, x, y - fontSize);

            // 只有 3% 概率新起一列
            if (y > h && Math.random() > 0.97) drops[i] = 0;
            drops[i]++;
        }
        animId = requestAnimationFrame(draw);
    }

    draw();

    window.CyberBackground = {
        resize: resize,
        destroy: function () { cancelAnimationFrame(animId); }
    };
})();