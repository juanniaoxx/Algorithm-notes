/**
 * ========================================
 * CyberDev Theme - Docs Page Logic
 * 内页逻辑：锚点高亮 · 阅读时间估算 · 外部链接处理
 * ========================================
 */

(function () {
    'use strict';

    // 避免重复初始化
    if (window.__cyberDocsInitialized) return;
    window.__cyberDocsInitialized = true;

    // ========================================
    // 配置
    // ========================================
    const CONFIG = {
        readingSpeed: 265,            // 每分钟阅读字数（中文约 300-500）
        readingTimeSelector: '#reading-time',
        contentSelector: '.md-content',
        externalLinkClass: 'external-link',
        highlightDuration: 2000,
    };

    // ========================================
    // 计算并显示阅读时间
    // ========================================
    function estimateReadingTime() {
        const timeEl = document.querySelector(CONFIG.readingTimeSelector);
        if (!timeEl) return;

        const content = document.querySelector(CONFIG.contentSelector);
        if (!content) return;

        const text = content.textContent || content.innerText || '';
        const charCount = text.replace(/\s+/g, '').length;
        const minutes = Math.max(1, Math.ceil(charCount / CONFIG.readingSpeed));

        timeEl.textContent = `⏱️ ${minutes} 分钟阅读`;
        timeEl.setAttribute('title', `约 ${charCount} 字`);
    }

    // ========================================
    // 外部链接处理：添加图标 + 新窗口打开
    // ========================================
    function enhanceExternalLinks() {
        const content = document.querySelector(CONFIG.contentSelector);
        if (!content) return;

        const links = content.querySelectorAll('a[href^="http"]');
        links.forEach(link => {
            // 排除本站链接
            if (link.href.includes(window.location.hostname)) return;

            // 添加 class
            link.classList.add(CONFIG.externalLinkClass);

            // 新窗口打开
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');

            // 添加外部链接图标（如果还没有）
            if (!link.querySelector('.external-icon')) {
                const icon = document.createElement('span');
                icon.className = 'external-icon';
                icon.innerHTML = ' ↗';
                icon.style.fontSize = '0.7em';
                icon.style.opacity = '0.6';
                link.appendChild(icon);
            }
        });
    }

    // ========================================
    // 锚点跳转高亮（与 preview 版兼容）
    // ========================================
    function handleAnchorHighlight() {
        const hash = window.location.hash;
        if (!hash) return;

        const target = document.querySelector(hash);
        if (!target) return;

        // 滚动到目标
        setTimeout(() => {
            const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }, 100);

        // 高亮效果
        target.style.transition = 'background 0.3s ease, box-shadow 0.3s ease';
        target.style.background = 'rgba(0, 212, 255, 0.1)';
        target.style.boxShadow = '0 0 0 4px rgba(0, 212, 255, 0.15)';
        target.style.borderRadius = 'var(--radius-sm)';

        setTimeout(() => {
            target.style.background = '';
            target.style.boxShadow = '';
            target.style.borderRadius = '';
        }, CONFIG.highlightDuration);
    }

    // ========================================
    // 键盘快捷键
    // ========================================
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', function (e) {
            // Ctrl/Cmd + Shift + T: 回到顶部
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // Ctrl/Cmd + Shift + B: 回到底部
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'B') {
                e.preventDefault();
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
        });
    }

    // ========================================
    // 初始化
    // ========================================
    function init() {
        estimateReadingTime();
        enhanceExternalLinks();
        handleAnchorHighlight();
        initKeyboardShortcuts();

        // 监听 hash 变化
        window.addEventListener('hashchange', handleAnchorHighlight);

        // 监听 MkDocs 页面切换
        if (typeof document$ !== 'undefined') {
            document$.subscribe(() => {
                setTimeout(() => {
                    estimateReadingTime();
                    enhanceExternalLinks();
                    handleAnchorHighlight();
                }, 200);
            });
        }

        console.log('%c📄 Docs Page %cinitialized',
            'color:#b347ea;font-size:1rem;',
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
    window.CyberDocs = {
        estimateReadingTime,
        enhanceExternalLinks,
    };
})();