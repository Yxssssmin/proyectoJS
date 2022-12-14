import { loginForm } from "./pages/login.js";
import { home } from "./pages/home.js";

export {route};

function route(ruta) {

    console.log(ruta);
    let main = document.querySelector("#main");
  
    if (/#\/graph\/[0-9]+/.test(ruta)) {
      let graphID = ruta.split("/")[2];
      main.innerHTML = "";
      
    }
    else if(/#access_token=.*type=recovery$/.test(ruta)) {
      let datos = Object.fromEntries(ruta.substring(1).split('&').map(parametro => parametro.split('=')));
      loginWithToken(datos['access_token'],datos.expires_in);
      window.location.hash = "#/";
      
    }
  
    else {
      switch (ruta) {
        case "#/":
          main.innerHTML = "";
          main.append(home());
          break;
        case "#/login":
          main.innerHTML = "";
          main.append(loginForm());
          break;
        case "":
          window.location.hash = "#/";
          break;
      }
    }
  
  
  }