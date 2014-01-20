---
layout: post
title: Lista de colores con Sass
description: Funciones avanzadas, como las directivas de control, hacen que una lista en Sass sea muy util para generar bloques de codigo.
color: 8E44AD
---

Funciones avanzadas, como las directivas de control `@if` `@for` `@each` `@while`, hacen que una lista en Sass sea muy útil para generar bloques de código. Aquí explico cómo está implementado en mi blog.

Una [lista en Sass](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#lists) es sólo una serie de valores, separados por espacios o comas. Por ejemplo, la siguiente es una lista de colores tomados de [flatuicolors.com](http://flatuicolors.com/):

```
$colors: #F39C12, #1ABC9C, #2980B9, #D35400, #2C3E50;
```
----------------

Para crear la lista de entradas en la página principal de mi blog era necesario asignar a cada bloque un color de fondo diferente y que además la adición de nuevos colores no fuese muy complicado.

Por lo tanto, la solución más eficiente que encontré fue utilizar un `@for` para recorrer la lista de colores y asignar el valor correspondiente en cada iteración, así:

```
@for $i from 1 through length($colors) {
	.block-item:nth-of-type(#{$i}) {
		background-color: nth($colours, $i);
		&:hover {
			background-color:lighten(nth($colours, $i), 5%);
		}
	}	
}
```
El `@for` asigna a un bloque el color correspondiente según su posición en la lista, esto hace que solo sea necesario agregar un nuevo color a la lista cuando exista un nuevo bloque.

## Iconos sociales

Un ejemplo común en donde se puede utilizar una lista es para generar un menú con iconos sociales. Aquí está un ejemplo editable:

<p data-height="322" data-theme-id="0" data-slug-hash="zojyh" data-user="ricardoerl" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/ricardoerl/pen/zojyh'>Sass lists</a> by Ricardo Ramírez (<a href='http://codepen.io/ricardoerl'>@ricardoerl</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Consultas o comentarios, estoy en twitter como [@ricardoerl](https://twitter.com/ricardoerl)
