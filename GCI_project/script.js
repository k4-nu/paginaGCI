const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const submenu = document.getElementById('submenu');
const jetpackLink = document.getElementById('jetpack-link');
const overlay = document.getElementById('overlay');

// Abrir/cerrar menú hamburguesa
toggle.addEventListener('click', () => {
  menu.classList.toggle('menu-visible');
  // Si se abre el menú, cerrar el submenú
  if (!menu.classList.contains('menu-visible')) {
    submenu.classList.remove('submenu-visible');
    overlay.classList.remove('overlay-visible');
  }
});

// Mostrar/ocultar submenú al hacer clic en Jetpacks
jetpackLink.addEventListener('click', (e) => {
  e.preventDefault();
  const isVisible = submenu.classList.contains('submenu-visible');

  // Cierra todo si ya está abierto
  submenu.classList.toggle('submenu-visible');
  overlay.classList.toggle('overlay-visible');

  // Asegura que el menú esté visible si se abre desde el botón
  if (!menu.classList.contains('menu-visible')) {
    menu.classList.add('menu-visible');
  }
});

// Cerrar menú y submenú al hacer clic en el fondo oscuro
overlay.addEventListener('click', () => {
  submenu.classList.remove('submenu-visible');
  menu.classList.remove('menu-visible');
  overlay.classList.remove('overlay-visible');
});

      const productos = [
      {
        titulo: "Jetpack Inka Solar",
        imagen: "imgs/1.jpeg",
        descripcion: `<strong>Innovador:</strong> Uso de energía solar, con paneles solares integrados en las alas.<br>
        <strong>Cultural peruana:</strong> Detalles geométricos inspirados en las líneas de Nazca.<br>
        <strong>Futurista:</strong> Fibra de carbono, verde neón y forma aerodinámica.<br>
        <strong>Velocidad máxima:</strong> 120 km/h<br>
        <strong>Tiempo de vuelo:</strong> 45 min<br>
        <strong>Carga completa:</strong> 60 min con estación solar<br>
        <strong>Altura máxima:</strong> 1,200 m<br>
        <strong>Peso:</strong> 18 kg<br>
        <strong>Batería:</strong> Celdas de litio + paneles solares activos<br>
        <strong>Extras:</strong> IA de navegación, control de estabilidad.`
      },
      {
        titulo: "Jetpack Cóndor de Altura",
        imagen: "imgs/2.jpeg",
        descripcion: `<strong>Innovador:</strong> Motor eléctrico con impulso vertical ajustable.<br>
        <strong>Cultural peruana:</strong> Inspirado en el Cóndor andino.<br>
        <strong>Futurista:</strong> Luces LED verdes y detalles metálicos.<br>
        <strong>Velocidad máxima:</strong> 135 km/h<br>
        <strong>Tiempo de vuelo:</strong> 50 min<br>
        <strong>Carga completa:</strong> 75 min<br>
        <strong>Altura máxima:</strong> 1,800 m<br>
        <strong>Peso:</strong> 21 kg<br>
        <strong>Batería:</strong> Inteligente con enfriamiento activo.`
      },
      {
        titulo: "Jetpack Solar Andino",
        imagen: "imgs/3.jpeg",
        descripcion: `<strong>Innovador:</strong> Paneles solares flexibles en la parte superior.<br>
        <strong>Cultural peruana:</strong> Inspirado en arquitectura inca.<br>
        <strong>Futurista:</strong> Diseño modular y acabados en carbono.<br>
        <strong>Velocidad máxima:</strong> 110 km/h<br>
        <strong>Tiempo de vuelo:</strong> 60 min<br>
        <strong>Carga completa:</strong> 90 min<br>
        <strong>Altura máxima:</strong> 1,000 m<br>
        <strong>Peso:</strong> 19 kg<br>
        <strong>Batería:</strong> Solar flexible + respaldo de grafeno.`
      },
      {
        titulo: "Jetpack Sol",
        imagen: "imgs/4.jpeg",
        descripcion: `<strong>Innovador:</strong> Energía solar + propulsores híbridos.<br>
        <strong>Cultural peruana:</strong> Emblema de Inti (dios del sol).<br>
        <strong>Futurista:</strong> Detalles dorados y acabado metálico.<br>
        <strong>Velocidad máxima:</strong> 140 km/h<br>
        <strong>Tiempo de vuelo:</strong> 50 min<br>
        <strong>Carga completa:</strong> 55 min<br>
        <strong>Altura máxima:</strong> 1,500 m<br>
        <strong>Peso:</strong> 20 kg<br>
        <strong>Batería:</strong> Sistema híbrido.`
      }
    ];

    function mostrarProducto(index) {
      const p = productos[index - 1];
      const dialog = document.getElementById("caja");
      dialog.innerHTML = `
        <div class="producto">
          <div class="anchura">
            <img src="${p.imagen}" alt="${p.titulo}">
          </div>
          <div class="textitoxd">
            <h3><strong>${p.titulo}</strong></h3>
            <p>${p.descripcion}</p>
            <button class="boton-cerrar" onclick="cerrarProducto()">Cerrar</button>
          </div>
        </div>
      `;
      dialog.showModal();
    }

    function cerrarProducto() {
      document.getElementById("caja").close();
    }