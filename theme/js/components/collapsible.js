(function () {
    'use strict';

    if (window.__collapsibleInit) return;
    window.__collapsibleInit = true;

    function init() {
        document.querySelectorAll('.collapsible').forEach(function (el) {
            var header = el.querySelector('.collapsible-header');
            var toggle = el.querySelector('.collapsible-toggle');
            var content = el.querySelector('.collapsible-content');

            if (!header || !content) return;

            // 初始计算高度
            content.style.maxHeight = content.scrollHeight + 'px';

            // 默认收齐
            collapse();
            
            function collapse() {
                content.classList.add('collapsed');
                if (toggle) {
                    toggle.classList.add('collapsed');
                    toggle.innerHTML = '<span>展开</span><span class="toggle-icon">▼</span>';
                }
            }

            function expand() {
                content.classList.remove('collapsed');
                content.style.maxHeight = content.scrollHeight + 'px';
                if (toggle) {
                    toggle.classList.remove('collapsed');
                    toggle.innerHTML = '<span>收起</span><span class="toggle-icon">▼</span>';
                }
            }

            header.addEventListener('click', function () {
                if (content.classList.contains('collapsed')) {
                    expand();
                } else {
                    collapse();
                }
            });

            if (toggle) {
                toggle.addEventListener('click', function (e) {
                    e.stopPropagation();
                    if (content.classList.contains('collapsed')) {
                        expand();
                    } else {
                        collapse();
                    }
                });
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

