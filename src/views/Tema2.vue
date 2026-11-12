<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Equipos e implementos y su enganche al tractor

    p.mt-4 El tractor por sí solo no prepara el suelo ni siembra: estas labores requieren implementos que se acoplan a él y aprovechan su potencia. Por ello, comprender la relación entre ambos permite reconocer cómo se organiza el trabajo mecanizado y por qué su desempeño debe considerarse de manera conjunta.

    .row.justify-content-center.mt-4
      .col-lg-10
        .bloque-texto-g.bloque-texto-g--t2.p-3.p-sm-4.p-md-5(data-aos="fade-down")
          .bloque-texto-g__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/f1.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Este tema presenta una visión general de los equipos e implementos agrícolas y de su vinculación con el tractor. Su estudio permitirá comprender la importancia de una unión adecuada para desarrollar las labores con seguridad, aprovechar los recursos disponibles y obtener resultados acordes con las necesidades de producción.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Equipos e implementos: concepto, características y tipos

    .row.align-items-center.mt-4
      .col-lg-8.mb-4.mb-lg-0
        p Un implemento agrícola es un equipo que se acopla al tractor para realizar una labor específica. Algunos realizan el corte o volteo del suelo mediante la tracción del tractor, sin requerir accionamiento por la toma de fuerza, como el arado de discos; otros son equipos complejos con sistemas de dosificación, transmisión, hidráulica y electrónica, como una sembradora neumática de precisión. En conjunto, su función es transformar la potencia del tractor en una labor concreta sobre el suelo o el cultivo.
        .bg-4.p-4.mt-4(data-aos="fade-down")
          p.mb-0 Los implementos se clasifican por la labor que realizan (labranza primaria, labranza secundaria, siembra, fertilización, protección de cultivos, cosecha y transporte), por la forma de acople (suspendidos, semisuspendidos y de arrastre) y por la fuente de accionamiento (tirados, accionados por la toma de fuerza, hidráulicos o eléctricos). Estas clasificaciones se complementan: un mismo implemento puede identificarse según su función, su unión al tractor y la forma en que recibe la potencia.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/t2/f2.png" style="width: 396px").r-10.m-auto

    p.mt-4 Sus características técnicas principales son el ancho de trabajo, el peso, la potencia requerida, la velocidad recomendada y los rangos de ajuste. Reconocerlas permite distinguir las posibilidades de uso de cada equipo y comprender que implementos destinados a una misma labor pueden presentar configuraciones diferentes.

    p La siguiente tabla presenta ejemplos de implementos agrícolas, relacionando la labor que realizan con su forma de acople más frecuente:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 3.
          span Tipos de implementos según la labor

        .tabla-a.tabla--t2-3(data-aos="fade-down")
          table
            thead
              tr
                th Implemento
                th Labor
                th Acople frecuente
            tbody
              tr
                td Arado de discos.
                td Labranza primaria: corte y volteo.
                td Suspendido al tercer punto.
              tr
                td Rastra de discos.
                td Labranza secundaria: desterronar.
                td De arrastre o suspendida.
              tr
                td Subsolador.
                td Romper capas compactadas.
                td Suspendido.
              tr
                td Rotavator.
                td Mullir el suelo.
                td Suspendido y accionado por TDF.
              tr
                td Sembradora de precisión.
                td Siembra a distancia fija.
                td Suspendida o de arrastre.
              tr
                td Fumigadora de barras.
                td Aplicación de agroinsumos.
                td Suspendida o de arrastre, accionada por TDF.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Nivel tecnológico, sistemas y componentes de los implementos

    p.mt-4 Los implementos agrícolas incorporan diferentes niveles de tecnología. Para facilitar su estudio, pueden agruparse en básicos, intermedios, avanzados y conectados, aunque estas características pueden combinarse en un mismo equipo. Cada uno tiene en cuenta lo siguiente:

    .bg-banda-2.mt-4
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        SlyderA.slyder--t2(tipo="b")
          .row.align-items-center(v-for="(n, i) in niveles" :key="'nivel-'+i")
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0
                b(v-html="n.titulo")
              p.mb-0(v-html="n.texto")
            .col-lg-6
              figure
                img(:src="require_src(n.imagen)" style="width: 565px").m-auto

    .row.align-items-start.mt-4
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t2/f4.png" style="width: 292px").m-auto
      .col-lg-9
        p Los sistemas y componentes de un implemento dependen de su función y configuración. Una sembradora puede integrar mecanismos de corte del rastrojo, apertura del surco, dosificación de semilla y fertilizante, cierre del surco y control de profundidad. Estos trabajan de manera coordinada para depositar los insumos en las condiciones previstas.
        .bg-5.p-4.mt-4(data-aos="fade-down")
          .row.align-items-start
            .col-auto
              figure
                img(src="@/assets/curso/temas/t2/ic1.svg" style="width: 84px")
            .col
              p.mb-0 Una fumigadora de barras incluye tanque, bomba, filtros, regulador de presión, barras y boquillas. El tanque almacena la mezcla; la bomba impulsa el líquido; los filtros retienen impurezas; el regulador permite ajustar la presión; y las barras distribuyen las boquillas, encargadas de formar y dirigir la pulverización. Reconocer la función de cada componente facilita comprender el funcionamiento del conjunto e identificar anomalías.

    p.mt-4 A partir de lo anterior, se presentan los niveles tecnológicos de los implementos, relacionando sus componentes principales con las ventajas que ofrecen durante las labores agrícolas:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-infografica.p-3
          ImagenInfografica.color-acento-botones.d-none.d-md-block
            template(v-slot:imagen)
              figure
                img(src="@/assets/curso/temas/t2/infografica.png" alt="").w-100
            .tarjeta.color-primario.p-3(x="14.3%" y="72.5%" numero="+")
              .h5.mb-2 Básico
              p.mb-0 Incorpora ajustes manuales y transmisión por cadena. Requiere supervisión directa del operador y revisiones periódicas, con menor costo y mantenimiento sencillo.
            .tarjeta.color-primario.p-3(x="38.1%" y="72.5%" numero="+")
              .h5.mb-2 Intermedio
              p.mb-0 Cuenta con monitores y sensores que detectan fallas, como interrupciones en la caída de semilla, y facilitan la intervención oportuna del operador.
            .tarjeta.color-primario.p-3(x="61.9%" y="72.5%" numero="+")
              .h5.mb-2 Avanzado
              p.mb-0 Integra dosificación electrónica y corte automático por sección para reducir traslapes y ahorrar insumos. Requiere configuración y calibración adecuadas.
            .tarjeta.color-primario.p-3(x="85.8%" y="72.5%" numero="+")
              .h5.mb-2 Conectado
              p.mb-0 Incorpora ISOBUS y telemetría para intercambiar datos entre equipos compatibles. Puede integrar tasa variable y registros georreferenciados para el seguimiento de las labores.
          figure.d-md-none
            img(src="@/assets/curso/temas/t2/infografica.png" alt="").w-100

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Enganche, calibración y ajustes de los implementos

    p.mt-4 La preparación del conjunto tractor–implemento requiere establecer una unión adecuada, regular las condiciones de trabajo y comprobar que el equipo entregue el resultado esperado. Para ello, se realizan tres procesos complementarios: el enganche, la calibración y los ajustes. Comprender sus diferencias permite organizar la preparación de la maquinaria y reconocer cómo cada proceso contribuye a la seguridad, la uniformidad de la labor y el aprovechamiento de la potencia. A continuación, se detalla cada uno:

    .row.justify-content-center.mt-4
      .col-lg-10
        AcordionA.acordion--t2(tipo="b" clase-tarjeta="tarjeta--acordion-t2")
          .div(titulo="Enganche")
            p El enganche establece la unión mecánica entre el tractor y el implemento. Según las necesidades del equipo, también comprende las conexiones hidráulicas, eléctricas y de toma de fuerza que permiten accionar sus componentes.
            p Uno de los sistemas más utilizados es el enganche de tres puntos, compuesto por dos brazos inferiores y un brazo superior, denominado tercer punto. Este sistema sostiene implementos suspendidos y permite modificar su posición mediante el mecanismo de elevación del tractor. La barra de tiro se emplea para implementos de arrastre y remolques, mientras que algunos tractores disponen también de enganche delantero.
            p.mb-0 Antes del acoplamiento, se deben consultar los manuales, identificar los puntos de unión y comprobar el estado de pasadores, seguros y conexiones. Las intervenciones manuales requieren inmovilizar el conjunto y mantener el implemento apoyado de forma estable, siguiendo el procedimiento del fabricante. Nunca se debe trabajar debajo de un implemento sostenido únicamente por el sistema hidráulico.
          .div(titulo="Calibración")
            p La calibración permite comprobar que el implemento entregue la cantidad prevista de insumos por unidad de superficie. Por ejemplo, en una sembradora se verifica la cantidad de semilla distribuida; en una abonadora, la entrega de fertilizante; y en una fumigadora, el volumen de aplicación.
            p Este proceso no consiste únicamente en seleccionar un valor en el dosificador o en el monitor. Es necesario medir la entrega real, compararla con la cantidad objetivo y determinar si existe una diferencia que requiera corrección. Cuando el resultado no corresponde con lo previsto, se modifica la regulación y se repite la comprobación.
            p.mb-0 El procedimiento depende del implemento, del producto utilizado y de las condiciones de operación. Por ello, debe realizarse conforme al manual y verificarse nuevamente cuando cambien factores que puedan alterar la dosificación, como las características del insumo o la velocidad de avance.
          .div(titulo="Ajustes")
            p Los ajustes regulan la posición y las condiciones de funcionamiento del implemento. Incluyen la nivelación, la estabilización lateral, la profundidad y la velocidad de trabajo, además de otras regulaciones propias de cada equipo.
            p La nivelación transversal controla la inclinación de un lado al otro y suele realizarse mediante el brazo elevador ajustable. Permite que los elementos del implemento trabajen de manera uniforme a lo ancho. La nivelación longitudinal modifica la inclinación de adelante hacia atrás mediante la longitud del tercer punto. En ambos casos, la posición debe corresponder con las indicaciones del fabricante para la labor.
            p El centrado y la estabilización lateral mantienen la posición del implemento respecto al tractor y controlan su desplazamiento hacia los lados. Se regulan mediante estabilizadores, tensores o cadenas, según el diseño del enganche. Algunos implementos requieren cierta libertad de movimiento, por lo que estos elementos deben ajustarse conforme al manual.
            p La profundidad determina cuánto penetran los órganos de trabajo en el suelo. Puede regularse mediante el control del enganche, ruedas limitadoras u otros mecanismos del implemento. Una profundidad excesiva aumenta la demanda de tracción, mientras que una insuficiente puede impedir que se cumpla el objetivo de la labor.
            p.mb-0 La velocidad de avance se establece mediante la selección de marcha y el régimen de funcionamiento del tractor, dentro del rango recomendado. Debe permitir que el implemento conserve la profundidad, la dosificación y la estabilidad necesarias. Otros ajustes, como el ángulo de los discos o la separación entre surcos, dependen de la configuración y finalidad del equipo.

    .row.justify-content-center.mt-4
      .col-lg-10
        .cajon.color-primario.p-4(data-aos="fade-down")
          p.mb-0 Una vez realizados el enganche, la calibración y los ajustes, se efectúa una pasada de prueba para comprobar el comportamiento del conjunto y la calidad de la labor. Esta verificación permite identificar desviaciones y corregirlas antes de continuar el trabajo. Así, la preparación del implemento se completa cuando su funcionamiento en campo corresponde con los parámetros previstos y las indicaciones de los manuales técnicos.

    separador

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Enganche conjunto máquina, equipos e implementos: concepto, función y tipos

    .row.align-items-start.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t2/comp-24.png" style="width: 397px").m-auto
      .col-lg-8
        p El enganche conjunto es la integración del tractor con los equipos e implementos que trabajan como una unidad para realizar una o varias labores agrícolas. Esta integración permite transmitir la potencia, sostener o arrastrar los equipos y coordinar su funcionamiento. Su configuración depende de la actividad que se realizará y de las características de los elementos que componen el conjunto.
        .cajon.color-primario.p-4.mt-4(data-aos="fade-down")
          p.mb-0 En una configuración simple, el tractor trabaja con un solo implemento. En una configuración combinada, se integran equipos o funciones para ejecutar varias operaciones durante una misma pasada. También pueden utilizarse implementos delanteros y traseros para ampliar la capacidad de trabajo, o incorporar remolques para transportar materiales y productos. Estas configuraciones responden a necesidades diferentes y no son necesariamente excluyentes.

    p.mt-4 La combinación de labores puede reducir los recorridos sobre el lote y el tiempo requerido para completar el trabajo. Esto puede favorecer el ahorro de combustible y disminuir el tránsito de maquinaria sobre el suelo. Sin embargo, los beneficios dependen de que las operaciones puedan realizarse a una velocidad y en unas condiciones de trabajo compatibles.

    .row.align-items-center.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .bg-1.p-4(data-aos="fade-down")
          .row.align-items-start
            .col-auto
              figure
                img(src="@/assets/curso/temas/t2/ic2.svg" style="width: 84px")
            .col
              p.mb-0 El funcionamiento del conjunto está condicionado por la potencia disponible, la capacidad de levante del sistema hidráulico, la distribución del peso y la estabilidad. Incorporar más equipos aumenta las exigencias sobre el tractor y puede dificultar las maniobras. Por ello, una reducción del número de pasadas no garantiza, por sí sola, menor consumo o compactación: también deben considerarse el peso total y las condiciones del terreno.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/t2/f10.png" style="width: 292px").r-10.m-auto

    .row.mt-4
      .col-lg-9
        p.mb-0 Además de la unión física, algunos conjuntos incorporan comunicación electrónica entre el tractor, el implemento y el terminal de control. Tecnologías como ISOBUS permiten coordinar funciones compatibles desde un mismo terminal. Esta integración complementa el enganche mecánico y puede facilitar el control y el registro de la operación, según las funcionalidades disponibles.

    p.mt-4 La siguiente tabla presenta configuraciones de uso del conjunto tractor–implemento, ejemplos y sus principales ventajas:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 4.
          span Tipos de enganche conjunto y sus usos

        .tabla-a.tabla--t2-4(data-aos="fade-down")
          table
            thead
              tr
                th Tipo
                th Ejemplo
                th Ventaja
            tbody
              tr
                td Simple.
                td Tractor con rastra.
                td Sencillo y flexible.
              tr
                td Combinado en serie.
                td Rastra y sembradora en una pasada.
                td Menos pasadas y compactación.
              tr
                td Delantero y trasero.
                td Guadaña delantera y trasera.
                td Mayor ancho de trabajo.
              tr
                td Tractor y remolque.
                td Tractor con tolva en cosecha.
                td Logística de transporte.
              tr
                td Conjunto con ISOBUS.
                td Tractor y sembradora con un solo monitor.
                td Control integrado y registro de datos.

    .row.justify-content-center.mt-4
      .col-lg-10
        .bloque-ejemplo(data-aos="fade-down")
          .row.g-0.align-items-stretch
            .col-lg-3
              figure.h-100.m-0
                img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t2/f11.png")
            .col-lg-9
              .p-4.p-md-5
                figure
                  img(src="@/assets/curso/temas/t2/ic3.svg" style="width: 80px")
                p.mt-3.mb-0
                  b Ejemplo resuelto: ahorro por enganche combinado
                p.mb-0 Para preparar y sembrar 100 ha se pueden hacer dos pasadas separadas: rastrillada a 1,8 ha/h (55,6 h) y siembra a 2,0 ha/h (50 h), total 105,6 h. Con un conjunto combinado de rastra y sembradora, la capacidad baja a 1,5 ha/h, pero se requieren 100 / 1,5 = 66,7 h. El ahorro es de 38,9 h de tractor y operario, además de una pasada menos sobre el suelo. Si el tractor cuesta $140.000 por hora, el ahorro supera los $5.400.000, siempre que el tractor tenga la potencia suficiente para el conjunto.

    separador

    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Categorías del enganche de tres puntos y compatibilidad

    p.mt-4 El enganche de tres puntos se clasifica en categorías que establecen las dimensiones de acoplamiento entre el tractor y el implemento. Cada categoría define el diámetro de los pasadores, la separación entre los puntos de enganche y otras medidas de conexión. De manera orientativa, se relacionan con los equipos de la siguiente forma:

    .row.bg-banda-3.mx-0.mt-4
      .col-12
        .p-4.p-md-5
          .row.align-items-center
            .col-lg-8
              ul.lista-ul.mb-0
                li(v-for="(c, i) in categorias" :key="'cat-'+i" :class="{'mb-0': i === categorias.length - 1}")
                  img.lista-ul__vineta-img(src="@/assets/curso/temas/t2/vineta.svg")
                  b(v-html="c.titulo")
                  br
                  | {{ c.texto }}
            .col-lg-4.d-none.d-lg-block
              figure
                img(src="@/assets/curso/temas/t2/f12.png" style="width: 369px").r-20.m-auto

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-4.p-4(data-aos="fade-down")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t2/ic4.svg" style="width: 84px")
            .col
              p.mb-0 Esta relación es general: la categoría no debe determinarse únicamente por la potencia o el tamaño del tractor. Es necesario comprobar las especificaciones de ambos equipos. Algunos permiten adaptar determinadas conexiones mediante bujes o acopladores autorizados, sin que ello aumente la capacidad de levante ni los límites de carga del tractor.

    p.mt-4 La compatibilidad entre tractor e implemento no se limita a la categoría del enganche. También deben revisarse la capacidad de levante del sistema hidráulico, el peso y la posición del centro de gravedad del implemento, el número y tipo de salidas hidráulicas remotas, la velocidad y el perfil del eje de la toma de fuerza, la longitud del cardán y las conexiones eléctricas. En los equipos que incorporan control electrónico, se deben comprobar las funcionalidades ISOBUS compatibles y, cuando corresponda, la integración con el sistema de guiado.

    p Un implemento trasero demasiado pesado puede descargar el eje delantero y reducir el control de la dirección. Los contrapesos delanteros deben utilizarse según las indicaciones del fabricante, sin superar las capacidades del tractor, los ejes y los neumáticos. Incorporar lastre no permite compensar un implemento que exceda los límites de carga o de levante del equipo.

    p A continuación, se resume los aspectos que deben verificarse para comprobar la compatibilidad del conjunto tractor–implemento antes de su utilización:

    SlyderF.slyder-f--t2.mt-4(columnas="col-sm-6 col-lg-4")
      .tarjeta.tarjeta--compatibilidad.p-4(v-for="(a, i) in compatibilidad" :key="'comp-'+i")
        .row.justify-content-center
          .col-auto
            figure
              img(:src="require_src(a.icono)" style="width: 128px")
        h3.text-center.mt-3(v-html="a.titulo")
        p.text-center.mb-0 {{ a.texto }}

    .row.justify-content-center.mt-4
      .col-lg-10
        .cajon.color-primario.p-4(data-aos="fade-down")
          p.mb-0
            b Para reflexionar
          p.mb-0 Conviene preguntarse cuántas pasadas de maquinaria recibe un lote antes de la siembra y cuáles podrían combinarse o eliminarse sin afectar la calidad de la labor.

    p.mt-4 Para finalizar, la siguiente ruta resume las etapas de preparación del conjunto tractor–implemento, desde la verificación de compatibilidad hasta la prueba de funcionamiento, orientadas a lograr una labor uniforme y segura:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 3.
          span Ruta para enganchar y ajustar un implemento
        figure(data-aos="fade-down")
          img.d-block.d-md-none.m-auto(src="@/assets/curso/temas/t2/figura-3-m.svg" alt="" style="width: 400px")
          img.d-none.d-md-block(src="@/assets/curso/temas/t2/figura-3.svg" alt="Figura 3. Ruta de cinco etapas para preparar el conjunto tractor–implemento: verificar compatibilidad, acoplar, conectar sistemas, nivelar y calibrar, y probar. Indica que el recorrido completo deja el conjunto listo para una labor uniforme y segura." style="width: 1020px").m-auto

    p.mt-4.mb-0 Enganchar bien requiere, antes, haber elegido el tractor y el implemento adecuados. La selección de máquinas y la maquinaria para ladera son el tema siguiente.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    niveles: [
      {
        titulo: 'Básicos',
        texto:
          'Cuentan con ajustes manuales y transmisiones mecánicas mediante cadenas, engranajes u otros mecanismos. El operador verifica directamente su funcionamiento y modifica los parámetros mediante palancas, tornillos o cambios de posición. Suelen presentar una construcción sencilla, pero requieren revisiones periódicas para identificar desgaste, desajustes o interrupciones que afecten la calidad de la labor.',
        imagen: '@/assets/curso/temas/t2/s1.png',
      },
      {
        titulo: 'Intermedios',
        texto:
          'Incorporan sensores y monitores que permiten supervisar el funcionamiento del implemento durante el trabajo. Por ejemplo, los sensores de caída de semilla pueden advertir interrupciones en la siembra. Esta información facilita detectar problemas oportunamente, aunque muchos ajustes y correcciones continúan dependiendo de la intervención manual del operador.',
        imagen: '@/assets/curso/temas/t2/s2.png',
      },
      {
        titulo: 'Avanzados',
        texto:
          'Integran sistemas electrónicos de control que regulan funciones como la dosificación eléctrica o hidráulica, el corte automático por sección y la aplicación a tasa variable según mapas. Estas herramientas permiten ajustar la entrega de insumos y reducir traslapes. Su aprovechamiento requiere configurar correctamente los parámetros, calibrar los sistemas y comprobar los resultados en campo.',
        imagen: '@/assets/curso/temas/t2/s3.png',
      },
      {
        titulo: 'Conectados',
        texto:
          'Incorporan funciones de comunicación e intercambio de datos entre el implemento, el tractor, el terminal y, según el equipo, plataformas de gestión agrícola. Pueden facilitar el registro de labores y el seguimiento mediante telemetría. Entre estas tecnologías se encuentra ISOBUS, que permite utilizar un mismo terminal con implementos de distintas marcas, siempre que compartan funcionalidades compatibles.',
        imagen: '@/assets/curso/temas/t2/s4.png',
      },
    ],
    categorias: [
      {
        titulo: 'Categoría 0',
        texto:
          'Utilizada en tractores de jardín y equipos muy pequeños, destinados a labores ligeras con implementos de dimensiones reducidas.',
      },
      {
        titulo: 'Categoría 1',
        texto:
          'Habitual en tractores subcompactos, compactos y pequeños, con implementos adecuados para trabajos de menor escala.',
      },
      {
        titulo: 'Categoría 2',
        texto:
          'Empleada en tractores de tamaño y potencia intermedios, con implementos que requieren conexiones de mayores dimensiones que los de categoría 1.',
      },
      {
        titulo: 'Categoría 3',
        texto:
          'Asociada con tractores de mayor potencia y con implementos de mayor tamaño y exigencia de trabajo.',
      },
      {
        titulo: 'Categoría 4',
        texto:
          'Utilizada en tractores de alta potencia para acoplar implementos de grandes dimensiones y elevadas exigencias de trabajo.',
      },
    ],
    compatibilidad: [
      {
        icono: '@/assets/curso/temas/t2/ci1.svg',
        titulo: 'Enganche',
        texto:
          'Diámetro de pasadores, separación de los puntos de enganche y demás dimensiones de acoplamiento compatibles.',
      },
      {
        icono: '@/assets/curso/temas/t2/ci2.svg',
        titulo: 'Capacidad de levante',
        texto:
          'Peso y posición del centro de gravedad del implemento compatibles con la capacidad de levante especificada por el fabricante.',
      },
      {
        icono: '@/assets/curso/temas/t2/ci3.svg',
        titulo: 'Estabilidad',
        texto:
          'Carga suficiente sobre el eje delantero con el implemento levantado, respetando los límites del tractor, los ejes y los neumáticos.',
      },
      {
        icono: '@/assets/curso/temas/t2/ci4.svg',
        titulo: 'Toma de fuerza',
        texto:
          'Velocidad y perfil del eje compatibles, así como longitud y libertad de movimiento del cardán en las posiciones previstas de trabajo y transporte.',
      },
      {
        icono: '@/assets/curso/temas/t2/ci5.svg',
        titulo: 'Hidráulica y electricidad',
        texto:
          'Caudal, presión, salidas hidráulicas, acoples, tensión de alimentación y conectores compatibles con los requerimientos del implemento.',
      },
      {
        icono: '@/assets/curso/temas/t2/ci6.svg',
        titulo: 'Precisión',
        texto:
          'Funcionalidades ISOBUS compartidas entre tractor, terminal e implemento y, cuando corresponda, compatibilidad con el sistema de guiado.',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
