<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Condiciones del terreno y labor agrícola mecanizada

    .row.align-items-start.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t4/intro.png" style="width: 396px").m-auto
      .col-lg-8
        p El desempeño de la maquinaria agrícola depende tanto de sus características como de las condiciones del terreno donde trabaja. Un mismo conjunto tractor–implemento puede obtener resultados diferentes entre lotes debido a cambios en la humedad, la textura, la pendiente, los obstáculos y los residuos presentes. Reconocer estas diferencias permite planear las labores y evitar intervenciones que deterioren el suelo o dificulten la operación.
        .cajon.color-secundario.p-4(data-aos="fade-down")
          p.mb-0 Por ello, antes de iniciar el trabajo es necesario relacionar las condiciones del lote con el objetivo de la labor. Esta valoración ayuda a decidir cuándo intervenir, cómo organizar los recorridos y qué aspectos requieren seguimiento durante la ejecución.

    separador

    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Condiciones del terreno: concepto, clases y variables

    p.mt-4 Las condiciones del terreno son las características físicas del lote que influyen en el funcionamiento de la maquinaria y en la calidad de la labor. Su evaluación permite reconocer las posibilidades y limitaciones del trabajo antes de ingresar con los equipos.

    p Entre las principales variables se encuentran:

    .row.justify-content-center.mt-4
      .col-lg-10
        .lista-rayada(data-aos="fade-down")
          .lista-rayada__fila.p-4(v-for="(v, i) in variables" :key="'var-'+i")
            .row.align-items-center
              .col-auto
                figure.m-0
                  img(:src="require_src(v.icono)" style="width: 61px")
              .col
                p.mb-0
                  b(v-html="v.titulo")
                p.mb-0 {{ v.texto }}

    p.mt-4 Para fines de planeación, pueden distinguirse terrenos con restricciones menores, moderadas o fuertes, e incluso condiciones que impidan una labor mecanizada determinada. Esta valoración debe considerar conjuntamente la pendiente, la humedad, los accesos y las características del equipo. Un terreno plano, por ejemplo, puede presentar restricciones por saturación de agua u obstáculos.

    p La aptitud del terreno debe evaluarse para la labor prevista y en el momento de ejecutarla, pues algunas condiciones cambian durante el ciclo productivo.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Técnicas de monitoreo del terreno

    p.mt-4 Monitorear el terreno consiste en observar y medir sus condiciones antes y durante las labores. La información obtenida permite identificar cambios, localizar restricciones y fundamentar decisiones sobre el momento y la forma de intervención.

    p.mb-0
      b Observación y mediciones de campo
    p El recorrido del lote permite reconocer obstáculos, residuos, accesos y zonas con acumulación de agua. Debe complementarse con observaciones en distintos puntos, evitando tomar una sola zona como representativa de toda la superficie.

    p La prueba manual de humedad ofrece una orientación inicial sobre la consistencia del suelo a la profundidad de trabajo. Su interpretación depende de la textura y debe contrastarse con otras observaciones.

    p El penetrómetro mide la resistencia a la penetración y ayuda a localizar posibles capas compactadas. Sin embargo, una lectura elevada no demuestra por sí sola compactación, porque también está influida por la humedad y la textura.

    p Las siguientes son las herramientas de monitoreo y representación espacial:

    .row.justify-content-center.mt-4
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t4/f1.png" style="width: 292px").r-11.m-auto
      .col-lg-7
        LineaTiempoD.linea-tiempo-d--t1(data-aos="fade-down")
          .row(v-for="(t, i) in tecnicas" :key="'tec-'+i" :numero="String(i + 1)" :titulo="t.titulo")
            .col-md-12
              p.mb-0 {{ t.texto }}

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.p-4(data-aos="fade-down")
          p.mb-0 La combinación de estas técnicas permite obtener una caracterización más completa que la utilización de una sola fuente de información.

    separador

    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Labor agrícola mecanizada: concepto, tipos y características

    p.mt-4 Una labor agrícola mecanizada es una operación del proceso productivo realizada mediante máquinas, equipos e implementos. Incluye actividades como preparación del suelo, siembra, fertilización, protección de cultivos, cosecha y transporte. Cada una tiene un objetivo, un momento oportuno y unas condiciones de calidad.

    .row.align-items-center.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .cajon.color-secundario.p-4(data-aos="fade-down")
          p.mb-0 Sus características se expresan mediante parámetros como profundidad, ancho, velocidad, dosis y uniformidad. Estos permiten configurar el equipo y comprobar si el resultado corresponde con lo previsto. No todos los parámetros se aplican a todas las labores: en la siembra interesa la distribución de semillas, mientras que en la cosecha se evalúan las pérdidas y la calidad del producto.
        p.mt-4.mb-0 El operador necesita comprender el propósito de la intervención para interpretar los resultados y reconocer cuándo un ajuste está afectando la labor. La siguiente tabla relaciona algunas operaciones con sus objetivos y parámetros de evaluación:
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/t4/comp-43.png" style="width: 397px").m-auto

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 7.
          span Tipos de labores mecanizadas y sus parámetros de calidad

        .tabla-a.tabla--t4(data-aos="fade-down")
          table
            thead
              tr
                th Labor
                th Objetivo
                th Parámetro de calidad
            tbody
              tr
                td Subsolado.
                td Intervenir capas compactadas previamente identificadas.
                td Profundidad alcanzada y fractura de la capa objetivo.
              tr
                td Rastrillada.
                td Reducir terrones y, cuando corresponda, incorporar residuos.
                td Tamaño de terrones y uniformidad del trabajo.
              tr
                td Nivelación.
                td Adecuar la superficie al diseño previsto.
                td Diferencias de cota respecto al diseño.
              tr
                td Siembra.
                td Depositar la semilla según los requerimientos del cultivo.
                td Densidad, distribución y profundidad.
              tr
                td Aplicación de agroinsumos.
                td Distribuir productos para nutrir o proteger el cultivo.
                td Dosis, uniformidad y cobertura, según la aplicación.
              tr
                td Cosecha.
                td Recoger el producto con pérdidas y daños controlados.
                td Pérdidas y calidad del producto cosechado.

    separador

    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Variabilidad espacial en la labor agrícola

    .row.align-items-start.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t4/f3.png" style="width: 396px").r-10.m-auto
      .col-lg-8
        p La variabilidad espacial corresponde a las diferencias del suelo o del cultivo entre puntos de un mismo lote. Una superficie aparentemente uniforme puede contener zonas con distinta textura, humedad, compactación o fertilidad.
        .cajon.color-primario.p-4(data-aos="fade-down")
          p.mb-0 Estas diferencias pueden modificar la fuerza de tiro, el patinamiento, la profundidad alcanzada y la calidad del trabajo. Por ello, aplicar una misma regulación en todo el lote no siempre produce resultados uniformes.
        p.mt-4.mb-0 La información obtenida mediante muestreos, sensores y registros permite reconocer zonas de manejo y valorar respuestas específicas, de la siguiente manera:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-infografica.p-3
          ImagenInfografica.color-acento-botones.d-none.d-md-block
            template(v-slot:imagen)
              figure
                img(src="@/assets/curso/temas/t4/infografica.png" alt="").w-100
            .tarjeta.color-primario.p-3(x="32.2%" y="11.9%" numero="+")
              .h5.mb-2 Textura y humedad
              p.mb-0 Orientar la evaluación de la velocidad, la profundidad y el momento de intervención.
            .tarjeta.color-primario.p-3(x="67.7%" y="11.9%" numero="+")
              .h5.mb-2 Capas compactadas
              p.mb-0 Delimitar dónde podría justificarse un subsolado, previa confirmación del diagnóstico.
            .tarjeta.color-primario.p-3(x="32.2%" y="49.7%" numero="+")
              .h5.mb-2 Fertilidad
              p.mb-0 Establecer recomendaciones de fertilización por zonas a partir del análisis del suelo.
            .tarjeta.color-primario.p-3(x="67.7%" y="49.7%" numero="+")
              .h5.mb-2 Patrones de rendimiento
              p.mb-0 Apoyar el estudio del potencial productivo y valorar ajustes en la densidad de siembra, junto con información agronómica adicional.
          figure.d-md-none
            img(src="@/assets/curso/temas/t4/infografica.png" alt="").w-100

    p.mt-4 Los mapas georreferenciados permiten representar estas diferencias. Cuando se elaboran prescripciones y el equipo dispone de funciones compatibles, pueden utilizarse para ejecutar aplicaciones a tasa variable. El mapa debe responder a una recomendación técnica; identificar una diferencia no determina automáticamente qué tratamiento aplicar.

    separador

    #t_4_5.titulo-segundo.color-acento-contenido
      h2 4.5 Control de tráfico de maquinaria: concepto, tipos y sistemas

    p.mt-4 La organización del tráfico busca reducir la superficie afectada por el paso de la maquinaria. En su modalidad de tráfico controlado, separa los carriles de circulación de las zonas destinadas al crecimiento del cultivo y procura mantener los recorridos entre labores.

    p Para comprender las diferentes formas de circulación, se distinguen tres situaciones:

    .tarjeta--container.row.mt-4(data-aos="fade-down")
      .tarjeta.p-4.p-md-5(v-for="(t, i) in trafico" :key="'tra-'+i" :class="[t.clase, t.ancho]")
        .row.justify-content-center.mb-3
          .col-auto
            figure
              img(:src="require_src(t.icono)" style="width: 175px")
        h3.text-center(v-html="t.titulo")
        p.mb-0 {{ t.texto }}

    p.mt-4 La estrategia debe adaptarse a la maquinaria disponible y a la forma del lote. Cuando no sea posible establecer un sistema completo, pueden organizarse primero las operaciones que generan mayor tránsito.

    separador

    #t_4_6.titulo-segundo.color-acento-contenido
      h2 4.6 Limitaciones, ventajas y aplicaciones del control de tráfico

    .row.align-items-center.mt-4
      .col-lg-8.mb-4.mb-lg-0
        p El control de tráfico puede disminuir el paso de ruedas sobre la zona de cultivo y favorecer la conservación de su estructura. Sus resultados dependen del diseño de los recorridos, las cargas, la humedad y la continuidad con que se utilicen los carriles.
        .cajon.color-primario.p-4(data-aos="fade-down")
          p.mb-0 Entre sus posibles ventajas se encuentran una menor superficie sometida al tránsito, mejores condiciones para el desarrollo de raíces y menor necesidad de corregir daños ocasionados por circulación desorganizada.
        p.mt-4.mb-0 Su implementación también presenta limitaciones: puede requerir adaptar trochas y anchos de trabajo, invertir en guiado y coordinar equipos propios con maquinaria alquilada o contratada. Los lotes pequeños o irregulares y las maniobras de cosecha pueden dificultar la coincidencia de las huellas.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/t4/f4.png" style="width: 396px").r-10.m-auto

    p.mt-4 Puede aplicarse en sistemas de granos, caña y otros cultivos donde sea posible organizar recorridos repetidos. Incluso una intervención parcial, como establecer carriles para los vehículos de transporte, permite comenzar a ordenar la circulación.

    .row.justify-content-center.mt-4
      .col-lg-10
        .bloque-ejemplo(data-aos="fade-down")
          .row.g-0.align-items-stretch
            .col-lg-4
              figure.h-100.m-0
                img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t4/f5.png")
            .col-lg-8
              .p-4.p-md-5
                figure
                  img(src="@/assets/curso/temas/t4/ic1.svg" style="width: 80px")
                p.mt-3.mb-0
                  b Ejemplo resuelto: área pisada con y sin control de tráfico
                p.mt-2 En un lote de 10 ha se usan en la temporada un tractor con rastra, un tractor con sembradora, una fumigadora y una cosechadora con un vagón. Sin control, las huellas de todas las máquinas cubren en conjunto cerca del 45 % del lote, porque cada una circula por lugares distintos. Con tráfico controlado y un ancho común de trabajo de 9 m con carriles de 2 huellas de 0,6 m, el área pisada es 1,2 / 9 × 100 = 13,3 % del lote, siempre en los mismos lugares. El resto del suelo queda libre de compactación por ruedas.

    separador

    #t_4_7.titulo-segundo.color-acento-contenido
      h2 4.7 Humedad del suelo y momento oportuno de la labor

    .row.align-items-center.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p La humedad es uno de los factores que más condicionan la respuesta del suelo al trabajo mecanizado. Cuando es excesiva, puede favorecer deformaciones, adherencia a los implementos y daños por el tránsito. En condiciones muy secas, algunos suelos ofrecen elevada resistencia y requieren mayor esfuerzo para su preparación.
        p Para muchas labores de labranza se busca una condición friable: el suelo se rompe en agregados con relativa facilidad, sin deformarse como una masa plástica ni pulverizarse excesivamente. Esta condición debe valorarse según la textura y la operación prevista.
        p.mb-0 La prueba manual consiste en tomar muestras a la profundidad de trabajo y observar su comportamiento al comprimirlas y desmenuzarlas. Como orientación se tiene:
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/t4/f6.png" style="width: 292px").r-10.m-auto

    .row.mt-5
      .col-md-6.col-lg-4.mb-5.mb-lg-0(v-for="(m, i) in muestras" :key="'mue-'+i")
        .tarjeta-avatar
          img(:src="require_src(m.icono)" style="width: 175px").m-auto
          .tarjeta.bg-2
            .p-4
              h4.text-center(v-html="m.titulo")
              p.text-center.mb-0 {{ m.texto }}

    .row.align-items-start.mt-4
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t4/f7.png" style="width: 292px").r-20.m-auto
      .col-lg-9
        p La formación de una bola o cinta no debe interpretarse de manera aislada: los suelos arenosos, francos y arcillosos responden de forma diferente. La prueba debe repetirse en varias zonas y complementarse con la observación del perfil y, cuando estén disponibles, mediciones de humedad.
        .bg-4.p-4(data-aos="fade-down")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t4/ic2.svg" style="width: 80px")
            .col
              p.mb-0 No existe un tiempo fijo de espera después de una lluvia. El momento oportuno depende del drenaje, la textura, el clima y la profundidad de trabajo. La decisión debe permitir cumplir el objetivo de la labor sin causar un deterioro innecesario del suelo.

    p.mt-4 Ejemplificando lo anterior, el siguiente video presenta un caso sobre cómo la humedad del suelo influye en la decisión de iniciar o posponer una labor mecanizada:

    figure.mt-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-4 Para finalizar, el siguiente esquema integra los principales conceptos abordados sobre las condiciones del terreno, el monitoreo, la variabilidad espacial y el tráfico de maquinaria en la labor agrícola mecanizada:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 6.
          span Terreno, labor y tráfico de maquinaria
        figure(data-aos="fade-down")
          img.d-block.d-md-none.m-auto(src="@/assets/curso/temas/t4/figura-6-movil.svg" alt="" style="width: 400px")
          img.d-none.d-md-block(src="@/assets/curso/temas/t4/figura-6.svg" alt="Figura 6 que contiene un esquema que relaciona la labor agrícola mecanizada con cuatro aspectos: terreno, monitoreo, variabilidad y tráfico. Cada uno incluye variables, herramientas o modalidades que permiten organizar el trabajo de la maquinaria en el lote." style="width: 1020px").m-auto

    p.mt-4.mb-0 Conocer el terreno y la labor permite preparar la máquina de forma adecuada. El alistamiento y el uso de los manuales técnicos se estudian a continuación.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    variables: [
      {
        icono: '@/assets/curso/temas/t4/i1.svg',
        titulo: 'Humedad',
        texto:
          'Influye en la resistencia del suelo y en su respuesta al paso de las ruedas y los implementos. Una humedad excesiva puede favorecer deformaciones, compactación y atascamientos.',
      },
      {
        icono: '@/assets/curso/temas/t4/i2.svg',
        titulo: 'Textura',
        texto:
          'Corresponde a la proporción de arena, limo y arcilla. Influye en la retención de agua y en el comportamiento del suelo durante el trabajo.',
      },
      {
        icono: '@/assets/curso/temas/t4/i3.svg',
        titulo: 'Pendiente',
        texto:
          'Condiciona la estabilidad del conjunto, la dirección de los recorridos y el riesgo de erosión.',
      },
      {
        icono: '@/assets/curso/temas/t4/i4.svg',
        titulo: 'Obstáculos',
        texto:
          'Piedras, troncos, raíces y zanjas pueden dificultar el desplazamiento, dañar los implementos o generar accidentes.',
      },
      {
        icono: '@/assets/curso/temas/t4/i5.svg',
        titulo: 'Residuos vegetales',
        texto:
          'Su cantidad y distribución pueden afectar el paso y funcionamiento del implemento. También constituyen una cobertura importante para proteger el suelo.',
      },
      {
        icono: '@/assets/curso/temas/t4/i6.svg',
        titulo: 'Forma y tamaño del lote',
        texto:
          'Influyen en las maniobras, los recorridos, las cabeceras y el aprovechamiento del ancho de trabajo.',
      },
    ],
    tecnicas: [
      {
        titulo: 'Mapas de elevación',
        texto:
          'Obtenidos mediante levantamientos GNSS o drones con métodos apropiados, representan las diferencias de altura del terreno. Permiten analizar pendientes, reconocer depresiones y estimar posibles trayectorias de escorrentía. Esta información ayuda a planear recorridos y localizar sectores que requieren evaluación antes del ingreso de la maquinaria.',
      },
      {
        titulo: 'Sensores de humedad',
        texto:
          'Aportan mediciones en puntos y profundidades definidos para seguir los cambios del contenido de agua en el suelo. Su instalación en zonas representativas permite comparar condiciones dentro del lote y apoyar la decisión sobre el momento de intervenir. Los resultados deben interpretarse según la textura, la profundidad y las características del sensor.',
      },
      {
        titulo: 'Mapas de conductividad eléctrica aparente',
        texto:
          'Representan diferencias en la respuesta eléctrica del suelo y permiten delimitar zonas con características distintas. Sus valores están influidos por la textura, la humedad y la salinidad, entre otros factores. Por ello, deben complementarse con muestreos y análisis para interpretar las causas de esas diferencias y orientar el manejo.',
      },
      {
        titulo: 'Imágenes satelitales',
        texto:
          'Permiten observar diferencias en la cobertura y el vigor del cultivo, así como comparar su evolución entre fechas. Ayudan a identificar sectores con comportamiento diferente y dirigir los recorridos de inspección. Sin embargo, una variación en la imagen no determina por sí sola su causa, por lo que requiere verificación en campo.',
      },
      {
        titulo: 'Mapas de rendimiento',
        texto:
          'Muestran cómo se distribuye la producción dentro del lote a partir de registros georreferenciados de cosecha. Al comparar varias temporadas, permiten reconocer zonas con resultados persistentemente altos, bajos o variables. Su interpretación debe considerar la calidad de los datos y las condiciones de cada campaña para apoyar decisiones de manejo.',
      },
    ],
    trafico: [
      {
        clase: 'bg-5',
        ancho: 'panel-w-405',
        icono: '@/assets/curso/temas/t4/t1.svg',
        titulo: 'Tráfico aleatorio',
        texto:
          'Las máquinas circulan sin un esquema común de huellas entre operaciones. Esto puede extender el tránsito sobre una mayor proporción del lote y dificultar la identificación de zonas que permanecen sin pisar.',
      },
      {
        clase: 'bg-6',
        ancho: 'panel-w-419',
        icono: '@/assets/curso/temas/t4/t2.svg',
        titulo: 'Tráfico dirigido',
        texto:
          'Se establecen recorridos o carriles para determinadas actividades, aunque no coincidan en todas las labores. Por ejemplo, pueden definirse rutas para los remolques durante la cosecha. Es una forma de reducir parcialmente el tránsito disperso.',
      },
      {
        clase: 'bg-7',
        ancho: 'panel-w-405',
        icono: '@/assets/curso/temas/t4/t3.svg',
        titulo: 'Tráfico controlado',
        texto:
          'La circulación se concentra en carriles permanentes mediante la coordinación de trochas, anchos de trabajo y recorridos. El guiado de precisión facilita repetir las trayectorias y mantener la separación entre circulación y cultivo. Su implementación requiere planear el conjunto de operaciones, incluidos los accesos y las cabeceras.',
      },
    ],
    muestras: [
      {
        icono: '@/assets/curso/temas/t4/a1.svg',
        titulo: 'Suelo pegajoso o que se deforma sin romperse',
        texto:
          'Puede presentar humedad excesiva para la labranza. Conviene posponer la intervención y volver a evaluar.',
      },
      {
        icono: '@/assets/curso/temas/t4/a2.svg',
        titulo: 'Agregados que se desmenuzan con facilidad',
        texto:
          'Pueden indicar condiciones favorables, siempre que el terreno soporte el tránsito.',
      },
      {
        icono: '@/assets/curso/temas/t4/a3.svg',
        titulo: 'Terrones muy duros o pulverización excesiva',
        texto:
          'Requieren evaluar si es conveniente intervenir o esperar otras condiciones.',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
