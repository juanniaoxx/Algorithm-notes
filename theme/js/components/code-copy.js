/**
 * ========================================
 * CyberDev Theme - Code Copy Button
 * 代码块复制按钮 · 复制成功反馈
 * ========================================
 */

(function () {
    'use strict';

    // 避免重复初始化
    if (window.__cyberCodeCopyInitialized) return;
    window.__cyberCodeCopyInitialized = true;

    // ========================================
    // 配置
    // ========================================
    const CONFIG = {
        successDuration: 2000,       // "已复制" 显示时长(ms)
        buttonClass: 'cyber-copy-btn',
        copiedClass: 'copied',
        copyIcon: '<i class="fa fa-copy"></i>',
        checkIcon: '<i class="fa fa-check"></i>',
        defaultText: 'Copy',
        copiedText: 'Copied!',
    };

    // ========================================
    // 为代码块添加自定义复制按钮（增强原生按钮）
    // ========================================
    function enhanceCopyButtons() {
        const codeBlocks = document.querySelectorAll('.md-content .highlight');

        codeBlocks.forEach(block => {
            // 检查是否已有 MkDocs 原生复制按钮
            const existingBtn = block.querySelector('.md-clipboard');

            if (existingBtn) {
                // 增强原生按钮样式
                enhanceNativeButton(existingBtn);
            } else {
                // 没有原生按钮则创建
                createCustomButton(block);
            }
        });
    }

    // ========================================
    // 增强 MkDocs 原生复制按钮
    // ========================================
    function enhanceNativeButton(btn) {
        // 添加自定义类以便样式覆盖
        btn.classList.add(CONFIG.buttonClass);

        // 获取原始复制功能
        const originalClick = btn.onclick;

        btn.addEventListener('click', function (e) {
            // 视觉反馈
            btn.classList.add(CONFIG.copiedClass);

            // 临时修改图标
            const originalHTML = btn.innerHTML;
            btn.innerHTML = CONFIG.checkIcon;

            setTimeout(() => {
                btn.classList.remove(CONFIG.copiedClass);
                btn.innerHTML = originalHTML;
            }, CONFIG.successDuration);
        });
    }

    // ========================================
    // 创建自定义复制按钮（无原生按钮时）
    // ========================================
    function createCustomButton(block) {
        const btn = document.createElement('button');
        btn.className = `md-clipboard ${CONFIG.buttonClass}`;
        btn.title = '复制代码';
        btn.setAttribute('aria-label', '复制代码');
        btn.innerHTML = `${CONFIG.copyIcon} <span>${CONFIG.defaultText}</span>`;

        // 定位按钮
        block.style.position = 'relative';

        btn.addEventListener('click', function () {
            const code = block.querySelector('code');
            if (!code) return;

            const text = code.innerText || code.textContent;

            if (window.$u && window.$u.copyToClipboard) {
                window.$u.copyToClipboard(text).then(success => {
                    if (success) showCopiedFeedback(btn);
                });
            } else {
                // 降级方案
                navigator.clipboard.writeText(text).then(() => {
                    showCopiedFeedback(btn);
                }).catch(() => {
                    // 再次降级
                    const textarea = document.createElement('textarea');
                    textarea.value = text;
                    textarea.style.position = 'fixed';
                    textarea.style.opacity = '0';
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand('copy');
                        showCopiedFeedback(btn);
                    } catch (err) {
                        console.error('复制失败:', err);
                    }
                    document.body.removeChild(textarea);
                });
            }
        });

        block.appendChild(btn);
    }

    // ========================================
    // 复制成功反馈
    // ========================================
    function showCopiedFeedback(btn) {
        btn.classList.add(CONFIG.copiedClass);
        const span = btn.querySelector('span');
        const originalText = span ? span.textContent : '';

        if (span) span.textContent = CONFIG.copiedText;
        btn.innerHTML = CONFIG.checkIcon;

        setTimeout(() => {
            btn.classList.remove(CONFIG.copiedClass);
            btn.innerHTML = `${CONFIG.copyIcon} <span>${originalText || CONFIG.defaultText}</span>`;
        }, CONFIG.successDuration);
    }

    // ========================================
    // 监听 MkDocs 即时加载（页面切换后重新绑定）
    // ========================================
    function handlePageChange() {
        // MkDocs Material 即时加载后会触发 DOM 更新
        // 使用 MutationObserver 或监听 document$ observable
        enhanceCopyButtons();
    }

    // ========================================
    // 初始化
    // ========================================
    function init() {
        enhanceCopyButtons();

        // 监听 MkDocs 页面切换（Material 主题的 instant loading）
        if (typeof document$ !== 'undefined') {
            document$.subscribe(() => {
                // 延迟执行，确保代码块已渲染
                setTimeout(enhanceCopyButtons, 200);
            });
        }

        // 降级：使用 MutationObserver 监听内容变化
        const contentArea = document.querySelector('.md-content');
        if (contentArea) {
            const observer = new MutationObserver(
                window.$u?.debounce(() => enhanceCopyButtons(), 300) || (() => setTimeout(enhanceCopyButtons, 300))
            );
            observer.observe(contentArea, { childList: true, subtree: true });
        }

        console.log('%c📋 Code Copy %cinitialized',
            'color:#00ff88;',
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
    window.CyberCodeCopy = {
        enhance: enhanceCopyButtons,
        config: CONFIG,
    };
})();