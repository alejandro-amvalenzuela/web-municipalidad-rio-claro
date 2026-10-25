# Portal Web Municipalidad de Río Claro

Aplicación web desarrollada en Angular para la gestión y pago en línea del permiso de circulación de la Municipalidad de Río Claro, junto con los módulos informativos comunales.

## Instalación y ejecución

1. Clonar el repositorio o descomprimir el proyecto.
2. Instalar las dependencias del proyecto:
```bash
npm install
```
3. Ejecutar el servidor de desarrollo:
```bash
npm start
```
4. Abrir en el navegador la dirección `http://localhost:4200/`.

Para generar la compilación de producción:
```bash
npm run build
```

---

## Estructura del proyecto

- **src/app/pages/**: Vistas principales de la aplicación.
  - `home`: Portada municipal, carrusel y accesos rápidos.
  - `alcaldia`: Información de la alcaldía.
  - `consejo`: Listado de concejales.
  - `denuncias`: Formulario de denuncias comunitarias.
  - `concursos`: Concursos públicos comunales con filtros.
  - `pagos`: Portal de trámites de pago.
  - `busqueda`: Consulta de permiso de circulación por patente.
  - `detalle-permiso`: Información del vehículo, estado del permiso y montos.
  - `pago`: Confirmación del pago simulado.
  - `comprobante`: Emisión y descarga del comprobante en PDF.
  - `historial`: Registro de pagos efectuados.
- **src/app/services/**: Servicios de la aplicación.
  - `local-storage.ts`: Servicio encargado de la persistencia de datos.
- **src/app/data/**: Datos precargados de prueba.
  - `datos-iniciales.ts`: Arreglos de vehículos y permisos iniciales.
- **src/app/models/**: Interfaces TypeScript (`vehiculo.ts`, `permiso.ts`, `pago.ts`).

---

## Datos de prueba

El archivo `datos-iniciales.ts` contiene registros configurados para probar los distintos casos de uso:

| Patente | Vehículo | Estado | Monto | Caso de uso |
| :--- | :--- | :--- | :--- | :--- |
| `CDRF45` | Hyundai Accent (2020) | Pendiente | $1.000.000 | Permiso impago listo para pagar |
| `DRK234` | Chevrolet Silverado (2024) | Pendiente | $10.400 | Permiso impago listo para pagar |
| `FT9T43` | Honda CR-V (2022) | Pendiente | $45.000 | Permiso impago listo para pagar |
| `ABDC12` | Toyota Corolla (2019) | Pagado | $34.000 | Permiso ya pagado previamente |
| `FTOE45` | Toyota RAV4 (2019) | Pagado | $503.333 | Permiso ya pagado previamente |
| `ABC45` | Nissan Skyline (1957) | Vencido | $250.000 | Permiso vencido (requiere regularización) |
| `INC001` | Kia Morning (2021) | Incompleto | - | Vehículo sin registro de permiso asociado |
| `ZZ9999` | Inexistente | - | - | Patente no encontrada en el sistema |

### Reinicio de datos

Para reiniciar los datos a su estado original durante las pruebas:
- En la página de **Historial de Pagos** (`/historial`), pulsar el botón **"Reiniciar Datos de Prueba"**.
- También es posible limpiar el almacenamiento ejecutando `localStorage.clear()` en la consola del navegador y recargando la página.

---

## Servicio de persistencia (`LocalStorageService`)

La persistencia del sistema está centralizada en `LocalStorageService` (`src/app/services/local-storage.ts`):

- **Almacenamiento**: Utiliza tres claves en `localStorage`: `'vehiculos'`, `'permisos'` y `'pagos'`.
- **Carga inicial**: Si el almacenamiento se encuentra vacío (primer inicio), el servicio carga de manera automática los datos de `datos-iniciales.ts`.
- **Operaciones**:
  - `buscarPermisoPorPatente(patente)` y `obtenerVehiculoPorPatente(patente)`: Permiten consultar registros sin acoplar la lectura en los componentes.
  - `guardarPago(pago)`: Inserta una nueva transacción en el historial.
  - `actualizarEstadoPermiso(id, nuevoEstado)`: Modifica el estado del permiso a `'pagado'` al confirmar la transacción.
  - `reiniciarDatosDePrueba()`: Restablece los datos iniciales y limpia el historial.
- Ningún componente accede directamente a la API de `localStorage`, manteniendo centralizadas las operaciones de lectura y escritura.
