/**
 * ========================================
 * CyberDev Theme - Utility Functions
 * 工具函数：防抖、节流、复制、DOM 操作等
 * ========================================
 */

(function () {
    'use strict';

    // 挂载到全局命名空间
    window.CyberUtils = {

        /**
         * 防抖函数
         * @param {Function} fn - 要执行的函数
         * @param {number} delay - 延迟时间(ms)
         * @returns {Function}
         */
        debounce(fn, delay = 200) {
            let timer = null;
            return function (...args) {
                if (timer) clearTimeout(timer);
                timer = setTimeout(() => fn.apply(this, args), delay);
            };
        },

        /**
         * 节流函数
         * @param {Function} fn - 要执行的函数
         * @param {number} limit - 间隔时间(ms)
         * @returns {Function}
         */
        throttle(fn, limit = 100) {
            let inThrottle = false;
            return function (...args) {
                if (!inThrottle) {
                    fn.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => { inThrottle = false; }, limit);
                }
            };
        },

        /**
         * 复制文本到剪贴板
         * @param {string} text - 要复制的文本
         * @returns {Promise<boolean>}
         */
        async copyToClipboard(text) {
            try {
                await navigator.clipboard.writeText(text);
                return true;
            } catch (err) {
                // 降级方案
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    return true;
                } catch (e) {
                    console.error('复制失败:', e);
                    return false;
                } finally {
                    document.body.removeChild(textarea);
                }
            }
        },

        /**
         * 获取当前页面类型
         * @returns {'home' | 'docs' | 'unknown'}
         */
        getPageType() {
            const path = window.location.pathname;
            if (path === '/' || path === '' || path.endsWith('/index.html')) {
                return 'home';
            }
            if (document.querySelector('.md-content') || path.includes('/docs/')) {
                return 'docs';
            }
            return 'unknown';
        },

        /**
         * 判断是否为暗色模式
         * @returns {boolean}
         */
        isDarkMode() {
            const html = document.documentElement;
            return (
                html.getAttribute('data-md-color-scheme') === 'slate' ||
                (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
            );
        },

        /**
         * 生成唯一 ID
         * @param {string} prefix - 前缀
         * @returns {string}
         */
        generateId(prefix = 'cyber') {
            return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        },

        /**
         * 获取滚动百分比
         * @returns {number} 0-100
         */
        getScrollPercent() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight <= 0) return 0;
            return Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100)));
        },

        /**
         * 平滑滚动到指定元素
         * @param {HTMLElement} element - 目标元素
         * @param {number} offset - 偏移量(px)
         */
        scrollToElement(element, offset = 80) {
            if (!element) return;
            const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        },

        /**
         * HTML 转义
         * @param {string} str
         * @returns {string}
         */
        escapeHtml(str) {
            if (!str) return '';
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return str.replace(/[&<>"']/g, m => map[m]);
        },

        /**
         * 获取 CSS 变量值
         * @param {string} name - 变量名（不含 -- 前缀）
         * @returns {string}
         */
        getCSSVar(name) {
            return getComputedStyle(document.documentElement)
                .getPropertyValue(`--${name}`)
                .trim();
        },

        /**
         * 检测是否为移动设备
         * @returns {boolean}
         */
        isMobile() {
            return window.innerWidth < 768;
        },

        /**
         * 检测是否为触摸设备
         * @returns {boolean}
         */
        isTouchDevice() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        },

        /**
         * 在元素上触发自定义事件
         * @param {HTMLElement} element
         * @param {string} eventName
         * @param {*} detail
         */
        dispatchCustomEvent(element, eventName, detail = {}) {
            element.dispatchEvent(new CustomEvent(eventName, {
                bubbles: true,
                cancelable: true,
                detail
            }));
        },

        /**
         * 等待 DOM 稳定后执行
         * @param {Function} fn
         * @param {number} delay
         */
        onDOMReady(fn, delay = 100) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    setTimeout(fn, delay);
                });
            } else {
                setTimeout(fn, delay);
            }
        }
    };

    // 简短别名
    window.$u = window.CyberUtils;

    console.log('%c🧰 CyberUtils %cloaded',
        'color:#ffb347;',
        'color:#9898c0;font-size:0.8rem;');
})();