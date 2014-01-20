---
layout: post
title: Responsive Grids
description: El grid es parte fundamental del esquema de un sitio web, permite orden y dan estructura a todo el contenido. Aqui explico un poco como lo utilizo en mis proyectos.
color: 7F8C8D
---

![Responsive Grids]({{ site.url }}/images/posts-images/responsive-grids/singularity-grid-system.png)

El grid o cuadrícula es parte fundamental del esquema de un sitio web y para [Sam Richard](http://snugug.github.io/responsive-grids), integrante de [Team Sass](https://github.com/Team-Sass), el mejor sistema de grids es el que se adapta al diseño y al contenido, ya que es una extensión de ambos.

Recientemente comencé a leer [North](https://github.com/snugug/north) (proyecto de Sam Richard) la cual es una excelente guía para organizar un proyecto desde su etapa de desarrollo hasta las pruebas de rendimiento. Además de ser un excelente recopilatorio de estándares, en el documento se explica muy bien el tema de grids, sus tipos y las ventajas de utilizar sistemas de grid asimétricos y responsivos.

## Simetría vs. Asimetría

Tal como se menciona en el [apartado de grids](https://github.com/snugug/north#grids) del documento:

>En el diseño editorial, los grids son fáciles ya que el tamaño de la pantalla y el modo de lectura es fijo, pero no así en el diseño web, por lo que un grid simétrico no funciona.

En gran manera, lo anterior influye en la manera que se deben diseñar y desarrollar las estructuras de contenido web. Además, considerar como punto focal el uso de sistemas que permitan la generación de código útil y funcional que generen estructuras flexibles independientes del entorno.

## Sistemas de grids

Actualmente existen muchos sistemas de grids disponibles, desde el que se incluye en [Bootstrap](http://getbootstrap.com/css/#grid) (simétrico) hasta el genial [Susy](http://susy.oddbird.net/) (asimétrico) y depende del enfoque que necesitemos la elección del mismo. En lo personal, considero mucho más útil utilizar un sistema que permita generar estructuras personalizadas y libres de código extra, las cuales son posibles en gran parte al uso de pre procesadores de CSS.

Al ser parte de [inuitcss](http://inuitcss.com/), mi favorito es [csswizardry-grids](http://csswizardry.com/2013/02/introducing-csswizardry-grids/), un simple y sencillo sistema de grids basado en Sass. Una de las principales características para utilizarlo es el uso de *Silent classes* lo que me permite abstraer la estructura de los componentes y definir específicamente el código que necesito utilizar.

En conclusión, son cada vez más las estructuras complejas que se deben adaptar al constante cambios de escenarios en el desarrollo web y por ellos es cada vez más importante la utilización de técnicas y sistemas que permitan el alcance de tales objetivos.

¿Qué sistema de grids usas, por qué? estoy en twitter como [@ricardoerl](https://twitter.com/ricardoerl)