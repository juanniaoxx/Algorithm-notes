(function () {
    'use strict';
    // ========================================
    // 自动检测基础路径（从当前脚本的 URL 反推）
    // ========================================
    function getBasePath() {
        // 获取当前正在执行的脚本的 URL
        var scripts = document.getElementsByTagName('script');
        var currentScript = scripts[scripts.length - 1];
        var src = currentScript.src;
        
        // 从脚本 URL 中提取路径
        // 例如：https://juanniaoxx.github.io/Algorithm-notes/theme/js/main.js
        // 提取出：/Algorithm-notes/theme/js/
        var match = src.match(/^(https?:)?\/\/[^\/]+(.*?)\/theme\/js\/main\.js/);
        if (match && match[2]) {
            return match[2] + '/theme/js/';
        }
        
        // 降级：本地预览
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return '/theme/js/';
        }
        
        // 最终降级
        return '/theme/js/';
    }
    var basePath = getBasePath();

    var commonModules = [
        'core/background.js',
        'core/cursor-glow.js',
        'core/utils.js',
        'components/header.js',
        'components/scroll-progress.js',
        'components/particles-click.js',
    ];

    function isHomePage() {
        var path = window.location.pathname;
        var pathname = path.endsWith('/') ? path.slice(0, -1) : path;
        return path === '/' || path === '' || path.endsWith('/index.html') || pathname.endsWith('/Algorithm-notes') || path === '/Algorithm-notes' || path === '/Algorithm-notes/';
    }

    function isDocsPage() {
        return !isHomePage() && !!document.querySelector('.md-content');
    }

    function getPageModules() {
        var modules = [];
        if (isHomePage()) {
            modules.push('components/splash-screen.js');
            modules.push('pages/home.js');
        }
        if (isDocsPage()) {
            modules.push('components/code-copy.js');
            modules.push('components/toc-highlight.js');
            modules.push('components/video-bookmark.js');
            modules.push('pages/docs.js');
            modules.push('components/collapsible.js');
        }
        return modules;
    }

    function loadScript(src) {
        return new Promise(function (resolve) {
            var fullSrc = basePath + src;
            if (document.querySelector('script[src="' + fullSrc + '"]')) return resolve();
            var s = document.createElement('script');
            s.src = fullSrc;
            s.onload = resolve;
            s.onerror = function () { console.warn('404:', fullSrc); resolve(); };
            document.body.appendChild(s);
        });
    }

    function loadAll(list) {
        return list.reduce(function (p, mod) { return p.then(function () { return loadScript(mod); }); }, Promise.resolve());
    }

    function init() {
        loadAll(commonModules).then(function () {
            return loadAll(getPageModules());
        }).then(function () {
            console.log('%c⚡ CyberDev %cReady', 'color:#00d4ff;', 'color:#9898c0;');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();