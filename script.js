import {GenerateHeader} from "./views/header.js";
import {MenuTemplate} from "./views/menu.js";
import {GenerateFooter} from "./views/footer.js";
import {loginForm} from "./pages/login.js";


(() => {
    document.addEventListener('DOMContentLoaded', () => {
        let container = document.querySelector('#container');
        container.append(GenerateHeader(), MenuTemplate(), GenerateFooter(), loginForm());
        const hamburguesa = document.querySelector('#hamburguesa');
        const navegacion = document.querySelector('.navegacion');

        
        mostrarMenu(navegacion, hamburguesa);
    })
})();

function mostrarMenu(navegacion,hamburguesa) {
    hamburguesa.addEventListener('click', ()=>{
        navegacion.classList.toggle('ocultar');


    })
}