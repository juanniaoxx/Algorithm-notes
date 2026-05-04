// PDF 内嵌阅读器 - CyberDev Theme
document.addEventListener('DOMContentLoaded', function() {
  if (typeof pdfjsLib === 'undefined') {
    console.warn('PDF.js 未加载，跳过 PDF 阅读器初始化');
    return;
  }

  const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');
  
  pdfLinks.forEach(link => {
    if (link.classList.contains('pdf-processed')) return;
    link.classList.add('pdf-processed');
    
    const container = document.createElement('div');
    container.className = 'pdf-viewer-container';
    container.style.display = 'none';
    
    const canvas = document.createElement('canvas');
    canvas.id = `pdf-canvas-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
    container.appendChild(canvas);
    
    const controls = document.createElement('div');
    controls.className = 'pdf-controls';
    controls.innerHTML = `
      <button class="pdf-prev" disabled>◀ 上一页</button>
      <span class="pdf-page-info">第 <span class="pdf-current-page">1</span> / <span class="pdf-total-pages">0</span> 页</span>
      <button class="pdf-next" disabled>下一页 ▶</button>
      <button class="pdf-close">✕ 关闭</button>
    `;

    container.appendChild(controls);
    container.appendChild(canvas);
    
    link.insertAdjacentElement('afterend', container);
    
    let pdfDoc = null;
    let currentPage = 1;
    let totalPages = 0;
    const scale = 1.5;
    const canvasContext = canvas.getContext('2d');
    
    function renderPage(pageNum) {
      if (!pdfDoc) return;
      pdfDoc.getPage(pageNum).then(page => {
        const viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
          canvasContext: canvasContext,
          viewport: viewport
        };
        page.render(renderContext);
        
        container.querySelector('.pdf-current-page').textContent = pageNum;
        
        const prevBtn = container.querySelector('.pdf-prev');
        const nextBtn = container.querySelector('.pdf-next');
        if (prevBtn) prevBtn.disabled = (pageNum <= 1);
        if (nextBtn) nextBtn.disabled = (pageNum >= totalPages);
      }).catch(err => {
        console.error('PDF 页面渲染失败:', err);
      });
    }
    
    function loadPDF(url) {
      container.querySelector('.pdf-total-pages').textContent = '...';
      
      pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        totalPages = pdfDoc.numPages;
        container.querySelector('.pdf-total-pages').textContent = totalPages;
        renderPage(currentPage);
        
        const prevBtn = container.querySelector('.pdf-prev');
        const nextBtn = container.querySelector('.pdf-next');
        if (prevBtn) prevBtn.disabled = false;
        if (nextBtn) nextBtn.disabled = (totalPages <= 1);
      }).catch(function(error) {
        console.error('PDF 加载失败:', error);
        container.innerHTML = '<div class="pdf-error">PDF 加载失败，请检查文件路径或网络连接。</div>';
      });
    }
    
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelectorAll('.pdf-viewer-container.show').forEach(c => {
        c.classList.remove('show');
        c.style.display = 'none';
      });
      
      container.classList.add('show');
      container.style.display = 'block';
      
      if (!pdfDoc) {
        loadPDF(link.href);
      } else {
        renderPage(currentPage);
        container.style.display = 'block';
      }
    });
    
    container.querySelector('.pdf-prev').addEventListener('click', function() {
      if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
      }
    });
    
    container.querySelector('.pdf-next').addEventListener('click', function() {
      if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
      }
    });
    
    container.querySelector('.pdf-close').addEventListener('click', function() {
      container.style.display = 'none';
      container.classList.remove('show');
    });

    // 键盘左右键翻页（仅在 PDF 可见时）
    document.addEventListener('keydown', function(e) {
      if (!container.classList.contains('show')) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentPage > 1) { currentPage--; renderPage(currentPage); }
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentPage < totalPages) { currentPage++; renderPage(currentPage); }
      }
    });
  });
});