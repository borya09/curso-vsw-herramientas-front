NODEJS
-----
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
* Extend


            .btn-normal
               border-color: #ffa394
            .btn
                background: none
                border: 2px solid
                +border-radius(6px)
                padding: 4px 15px
                &.big
                  @extend .btn-normal
                  padding: 4px 30px
                &.normal
                  @extend .btn-normal
                &.small
                  @extend .btn-normal
                  padding: 4px 4px
                &.alert
                  $color: red
                  background: $color
                  color: white

* Mixins
  * btn-hover


            @mixin btn-hover($color, $back-color, $border-color: black)
             &:hover
               color: $color
               background: $back-color
               border-color: $border-color
            
            
            +btn-hover(black, #ffa394)
            +btn-hover($color, white, $color)

COMPASS
======
* reset

            @import "compass/reset"
            
            +global-reset


* mixins
    * border-radius

            +border-radius(6px)
