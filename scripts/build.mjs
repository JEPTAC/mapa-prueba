import { cp, copyFile, mkdir, rm, writeFile } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const root = new URL('../', import.meta.url);

await rm(dist, { recursive: true, force: true });
await mkdir(new URL('./assets/', dist), { recursive: true });
await mkdir(new URL('./vendor/', dist), { recursive: true });

await copyFile(new URL('./index.html', root), new URL('./index.html', dist));
await cp(new URL('./assets/', root), new URL('./assets/', dist), { recursive: true });
await copyFile(new URL('./node_modules/maplibre-gl/dist/maplibre-gl.js', root), new URL('./vendor/maplibre-gl.js', dist));
await copyFile(new URL('./node_modules/maplibre-gl/dist/maplibre-gl.css', root), new URL('./vendor/maplibre-gl.css', dist));
await writeFile(new URL('./.nojekyll', dist), '');
console.log('Sitio generado en dist/ con MapLibre incluido localmente.');
