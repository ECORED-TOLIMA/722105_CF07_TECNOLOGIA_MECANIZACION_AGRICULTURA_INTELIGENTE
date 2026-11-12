# Decisiones y pendientes — 722105_CF07 Planeación de la maquinaria agrícola

Un solo archivo, y sólo de este curso. Cada decisión va con su motivo; no se pregunta.

## 1. La `Description` de la portada sale del DI, no del XD (2026-11-12)

El artboard `Portada` del `.xd` trae como descripción:

> «El componente formativo aborda la estructuración, validación y mejora de los servicios
> agrícolas mecanizados mediante la gestión del talento humano, la organización del programa
> de producción agropecuaria y el análisis de la productividad. Asimismo, comprende
> estrategias de mercadeo…»

Ese texto **no es de este componente**: habla de talento humano, programa de producción y
mercadeo, que no aparecen en ninguno de los 5 temas del propio XD ni en la tabla de contenidos
del `_DI.docx`. Es un arrastre de otro CF del mismo programa.

**Decisión:** `global.Description` = la `BREVE DESCRIPCIÓN` del `_DI.docx`, que sí describe los
cinco temas maquetados. El `Name` sí se toma del XD («Planeación de la maquinaria agrícola»),
que coincide con el `NOMBRE DEL COMPONENTE FORMATIVO` del DI.

**Si el diseñador corrige el XD**, se vuelve al texto del XD sin más cambios.

## 2. El scaffold traía 3 temas y el curso tiene 5 (2026-11-12)

`src/router/index.js` y `src/config/global.js` venían de BASE con `Tema1..Tema3`. El mapa de
artboards (`docs/mapa-artboards.json`) da 5 temas + Portada + Introducción + Síntesis. Se
ampliaron el router y el menú, y se crearon los stubs `Tema4.vue` y `Tema5.vue`.

Los artboards `Tablet ` y `Banner` no son pantallas: son hojas de spec del diseño y no se
revisan (`scripts/pantallas.py` ya los deja fuera).

## 3. Paleta tomada de la hoja de swatches del XD (2026-11-12)

El artboard `Portada` lleva abajo (y≈1248..1541) la especificación de la paleta. Se cargó
entera en `src/styles/_variables.sass`, con sus variantes clara (VC), media (V) y oscura (VO):

| Rol | Color |
|---|---|
| 1 Primario | `#A0E57E` (VC `#EEFFDB`, V `#C2F6A0`, VO `#1A5307`) |
| 2 Secundario | `#E8CB91` (VC `#F8EDD3`, V `#E9D2A7`, VO `#6A4F05`) |
| 3 Acento contenido | `#FEB241` (VC `#FFE8CE`, V `#FFC96D`, VO `#6A4F05`) |
| 4 Acento botón | `#982C03` (VC `#E8D5D5`) |
| 5 Terciario | `#FFA698` (VC `#FFE8E8`) |

## 4. Marcadores de BASE todavía sin sustituir

No son defectos de maquetación: son los placeholders que trae el scaffold y que hay que
reemplazar por el material de este curso antes de cerrar.

- `src/assets/curso/portada/*` — banner, fondo y los dos decorativos: hay que renderizarlos
  del artboard `Portada` del XD.
- `src/assets/curso/sintesis.svg` — mapa conceptual de otro curso.
- `public/downloads/Sintesis.pdf` — **lo sube el cliente a mano**; no se genera.
- `src/assets/actividad/imagen1..10.png` y `src/assets/componentes/cuestionario-resultado.svg`
  — imágenes de la actividad de otro curso; salen del `_AD.docx`.
- El texto del banner principal va forzado a blanco en `_custom.sass`. Si el fondo del hero
  resulta claro, pasa a `$color-sistema-texto`.

## 5. El video de la introducción no trae URL

El `_DI.docx` remite a `722105_CF07_Guion_Introduccion_Video` y el XD pone «Espacio para
video» sin enlace. Se usará el embed por defecto hasta que el cliente entregue la URL.

## 6. `sync-readme-github-pages-link.mjs` imprimía la URL de otra organización

El script del scaffold saca el nombre del repo del remoto, pero llevaba la organización fija
(`ecoredsena-santander`). En un repo de `ECORED-TOLIMA` eso imprime en cada `npm run serve` una
URL que no existe. Ahora la organización se deriva también del remoto, con la de Santander como
respaldo si no hay remoto. `README.md` está en `.gitignore`, así que la URL mala nunca llegó al
repo del cliente.
