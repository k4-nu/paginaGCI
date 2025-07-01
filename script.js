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

                function primero1(){
                    document.getElementById("caja1").showModal();
                    document.body.style.backgroundColor="rgb(0,0,0,0.5)";
                    document.getElementById("cabecita").style.backgroundColor="rgb(0,0,0,0.5)";
                }
                function primero2(){
                    document.getElementById("caja2").showModal();
                    document.body.style.backgroundColor="rgb(0,0,0,0.5)";
                    document.getElementById("cabecita").style.backgroundColor="rgb(0,0,0,0.5)"
                }
                function primero3(){
                    document.getElementById("caja3").showModal();
                    document.body.style.backgroundColor="rgb(0,0,0,0.5)";
                    document.getElementById("cabecita").style.backgroundColor="rgb(0,0,0,0.5)"
                }
                function primero4(){
                    document.getElementById("caja4").showModal();
                    document.body.style.backgroundColor="rgb(0,0,0,0.5)";
                    document.getElementById("cabecita").style.backgroundColor="rgb(0,0,0,0.5)"
                }
                function segundo1(){
                    document.getElementById("caja1").close();
                    document.body.style.backgroundColor="white";
                    document.getElementById("cabecita").style.backgroundColor="beige"
                }
                function segundo2(){
                    document.getElementById("caja2").close();
                    document.body.style.backgroundColor="white";
                    document.getElementById("cabecita").style.backgroundColor="beige"
                }
                function segundo3(){
                    document.getElementById("caja3").close();
                    document.body.style.backgroundColor="white";
                    document.getElementById("cabecita").style.backgroundColor="beige"
                }
                function segundo4(){
                    document.getElementById("caja4").close();
                    document.body.style.backgroundColor="white";
                    document.getElementById("cabecita").style.backgroundColor="beige"
                }