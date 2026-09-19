document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('denunciaForm');
  const archivosInput = document.getElementById('archivosInput');
  const fileListPreview = document.getElementById('fileListPreview');
  const successAlert = document.getElementById('successAlert');
  const tipoDenunciaError = document.getElementById('tipoDenunciaError');

  if (!form) return;

  archivosInput?.addEventListener('change', () => {
    const files = Array.from(archivosInput.files);
    if (files.length > 10) {
      alert('Ha seleccionado más de 10 archivos. Por favor seleccione hasta un máximo de 10 archivos.');
      archivosInput.value = '';
      fileListPreview.innerHTML = '';
      return;
    }

    if (files.length > 0) {
      fileListPreview.innerHTML = `<strong>Archivos seleccionados (${files.length}):</strong><ul class="mb-0 ps-3">` +
        files.map(f => `<li>${f.name} (${(f.size / (1024 * 1024)).toFixed(2)} MB)</li>`).join('') +
        `</ul>`;
    } else {
      fileListPreview.innerHTML = '';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = form.checkValidity();
    const tipoDenunciaSelected = form.querySelector('input[name="tipoDenuncia"]:checked');

    if (!tipoDenunciaSelected) {
      isValid = false;
      tipoDenunciaError?.classList.remove('opacity-0');
    } else {
      tipoDenunciaError?.classList.add('opacity-0');
    }

    form.classList.add('was-validated');

    if (!isValid) return;

    const filesData = Array.from(archivosInput?.files || []).map((f, index) => ({
      index: index + 1,
      nombre: f.name,
      tamanoMB: (f.size / (1024 * 1024)).toFixed(2) + ' MB',
      tipo: f.type
    }));

    const datosDenuncia = {
      fechaRegistro: new Date().toLocaleString(),
      email: form.email.value.trim(),
      tipoDenuncia: tipoDenunciaSelected.value,
      nombre: form.nombre.value.trim(),
      rut: form.rut?.value.trim() || 'No proporcionado',
      telefono: form.telefono.value.trim(),
      antecedentes: form.antecedentes.value.trim(),
      totalArchivos: filesData.length
    };

    console.log('==========================================');
    console.log('NUEVA DENUNCIA REGISTRADA CON ÉXITO');
    console.log('==========================================');
    console.table(datosDenuncia);
    if (filesData.length > 0) {
      console.log('Archivos Adjuntos:', filesData);
    }

    if (successAlert) {
      successAlert.classList.remove('d-none');
      successAlert.scrollIntoView({ behavior: 'smooth' });
    }

    form.reset();
    form.classList.remove('was-validated');
    if (fileListPreview) fileListPreview.innerHTML = '';
  });
});
