document.addEventListener('footerLoaded', () => {
  const serviceModal = new bootstrap.Modal(document.getElementById('genericModal'));
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  document.querySelectorAll('.btn-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-title') || 'Información Municipal';
      const text = btn.getAttribute('data-text') || 'Servicio de la Municipalidad de Río Claro.';

      modalTitle.textContent = title;
      modalBody.innerHTML = `<p>${text}</p><p class="text-muted small">Para más información, acérquese a la municipalidad o comuníquese con central telefónica.</p>`;
      
      serviceModal.show();
    });
  });

  // Botón Volver Arriba
  const btnVolverArriba = document.getElementById('btnVolverArriba');
  if (btnVolverArriba) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        btnVolverArriba.classList.add('visible');
      } else {
        btnVolverArriba.classList.remove('visible');
      }
    });

    btnVolverArriba.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});