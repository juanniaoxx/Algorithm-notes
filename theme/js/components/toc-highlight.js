/**
 * ========================================
 * CyberDev Theme - TOC Scroll Highlight
 * 右侧目录滚动高亮 · 当前位置跟踪
 * ========================================
 */

(function () {
    'use strict';

    // 避免重复初始化
    if (window.__cyberTOCHighlightInitialized) return;
    window.__cyberTOCHighlightInitialized = true;

    // ========================================
    // 配置
    // ========================================
    const CONFIG = {
        offset: 100,              // 顶部偏移量(px)
        tocSelector: '.md-sidebar--secondary .md-nav__link',
        headingSelector: '.md-content h1, .md-content h2, .md-content h3',
        activeClass: 'toc-active',
        highlightDelay: 100,      // 高亮更新延迟(ms)
    };

    let tocLinks = [];
    let headings = [];
    let currentActive = null;

    // ========================================
    // 收集 TOC 链接和对应标题
    // ========================================
    function collectElements() {
        tocLinks = Array.from(document.querySelectorAll(CONFIG.tocSelector));
        headings = Array.from(document.querySelectorAll(CONFIG.headingSelector));
    }

    // ========================================
    // 查找当前可见的标题
    // ========================================
    function findCurrentHeading() {
        if (headings.length === 0) return null;

        const scrollTop = window.pageYOffset + CONFIG.offset;

        // 从后往前找第一个在视口上方的标题
        for (let i = headings.length - 1; i >= 0; i--) {
            const headingTop = headings[i].getBoundingClientRect().top + window.pageYOffset;
            if (headingTop <= scrollTop) {
                return headings[i];
            }
        }

        // 如果所有标题都在下方，返回第一个
        return headings[0];
    }

    // ========================================
    // 获取标题对应的 TOC 链接
    // ========================================
    function findTOClink(heading) {
        if (!heading) return null;

        const headingId = heading.id;
        if (!headingId) return null;

        // 尝试通过 href 匹配
        const link = tocLinks.find(link => {
            const href = link.getAttribute('href');
            return href && (href === `#${headingId}` || href.endsWith(`#${headingId}`));
        });

        return link || null;
    }

    // ========================================
    // 更新高亮状态
    // ========================================
    function updateHighlight() {
        const currentHeading = findCurrentHeading();
        const activeLink = findTOClink(currentHeading);

        // 移除旧高亮
        if (currentActive && currentActive !== activeLink) {
            currentActive.classList.remove(CONFIG.activeClass);
            currentActive.style.color = '';
            currentActive.style.borderLeftColor = '';
        }

        // 设置新高亮
        if (activeLink && activeLink !== currentActive) {
            activeLink.classList.add(CONFIG.activeClass);
            activeLink.style.color = 'var(--neon-purple)';
            activeLink.style.borderLeftColor = 'var(--neon-purple)';
        }

        currentActive = activeLink;
    }

    // ========================================
    // 初始化
    // ========================================
    function init() {
        collectElements();

        if (tocLinks.length === 0 || headings.length === 0) {
            // 没有 TOC 或标题，跳过
            return;
        }

        // 绑定滚动事件（使用 throttle 优化性能）
        const throttledUpdate = window.$u
            ? window.$u.throttle(updateHighlight, CONFIG.highlightDelay)
            : updateHighlight;

        window.addEventListener('scroll', throttledUpdate, { passive: true });

        // 初始执行一次
        setTimeout(updateHighlight, 300);

        // 监听 MkDocs 页面切换
        if (typeof document$ !== 'undefined') {
            document$.subscribe(() => {
                setTimeout(() => {
                    collectElements();
                    updateHighlight();
                }, 300);
            });
        }

        console.log('%c📑 TOC Highlight %cinitialized',
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
    window.CyberTOC = {
        refresh: () => {
            collectElements();
            updateHighlight();
        },
        update: updateHighlight,
    };
})();