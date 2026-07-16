# San Pedro 3D — Visor territorial inmersivo

Experiencia web 3D del municipio de San Pedro, Valle del Cauca, preparada para publicarse mediante GitHub Pages.

## Publicación desde la página de GitHub

1. Crea un repositorio nuevo, por ejemplo: `san-pedro-3d`.
2. Descomprime el archivo ZIP descargado.
3. En el repositorio, selecciona **Add file → Upload files**.
4. Sube directamente estos elementos:
   - `index.html`
   - `.nojekyll`
   - la carpeta `assets`
   - `README.md`
5. Confirma con **Commit changes**.
6. Abre **Settings → Pages**.
7. En **Build and deployment**, selecciona:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
8. Pulsa **Save**.

La dirección publicada tendrá normalmente esta estructura:

`https://TU-USUARIO.github.io/san-pedro-3d/`

## Archivos

- `index.html`: experiencia 3D completa.
- `assets/san_pedro_parque.jpg`: recurso visual local.
- `.nojekyll`: evita que GitHub Pages procese el proyecto con Jekyll.

## Requisitos

El visor requiere conexión a internet porque consume cartografía, imágenes satelitales, relieve DEM y bibliotecas WebGL desde servicios externos.

## Prueba local

Dentro de la carpeta ejecuta:

```bash
python -m http.server 8080
```

Después abre:

`http://localhost:8080`
