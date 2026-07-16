# San Pedro 3D — versión cinematográfica optimizada

Versión estática para GitHub Pages.

## Cambios principales

- El relieve ya no utiliza teselas WEBP de Mapterhorn. Usa DEM Terrarium PNG global alojado en AWS Open Data.
- Se usan fuentes separadas para terreno y hillshade.
- Zoom máximo ampliado hasta 22.
- Calles y huellas de edificios se cargan también en equipos de capacidad limitada.
- Los edificios 3D se activan únicamente en equipos que pueden renderizarlos con fluidez.
- Vuelos cinematográficos con `flyTo` y acercamientos a más detalle.
- Nuevo modo **Reconstrucción digital** para los lugares emblemáticos.

## Publicación

Sube a la raíz del repositorio:

```
index.html
.nojekyll
README.md
assets/
```

Configura GitHub Pages con `Deploy from a branch`, rama `main`, carpeta `/ (root)`.

## Precisión de la reconstrucción

El modo de reconstrucción utiliza satélite, calles y volúmenes cartográficos. No representa una réplica fotogramétrica exacta. Para reconstruir fielmente la iglesia, alcaldía y otros hitos se deben incorporar fotografías desde varios ángulos, video o levantamiento con dron y modelos GLB optimizados.
