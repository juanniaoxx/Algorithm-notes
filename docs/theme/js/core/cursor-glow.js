/**
 * ========================================
 * CyberDev Theme - Neon Cursor Glow
 * 霓虹鼠标光晕跟随特效
 * ========================================
 */

(function () {
    'use strict';

    // 避免重复初始化
    if (document.querySelector('.cursor-glow')?.hasAttribute('data-initialized')) {
        return;
    }

    // 配置
    const CONFIG = {
        glowSize: 300,            // 光晕直径(px)
        lerpFactor: 0.07,        // 缓动系数（越小越慢）
        idleOpacity: 0.8,        // 正常透明度
        hiddenOpacity: 0,        // 隐藏时透明度
        idleTimeout: 2000,       // 鼠标不动多久后变暗(ms)
        idleOpacityLow: 0.3,     // 静止时的透明度
        colors: {
            center: 'rgba(0, 212, 255, 0.08)',
            middle: 'rgba(179, 71, 234, 0.04)',
            edge: 'transparent'
        }
    };

    // 创建光晕元素
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.setAttribute('data-initialized', 'true');
    glow.setAttribute('aria-hidden', 'true');
    document.body.appendChild(glow);

    // 状态变量
    let mouseX = -CONFIG.glowSize;
    let mouseY = -CONFIG.glowSize;
    let currentX = -CONFIG.glowSize;
    let currentY = -CONFIG.glowSize;
    let animationId = null;
    let idleTimer = null;
    let isVisible = true;
    let currentOpacity = CONFIG.idleOpacity;

    // ========================================
    // 更新光晕位置（使用 requestAnimationFrame 实现平滑跟随）
    // ========================================
    function updatePosition() {
        // 线性插值实现缓动
        currentX += (mouseX - currentX) * CONFIG.lerpFactor;
        currentY += (mouseY - currentY) * CONFIG.lerpFactor;

        glow.style.left = currentX + 'px';
        glow.style.top = currentY + 'px';

        animationId = requestAnimationFrame(updatePosition);
    }

    // ========================================
    // 处理鼠标移动
    // ========================================
    function handleMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // 鼠标移动时恢复完整亮度
        resetIdleTimer();
        setOpacity(CONFIG.idleOpacity);
    }

    // ========================================
    // 处理鼠标离开页面
    // ========================================
    function handleMouseLeave() {
        setOpacity(CONFIG.hiddenOpacity);
    }

    // ========================================
    // 处理鼠标进入页面
    // ========================================
    function handleMouseEnter() {
        setOpacity(CONFIG.idleOpacity);
        resetIdleTimer();
    }

    // ========================================
    // 处理触摸设备（移动端隐藏光晕）
    // ========================================
    function handleTouchStart() {
        setOpacity(CONFIG.hiddenOpacity);
        // 触摸设备上永久隐藏
        glow.style.display = 'none';
        cleanup();
    }

    // ========================================
    // 空闲计时器：鼠标不动时降低光晕亮度
    // ========================================
    function resetIdleTimer() {
        if (idleTimer) clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            setOpacity(CONFIG.idleOpacityLow);
        }, CONFIG.idleTimeout);
    }

    // ========================================
    // 设置光晕透明度
    // ========================================
    function setOpacity(opacity) {
        currentOpacity = opacity;
        glow.style.opacity = opacity;
    }

    // ========================================
    // 清理事件监听
    // ========================================
    function cleanup() {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('touchstart', handleTouchStart);
        if (animationId) cancelAnimationFrame(animationId);
        if (idleTimer) clearTimeout(idleTimer);
    }

    // ========================================
    // 初始化
    // ========================================
    function init() {
        // 触摸设备不启用光晕
        if (window.$u?.isTouchDevice && window.$u.isTouchDevice()) {
            glow.style.display = 'none';
            return;
        }

        // 事件绑定
        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('touchstart', handleTouchStart, { once: true });

        // 启动动画循环
        updatePosition();

        // 初始触发一次空闲计时
        resetIdleTimer();

        console.log('%c🖱️ Cursor Glow %cinitialized',
            'color:#b347ea;',
            'color:#606090;font-size:0.8rem;');
    }

    // 等待 DOM 就绪
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ========================================
    // 暴露 API
    // ========================================
    window.CyberCursorGlow = {
        show: () => {
            glow.style.display = '';
            setOpacity(CONFIG.idleOpacity);
        },
        hide: () => {
            setOpacity(CONFIG.hiddenOpacity);
            glow.style.display = 'none';
        },
        setSize: (size) => {
            glow.style.width = size + 'px';
            glow.style.height = size + 'px';
        },
        destroy: cleanup
    };
})();