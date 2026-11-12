<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Máquinas agrícolas y aprovechamiento de la potencia

    figure.mt-4(data-aos="fade-down")
      img(src="@/assets/curso/temas/t1/f1.png" style="width: 1226px").m-auto

    p.mt-4 Toda labor mecanizada comienza con una fuente de potencia y una máquina capaz de transmitirla al suelo o al cultivo. Comprender qué es una máquina agrícola, cómo se clasifica, de dónde obtiene su energía y cómo la aprovecha permite operar con mayor eficiencia y seguridad. Este tema presenta esos fundamentos, con énfasis en el tractor y la máquina central de la mecanización agrícola.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Concepto y características de las máquinas agrícolas

    .bloque-texto-g.bloque-texto-g--t1.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-down")
      .bloque-texto-g__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/f2.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Una máquina agrícola es un conjunto de mecanismos diseñado para transformar energía en trabajo útil dentro de un proceso de producción agropecuaria, como preparar el suelo, sembrar, proteger cultivos, cosechar, transportar o procesar productos. Algunas son autopropulsadas y generan su propia potencia, como el tractor o la cosechadora; otras dependen de una fuente externa, como la rastra o la sembradora, que son arrastradas o accionadas por el tractor.

    p.mt-4 Las máquinas agrícolas comparten características:

    .row.justify-content-center
      .col-lg-10
        .bg-1.p-4(data-aos="fade-down")
          ul.lista-ul.lista-ul--compacta.mb-0
            li
              img.lista-ul__vineta-img(src="@/assets/curso/temas/t1/vineta.svg")
              | Trabajan en condiciones exigentes de polvo, humedad, pendiente y vibración.
            li
              img.lista-ul__vineta-img(src="@/assets/curso/temas/t1/vineta.svg")
              | Deben adaptarse a distintos suelos y cultivos.
            li
              img.lista-ul__vineta-img(src="@/assets/curso/temas/t1/vineta.svg")
              | Su uso es estacional, concentrado en ventanas de tiempo cortas.
            li
              img.lista-ul__vineta-img(src="@/assets/curso/temas/t1/vineta.svg")
              | Su operación influye directamente en la calidad de la labor, el consumo de combustible y el estado del suelo.

    p.mt-4 Es así que la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), promueve una mecanización sostenible, que combine productividad con cuidado de los recursos naturales y condiciones dignas para quienes trabajan.

    p Por lo anterior, la siguiente tabla relaciona las características de las máquinas agrícolas y cómo influyen en la forma de operarlas:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 1.
          span Características de las máquinas agrícolas y su efecto en la operación

        .tabla-a.tabla--t1-1(data-aos="fade-down")
          table
            thead
              tr
                th Característica
                th Descripción
                th Efecto en la operación
            tbody
              tr
                td Trabajo en campo.
                td Polvo, humedad, pendientes.
                td Exige alistamiento y limpieza frecuentes.
              tr
                td Estacionalidad.
                td Uso concentrado en temporadas.
                td Requiere planeación y disponibilidad.
              tr
                td Versatilidad.
                td Distintos implementos y labores.
                td Obliga a ajustar y calibrar en cada cambio.
              tr
                td Interacción con el suelo.
                td Peso, tracción, compactación.
                td Condiciona velocidad, lastre y presión de llantas.
              tr
                td Riesgo.
                td Partes móviles, vuelco.
                td Demanda protocolos de seguridad estrictos.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Tipos, clasificación y nivel de tecnología

    p.mt-4 Las máquinas agrícolas se clasifican según su función, teniendo:

    .row.bg-banda-1.mt-4
      .col-12
        .p-4.p-md-5
          .row
            .col-lg-9
              .row
                .col-md-6.col-lg-4.mb-4(v-for="(c, i) in clasificacion" :key="'clas-'+i")
                  .tarjeta.tarjeta--recta.bg-2.p-3.h-100
                    .row.align-items-center.g-0
                      .col-auto.pe-3
                        figure
                          img(:src="require_src(c.icono)" style="width: 50px")
                      .col
                        p.mb-0
                          b(v-html="c.titulo")
                        p.mb-0(v-html="c.texto")
            .col-lg-3.d-none.d-lg-block
              figure
                img(src="@/assets/curso/temas/t1/card-tractor.png" style="width: 292px").m-auto

    p.mt-4 Los tractores, a su vez, se clasifican por:

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-5.mb-4.mb-lg-0
        .bg-1.p-4(data-aos="fade-down")
          ul.lista-ul.mb-0.p-3
            li
              img.lista-ul__vineta-img(src="@/assets/curso/temas/t1/vineta.svg")
              b Su sistema de rodaje
              br
              | De ruedas o de orugas.
            li
              img.lista-ul__vineta-img(src="@/assets/curso/temas/t1/vineta.svg")
              b Por su tracción
              br
              | De dos ruedas motrices o de doble tracción.
            li.mb-0
              img.lista-ul__vineta-img(src="@/assets/curso/temas/t1/vineta.svg")
              b Por su potencia y por su uso
              br
              | Remolque, tolva autodescargable, cargador frontal.
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/t1/f3.png" style="width: 500px").m-auto

    p.mt-4 El nivel de tecnología de una máquina va desde equipos mecánicos básicos, sin control electrónico, hasta equipos con motores de control electrónico, transmisiones automáticas, monitores de rendimiento, comunicación entre tractor e implemento mediante el estándar ISOBUS, guiado satelital y telemetría. Un nivel tecnológico mayor permite más precisión y registro de datos, pero exige operarios capacitados y un mantenimiento más especializado.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Configuración y fuentes de potencia del tractor

    p.mt-4 La configuración de un tractor describe la disposición de sus elementos: motor, transmisión, ejes, cabina o estructura de protección, sistema hidráulico y puntos de enganche. Los tractores de uso general tienen el motor adelante, la transmisión en el centro y la toma de fuerza y el enganche de tres puntos atrás; muchos incorporan también enganche y toma de fuerza delanteros. Los tractores articulados, de gran potencia, giran mediante una articulación central.

    p El tractor entrega su potencia de cuatro formas:

    .row.justify-content-center.mt-4
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t1/f4.png" style="width: 292px").m-auto
      .col-lg-7
        LineaTiempoD.linea-tiempo-d--t1(data-aos="fade-down")
          .row(numero="1" titulo="Potencia a la barra de tiro")
            .col-md-12
              p Permite arrastrar implementos como arados, rastras y remolques mediante la fuerza de tracción del tractor. Su aprovechamiento depende de la adherencia de las ruedas al suelo, el lastre, el patinamiento y las condiciones del terreno. La compatibilidad entre tractor e implemento favorece una operación eficiente.
              p.mb-0
                b - Cómo se entrega:
                |  fuerza de tracción de las ruedas.
              p.mb-0
                b - Ejemplo de implemento:
                |  arado, rastra, subsolador, remolque.
          .row(numero="2" titulo="Potencia a la toma de fuerza")
            .col-md-12
              p Se transmite mediante un eje giratorio que acciona mecanismos de implementos como rotavatores, guadañas y bombas. La conexión suele realizarse mediante un eje cardánico. Para utilizarla, es necesario verificar la velocidad de giro requerida por el implemento y mantener instaladas las guardas de protección.
              p.mb-0
                b - Cómo se entrega:
                |  eje rotativo a 540 o 1.000 rpm.
              p.mb-0
                b - Ejemplo de implemento:
                |  rotavator, guadaña, bomba de fumigadora.
          .row(numero="3" titulo="Potencia hidráulica")
            .col-md-12
              p Se transmite mediante aceite a presión que acciona cilindros y motores hidráulicos. Permite levantar, bajar o regular implementos y mover componentes como ventiladores y dosificadores. Su funcionamiento depende de que el caudal, la presión y las conexiones del tractor sean compatibles con los requerimientos del equipo.
              p.mb-0
                b - Cómo se entrega:
                |  aceite a presión por controles remotos.
              p.mb-0
                b - Ejemplo de implemento:
                |  ventilador de sembradora, cilindros.
          .row(numero="4" titulo="Potencia eléctrica")
            .col-md-12
              p Se suministra mediante el sistema eléctrico del tractor para alimentar monitores, sensores, controladores y dosificadores eléctricos. Facilita la supervisión y el control de funciones del implemento. Su utilización requiere comprobar la tensión de alimentación, la capacidad del circuito y el estado de los conectores.
              p.mb-0
                b - Cómo se entrega:
                |  tomas de corriente de 12 v.
              p.mb-0
                b - Ejemplo de implemento:
                |  monitores, dosificadores eléctricos.

    .row.justify-content-center.mt-4
      .col-lg-10
        .cajon.color-primario.p-4(data-aos="fade-down")
          p.mb-0 Una misma labor puede combinar varias de ellas: una sembradora neumática se arrastra por la barra, su ventilador usa potencia hidráulica y su monitor usa potencia eléctrica.

    separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Sistemas auxiliares del motor y su relación con la operación

    p.mt-4 Los sistemas auxiliares del motor trabajan de manera coordinada para mantener las condiciones necesarias de funcionamiento. Garantizan el suministro de aire y combustible, la lubricación de las piezas móviles, el control de la temperatura y la evacuación de los gases de combustión. Su desempeño influye en la potencia disponible, el consumo de combustible y la vida útil del motor.

    .row.align-items-center.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .bg-4.p-4(data-aos="fade-down")
          p.mb-0 Durante las labores agrícolas, el polvo, los residuos vegetales y las variaciones de carga aumentan las exigencias sobre estos sistemas. Por ello, el operador debe conocer su función, interpretar los indicadores del tablero y reconocer cambios en el comportamiento de la máquina. La detección oportuna de anomalías permite prevenir daños y paradas imprevistas. Las revisiones e intervenciones deben realizarse según el manual técnico y el alcance de las responsabilidades del operador.

        p.mt-2 La siguiente tabla resume los aspectos que requieren vigilancia durante la operación y las acciones ante una anomalía:
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/t1/f5.png" style="width: 396px").m-auto


    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 2.
          span Vigilancia de los sistemas auxiliares durante la operación

        .tabla-a.tabla--t1-2(data-aos="fade-down")
          table
            thead
              tr
                th Sistema
                th Qué vigilar
                th Acción ante anomalía
            tbody
              tr
                td Admisión.
                td Indicador de restricción, humo negro.
                td Limpiar prefiltro; reportar para cambio de filtro.
              tr
                td Refrigeración.
                td Temperatura del motor, radiador limpio.
                td Reducir carga, detenerse y limpiar.
              tr
                td Lubricación.
                td Presión de aceite en el tablero.
                td Detener el motor de inmediato.
              tr
                td Combustible.
                td Nivel y funcionamiento parejo.
                td Drenar agua del filtro; reportar fallas.
              tr
                td Escape.
                td Color del humo, ruidos.
                td Reportar humo anormal.

    separador

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Relación peso-potencia, patinamiento y formas de aprovechamiento

    .row.align-items-start.mt-4
      .col-lg-8.mb-4.mb-lg-0
        p La relación peso-potencia expresa cuántos kilogramos de peso tiene el tractor por cada caballo de potencia o kilovatio. Un tractor con peso insuficiente para su potencia puede presentar un patinamiento excesivo y dificultades para transmitirla al suelo; uno con demasiado peso aumenta la compactación y la potencia necesaria para su propio desplazamiento. La relación adecuada depende de la labor: los trabajos de tracción pesada, como la arada o el subsolado, requieren más peso por unidad de potencia que las labores rápidas y livianas o aquellas que utilizan principalmente la toma de fuerza (ASABE, 2006).
        .cajon.color-primario.p-4.mt-4(data-aos="fade-down")
          p.mb-0 El patinamiento expresa, en porcentaje, la reducción del avance real de la rueda respecto a la distancia de referencia que recorrería con el mismo número de vueltas sin carga de tracción. Un patinamiento moderado permite desarrollar tracción; uno excesivo desperdicia combustible, desgasta las llantas y deteriora la estructura del suelo. Para controlarlo, se ajustan el lastre, la presión de inflado, la velocidad y la profundidad de trabajo. El lastre puede incluir contrapesos o líquido en las llantas, siempre conforme a las indicaciones del fabricante.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t1/panel-lastre.png" style="width: 396px").m-auto

    .row.justify-content-center.mt-4
      .col-lg-10
        .bloque-ejemplo(data-aos="fade-down")
          .row.g-0.align-items-stretch
            .col-lg-4
              figure.h-100.m-0
                img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t1/f6.png")
            .col-lg-8
              .p-4.p-md-5
                figure
                  img(src="@/assets/curso/temas/t1/i-ejemplo.svg" style="width: 80px")
                p.mt-3.mb-0
                  b Ejemplo resuelto: patinamiento y ajuste de lastre
                p.mb-0 Se marcan 20 vueltas de la rueda trasera. Sin carga, el tractor recorre 90 m. Arando, recorre 72 m en las mismas 20 vueltas. Patinamiento = (90 − 72) / 90 × 100 = 20 %. Como en labores de tracción suele buscarse un patinamiento entre 10 y 15 %, el valor indica falta de peso adherente o suelo muy húmedo. Se agregan contrapesos a las ruedas traseras según el manual y se repite la prueba: el tractor recorre 78 m, patinamiento = (90 − 78) / 90 × 100 = 13,3 %, dentro del rango recomendado.

    p.mt-4 La siguiente figura compara los efectos de un lastre insuficiente, adecuado y excesivo sobre el patinamiento, el consumo de combustible y el suelo, permitiendo reconocer la importancia de ajustar el peso del tractor a las condiciones de trabajo:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 1.
          span Efectos del lastre en la operación del tractor
        figure(data-aos="fade-down")
          img.d-block.d-md-none.m-auto(src="@/assets/curso/temas/t1/figura-1-movil.png" alt="" style="width: 400px")
          img.d-none.d-md-block(src="@/assets/curso/temas/t1/figura-1.png" alt="Figura 1 que compara tres condiciones de lastre del tractor: insuficiente, con alto patinamiento y daño por deslizamiento; adecuado, con patinamiento moderado y consumo óptimo; y excesivo, con patinamiento muy bajo, mayor consumo y compactación del suelo." style="width: 1020px").m-auto

    separador

    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6 Curvas del motor y operación económica

    p.mt-4 El comportamiento de un motor diésel se describe mediante sus curvas características, que muestran cómo varían la potencia, el par o torque y el consumo específico de combustible según las revoluciones por minuto. La potencia máxima se alcanza cerca de las revoluciones nominales; el par máximo, en cambio, aparece a revoluciones más bajas; y el consumo específico, que expresa cuánto combustible se gasta por unidad de trabajo, suele ser menor en una zona intermedia de revoluciones y con carga alta. La diferencia entre el par a revoluciones nominales y el par máximo se conoce como reserva de par, permitiendo que el motor soporte aumentos momentáneos de carga sin detenerse.

    .row.align-items-center.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .cajon.color-primario.p-4(data-aos="fade-down")
          p.mb-0 Conocer estas curvas permite operar de forma económica. En labores que no requieren toda la potencia, como una rastrillada liviana o el transporte, conviene aplicar la práctica de "marcha más alta y acelerador reducido": seleccionar una marcha superior y bajar las revoluciones del motor para mantener la misma velocidad de avance, siempre que el motor no se esfuerce en exceso ni emita humo negro. En labores con toma de fuerza, en cambio, las revoluciones del motor deben ajustarse para que la toma de fuerza gire a su velocidad normalizada. Muchos tractores ofrecen modos económicos de la toma de fuerza que alcanzan esa velocidad con menos revoluciones del motor.
        
        p.mt-2 Basado en lo anterior, se presentan las siguientes recomendaciones y precauciones para ajustar marcha y revoluciones del motor según el tipo de labor:

      .col-lg-4
        figure
          img(src="@/assets/curso/temas/t1/comp-16.png" style="width: 397px").m-auto

    .row.mt-4
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(v-for="(l, i) in labores" :key="'labor-'+i")
        .tarjeta--boton.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.icono-hover
                img.icono-hover__base(:src="require_src(l.icono)")
                img.icono-hover__over(:src="require_src(l.iconoOver)")
          h3.text-center(v-html="l.titulo")
          p.mb-0
            b - Recomendación:
            |  {{ l.recomendacion }}
          p.mb-0
            b - Precaución:
            |  {{ l.precaucion }}

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.p-4(data-aos="fade-down")
          p.mb-0
            b Para reflexionar
          p.mb-0 Conviene preguntarse si el tractor se lastra igual para todas las labores. Un lastre fijo durante todo el año suele ser inadecuado para la mayoría de las operaciones.

    p.mt-4 Para finalizar el tema, la siguiente figura presenta un resumen de los principales conceptos abordados sobre las máquinas agrícolas y el aprovechamiento de la potencia:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 2.
          span Máquinas agrícolas y aprovechamiento de la potencia
        figure(data-aos="fade-down")
          img.d-block.d-md-none.m-auto(src="@/assets/curso/temas/t1/figura-2-movil.svg" alt="" style="width: 400px")
          img.d-none.d-md-block(src="@/assets/curso/temas/t1/figura-2.svg" alt="Figura 2 que resume los principales conceptos sobre las máquinas agrícolas mediante un esquema de clasificación, tecnología, potencia y tracción, con ejemplos de cada categoría." style="width: 1020px").m-auto

    p.mt-4.mb-0 Conocida la máquina que genera la potencia, el siguiente paso es estudiar los equipos e implementos que la convierten en labor y la forma de engancharlos al tractor.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    clasificacion: [
      {
        icono: '@/assets/curso/temas/t1/i1.svg',
        titulo: 'De fuerza motriz',
        texto: 'Tractor de ruedas, tractor de orugas, motocultor.',
      },
      {
        icono: '@/assets/curso/temas/t1/i2.svg',
        titulo: 'De preparación de suelos',
        texto: 'Arado de discos, rastra, subsolador, rotavator, niveladora.',
      },
      {
        icono: '@/assets/curso/temas/t1/i3.svg',
        titulo: 'De siembra y plantación',
        texto:
          'Sembradora de granos finos, sembradora de precisión, trasplantadora.',
      },
      {
        icono: '@/assets/curso/temas/t1/i4.svg',
        titulo: 'De manejo del cultivo',
        texto: 'Fumigadora de barras, abonadora centrífuga, cultivadora.',
      },
      {
        icono: '@/assets/curso/temas/t1/i5.svg',
        titulo: 'De cosecha',
        texto:
          'Cosechadora de granos, cosechadora de caña, segadora, empacadora.',
      },
      {
        icono: '@/assets/curso/temas/t1/i6.svg',
        titulo: 'De transporte y manejo de materiales',
        texto: 'Remolques, cargadores.',
      },
    ],
    labores: [
      {
        icono: '@/assets/curso/temas/t1/h1.svg',
        iconoOver: '@/assets/curso/temas/t1/h1-over.svg',
        titulo: 'Tracción pesada',
        recomendacion: 'revoluciones cercanas a las nominales.',
        precaucion: 'vigilar temperatura y patinamiento.',
      },
      {
        icono: '@/assets/curso/temas/t1/h2.svg',
        iconoOver: '@/assets/curso/temas/t1/h2-over.svg',
        titulo: 'Tracción liviana',
        recomendacion: 'marcha más alta y acelerador reducid.',
        precaucion: 'evitar humo negro y esfuerzo del motor.',
      },
      {
        icono: '@/assets/curso/temas/t1/h3.svg',
        iconoOver: '@/assets/curso/temas/t1/h3-over.svg',
        titulo: 'Con toma de fuerza',
        recomendacion: 'revoluciones que den 540 o 1.000 rpm en la TDF.',
        precaucion: 'no exceder la velocidad normalizada',
      },
      {
        icono: '@/assets/curso/temas/t1/h4.svg',
        iconoOver: '@/assets/curso/temas/t1/h4-over.svg',
        titulo: 'Transporte',
        recomendacion: 'marcha alta y velocidad segura.',
        precaucion: 'respetar límites en vías rurales.',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
