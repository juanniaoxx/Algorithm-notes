/**
 * ========================================
 * CyberDev Theme - Splash Screen
 * 开屏动画 · 点击/自动进入
 * ========================================
 */

(function () {
    'use strict';

    // 避免重复初始化
    if (window.__cyberSplashInitialized) return;
    window.__cyberSplashInitialized = true;

    // ========================================
    // 配置
    // ========================================
    const CONFIG = {
        autoEnterDelay: 4000,        // 自动进入时间(ms)
        fadeOutDuration: 800,        // 淡出动画时长(ms)
        splashSelector: '#splashScreen',
        mainContentSelector: '#mainContent',
        fadeOutClass: 'fade-out',
    };

    const splash = document.querySelector(CONFIG.splashSelector);
    const mainContent = document.querySelector(CONFIG.mainContentSelector);

    // 没有开屏元素则跳过
    if (!splash) return;

    // ========================================
    // 进入主内容
    // ========================================
    function enterMain() {
        // 添加淡出动画
        splash.classList.add(CONFIG.fadeOutClass);

        // 显示主内容
        if (mainContent) {
            mainContent.style.opacity = '1';
        }

        // 动画结束后移除开屏
        setTimeout(() => {
            if (splash.parentNode) {
                splash.style.display = 'none';
            }
        }, CONFIG.fadeOutDuration);

        // 触发自定义事件
        window.dispatchEvent(new CustomEvent('cyberdev:splashClosed'));
    }

    // ========================================
    // 事件绑定
    // ========================================
    function bindEvents() {
        // 点击进入
        splash.addEventListener('click', enterMain, { once: true });

        // 按任意键进入
        document.addEventListener('keydown', function handleKey(e) {
            enterMain();
            document.removeEventListener('keydown', handleKey);
        }, { once: true });

        // 自动进入
        setTimeout(() => {
            if (splash.style.display !== 'none') {
                enterMain();
            }
        }, CONFIG.autoEnterDelay);
    }

    // ========================================
    // 初始化
    // ========================================
    function init() {
        // 确保开屏可见        splash.style.display = '';

        // 隐藏主内容
        if (mainContent) {
            mainContent.style.opacity = '0';
            mainContent.style.transition = `opacity ${CONFIG.fadeOutDuration}ms ease`;
        }

        bindEvents();

        console.log('%c🚪 Splash Screen %cready',
            'color:#00d4ff;',
            'color:#606090;font-size:0.8rem;');
    }

    // 立即初始化（开屏需要在页面加载前显示）
    if (document.readyState === 'loading') {
        // DOM 加载前先显示开屏
        init();
    } else {
        init();
    }

    // ========================================
    // 暴露 API
    // ========================================
    window.CyberSplash = {
        enter: enterMain,
        config: CONFIG,
    };
})();