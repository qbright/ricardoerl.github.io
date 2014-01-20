---
layout: post
title: Dominio personalizado en GitHub Pages
description: GitHub Pages es por mucho la mejor forma de alojar tu proyecto desarrollado con Jekyll, es gratis y ademas te permite utilizar un dominio propio.
color: D35400
---

![GitHub Pages]({{ site.url }}/images/posts-images/GitHub-Pages/GitHub-Pages.png "GitHub Pages")

[GitHub Pages](http://pages.github.com/) es por mucho la mejor forma de alojar tu proyecto con archivos estáticos o desarrollado con Jekyll, es gratis y además te permite utilizar un dominio propio.

Generar una página web, portafolio o blog con GitHub Pages [es bastante fácil](http://pages.github.com/#tutorial), en este caso quiero simplemente explicar cómo configurar el dominio personalizado usando como proveedor de dominios a [NameCheap](https://www.namecheap.com/). 

## Crear un archivo CNAME

Debemos crear un archivo CNAME (sin extensión) en la raíz del proyecto que contenga únicamente el dominio que deseamos para nuestra página, ejemplo:

	ricardoerl.com


## Configuración de DNS

Si ya tenemos el archivo CNAME en el repositorio en línea solamente queda configurar los registros del host en Namecheap. Seleccionamos el dominio a configurar y en *Host Management* seleccionamos *All host records*:

Aquí mi configuración personalizada:

![Configuración de DNS]({{ site.url }}/images/posts-images/GitHub-Pages/namecheap.com-DNS.png "Configuración de DNS")

Y es todo. Es importante aclarar que es necesario que estemos utilizando, en nuestro caso, los DNS de Namecheap para que las opciones de configuración estén disponibles. En el caso de la configuración de un sub dominio el proceso varía un poco y es mejor consultar la [documentación de GitHub](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

Consultas o comentarios, estoy en twitter como [@ricardoerl](https://twitter.com/ricardoerl)

&mdash;R.




