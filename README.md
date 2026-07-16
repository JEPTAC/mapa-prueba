# San Pedro 3D — versión GitHub Pages sin rutas vendor

## Publicación

1. Sube `index.html`, la carpeta `assets` y `.nojekyll` a la raíz del repositorio.
2. En **Settings → Pages**, selecciona **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Espera a que GitHub termine la publicación y abre la URL.
4. Haz una recarga completa con `Ctrl + F5`.

Esta versión no necesita `vendor`, `npm`, `package.json` ni GitHub Actions. MapLibre se carga con tres CDN de respaldo y el mapa arranca primero con la capa satelital; el relieve y las edificaciones se agregan progresivamente.
