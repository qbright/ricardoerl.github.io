---
layout: post
title: Open Graph en Jekyll
description: Open Graph es un protocolo utilizado por Facebook que permite estruturar informacion social en una pagina web. Aqui explico un poco como implementarlo en Jekyll.
---

[Open Graph](http://ogp.me/) es un protocolo utilizado por Facebook que permite estructurar información social en una página web. Aquí explico un poco cómo integrarlo en Jekyll para controlar la manera en la que nuestro contenido es compartido.

## Liquid

Jekyll utiliza [Liquid](http://docs.shopify.com/themes/liquid-basics/output) para procesar las plantillas del proyecto, en nuestro caso, también lo utilizaremos para generar las etiquetas necesarias para implementar Open Graph.

Es necesario establecer algunas variables en nuestro archivo `_config.yml` que nos permitan un mejor control sobre la información:

```
# Información general

title: Blog de Ricardo Ramirez
author: Ricardo Ramirez
description: Front-End Developer que vive en El Salvador
url: http://ricardoerl.com

# Open Graph

og_image: images/logo-photo.png #Imagen para compartir por defecto
fb_profile_id: 772745716 # ID del perfil de facebook del autor

```

## Etiquetas Open Graph

Para implementar el protocolo es necesario agregar el siguiente atributo a la etiqueta `<html>` del proyecto:

```
<html class="no-js" xmlns:og="http://ogp.me/ns#" xmlns:fb="https://www.facebook.com/2008/fbml">
```

Entre las etiquetas Open Graph básicas están:

```
<meta property="og:title" content="Titulo del objeto" >
<meta property="og:type" content="Tipo del objeto" >
<meta property="og:image" content="Imagen del objeto" >
<meta property="og:url" content="URL del objeto" >
```

Cada una define el tipo de contenido que el [*Crawler*](http://es.wikipedia.org/wiki/Ara%C3%B1a_web) de Facebook debe obtener para compartir la información. En Jekyll es necesario generar cada etiqueta con el contenido correspondiente a cada *post*, esto incluye diferenciar si estamos en la página principal o en un artículo. 

Aquí está el código que utilizo en mi blog:

```
{% raw %}
<meta property="og:site_name" content="{{ site.title }}">

{% if page.title %}
	<meta property="og:title" content="{{ page.title }}">
{% else %}
	<meta property="og:title" content="{{ site.title }}">
{% endif %}

{% if page.title %}
	<meta property="og:type" content="article">
{% else %}
	<meta property="og:type" content="website">
{% endif %}

{% if page.description %}
	<meta property="og:description" content="{{ page.description }}">
{% else %}
	<meta property="og:description" content="{{ site.description }}">
{% endif %}

{% if page.title %}
	<meta property="og:url" content="{{ site.url }}{{ page.url }}">
{% else %}
	<meta property="og:url" content="{{ site.url }}">
{% endif %}

{% if page.date %}
	<meta property="article:author" content="https://www.facebook.com/Ricardo.RamirezLara" />
{% endif %}

<meta property="og:image" content="{{ site.url }}/{{ site.og_image }}">
{% endraw %} 
```

Es importantes tener definidas las variables `title` y `description` en la plantilla de cada *post*.

Facebook tiene una [herramienta para verificar](https://developers.facebook.com/tools/debug/) que todo este en orden, además, en la [documentación oficial](https://developers.facebook.com/docs/opengraph/howtos/maximizing-distribution-media-content/) se encuentran mejor explicadas cada una de las etiquetas y cada uno de sus atributos.

Consultas o comentarios, estoy en twitter como [@ricardoerl](https://twitter.com/ricardoerl)

&mdash;R.