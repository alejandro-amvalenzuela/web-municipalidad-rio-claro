document.addEventListener('DOMContentLoaded', () => {
  // Manejo de modales e interacción de botones
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-modal');
    if (btn) {
      e.preventDefault();
      const modalTitle = document.getElementById('modalTitle');
      const modalBody = document.getElementById('modalBody');

      if (modalTitle) modalTitle.textContent = btn.dataset.title || 'Información Municipal';
      if (modalBody) {
        modalBody.innerHTML = `<p>${btn.dataset.text || 'Servicio de la Municipalidad de Río Claro.'}</p><p class="text-muted small">Para más información, acérquese a la municipalidad.</p>`;
      }

      const modalEl = document.getElementById('genericModal');
      if (modalEl && window.bootstrap) {
        bootstrap.Modal.getOrCreateInstance(modalEl).show();
      }
    }

    const btnVolver = e.target.closest('#btnVolverArriba');
    if (btnVolver) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Mostrar u ocultar botón volver arriba según scroll
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('btnVolverArriba');
    if (btn) {
      btn.classList.toggle('visible', window.scrollY > 250);
    }
  });

  // Slider automático cada 20 segundos
  const slider = document.getElementById('sliderPrincipal');
  if (slider && window.bootstrap) {
    bootstrap.Carousel.getOrCreateInstance(slider, {
      interval: 20000,
      ride: 'carousel',
      pause: false
    }).cycle();
  }
});