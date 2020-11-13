# EOI-Ionic 5

Proyecto de ejemplo para el curso FullStack de la E.O.I. En esta aplicación, se muestra un listado de posts utilizando elementos visuales de Ionic, además de poder agregar más posts haciendo uso de elmentos nativos como la cámara.


## Tabla de contenidos
 - [Pasos previos](#pasos-previos)
    * [Instalar dependencias](#instalar-dependencias)
    * [Lanzar servidor](#lanzar-servidor)
 - [Compilar proyecto](#compilar-proyecto)
    * [Añadir plataformas](#añadir-plataformas)
    * [Abrir IDE](#abrir-ide)
    * [Refrescar cambios](#refrescar-cambios)

## Pasos previos

En el proyecto existe un fichero json, el cual utilizaremos como base de datos para testear nuestra aplicación. Para ello utilizaremos la librería <a href="https://github.com/typicode/json-server">json-server</a>.

```shell
$ npm install -g json-server 
```

Una vez lo tengamos instalado, para trabajar en nuestro navegador, en una terminal nueva, apuntando a este directorio, ejecutaremos:

```shell
$ json-server --watch posts.json
```

Al compilar nuestra aplicación en un dispositivo móvil, necesitaremos una IP para acceder a la bd y visualizar los elementos de la misma. Para ello, estando dentro de la misma red WiFi, indicaremos la IP de nuestro PC/Mac en nuestro __environment.ts__ quedando <b style="color:red">algo similar</b> a esto:

```typescript
export const environment = {
  production: false,
  backUrl: 'http://192.168.1.100:3000'
};
```

Posteriormente, si teniamos el json-server activo, lo detendremos y lo iniciaremos de la siguiente manera:

```shell
$ json-server --host 192.168.1.100 posts.json
```

### Instalar dependencias

Una vez hagamos clone del proyecto, instalaremos todas las dependencias con:

```shell
$ npm i
```

### Lanzar servidor

Para lanzar el servidor de Ionic y abrir una pestaña de nuestro navegador con la visualización de la app, ejecutaremos el comando:

```bash
$ ionic serve
# O alternativamente  
$ ionic serve --lab
```


## Compilar proyecto

Primero generaremos nuestro primer de la app antes de realizar cualquier paso.

```shell
$ ionic build
```

Recordar que aunque se disponga de un iPhone, si no tenemos un Mac o un equipo con Hackintosh donde tengamos instalado XCode, no podremos complilar nuestra aplicación en el dispositivo.

### Añadir plataformas

Para poder ejecutar la aplicación en algún dispositivo móvil, es necesario añadir la plataforma propia de dicho dispositivo a través de capacitor, utilizando los siguientes comandos:
```shell
$ ionic cap add ios
$ ionic cap add android
```

### Abrir IDE

Una vez añadidas las plataformas, pasamos a lanzar nuestros editores correspondientes con estos comandos:
```bash
# XCode
$ ionic cap open ios
# Android Studio
$ ionic cap open android
```

### Refrescar cambios

A medida que vayamos haciendo cambios, querremos ir viendo estas modificaciones en nuestro dispositivo móvil. Por ello, cada vez que vayamos a compilar, debemos actualizar el contenido de las plataformas que tengamos con este comando:

```shell
$ ionic cap copy
```
