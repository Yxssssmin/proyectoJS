export {GenerateHeader};

function GenerateHeader() {
    let header = document.createElement('div');
    header.id = 'header';
    header.classList.add('container');
    header.innerHTML = `
    <header class="encabezado">
      <div class="contenido-navegacion">
        <div class="logo">
          <img src="./images/zavtry.png" height="70px">
        </div>
        <img class="cesta" src="./images/cesta.png" height="35px">
        <a href="./pages/login.js"><img class="usuario" src="./images/icono-usuario.png" height="35px"></a>
        <nav class="navegacion ocultar">
          <a href="#">Inicio</a>
          <a href="#">Ropa</a>
          <a href="#">Contacto</a>
        </nav>
        <div id="hamburguesa" class="hamburguesa">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </hearder>

 `;
 
 return header;
}