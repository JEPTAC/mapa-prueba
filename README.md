# San Pedro 3D — versión corregida para GitHub Pages

Esta versión evita depender únicamente de `unpkg`. GitHub Actions instala MapLibre y lo publica dentro del mismo sitio en `vendor/`, por lo que el motor 3D ya no depende de que un CDN externo cargue correctamente en el navegador.

## Publicación obligatoria

1. Sube **todos** los archivos y carpetas de este paquete a la raíz del repositorio, incluida la carpeta oculta `.github`.
2. En GitHub abre **Settings → Pages**.
3. En **Source** selecciona **GitHub Actions**. No uses `Deploy from a branch` para esta versión.
4. Abre la pestaña **Actions** del repositorio.
5. Espera a que `Publicar San Pedro 3D` termine con el indicador verde.
6. Regresa a **Settings → Pages → Visit site**.

## Si ya existía una versión anterior

Reemplaza todo el contenido del repositorio con este paquete. Después pulsa `Ctrl + F5` en la página publicada para evitar que el navegador siga usando el HTML anterior desde caché.

## Diagnóstico

La pantalla de error ahora diferencia entre:

- motor MapLibre no descargado;
- WebGL o aceleración por hardware desactivados;
- error al crear el mapa;
- fallos parciales de imágenes, terreno o cartografía.
