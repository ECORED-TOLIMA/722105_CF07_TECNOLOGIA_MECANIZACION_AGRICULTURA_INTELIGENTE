<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Selección de máquinas, equipos y herramientas

    p.mt-4 Elegir el tractor y los implementos adecuados es una decisión que influye en los costos, la calidad y la oportunidad de las labores mecanizadas. La maquinaria debe responder a las necesidades del sistema productivo y a las condiciones en las que trabajará. Una elección inadecuada puede generar capacidad desaprovechada, dificultades para ejecutar las labores o retrasos que afectan la producción.

    .bloque-texto-g.bloque-texto-g--t3.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-down")
      .bloque-texto-g__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/f1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La selección requiere valorar el conjunto tractor–implemento y las posibilidades reales de utilizarlo, mantenerlo y disponer de él cuando se necesita. Por ello, no basta con considerar la potencia o el precio: es necesario relacionar las características del equipo con el trabajo previsto y los recursos disponibles.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Selección: concepto, función y clasificación

    .row.align-items-center.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p Seleccionar maquinaria es elegir, entre las alternativas disponibles, las máquinas, equipos y herramientas que permiten realizar las labores requeridas con la calidad, oportunidad y costo adecuados. Su función es relacionar la capacidad de los equipos con las necesidades del sistema productivo, considerando el área, los cultivos, el calendario de labores, las características del suelo, la pendiente y los recursos disponibles.
        .bg-1.r-10.p-4.mt-4(data-aos="fade-down")
          p.mb-0 Una selección adecuada permite evitar tanto la adquisición de equipos con capacidad innecesaria como el uso de maquinaria insuficiente para completar el trabajo previsto. La decisión debe considerar el conjunto tractor–implemento, pues sus componentes necesitan ser compatibles y responder a las mismas condiciones de operación.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/t3/f2.png" style="width: 292px").r-10.m-auto

    .row.mt-4
      .col-lg-9
        p.mb-0 Para organizar el análisis, la selección puede abordarse según su objeto: tractor, implemento o conjunto; según la alternativa de acceso: compra, alquiler o contratación del servicio; y según los criterios de evaluación: técnicos, operativos y económicos. Estos enfoques se complementan y permiten comparar las opciones de acuerdo con las necesidades de cada explotación agropecuaria.

    .row.align-items-center.mt-4
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t3/ilustracion-31.png" style="width: 292px").m-auto
      .col-lg-9
        .cajon.color-primario.p-4(data-aos="fade-down")
          p.mb-0 En la práctica, no basta con elegir el equipo de mayor potencia o menor precio. También es necesario comprobar si puede terminar la labor en el tiempo disponible, trabajar en las condiciones del terreno y recibir mantenimiento oportuno. La disponibilidad de operarios capacitados, repuestos y servicio técnico influye en la continuidad del trabajo y en el aprovechamiento de la inversión.
        p.mt-4.mb-0 La siguiente tabla reúne los principales criterios de selección, las preguntas que orientan su evaluación y los aspectos que deben comprobarse al comparar alternativas.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 5.
          span Criterios de selección de maquinaria agrícola

        .tabla-a.tabla--t3(data-aos="fade-down")
          table
            thead
              tr
                th Criterio
                th Pregunta
                th Ejemplo
            tbody
              tr
                td Técnico.
                td ¿Tiene la potencia y el ancho necesarios?
                td Tractor de 120 hp para una rastra de 32 discos.
              tr
                td Operativo.
                td ¿Termina a tiempo la labor?
                td Atender 200 ha en una ventana de 10 días.
              tr
                td Económico.
                td ¿Cuál es el costo por hectárea?
                td Comparar los costos de comprar, alquilar y contratar el servicio.
              tr
                td Terreno.
                td ¿Es apto para la pendiente y el suelo?
                td Tractor de ladera dentro de los límites de inclinación del fabricante.
              tr
                td Soporte técnico.
                td ¿Hay repuestos y servicio técnico?
                td Distribuidor con repuestos y asistencia en la región.
              tr
                td Talento humano.
                td ¿Hay personal capacitado para utilizarlo?
                td Operador con formación en el manejo de una sembradora de precisión.
              tr
                td Calidad de la labor.
                td ¿Cumple los parámetros de trabajo requeridos?
                td Sembradora que mantenga la profundidad y la separación previstas.
              tr
                td Seguridad y ambiente.
                td ¿Permite controlar los riesgos y proteger el entorno?
                td Tractor con estructura antivuelco y cinturón, e implemento con guardas completas.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Potencia del motor y requerimientos de potencia según el implemento

    figure.mt-4(data-aos="fade-down")
      img(src="@/assets/curso/temas/t3/f3.png" style="width: 1228px").m-auto

    .bg-5.p-4.p-md-5(data-aos="fade-down")
      p.mb-0 La potencia del motor expresa la cantidad de trabajo que este puede realizar por unidad de tiempo y se mide en caballos de fuerza (hp) o kilovatios (kW); un kilovatio equivale aproximadamente a 1,34 hp. No toda la potencia del motor se convierte en trabajo útil del implemento: existen pérdidas en la transmisión y el patinamiento, y parte de la potencia se utiliza para desplazar el propio tractor. Por ello, se distingue entre la potencia del motor, la potencia a la toma de fuerza y la potencia a la barra de tiro. Esta última está condicionada por la tracción y las características del suelo.

    .row.align-items-start.mt-4
      .col-auto
        figure
          img(src="@/assets/curso/temas/t3/ic1.svg" style="width: 84px")
      .col
        p.mb-0 En los implementos de labranza, la potencia requerida depende del ancho y la profundidad de trabajo, la velocidad de avance y la resistencia del suelo. Las normas de gestión de maquinaria agrícola proporcionan ecuaciones y datos para estimar la fuerza de tiro y la eficiencia de tracción según las condiciones de trabajo (ASABE, 2006, 2011). La potencia a la barra se calcula multiplicando la fuerza de tiro por la velocidad de avance. A partir de este resultado, y considerando las pérdidas del conjunto, se estima la potencia necesaria en el motor.

    .row.justify-content-center.mt-4
      .col-lg-10
        .bloque-ejemplo(data-aos="fade-down")
          .row.g-0.align-items-stretch
            .col-lg-3
              figure.h-100.m-0
                img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t3/f4.png")
            .col-lg-9
              .p-4.p-md-5
                figure
                  img(src="@/assets/curso/temas/t3/ic2.svg" style="width: 80px")
                p.mt-3.mb-0
                  b Ejemplo resuelto: potencia requerida para un subsolador
                p.mb-0 Un subsolador de 5 cuerpos requiere una fuerza de tiro de 20 kN en un suelo franco a la profundidad deseada. Velocidad de trabajo: 6 km/h, equivalente a 1,67 m/s. Potencia a la barra = 20 kN × 1,67 m/s = 33,4 kW. Si en ese suelo la potencia a la barra es aproximadamente el 55 % de la potencia del motor, la potencia requerida en el motor es 33,4 / 0,55 = 60,7 kW, es decir, unos 81 hp. Se recomienda un tractor con algo de reserva, por ejemplo, de 90 a 100 hp, para no trabajar al límite.

    p.mt-4 La potencia disponible varía según el punto del tractor donde se aprovecha. A continuación, se describen los principales tipos, dónde se miden y los factores que influyen en ellos:

    .tarjeta--container.row.mt-4(data-aos="fade-down")
      .tarjeta.p-4.p-md-5(v-for="(p, i) in potencias" :key="'pot-'+i" :class="[p.clase, p.ancho]")
        .row.justify-content-center.mb-3
          .col-auto
            figure
              img(:src="require_src(p.icono)" style="width: 98px")
        h3(v-html="p.titulo")
        p.mb-0 {{ p.texto }}

    separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Manejo y capacidad de trabajo en la selección

    .row.align-items-center.mt-4
      .col-lg-8.mb-4.mb-lg-0
        p Además de la potencia, la selección considera la capacidad de trabajo del conjunto tractor–implemento, es decir, la superficie que puede atender por unidad de tiempo, expresada en hectáreas por hora. La capacidad efectiva se calcula multiplicando el ancho de trabajo en metros por la velocidad de avance en kilómetros por hora y por la eficiencia de campo expresada en forma decimal, y dividiendo el resultado entre diez. Por ejemplo, una eficiencia del 80 % se introduce como 0,80. Este cálculo permite verificar si el equipo puede completar la labor en el tiempo disponible.
        .bg-1.p-4.mt-4(data-aos="fade-down")
          p.mb-0 La facilidad de manejo también es un criterio de selección. Un implemento de gran ancho puede ofrecer una elevada capacidad de trabajo, pero dificultar el traslado por caminos rurales estrechos o las maniobras en lotes pequeños. Asimismo, una cabina y unos controles ergonómicos contribuyen a reducir la fatiga del operador durante jornadas prolongadas. En equipos con tecnología avanzada, el aprovechamiento de sus funciones depende de la capacitación del personal para configurarlos y utilizarlos correctamente.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/t3/comp-33.png" style="width: 397px").m-auto

    .row.justify-content-center.mt-4
      .col-lg-10
        .bloque-ejemplo(data-aos="fade-down")
          .row.g-0.align-items-stretch
            .col-lg-3
              figure.h-100.m-0
                img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t3/f6.png")
            .col-lg-9
              .p-4.p-md-5
                figure
                  img(src="@/assets/curso/temas/t3/ic3.svg" style="width: 80px")
                p.mt-3.mb-0
                  b Ejemplo resuelto: ¿alcanza el equipo en la ventana de tiempo?
                p.mb-0 Se deben rastrillar 240 ha en 8 días, con jornadas efectivas de 9 horas. Rastra de 3,6 m a 7 km/h con eficiencia de campo del 80 %. Capacidad efectiva = 3,6 × 7 × 0,80 / 10 = 2,02 ha/h. Capacidad en la ventana = 2,02 × 9 × 8 = 145 ha. No alcanza: faltan 95 ha. Opciones: un segundo conjunto, una rastra más ancha con un tractor de mayor potencia o turnos adicionales con relevo de operador.

    separador

    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Maquinaria especializada para ladera: concepto y función

    .row.align-items-center.mt-4
      .col-lg-8.mb-4.mb-lg-0
        p La maquinaria especializada para ladera comprende equipos adaptados para realizar labores en terrenos inclinados, donde la pendiente y los accesos pueden limitar el uso de tractores convencionales. Incluye determinados modelos de tractores de bajo perfil, tractores isodiamétricos, motocultores, portaherramientas y equipos de orugas.
        p Su función es facilitar la mecanización y reducir el esfuerzo físico de los agricultores. Según el modelo, incorpora características como centro de gravedad bajo, mayor separación entre ruedas, dimensiones compactas o sistemas de rodaje que favorecen la estabilidad y la tracción.
        .bg-1.p-4(data-aos="fade-down")
          p.mb-0 La selección debe considerar la pendiente, las condiciones del suelo, el implemento y los límites del fabricante. Estas características no garantizan una operación segura en cualquier terreno.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/t3/panel-34.png" style="width: 396px").m-auto

    p.mt-4 La siguiente tabla presenta los principales tipos de maquinaria utilizados en ladera, sus características y aplicaciones orientativas:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 6.
          span Tipos de maquinaria para ladera

        .tabla-a.tabla--t3(data-aos="fade-down")
          table
            thead
              tr
                th Tipo
                th Característica
                th Aplicación
            tbody
              tr
                td Motocultor.
                td Un eje y conducción a pie; dimensiones compactas.
                td Preparación de suelos en lotes pequeños y transporte con accesorios autorizados.
              tr
                td Tractor de bajo perfil.
                td Altura reducida y, según el diseño, centro de gravedad bajo y vía ancha.
                td Labores en frutales y cultivos con restricciones de altura, en pendientes admitidas por el fabricante.
              tr
                td Tractor isodiamétrico.
                td Ruedas de igual diámetro; puede incorporar dirección articulada o ruedas directrices.
                td Labores en espacios reducidos y terrenos inclinados, según la configuración del modelo.
              tr
                td Porta-herramientas.
                td Plataforma autopropulsada que admite diferentes implementos.
                td Aplicación de productos, corte de vegetación y transporte, según sus accesorios y capacidades.
              tr
                td Minioruga.
                td Equipo compacto con rodaje de orugas.
                td Labores y transporte donde se requiera tracción, previa evaluación de la pendiente y la capacidad portante del suelo.

    separador

    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5 Operación y aplicación de la maquinaria de ladera

    .row.align-items-center.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p La operación en ladera exige evaluar previamente la pendiente, las condiciones del suelo y la estabilidad del conjunto tractor–implemento. Aunque el trabajo siguiendo las curvas de nivel puede contribuir a reducir la erosión, puede aumentar el riesgo de vuelco lateral. Por ello, la dirección de los recorridos debe establecerse conforme a las condiciones del terreno y las instrucciones del fabricante.
        .cajon.color-primario.p-4.mt-4(data-aos="fade-down")
          p.mb-0 Las aplicaciones pueden incluir preparación de suelos, corte de vegetación, aplicación de productos y transporte de insumos y cosechas, siempre con equipos adecuados para cada labor. Cuando la pendiente o las condiciones del terreno excedan los límites de operación, deben considerarse alternativas manuales u otras soluciones adaptadas, junto con prácticas de conservación del suelo.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/t3/f7.png" style="width: 292px").m-auto

    .row.mt-4
      .col-lg-9
        p.mb-0 Las precauciones incluyen reducir la velocidad, evitar giros bruscos, mantener los implementos a la altura indicada y reconocer zanjas, piedras y cambios de pendiente. La vía de las ruedas puede ampliarse cuando el diseño y el fabricante lo permitan. En tractores equipados con estructura de protección antivuelco, esta debe mantenerse en su posición de protección y utilizarse junto con el cinturón de seguridad.

    .row.mt-4
      .col-lg-9
        p.mb-0 La siguiente imagen resume las principales precauciones para operar maquinaria en ladera y los riesgos que estas medidas ayudan a prevenir o reducir:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 4.
          span Precauciones en la operación de maquinaria en ladera
        figure(data-aos="fade-down")
          img.d-block.d-md-none.m-auto(src="@/assets/curso/temas/t3/figura-4-m.svg" alt="" style="width: 380px")
          img.d-none.d-md-block(src="@/assets/curso/temas/t3/figura-4.png" alt="Figura 4. Cinco precauciones para operar maquinaria en ladera: respetar el límite de pendiente del fabricante, ampliar la vía de las ruedas cuando el fabricante lo permita, trabajar despacio y sin giros bruscos, usar la estructura antivuelco con el cinturón abrochado y reconocer el terreno a pie. Cada medida se asocia con el riesgo que previene o reduce, desde el vuelco lateral hasta la caída en zanjas." style="width: 1020px").m-auto

    separador

    #t_3_6.titulo-segundo.color-acento-contenido
      h2 3.6 Comprar, alquilar o contratar el servicio

    p.mt-4 El acceso a la maquinaria agrícola puede realizarse mediante compra, alquiler o contratación del servicio. Cada alternativa implica diferentes inversiones, responsabilidades y posibilidades de organización del trabajo. La elección depende de la frecuencia de uso, el área por atender, los recursos disponibles y la necesidad de completar las labores en el momento oportuno. A continuación, se detalla en qué consiste cada una:

    .row.justify-content-center.mt-4
      .col-lg-10
        AcordionA.acordion--t2(tipo="b" clase-tarjeta="tarjeta--acordion-t2")
          .div(titulo="Comprar")
            p Comprar significa adquirir la maquinaria y asumir su operación, mantenimiento y conservación. Permite organizar su utilización con mayor autonomía y controlar directamente los ajustes, las reparaciones y las condiciones de trabajo. Sin embargo, la disponibilidad también depende del estado del equipo y de contar con personal para operarlo.
            p.mb-0 Esta alternativa exige una inversión inicial y genera costos fijos, como depreciación, seguros y almacenamiento, aunque la máquina no trabaje. A estos se suman combustible, mantenimiento y otros costos asociados al uso. La compra puede resultar conveniente cuando existe una utilización suficiente para distribuir los costos entre una mayor superficie trabajada.
          .div(titulo="Alquilar")
            p Alquilar permite utilizar maquinaria durante un periodo acordado sin adquirirla. Reduce la inversión inicial y ofrece flexibilidad para atender necesidades temporales. También puede facilitar el acceso a equipos actualizados, dependiendo de la oferta disponible.
            p.mb-0 Su principal limitación es la disponibilidad durante las temporadas de mayor demanda. Antes de elegir esta alternativa, es necesario verificar el estado del equipo y acordar las condiciones de entrega, transporte, operación y mantenimiento. Las responsabilidades sobre combustible, daños y reparaciones deben quedar claramente establecidas.
          .div(titulo="Contratar el servicio")
            p Contratar el servicio consiste en encargar a un tercero la ejecución de una labor con su maquinaria y personal. Evita la inversión en la compra del equipo y, generalmente, deja al prestador la responsabilidad de su operación y mantenimiento. Puede ser una opción adecuada cuando el uso es ocasional o no se dispone de operadores y capacidad de mantenimiento.
            p La programación depende de la disponibilidad del contratista, lo que puede limitar el control sobre la fecha de ejecución. Por ello, deben acordarse el alcance del servicio, los parámetros de calidad, la tarifa y los plazos. El resultado requiere seguimiento para comprobar que la labor cumpla lo contratado.
            p.mb-0 Para comparar las alternativas, se calcula el costo por hectárea sobre una misma base de trabajo y calidad. En la maquinaria propia, al aumentar la superficie atendida, los costos fijos se distribuyen entre más hectáreas. El área de indiferencia representa la superficie anual en la que dos alternativas tienen el mismo costo bajo determinados supuestos.

    p.mt-4 La decisión final debe integrar el costo, la oportunidad de la labor, la disponibilidad de equipos y personal y las responsabilidades asumidas. Así, la alternativa elegida debe permitir atender las necesidades productivas con una carga económica y operativa acorde con los recursos de la explotación.

    .row.justify-content-center.mt-4
      .col-lg-10
        .bloque-ejemplo(data-aos="fade-down")
          .row.g-0.align-items-stretch
            .col-lg-3
              figure.h-100.m-0
                img.w-100.h-100.object-fit-cover(src="@/assets/curso/temas/t3/f13.png")
            .col-lg-9
              .p-4.p-md-5
                figure
                  img(src="@/assets/curso/temas/t3/ic4.svg" style="width: 80px")
                p.mt-3.mb-0
                  b Ejemplo resuelto: área de indiferencia entre comprar y contratar
                p.mb-0 Una sembradora propia tiene costos fijos anuales de $18.000.000 y un costo variable de $35.000 por hectárea (incluido el tractor por hora). El servicio contratado cuesta $95.000 por hectárea. El área de indiferencia se obtiene cuando 18.000.000 + 35.000 × A = 95.000 × A, es decir, A = 18.000.000 / (95.000 − 35.000) = 300 ha. Si la finca siembra menos de 300 ha al año, conviene contratar; si siembra más, la compra resulta más económica, siempre que se cuente con operadores y capacidad de mantenimiento.

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.p-4(data-aos="fade-down")
          p.mb-0
            b Para reflexionar
          p.mb-0 Conviene preguntarse si en las fincas de ladera de la región se usan tractores diseñados para terreno plano. La maquinaria inadecuada es una de las principales causas de vuelcos en zonas de montaña.

    p.mt-4 Para finalizar, la siguiente figura muestra la secuencia para seleccionar el tractor y el implemento adecuados:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 5.
          span Ruta de selección de maquinaria agrícola
        figure(data-aos="fade-down")
          img.d-block.d-md-none.m-auto(src="@/assets/curso/temas/t3/figura-5-m.svg" alt="" style="width: 400px")
          img.d-none.d-md-block(src="@/assets/curso/temas/t3/figura-5.svg" alt="Figura 5. Ruta de cinco etapas para seleccionar maquinaria: definir labor y área, calcular capacidad, calcular potencia, verificar terreno y comparar costos. El recorrido completo lleva a un conjunto tractor-implemento adecuado técnica, operativa y económicamente." style="width: 1020px").m-auto

    p.mt-4.mb-0 Seleccionada la máquina, es necesario conocer el terreno donde trabajará y la labor que realizará, aspectos que se desarrollan en el tema siguiente.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    potencias: [
      {
        clase: 'bg-5',
        ancho: 'panel-w-299',
        icono: '@/assets/curso/temas/t3/p1.svg',
        titulo: 'Potencia del motor',
        texto:
          'Se mide en el volante del motor y representa la potencia que este entrega antes de las pérdidas en los sistemas de transmisión. Depende de su diseño y de sus condiciones de funcionamiento.',
      },
      {
        clase: 'bg-6',
        ancho: 'panel-w-315',
        icono: '@/assets/curso/temas/t3/p2.svg',
        titulo: 'Potencia a la Toma de Fuerza (TDF)',
        texto:
          'Se mide en el eje que transmite movimiento a los implementos accionados por este sistema. Depende de la potencia del motor y de las pérdidas en la transmisión hasta dicho eje.',
      },
      {
        clase: 'bg-7',
        ancho: 'panel-w-315',
        icono: '@/assets/curso/temas/t3/p3.svg',
        titulo: 'Potencia a la barra de tiro',
        texto:
          'Se determina en el punto de tiro y expresa la potencia utilizada para arrastrar el implemento. Está condicionada por el patinamiento, el peso del tractor y las características del suelo.',
      },
      {
        clase: 'bg-8',
        ancho: 'panel-w-301',
        icono: '@/assets/curso/temas/t3/p4.svg',
        titulo: 'Potencia hidráulica',
        texto:
          'Se determina a partir del caudal y la presión disponibles en las salidas hidráulicas remotas. Permite accionar cilindros y motores hidráulicos, y depende de la capacidad de la bomba y de las pérdidas del sistema.',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
