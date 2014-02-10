NODEJS
-----
* Programa prueba
    * package.json
    * Instalar dependencias
    * Ejecutar
            
```js
   var moment = require('moment');
   exports.hoy = function(){
      return moment().format('MMMM Do YYYY, h:mm:ss a');
   }
   
   var fechas = require('./fechas.js');
   console.log(fechas.hoy());
```


* Proyecto web
    * package.json
    * Instalar dependencias


GRUNT
-----
* Gruntfile.js
* grunt server
    * livereload
        * css
        * js
        * hmtl
* grunt dist
    * css
        * unificado
        * minificado
    * js
        * unificado
        * ofuscado



BOWER
-----
* bower.json
* instalar dependencias

JADE
-----
* Sintaxis
* include footer & header

            include views/header
            include views/footer

* variables
    * Gruntfile.js


            options: {
               pretty: true,
               data: {
                   title: 'DEV!!',
                   env: 'dev'
               }
            }

    * index.jade

            title= title
            span entorno:#{env}
            if (env == "dev")
               span -no pasa nada!

SASS
-----
* Organización de ficheros
* Nesting
    * section h2
    * hover

            
            a
             text-decoration: none
             color: black
             &:hover
               background: black
               color: white


* Variables
    * border-width
    * colors

* Funciones
    * darken


            darken(red, 10%)


* for


            @for $i from 1 through 10
              &:nth-child(#{$i})
                 background: darken(red, 10% + ($i * 5))

* mixin

            @mixin btn($back, $color, $hover-back-percent: 10%)
              color: $color
              background: $back
              &:hover
                background: darken($back, $hover-back-percent)

            .btn
              +btn(red, black)


* extend

            .navbar
              background: rgba(0,0,0,0.5)
              border-color: red
              position: fixed
              width: 100%
              top: 0
              bottom: 0
              &:hover
                background: rgb(255, 163, 148)


            .header-container
              @extend .navbar
              border-bottom: 4px solid
              height: 100px
              bottom: auto
            .footer-container
              @extend .navbar
              border-top: 4px solid
              top: auto
              height: 40px

* placeholders


COMPASS
======
* reset

            @import "compass/reset"
            
            +global-reset


* mixins
    * border-radius

            +border-radius(6px)
