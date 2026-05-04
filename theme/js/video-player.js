/**
 * ========================================
 * CyberDev Theme - Video Player
 * YouTube: 原生控件
 * 本地视频 (<video data-cyber-player>): 自定义霓虹控件
 * ======================================== */

(function () {
    'use strict';

    if (window.__cyberVideoPlayerInit) return;
    window.__cyberVideoPlayerInit = true;

    function init() {
        document.querySelectorAll('.video-player-wrapper').forEach(wrapper => {
            const iframe = wrapper.querySelector('iframe');
            const video = wrapper.querySelector('video[data-cyber-player]');

            if (iframe) return; // YouTube → 不管，原生控件

            if (video) {
                video.controls = false;
                buildControls(wrapper, video);
            }
        });
    }

    function buildControls(wrapper, video) {
        // 避免重复创建
        if (wrapper.querySelector('.video-controls-bar')) return;

        const bar = document.createElement('div');
        bar.className = 'video-controls-bar';
        bar.innerHTML = `
            <button class="video-btn" data-action="play"><i class="fa fa-play"></i></button>
            <div class="video-progress" data-action="seek">
                <div class="video-progress-fill" style="width:0%"></div>
            </div>
            <span class="video-time">0:00 / 0:00</span>
            <button class="video-btn" data-action="speed">1x</button>
            <button class="video-btn" data-action="fullscreen"><i class="fa fa-expand"></i></button>
        `;
        wrapper.appendChild(bar);

        const playBtn = bar.querySelector('[data-action="play"]');
        const progressBar = bar.querySelector('[data-action="seek"]');
        const progressFill = bar.querySelector('.video-progress-fill');
        const timeEl = bar.querySelector('.video-time');
        const speedBtn = bar.querySelector('[data-action="speed"]');
        const fsBtn = bar.querySelector('[data-action="fullscreen"]');

        function fmt(t) {
            if (isNaN(t)) return '0:00';
            const m = Math.floor(t / 60);
            const s = Math.floor(t % 60);
            return m + ':' + String(s).padStart(2, '0');
        }

        // 播放/暂停
        function updatePlayBtn() {
            playBtn.innerHTML = video.paused
                ? '<i class="fa fa-play"></i>'
                : '<i class="fa fa-pause"></i>';
        }
        playBtn.addEventListener('click', () => {
            video.paused ? video.play() : video.pause();
        });
        video.addEventListener('play', updatePlayBtn);
        video.addEventListener('pause', updatePlayBtn);

        // 进度条
        video.addEventListener('timeupdate', () => {
            const pct = video.duration ? (video.currentTime / video.duration) * 100 : 0;
            progressFill.style.width = pct + '%';
            timeEl.textContent = fmt(video.currentTime) + ' / ' + fmt(video.duration);
        });
        video.addEventListener('loadedmetadata', () => {
            timeEl.textContent = '0:00 / ' + fmt(video.duration);
        });
        progressBar.addEventListener('click', e => {
            const rect = progressBar.getBoundingClientRect();
            video.currentTime = ((e.clientX - rect.left) / rect.width) * video.duration;
        });

        // 速度
        const speeds = [0.5, 0.75, 1, 1.5, 2];
        let speedIdx = 2;
        speedBtn.addEventListener('click', () => {
            speedIdx = (speedIdx + 1) % speeds.length;
            video.playbackRate = speeds[speedIdx];
            speedBtn.textContent = speeds[speedIdx] + 'x';
        });

        // 全屏
        fsBtn.addEventListener('click', () => {
            wrapper.requestFullscreen ? wrapper.requestFullscreen() :
            wrapper.webkitRequestFullscreen ? wrapper.webkitRequestFullscreen() : null;
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();