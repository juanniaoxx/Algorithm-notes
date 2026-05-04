(function () {
    'use strict';

    var basePath = '/theme/js/';

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
        return path === '/' || path === '' || path.endsWith('/index.html');
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