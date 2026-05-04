/**
 * ========================================
 * CyberDev Theme - Scroll Progress Bar
 * 顶部霓虹进度条
 * ========================================
 */

(function () {
    'use strict';

    // 避免重复初始化
    if (document.querySelector('.cyber-scroll-progress')) return;

    // ========================================
    // 创建 DOM 结构
    // ========================================
    function createProgressBar() {
        // 容器在 MkDocs header 下方
        const header = document.querySelector('.md-header');
        const container = document.createElement('div');
        container.className = 'cyber-scroll-progress';
        container.setAttribute('aria-hidden', 'true');

        const bar = document.createElement('div');
        bar.className = 'cyber-scroll-progress-bar';
        container.appendChild(bar);

        // 插入到 header 后面
        if (header && header.nextSibling) {
            header.parentNode.insertBefore(container, header.nextSibling);
        } else {
            document.body.prepend(container);
        }

        return bar;
    }

    const progressBar = createProgressBar();

    // ========================================
    // 更新进度条宽度
    // ========================================
    function updateProgress() {
        const percent = window.$u
            ? window.$u.getScrollPercent()
            : (() => {
                  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                  return docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
              })();

        progressBar.style.width = percent + '%';

        // 到达 100% 时短暂高亮
        if (percent >= 99) {
            progressBar.style.boxShadow = '0 0 16px rgba(0, 255, 136, 0.6)';
            setTimeout(() => {
                progressBar.style.boxShadow = '';
            }, 1000);
        }
    }

    // ========================================
    // 点击跳转
    // ========================================
    function handleClick(e) {
        const bar = e.currentTarget;
        const rect = bar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = Math.min(100, Math.max(0, (clickX / rect.width) * 100));

        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = docHeight * (percent / 100);
        const headerOffset = 64; // header 高度

        window.scrollTo({
            top: Math.max(0, scrollTop - headerOffset),
            behavior: 'smooth'
        });
    }

    // ========================================
    // 事件绑定
    // ========================================
    window.addEventListener('scroll', window.$u?.throttle(updateProgress, 50) || updateProgress, { passive: true });
    progressBar.parentElement.addEventListener('click', handleClick);
    updateProgress();

    console.log('%c📊 Scroll Progress %cinitialized',
        'color:#00ff88;',
        'color:#606090;font-size:0.8rem;');
})();