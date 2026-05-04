/**
 * ========================================
 * CyberDev Theme - Header Interactions
 * 导航栏交互：搜索快捷键、滚动阴影
 * ========================================
 */

(function () {
    'use strict';

    // 避免重复初始化
    if (window.__cyberHeaderInitialized) return;
    window.__cyberHeaderInitialized = true;

    // ========================================
    // 搜索框快捷键 Ctrl/Cmd + K
    // ========================================
    function handleSearchShortcut(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();

            // 尝试触发 MkDocs 搜索
            const searchInput = document.querySelector('.md-search__input');
            const searchToggle = document.querySelector('.md-search__icon[for="__search"]');

            if (searchInput) {
                if (searchToggle) searchToggle.click();
                setTimeout(() => searchInput.focus(), 150);
            }
        }
    }

    document.addEventListener('keydown', handleSearchShortcut);

    // ========================================
    // 导航栏滚动阴影
    // ========================================
    function updateHeaderShadow() {
        const header = document.querySelector('.md-header');
        if (!header) return;

        if (window.scrollY > 10) {
            header.setAttribute('data-md-state', 'shadow');
        } else {
            header.removeAttribute('data-md-state');
        }
    }

    window.addEventListener('scroll', window.$u?.throttle(updateHeaderShadow, 100) || updateHeaderShadow);
    updateHeaderShadow(); // 初始检查

    // ========================================
    // 响应式搜索框宽度调整
    // ========================================
    function adjustSearchWidth() {
        const searchForm = document.querySelector('.md-search__form');
        if (!searchForm) return;

        if (window.innerWidth < 480) {
            searchForm.style.minWidth = '140px';
        } else if (window.innerWidth < 768) {
            searchForm.style.minWidth = '180px';
        } else {
            searchForm.style.minWidth = '220px';
        }
    }

    window.addEventListener('resize', window.$u?.debounce(adjustSearchWidth, 200) || adjustSearchWidth);
    adjustSearchWidth();

    console.log('%c📐 Header %cinitialized',
        'color:#00d4ff;',
        'color:#606090;font-size:0.8rem;');
})();