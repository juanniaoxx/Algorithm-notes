(function () {
    'use strict';

    if (window.__cyberHomeInitialized) return;
    window.__cyberHomeInitialized = true;

    let topicsData = [];
    var currentSort = 'default';
    var currentCate = 'all';
    var currentSearch = '';
    var difficultyOrder = { 'beginner': 0, 'intermediate': 1, 'advanced': 2 };

    const quotes = [
        "Talk is cheap. Show me the code. — Linus Torvalds",
        "First, solve the problem. Then, write the code. — John Johnson",
        "Code is like humor. When you have to explain it, it's bad. — Cory House",
        "The best error message is the one that never shows up. — Thomas Fuchs",
        "Make it work, make it right, make it fast. — Kent Beck",
        "Simplicity is the soul of efficiency. — Austin Freeman",
        "Programming isn't about what you know; it's about what you can figure out.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
        "The only way to learn a new programming language is by writing programs in it. — Dennis Ritchie",
        "Testing leads to failure, and failure leads to understanding. — Burt Rutan",
    ];

    const difficultyMap = {
        'beginner': { label: '入门', class: 'beginner' },
        'intermediate': { label: '中级', class: 'intermediate' },
        'advanced': { label: '进阶', class: 'advanced' },
    };

    function renderStars(rating) {
        let html = '';
        for (let i = 0; i < 5; i++) html += `<i class="fa fa-star star ${i < rating ? 'filled' : 'empty'}"></i>`;
        return html;
    }

    function renderCards(topics) {
        const container = document.getElementById('topicContainer');
        if (!container) return;
        if (topics.length === 0) {
            container.innerHTML = `<div class="card-grid-empty"><i class="fa fa-search"></i><p>没有找到匹配的资料</p></div>`;
            updateStats(topics);
            return;
        }
        container.innerHTML = topics.map((t, i) => `
            <div class="tech-card" style="animation-delay:${i * 0.02}s;" data-cate="${t.cate}" data-title="${t.title}">
                <div class="tech-card-inner">
                    <div class="tech-card-front">
                        ${t.img 
                            ? `<img src="${t.img}" alt="${t.title}" class="tech-card-img">
                               <div class="tech-card-img-label"><span>${t.title}</span></div>`
                            : `<div class="tech-card-placeholder">
                                   <span class="tech-icon-wrap" style="background:${t.iconBg};"><span>${t.icon}</span></span>
                                   <h3 class="tech-card-title">${t.title}</h3>
                                   <p class="tech-card-desc">${t.desc}</p>
                               </div>`
                        }
                    </div>
                    <div class="tech-card-back">
                        <span class="tech-icon-wrap" style="background:${t.iconBg};"><span>${t.icon}</span></span>
                        <h3 class="tech-card-title">${t.title}</h3>
                        <p class="tech-card-desc">${t.desc}</p>
                        <span class="tech-difficulty ${difficultyMap[t.difficulty]?.class || ''}">${difficultyMap[t.difficulty]?.label || t.difficulty}</span>
                        <div class="tech-card-stars">${renderStars(t.stars)}</div>
                        <p class="tech-card-intro">${t.intro}</p>
                        <a href="${t.link}" class="tech-card-link">进入 →</a>
                    </div>
                </div>
            </div>
        `).join('');
        requestAnimationFrame(() => container.querySelectorAll('.tech-card').forEach(c => c.classList.add('visible')));
        updateStats(topics);
    }

    function updateStats(topics) {
        const topicCountEl = document.getElementById('topicCount');
        const totalLessonsEl = document.getElementById('totalLessons');
        if (topicCountEl) topicCountEl.textContent = topics.length;
        if (totalLessonsEl) totalLessonsEl.textContent = topics.reduce((sum, t) => sum + (t.books || t.lessons || 0), 0);
    }

    function updateCategoryStats() {
        const el = document.getElementById('categoryCount');
        if (el) el.textContent = new Set(topicsData.map(t => t.cate)).size;
    }

    // ========================================
    // 排序
    // ========================================
    function sortTopics(topics, sortType) {
        var sorted = topics.slice();
        switch (sortType) {
            case 'difficulty-asc':
                sorted.sort(function (a, b) {
                    var da = difficultyOrder[a.difficulty] !== undefined ? difficultyOrder[a.difficulty] : 99;
                    var db = difficultyOrder[b.difficulty] !== undefined ? difficultyOrder[b.difficulty] : 99;
                    return da - db;
                });
                break;
            case 'difficulty-desc':
                sorted.sort(function (a, b) {
                    var da = difficultyOrder[b.difficulty] !== undefined ? difficultyOrder[b.difficulty] : -1;
                    var db = difficultyOrder[a.difficulty] !== undefined ? difficultyOrder[a.difficulty] : -1;
                    return da - db;
                });
                break;
            case 'stars-desc':
                sorted.sort(function (a, b) { return (b.stars || 0) - (a.stars || 0); });
                break;
            case 'name-asc':
                sorted.sort(function (a, b) { return a.title.localeCompare(b.title, 'zh-Hans-CN'); });
                break;
        }
        return sorted;
    }

    function applyFiltersAndSort() {
        var filtered = currentCate === 'all' ? topicsData.slice() : topicsData.filter(t => t.cate === currentCate);
        if (currentSearch) {
            var term = currentSearch.toLowerCase();
            filtered = filtered.filter(t => t.title.toLowerCase().indexOf(term) !== -1 || t.desc.toLowerCase().indexOf(term) !== -1 || t.cate.toLowerCase().indexOf(term) !== -1);
        }
        renderCards(sortTopics(filtered, currentSort));
    }

    function initSortButtons() {
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentSort = this.dataset.sort;
                applyFiltersAndSort();
            });
        });
    }

    // ========================================
    // 分类过滤
    // ========================================
    function initCategoryFilters() {
        document.querySelectorAll('.cat-btn[data-category]').forEach(btn => {
            btn.addEventListener('click', function () {
                document.querySelectorAll('.cat-btn[data-category]').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentCate = this.dataset.category;
                applyFiltersAndSort();
            });
        });
    }

    // ========================================
    // 搜索
    // ========================================
    function initSearch() {
        const input = document.getElementById('homeSearchInput');
        if (!input) return;
        input.addEventListener('input', function () {
            currentSearch = this.value.toLowerCase().trim();
            applyFiltersAndSort();
        });
    }

    function initQuotes() {
        const quoteEl = document.getElementById('dynamicQuote');
        if (!quoteEl) return;
        function updateQuote() {
            const q = quotes[Math.floor(Math.random() * quotes.length)];
            quoteEl.style.opacity = '0';
            setTimeout(() => { quoteEl.textContent = q; quoteEl.style.opacity = '1'; }, 150);
        }
        const btn = document.getElementById('randomQuoteBtn');
        if (btn) btn.addEventListener('click', updateQuote);
        setInterval(updateQuote, 15000);
    }

    function initClock() {
        const clockEl = document.getElementById('liveClock'), dateEl = document.getElementById('gregorianDate');
        if (!clockEl && !dateEl) return;
        function update() {
            const now = new Date();
            if (clockEl) clockEl.textContent = [now.getHours(), now.getMinutes(), now.getSeconds()].map(n => String(n).padStart(2, '0')).join(':');
            if (dateEl) dateEl.textContent = `${now.getFullYear()}年${String(now.getMonth() + 1).padStart(2, '0')}月${String(now.getDate()).padStart(2, '0')}日`;
        }
        update(); setInterval(update, 1000);
    }

    function initBurstButton() {
        const btn = document.getElementById('burstParticlesBtn');
        if (btn) btn.addEventListener('click', e => { e.stopPropagation(); if (window.CyberParticles?.burst) window.CyberParticles.burst(e.clientX, e.clientY, 24); });
    }

    function initBackToTop() {
        const btn = document.getElementById('backToTop');
        if (!btn) return;
        window.addEventListener('scroll', () => { btn.style.display = window.scrollY > 400 ? 'flex' : 'none'; });
        btn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }

    function loadTopicsData() {
        return fetch('/theme/js/data/topics.json').then(r => r.json()).then(d => { topicsData = d; return d; }).catch(() => { console.warn('JSON 加载失败'); return []; });
    }

    function init() {
        loadTopicsData().then(data => {
            updateCategoryStats();
            applyFiltersAndSort();
        });
        initCategoryFilters();
        initSortButtons();
        initSearch();
        initQuotes();
        initClock();
        initBurstButton();
        initBackToTop();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
    window.CyberHome = { renderCards, topicsData, quotes };
})();