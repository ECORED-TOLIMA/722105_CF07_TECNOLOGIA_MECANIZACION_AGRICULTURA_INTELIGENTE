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

## 5. El video de la introducción no trae URL — el embed es de OTRO curso

El `_DI.docx` remite a `722105_CF07_Guion_Introduccion_Video` y el XD sólo dibuja un
«Espacio para video», sin enlace. La Introducción queda con el embed que trae el scaffold,
que es el video **«Cronograma para el plan BPG»**, de otro componente formativo.

**Hay que sustituirlo** en cuanto el cliente entregue la URL del video de este curso; no es
una decisión de maquetación. Mientras tanto se deja a la vista a propósito, para que no pase
inadvertido.

## 6. `sync-readme-github-pages-link.mjs` imprimía la URL de otra organización

El script del scaffold saca el nombre del repo del remoto, pero llevaba la organización fija
(`ecoredsena-santander`). En un repo de `ECORED-TOLIMA` eso imprime en cada `npm run serve` una
URL que no existe. Ahora la organización se deriva también del remoto, con la de Santander como
respaldo si no hay remoto. `README.md` está en `.gitignore`, así que la URL mala nunca llegó al
repo del cliente.

## 7. Tema 1: las dos tablas vienen vacías en el diseño

El XD dibuja la Tabla 1 y la Tabla 2 con sus filas y su encabezado, pero sin contenido y con
una nota rosa encima: **«Completar tabla con doc de instruccional»**. Las dos se rellenaron con
las tablas del `_DI.docx`, que es la fuente del texto.

**La Tabla 2 sólo tiene dibujado UN divisor vertical** (x=497); la Tabla 1 tiene los dos
(x=490 y x=914). Como la Tabla 2 está marcada como pendiente de completar, se maquetó con los
dos divisores, igual que la Tabla 1. Si el diseñador quería uno solo, se quita.

Anchos de columna, medidos en el PDF: Tabla 1 → 19,5 % / 41,7 % / 38,8 %; Tabla 2 → 20,2 % /
41,3 % / 38,5 %.

## 8. Tema 1: un párrafo del DI que el XD no dibuja

El `_DI.docx` trae, antes de la Tabla 1, la frase «Por lo anterior, la siguiente tabla relaciona
las características de las máquinas agrícolas y cómo influyen en la forma de operarlas:». **El
XD no la pinta**: pasa del párrafo de la FAO directamente a la leyenda de la tabla.

Se incluyó, porque el DI es la fuente del texto y dejar fuera contenido del documento es peor
que una línea de más. Si el diseñador la quitó a propósito, se borra.

## 9. Tema 1: erratas de la fuente, reproducidas tal cual

Están igual en el `_DI.docx` y en el XD, así que se reproducen sin corregir (no se inventa
contenido). Si el instruccional las corrige, se actualizan las dos:

- «marcha más alta y acelerador **reducid**» (tarjeta «Tracción liviana»), sin la «o» final.
- «no exceder la velocidad normalizada» (tarjeta «Con toma de fuerza»), sin punto final.
- El DI repite dos veces seguidas la frase «Una misma labor puede combinar varias de ellas…»;
  el XD la pinta una vez y así se maquetó.

## 10. Tema 2: el slider del 2.2 tiene 5 viñetas dibujadas y 4 estados

El XD pinta **cinco** bullets (`Elipse 4701`..`4705`) bajo el slider del 2.2, pero sólo hay
**cuatro** niveles tecnológicos: «Básicos» en la mesa de trabajo y «Intermedios»,
«Avanzados» y «Conectados» en el pasteboard, que son exactamente los cuatro que trae el
`_DI.docx`. La quinta viñeta es residuo de la plantilla del componente.

Se maquetó con **cuatro** diapositivas. Si el instruccional añade un quinto nivel, se suma.

## 11. Tema 2: las tablas 3 y 4 también vienen vacías

Mismo caso que el Tema 1: el XD las dibuja con su encabezado y sus filas, con la nota rosa
«Completar tabla con doc de instruccional» encima, y el contenido sale del `_DI.docx`.
Divisores medidos en el PDF: Tabla 3 en x=582 y x=894; Tabla 4 en x=497 y x=851.

## 12. Tema 2: frase repetida en el DI (2.5)

El `_DI.docx` repite dos veces seguidas, sin separación, «Esta relación es general: la
categoría no debe determinarse únicamente por la potencia o el tamaño del tractor…». El XD la
pinta una vez y así se maquetó, igual que la repetición del 1.3.

## 13. Tema 3: las tablas 5 y 6 repiten el patrón

Igual que en los temas 1 y 2: el XD las dibuja vacías con la nota rosa «Completar tabla con
doc de instruccional» y el contenido sale del `_DI.docx`. Las dos comparten divisores (x=497
y x=914 medidos en el PDF), así que comparten modificador.

Con esto, **las seis tablas del curso vienen vacías en el diseño**. Si el instruccional cambia
alguna, hay que actualizarla en la vista correspondiente.

## 14. Tema 4: el XD no dibuja el bloque «Observación y mediciones de campo» (4.2)

El `_DI.docx` abre el 4.2 con un subapartado **«Observación y mediciones de campo»** y tres
párrafos (el recorrido del lote, la prueba manual de humedad y el penetrómetro), más la frase
«Las siguientes son las herramientas de monitoreo y representación espacial:». **El XD pasa
directamente** del párrafo de entrada a la línea de tiempo con las cinco herramientas.

Se incluyeron, por el mismo criterio de la nota 8: el DI es la fuente del texto y dejar fuera
contenido del documento es peor que una pantalla algo más larga. Si el diseñador los quitó a
propósito, se borran.

## 15. Tema 4: el segundo video tampoco trae URL

El 4.7 remite a `722105_CF07_Guion_TEC_Video_01` y el XD vuelve a dibujar «Espacio para
video» sin enlace. Queda, igual que la Introducción, con el embed del scaffold —**«Cronograma
para el plan BPG», de otro curso**—. Son **dos** videos por sustituir, no uno.

## 16. Tema 4: otra frase repetida en el DI (4.2)

«La combinación de estas técnicas permite obtener una caracterización más completa que la
utilización de una sola fuente de información.» aparece dos veces seguidas en el `_DI.docx`.
Va una vez, como en los temas 1, 2 y 3.

## 17. Tema 5: la Tabla 9 está dibujada con CUATRO columnas y encabezados de plantilla

El XD dibuja la Tabla 9 con **tres divisores** (x=582, 958 y 1133), es decir cuatro columnas,
y sus únicos encabezados son **«Elemento»** y **«Descripción»**, que son los rótulos genéricos
de la plantilla y no corresponden a este contenido. El `_DI.docx` da la tabla a **tres
columnas**: Manual · Contenido · Uso en la operación.

Se maquetó con las tres columnas y los encabezados del DI. La Tabla 8 repite lo de la Tabla 2:
un solo divisor dibujado (x=498) de los dos que necesita; se completó igual que las demás.

Con esto, **las nueve tablas del curso** vienen vacías en el diseño y salen del DI.

## 18. Tema 5: quinta frase repetida en el DI (5.5)

«El operador debe realizar únicamente las tareas autorizadas, registrar su ejecución y
reportar anomalías…» aparece dos veces seguidas en el `_DI.docx`. Va una vez.

## 19. Actividad: las diez imágenes son de OTRO curso y solo hay cinco distintas

El `722105_CF07_AD.docx` no trae imágenes y el `.xd` no tiene artboard de actividad: las aporta
el diseñador. Mientras tanto quedan las del scaffold, que son **de otro componente formativo**
—se ve un laboratorio de electrónica con una placa de circuito, nada que ver con maquinaria
agrícola— y además están **duplicadas**: cinco archivos distintos repartidos en diez nombres
(`imagen1=imagen7`, `imagen2=imagen8`, `imagen3=imagen9`, `imagen10=imagen4`, `imagen5=imagen6`).

La vista referencia `imagen1`..`imagen10`, una por cada pregunta que el kit muestra, para que
al llegar las definitivas baste con sustituir los diez archivos. **No se inventaron**: recortar
fotos de los temas en cuadrado sería otro lenguaje gráfico distinto al del curso.

**Es lo más visible que queda pendiente de la entrega.**

## 20. Actividad: se quita el prefijo de la retroalimentación (y por qué)

El `_AD.docx` escribe las veinte retroalimentaciones correctas empezando por «¡Excelente
trabajo! ». El kit ya pinta una etiqueta fija **«¡Correcto!»** en verde delante del mensaje
(`ActividadPregunta.vue`), así que dejarlo literal daría «¡Correcto! ¡Excelente trabajo! Se
evidencia…», dos felicitaciones seguidas.

Se guarda el mensaje **sin ese prefijo**. Es la única licencia que se toma sobre el texto del
documento. Por eso el paso `1f` de `verificar_maqueta.py` marca las veinte como «reescritas»:
es un falso positivo conocido, no un defecto.

Los títulos de resultado (`titulo_aprobado` / `titulo_reprobado`) no se escriben: el DOCX no
los da y se usan los `default` de la prop del kit, «¡BUEN TRABAJO!» y «VUELVE A INTENTARLO».

## 21. Síntesis: el artboard es la hoja del anexo, no la pantalla

El artboard `Sintesis` del `.xd` es el **anexo imprimible** (lleva el logo SENA dentro de la
tarjeta, una cabecera con el nombre del programa y no tiene barra de navegación). La pantalla
web se maquetó con la convención del kit —`BannerInterno` + tarjeta + mapa + enlace al anexo—
y del artboard se tomaron el texto y el mapa conceptual, no el encuadre.

El mapa se renderizó del XD en **SVG** (1228x930) con sus 5 ramas y 30 subtemas, y sustituye
al `sintesis.svg` del scaffold, que era de otro curso. **No tiene variante móvil** en el
pasteboard: por eso existe el anexo descargable.

## 22. Revisión final de cinco puntos — resultados

Ejecutada sobre las diez pantallas. Los cinco puntos del procedimiento, con número:

| Punto | Herramienta | Resultado |
|---|---|---|
| 1. Colores contra el XD | `comparar_elementos.py` | **ninguno fuera** en los cinco temas |
| 2. Distribución y textos | `comparar_elementos.py` + `verificar_textos.py` | sin descuadres tras corregir |
| 3. Iconos | `verificar_iconos.py` | 0 iconos ganando en más de un hueco |
| 4. Componentes | CDP | chevrones, acordeón y slider en `#982C03` |
| 5. Animaciones de portada | CDP | `running`, infinitas, alternas, 2,8 s y 2,5 s |

Denominadores comprobados antes de creerse ningún «ninguno»: 1.099 / 312 / 1.035 / 432 / 1.296
rects del XD contra 38-43 cajas con fondo por pantalla.

**Además:** 0 desbordes a 360 px (11 rutas), 0 elementos `[data-aos]` sin animar, 13 rutas sin
overlay de error, los `.cajon` cuadran con las pestañas de 25x8 del XD en los cinco temas
(3/3, 3/3, 2/2, 4/4, 3/3) y los 42 párrafos de cada pantalla rompen al ancho de su `frame`.

### Lo que encontró y se corrigió

1. **El número del tema y el icono de la Introducción iban en blanco.** El XD los escribe en
   `#12263F`. Afectaba a las seis pantallas con `.titulo-principal`.
2. **Las listas no tenían sangría francesa.** La segunda línea caía bajo el icono en vez de
   bajo la primera letra. 32 px medidos del XD. Afectaba al curso entero.
3. **Las tarjetas del 1.2**: icono alineado arriba en vez de centrado, y esquinas redondeadas
   donde el inventario las lista `SIN r`.
4. **Los iconos de las tarjetas con hover estaban cruzados.** El XD dibuja la cuarta tarjeta
   ya en estado *over*, así que su icono del artboard es el de hover y el normal está en el
   pasteboard; en las otras tres, al revés. Ahora cada tarjeta lleva su pareja y se cruzan con
   `opacity`. El fondo del hover es `#F8EDD3`, no el secundario a plena fuerza.
5. **Un color mal**: la caja del 1.4 es `#EEFFDB` y estaba en `#F8EDD3`.
6. **Diez fotos sin el radio de su máscara.** El pipeline las rasteriza cuadradas aunque el XD
   las redondee: el radio va en el `img`. Temas 2, 3, 4 y 5.
7. **Los paneles del 3.2 y del 4.5 no son iguales entre sí** en el XD (299/315/315/301 y
   405/419/405) y estaban a partes iguales.
8. **La banda del 2.5** se iba 28 px por los gutters de la fila.

### Lo que queda abierto

Las **diez imágenes de la actividad** (nota 19) y los **dos videos** sin URL (notas 5 y 15).
Las dos cosas dependen del cliente, no de la maquetación.


## 23. Textos alternativos: los sugeridos están en el PASTEBOARD, no en el DOCX

El `_DI.docx` no trae ni una vez la etiqueta «Texto alternativo». Los sugeridos están en el
**pasteboard del `.xd`**, ocho rótulos que cubren las figuras **1, 3, 4, 5, 6, 7 y 8** (la 1
está duplicada). Se transcriben literales **quitando el rótulo «Texto alternativo:»**: el alt
es sólo lo que viene después, y empieza por «Figura N que…».

**La Figura 2 del Tema 1 no tiene sugerido** y las dos infográficas tampoco: ésas conservan el
alt redactado, de dos frases, según la regla de la casa.

## 24. Resuelto: las imágenes de la actividad

El cliente entregó las diez. Ya no hay duplicados: **10 ficheros, 10 imágenes distintas**
referenciadas, una por cada pregunta que muestra el kit. La nota 19 queda cerrada.

## 25. Los textos alternativos están en los COMENTARIOS de Word del DI

Corrección de la nota 23: no están «sólo en el pasteboard». El `_DI.docx` trae **38
comentarios** de Word anclados a cada figura, y ahí están los nueve textos alternativos
sugeridos. `docx_text.py` lee `word/document.xml` y los comentarios viven en
`word/comments.xml`, así que se perdían enteros.

Se copian **sin el rótulo «Texto alternativo:»**. Las nueve figuras del curso usan ya el
sugerido, incluidas las dos que yo había dado por no sugeridas: la **Figura 2** del Tema 1 y
el **mapa de la Síntesis**, que sólo están en el DOCX y no en el pasteboard.

Herramienta nueva: **`scripts/docx_comments.py`**, que los vuelca con el subtema al que están
anclados. Se ejecuta con el paso 0, no al final.

## 26. ⚠️ El DI nombra el COMPONENTE de cada bloque — y en siete no coincide

Los mismos comentarios dicen qué componente pide el instruccional. Comparado con lo maquetado:

| Subtema | El DI pide | Está maquetado como | |
|---|---|---|---|
| 1.2 | Tarjetas (x2) | 6 tarjetas + caja de lista | ok |
| **1.3** | **Pestañas** | `LineaTiempoD` | **revisar** |
| 2.2 | Slider · Puntos calientes | `SlyderA` · `ImagenInfografica` | ok |
| 2.3 | Acordeón | `AcordionA` | ok |
| **2.5** | **Pasos** + Tarjetas | lista con viñetas + `SlyderF` | **revisar** |
| **3.2** | **Slider** | 4 paneles pegados | **revisar** |
| 3.6 | Acordeón | `AcordionA` | ok |
| **4.1** | **Tarjetas** | lista rayada de 6 filas | **revisar** |
| **4.2** | **Pestañas** | `LineaTiempoD` | **revisar** |
| 4.4 | Puntos calientes | `ImagenInfografica` | ok |
| **4.5** | **Slider** | 3 paneles pegados | **revisar** |
| 4.7 | Tarjetas | `.tarjeta-avatar` | ok |
| **5.2** | **Pasos** | lista de fases | **revisar** |
| 5.5 | Tarjetas | `SlyderF` | ok |
| **5.6** | **Pestañas** | `LineaTiempoD` | **revisar** |

**No se ha cambiado ninguno todavía.** El motivo: lo maquetado reproduce lo que el `.xd`
DIBUJA y lo que el PDF muestra, con las tiras de `docs/par-*.png` casi calcadas. Cambiar siete
bloques a pestañas, pasos y sliders los alejaría del diseño firmado.

Es decir, **el DOCX y el XD piden cosas distintas en siete bloques**, y eso lo decide el equipo,
no la maquetación. Si manda el DI, son siete bloques a rehacer; si manda el XD, queda como está
y conviene que el instruccional lo sepa.
