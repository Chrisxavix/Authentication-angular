# AuthenticationAngular

Versión: 8.3.21.

Usar el servicio de Autenticación y Hosting de Firebase.

## Instalando Firebase en un proyecto de Angular
* Tener una cuenta en Firebase: https://firebase.google.com/

* Darle a comenzar.

* Agregar un proyecto.

* Agregar un nombre, será el dominio del sitio: Authentication-test-angular

* Se creará el repositorio y brindará pasos a seguir.

* Ir al párrafo: "Comienza por agregar Firebase a tu app" y elegir WEB </>.

* Darle un sobrenombre: Authentication

* Ir a: https://github.com/angular/angularfire

* Seleccionar Quick Start - Guía Rápida.

* No importa la versión de angular, se instala: ng add @angular/fire

* Seleccionamos el proyecto creado: Authentication-test-angular

* Copiamos la configuración del enviroment en ambos enviroments de Angular.

* En Firestore Web, con el proyecto abierto se dirige a configuración del proyecto.

* En el Script copiamos los datos desde el apiKey.

* Los datos se reemplazan por los que se copió.

* Configurar en los dos ambientes, local y producción. (enviroments)

* En el modulo principal agregar: 
    * AngularFireModule.initializeApp(environment.firebase)
    * AngularFireAuthModule

## Configurando el servicio de Authentication
* Ir a Firebase y en la barra de navegación seleccionar Authentication.

* Darle a comenzar.

* La autenticación será por correo, por lo que se debe habilitar.

* Editar el template de verificación de correo

## Usando el Hosting de Firebase


---------------------------------------------------------
* Darle a Hosting y comenzar.

* Pasos dados por Firebase:
    * npm install -g firebase-tools
    * firebase login (Si ya se encuentra logueado, darle a logout para cambiar de cuenta)
    * ? Allow Firebase to collect CLI usage and error reporting information? (Y/n) --> y
    * firebase init
        * ? Are you ready to proceed? (Y/n) --> y
        * Elegir Hosting, bajar con flechas, seleccionar con la tecla espacio
        * Use an existing project --> porque se selecciona el proyecto antes creado (fire-angularv1)
        * ? What do you want to use as your public directory? (public) --> escribir dist
        * ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) --> n
        * ? Set up automatic builds and deploys with GitHub? (y/N) --> y
        * ? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) --> se escribe el nombre del repositorio, junto con el usuario, chrisxavix/firebase-angular
        * ? Set up the workflow to run a build script before every deploy? (y/N) --> y
        * ? What script should be run before every deploy? (npm ci && npm run build) --> darle doble enter
        * ? Set up automatic deployment to your site's live channel when a PR is merged? (Y/n) --> y
        * ? What is the name of the GitHub branch associated with your site's live channel? (master) --> darle a enter

* ng build
* Ir a firebase.json y poner la dirección correcta: "public": "dist/Firebase-angular"
* firebase deploy
* Nos arroja un enlace que será el proyecto desplegado: https://fire-angularv1.web.app/

Nota: Configuración para tener enlaces con rutas.

* En firebase.json agregar después del array ignore:

"rewrites": [
  {
    "source": "**",
    "destination": "/index.html"
  }
]
