document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filtro = btn.dataset.filtro;

      document.querySelectorAll('.concurso-item').forEach(item => {
        const estado = (item.dataset.estado || '').toLowerCase();
        if (filtro === 'todos' || estado === filtro) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
