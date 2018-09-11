# Frontend avanzado

Objetivo del módulo: Afianzar los conocimientos del desarrollo web utilizando herramientas más profesionales como Webpack y SASS, así como aprender a dar una mejor arquitectura al código Javascript.

Seguir buenas prácticas:

- Refactorizar
- Conceptos de ayuda en la programación:
  Separación de intereses (Separation of concerns),
  Dont Repeat Yourself (DRY),
  Estructura,
  Legibilidad,
  Nombres correctos,
  You aint gonna need it (Ir a lo sencillo - KISS, no sobreingeniería),
- Separación del diseño en componentes reutilizables

Procesos que se repetiran en el trabajo:

- Crear nuestro propio bundle y entorno de desarrollo con webpack + npm modules
- Crear una estructura de componentes y servicios
- Crear nuestra plantilla SASS para tener un estandar de diseño
- Trabajar con Responsive Web design
- Trabajar con un API desde el frontend
- Trabajar con promesas
- (Hacer un deploy)

---

Webpack
  Módulos en Javascript
  Introducción
  Instalación
  Elementos: entry points, output, loader y plugins
  Empaquetando HTML
  Empaquetando SASS
  ¿Qué son los source maps y para que sirven?
  Generando el CSS aparte
  Dev Server
  Usando ES6 con Babel
  Cargando assets
  Optimizando imágenes
  Haciendo builds para producción
  Alias
  SASS
  Responsive Web Design
  Media queries
  Patrones de RWD
  Imágenes y vídeos responsive

Critical path en CSS
Introducción a la accesibilidad
Interacción con una API:
  Servicio para traer datos del servidor
  Promesas en el fetch, distintas sintaxis

Formularios: Diseño y validación

APIS HTML5:
  Web storage y Local Storage
  Desktop notifications

Patrones de arquitectura de software y estructura en Javascript
  Módulos
  Publisher/Suscriber


Recursos:

WEBPACK:

  Documentación oficial de webpack: https://webpack.js.org/concepts/

  Libro sobre webpack: https://survivejs.com/webpack/foreword

  Sobre donde colocar el tag script en HTML: https://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup

  Máximo de peticiones por servidor: http://sgdev-blog.blogspot.com/2014/01/maximum-concurrent-connection-to-same.html

  Patrones de diseño en Javascript: https://addyosmani.com/resources/essentialjsdesignpatterns/book

  Módulos en Javascript: https://auth0.com/blog/javascript-module-systems-showdown/

  Estadísticas de uso en internet: http://gs.statcounter.com/

  Compatibilidad de ES6: https://kangax.github.io/compat-table/es6/

  Can I use, compatibilidad de distintas features: https://caniuse.com/

  Configurando babel env: http://2ality.com/2017/02/babel-preset-env.html

  Tipos de sourcemaps generados: https://webpack.js.org/configuration/devtool/

  HMR - Cómo instalar :https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96

CSS y RESPONSIVE:

  Resets en CSS: https://css-tricks.com/reboot-resets-reasoning/

  Conversión de pixeles a rem: http://www.stubbornella.org/content/2013/07/01/easy-peasy-rem-conversion-with-sass/

  Etiqueta viewport: https://www.w3schools.com/css/css_rwd_viewport.asp

  Estadísticas de pantallas: http://gs.statcounter.com/screen-resolution-stats

  Media para impresión: https://uxdesign.cc/i-totally-forgot-about-print-style-sheets-f1e6604cfd6?gi=afe786d28bc0

  Accesibilidad:
    https://www.webcredible.com/blog/web-accessibility-basics/
    navegador lynx: https://lynx.browser.org/
    noscript tag: https://www.w3schools.com/Tags/tag_noscript.asp

  Medidor de contraste: https://webaim.org/resources/contrastchecker/

  Imágenes responsive: https://internetingishard.com/html-and-css/responsive-images/

  Responsive patterns: https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns

  Critical CSS: https://www.sitepoint.com/how-and-why-you-should-inline-your-critical-css/

  Medidor para otras optimizaciones: https://developers.google.com/speed/pagespeed/insights/

FETCH
  JSON server: https://github.com/typicode/json-server

  Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

FORMULARIOS
  Validación de formularios HTML 5: https://developer.mozilla.org/es/docs/Learn/HTML/Forms/Validacion_formulario_datos

UI STACK
http://scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack
