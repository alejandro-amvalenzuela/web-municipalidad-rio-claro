function getRootPath() {
  const path = window.location.pathname;
  if (path.includes('/pages/Municipio/')) return '../../../';
  if (path.includes('/pages/')) return '../../';
  return './';
}

function loadFooter() {
  const root = getRootPath();
  fetch(root + 'pages/Footer/footer.html')
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById('footer-container');
      if (!container) return;

      container.innerHTML = html;

      container.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
          a.setAttribute('href', root + href.replace(/^\//, ''));
        }
      });

      container.querySelectorAll('img[src]').forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http') && !src.startsWith('data:')) {
          img.setAttribute('src', root + src.replace(/^\//, ''));
        }
      });
    })
    .catch(err => console.error('Error al cargar el footer:', err));
}

document.addEventListener('DOMContentLoaded', loadFooter);