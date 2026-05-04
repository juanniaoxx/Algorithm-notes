/**
 * ========================================
 * CyberDev Theme - Click Particle Burst
 * 点击粒子爆炸特效
 * ========================================
 */

(function () {
    'use strict';

    // 避免重复初始化
    if (window.__cyberParticlesInitialized) return;
    window.__cyberParticlesInitialized = true;

    // ========================================
    // 配置
    // ========================================
    const CONFIG = {
        defaultCount: 8,             // 默认粒子数量
        burstCount: 20,              // 爆发模式粒子数量
        particleColors: [
            '#00d4ff',               // 霓虹蓝
            '#b347ea',               // 霓虹紫
            '#00ff88',               // 霓虹绿
            '#ff2d95',               // 霓虹粉
            '#ffb347',               // 霓虹琥珀
        ],
        minSize: 2,
        maxSize: 6,
        minDistance: 15,
        maxDistance: 50,
        duration: 700,               // 动画时长(ms)
    };

    // ========================================
    // 创建单个粒子
    // ========================================
    function createParticle(x, y, color, angle, distance, size) {
        const particle = document.createElement('div');
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 0 ${size * 2}px ${color};
            animation: cyberParticleBurst ${CONFIG.duration}ms ease-out forwards;
        `;

        // 设置 CSS 变量供动画使用
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');

        document.body.appendChild(particle);

        // 自动清理
        setTimeout(() => {
            particle.remove();
        }, CONFIG.duration + 50);
    }

    // ========================================
    // 在指定位置爆发粒子
    // ========================================
    function burstAt(x, y, count = CONFIG.defaultCount) {
        for (let i = 0; i < count; i++) {
            const color = CONFIG.particleColors[Math.floor(Math.random() * CONFIG.particleColors.length)];
            const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
            const distance = CONFIG.minDistance + Math.random() * (CONFIG.maxDistance - CONFIG.minDistance);
            const size = CONFIG.minSize + Math.random() * (CONFIG.maxSize - CONFIG.minSize);

            createParticle(x, y, color, angle, distance, size);
        }
    }

    // ========================================
    // 添加动画关键帧（只添加一次）
    // ========================================
    function injectKeyframes() {
        if (document.getElementById('cyber-particle-keyframes')) return;

        const style = document.createElement('style');
        style.id = 'cyber-particle-keyframes';
        style.textContent = `
            @keyframes cyberParticleBurst {
                0% {
                    transform: scale(0) translate(0, 0);
                    opacity: 1;
                }
                100% {
                    transform: scale(1) translate(var(--tx), var(--ty));
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ========================================
    // 全局点击监听
    // ========================================
    function handleGlobalClick(e) {
        // 跳过一些不需要特效的元素
        const skipSelectors = [
            'button', 'a', 'input', 'textarea', 'select',
            '.md-search', '.md-clipboard', '.video-btn',
            '.cat-btn', '.tech-card', 'code',
        ];

        // 检查是否应该跳过
        const shouldSkip = skipSelectors.some(selector => {
            return e.target.closest(selector) !== null;
        });

        if (shouldSkip) return;

        // 随机决定是否触发（降低频率到 20%）
        if (Math.random() > 0.2) return;

        burstAt(e.clientX, e.clientY, CONFIG.defaultCount);
    }

    // ========================================
    // 初始化
    // ========================================
    function init() {
        injectKeyframes();

        // 全局点击监听
        document.addEventListener('click', handleGlobalClick, { passive: true });

        console.log('%c💥 Click Particles %cinitialized',
            'color:#ff2d95;',
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
    window.CyberParticles = {
        burst: burstAt,
        burstAt,
        config: CONFIG,
    };
})();