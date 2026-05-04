(function () {
    'use strict';

    if (window.__videoBookmarkInit) return;
    window.__videoBookmarkInit = true;

    function init() {
        // 找到页面中的视频
        var video = document.querySelector('video[data-cyber-player]');
        if (!video) return;

        // 找到所有时间戳链接 [MM:SS] 或 [HH:MM:SS]
        var content = document.querySelector('.md-content__inner');
        if (!content) return;

        var regex = /\[(\d{1,2}):(\d{2})(?::(\d{2}))?\]/g;

        function processNode(node) {
            if (node.nodeType === 3) { // 文本节点
                var text = node.textContent;
                if (!regex.test(text)) return;
                regex.lastIndex = 0;

                var frag = document.createDocumentFragment();
                var lastIdx = 0;
                var match;

                while ((match = regex.exec(text)) !== null) {
                    // 前面的文本
                    if (match.index > lastIdx) {
                        frag.appendChild(document.createTextNode(text.slice(lastIdx, match.index)));
                    }

                    // 时间戳按钮
                    var h = parseInt(match[1]) || 0;
                    var m = parseInt(match[1]) || 0;
                    var s = parseInt(match[2]) || 0;
                    if (match[3]) {
                        m = parseInt(match[1]);
                        s = parseInt(match[2]);
                    }
                    var totalSec = m * 60 + s;

                    var btn = document.createElement('span');
                    btn.className = 'video-timestamp';
                    btn.textContent = match[0];
                    btn.title = '跳转到 ' + match[0];
                    btn.style.cssText = 'color:var(--neon-blue); cursor:pointer; border-bottom:1px dashed var(--neon-blue); transition:all 0.2s;';
                    btn.addEventListener('click', function () {
                        video.currentTime = totalSec;
                        video.play();
                        // 高亮一闪
                        video.style.boxShadow = '0 0 20px rgba(0,212,255,0.6)';
                        setTimeout(function () { video.style.boxShadow = ''; }, 800);
                    });
                    btn.addEventListener('mouseenter', function () {
                        this.style.color = 'var(--neon-cyan)';
                        this.style.borderBottomColor = 'var(--neon-cyan)';
                    });
                    btn.addEventListener('mouseleave', function () {
                        this.style.color = 'var(--neon-blue)';
                        this.style.borderBottomColor = 'var(--neon-blue)';
                    });

                    frag.appendChild(btn);
                    lastIdx = regex.lastIndex;
                }

                // 剩余文本
                if (lastIdx < text.length) {
                    frag.appendChild(document.createTextNode(text.slice(lastIdx)));
                }

                node.parentNode.replaceChild(frag, node);
            } else if (node.nodeType === 1 && !['SCRIPT', 'STYLE', 'CODE', 'PRE'].includes(node.tagName)) {
                Array.from(node.childNodes).forEach(processNode);
            }
        }

        processNode(content);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();