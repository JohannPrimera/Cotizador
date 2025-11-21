## Cotizador de Criptomonedas

Aplicación web ligera que consulta la API pública de CryptoCompare para mostrar precios, variaciones de 24 h y poder adquisitivo estimado de las principales criptomonedas en distintas monedas fiduciarias. El enfoque del proyecto es ofrecer una experiencia minimalista, responsive y con estética neomórfica.

### Características
- Formulario guiado para seleccionar moneda local, cripto y monto de referencia.
- Consumo en tiempo real del endpoint `pricemultifull` de CryptoCompare.
- Loader animado y tarjetas con glassmorphism para mantener la interfaz limpia.
- Conversión automática del monto ingresado a unidades de la cripto elegida.
- Diseño responsive con tipografía Inter y gradientes suaves.

### Tecnologías
- HTML5 semántico para la estructura base.
- CSS3 con variables personalizadas y animaciones.
- JavaScript vanilla para gestionar eventos y renderizado dinámico.
- API `fetch` nativa del navegador para consumir CryptoCompare sin dependencias externas.

### Estructura del proyecto
```
Cotizador/
├── index.html      # Maquetación principal y formulario
├── style.css       # Tema visual, animaciones y layout responsive
├── index.js        # Lógica del cotizador y llamadas a la API
└── imag/           # Ilustraciones SVG utilizadas en la UI
```

### Uso
1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador preferido. No se requiere servidor local.
3. Selecciona una moneda, una criptomoneda y (opcionalmente) introduce un monto para calcular cuánta cripto podrías adquirir.

### Personalización
- Ajusta las opciones de `<select>` en `index.html` para añadir nuevas divisas o criptoactivos.
- Modifica la paleta de colores editando las variables CSS dentro de `:root` en `style.css`.
- Para cambiar la API o añadir autenticación, revisa la función `fetch` en `index.js`.

### Notas
- CryptoCompare impone límites de uso para peticiones anónimas; ante fallos repetidos considera añadir tu propia clave o implementar caché.
- Algunas monedas pueden no contar con todos los campos (`HIGH24HOUR`, `LOW24HOUR`, etc.) si el proveedor no entrega esos datos en el momento de la consulta.

### Próximos pasos sugeridos
- Añadir manejo de errores visible para el usuario en lugar de solo `console.log`.
- Guardar la última combinación seleccionada en `localStorage` para mejorar la experiencia.
- Integrar tests ligeros (por ejemplo con Playwright) para validar el flujo principal.

