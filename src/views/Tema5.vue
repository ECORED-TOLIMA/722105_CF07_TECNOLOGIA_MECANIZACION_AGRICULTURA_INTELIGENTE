<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Alistamiento de la maquinaria y manuales técnicos

    .row.align-items-start.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t5/intro.png" style="width: 396px").m-auto
      .col-lg-8
        p Una buena labor comienza antes de ingresar al lote. La preparación de la maquinaria permite identificar condiciones que podrían afectar la seguridad, interrumpir el trabajo o disminuir la calidad del resultado. Para ello, es necesario revisar el conjunto tractor–implemento y organizar los recursos requeridos según la actividad prevista.
        .bg-1.p-4(data-aos="fade-down")
          p.mb-0 El alistamiento reúne estas verificaciones en un proceso ordenado, mientras que los manuales del fabricante proporcionan los procedimientos y parámetros específicos de cada equipo. Su consulta permite reconocer qué tareas corresponden al operador y cuáles requieren personal especializado.

    separador

    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Alistamiento: concepto y alcances

    .row.align-items-center.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p El alistamiento es el conjunto de inspecciones, verificaciones, ajustes y preparativos que se realizan sobre el tractor, el implemento y, cuando corresponda, los equipos de precisión antes de iniciar una labor. Su propósito es comprobar que el conjunto reúna las condiciones de funcionamiento, seguridad y configuración necesarias para el trabajo previsto.
        .cajon.color-primario.p-4(data-aos="fade-down")
          p.mb-0 Su alcance va más allá de revisar el motor. Incluye el estado del implemento, las conexiones, los dispositivos de protección y la disponibilidad de combustible, insumos y herramientas. Cuando se utilizan tecnologías de precisión, también comprende la comprobación del monitor, el receptor y los archivos necesarios.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/t5/f1.png" style="width: 292px").m-auto

    .row.mt-4
      .col-lg-9
        .row.align-items-start
          .col-auto
            figure
              img(src="@/assets/curso/temas/t5/ic1.svg" style="width: 84px")
          .col
            p.mb-0 Las verificaciones deben responder al equipo y a la labor. Una sembradora requiere revisar sus dosificadores y elementos de apertura y cierre del surco; una fumigadora necesita comprobar el circuito de aplicación y sus componentes. Por ello, la lista de alistamiento debe construirse a partir de los manuales correspondientes.

    .row.mt-4
      .col-lg-9
        p.mb-0 La siguiente tabla organiza los principales alcances del alistamiento y su propósito:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 8.
          span Alcances del alistamiento de la maquinaria

        .tabla-a.tabla--t5(data-aos="fade-down")
          table
            thead
              tr
                th Alcance
                th Ejemplos de verificación
                th Propósito
            tbody
              tr
                td Mecánico.
                td Niveles, fugas, filtros, presión de llantas.
                td Identificar anomalías antes del trabajo.
              tr
                td Seguridad.
                td Frenos, luces, guardas, ROPS, extintor.
                td Reducir riesgos para el operador y terceros.
              tr
                td Implemento.
                td Acople, nivelación, desgaste de piezas.
                td Preparar el conjunto para obtener la calidad prevista.
              tr
                td Electrónico.
                td Monitor, receptor, líneas guía, archivos.
                td Preparar las funciones de precisión y registro disponibles.
              tr
                td Logístico.
                td Combustible, insumos, herramientas.
                td Favorecer la continuidad del trabajo.

    separador

    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Fases del alistamiento

    p.mt-4 El alistamiento puede organizarse en seis fases que permiten avanzar desde la definición del trabajo hasta la autorización de inicio. Esta organización facilita distribuir responsabilidades y dejar evidencia de las verificaciones realizadas.

    p La explicación de cada una se detalla a continuación:

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-1.r-10.p-4.p-md-5(data-aos="fade-down")
          .lista-fases
            .lista-fases__item(v-for="(f, i) in fases" :key="'fase-'+i")
              .lista-fases__num
                span {{ i + 1 }}
              div
                p.mb-0
                  b(v-html="f.titulo")
                p.mb-0 {{ f.texto }}

    p.mt-4 Estas fases se adaptan al procedimiento de cada organización. Las novedades encontradas pueden exigir regresar a una fase anterior o solicitar la intervención del taller.

    separador

    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Chequeo preoperacional

    .row.align-items-center.mt-4
      .col-lg-8.mb-4.mb-lg-0
        p El chequeo preoperacional es la inspección que realiza el operador antes de iniciar la jornada o utilizar la máquina. Forma parte del alistamiento y permite identificar daños, faltantes o cambios respecto a su condición habitual.
        .cajon.color-primario.p-4(data-aos="fade-down")
          p.mb-0 La revisión comienza con el equipo detenido e inmovilizado. Se observa el exterior, se comprueban los niveles según el procedimiento del manual y se revisan los elementos de seguridad. Después, si las condiciones lo permiten, se efectúa el arranque desde el puesto del operador y se verifican los indicadores y las funciones autorizadas, manteniendo despejada la zona de prueba.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/t5/comp-53.png" style="width: 397px").m-auto

    p.mt-4 Si se detectan frenos deficientes, guardas faltantes u otras condiciones inseguras, el equipo no debe ponerse en servicio hasta corregirlas. El registro debe indicar el hallazgo, la acción tomada y el responsable de su atención.

    p A continuación, se relaciona una lista con los puntos de verificación del chequeo preoperacional agrupados por momento:

    .row.align-items-center.mt-4
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t5/ilustracion-53.png" style="width: 312px").m-auto
      .col-lg-9
        .bg-1.p-4(data-aos="fade-down")
          ul.lista-ul.lista-ul--compacta.mb-0
            li
              img.lista-ul__vineta-img(src="@/assets/curso/temas/t5/vineta.svg")
              b Motor apagado, alrededor:
              |  fugas, llantas, tuercas de ruedas, pasadores del implemento, guardas.
            li
              img.lista-ul__vineta-img(src="@/assets/curso/temas/t5/vineta.svg")
              b Motor apagado, niveles:
              |  aceite de motor, refrigerante, aceite hidráulico y de transmisión, combustible.
            li
              img.lista-ul__vineta-img(src="@/assets/curso/temas/t5/vineta.svg")
              b Seguridad:
              |  ROPS y cinturón, extintor, luces, espejos, señalización de vehículo lento.
            li
              img.lista-ul__vineta-img(src="@/assets/curso/temas/t5/vineta.svg")
              b Motor encendido:
              |  presión de aceite, carga, temperatura, frenos, dirección, levante hidráulico.
            li
              img.lista-ul__vineta-img(src="@/assets/curso/temas/t5/vineta.svg")
              b Equipos de precisión:
              |  encendido del monitor, señal GNSS, línea guía y archivo del lote.

    p.mt-4 Como complemento, la siguiente imagen reúne cuatro áreas de revisión que ayudan a organizar el chequeo preoperacional:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 7.
          span Chequeo preoperacional del tractor
        figure(data-aos="fade-down")
          img(src="@/assets/curso/temas/t5/figura-7.png" alt="Figura 7. Cuatro áreas del chequeo preoperacional del tractor: inspección exterior, niveles de fluidos, elementos de seguridad y equipos de precisión, cada una con sus tres puntos de verificación. Agrupa la revisión por momentos para que el operador no deje fuera ningún sistema antes de iniciar la jornada." style="width: 1020px").m-auto

    separador

    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4 Manuales técnicos: concepto, tipos y criterios de alistamiento

    .row.align-items-center.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p Los manuales técnicos son documentos elaborados por el fabricante que contienen instrucciones para utilizar, ajustar y mantener una máquina. Permiten identificar los procedimientos, parámetros y precauciones correspondientes a cada equipo. Su consulta evita aplicar prácticas que pueden funcionar en una máquina, pero resultar inadecuadas para otra.
        .bg-1.r-10.p-4(data-aos="fade-down")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t5/ic2.svg" style="width: 84px")
            .col
              p.mb-0 Antes de utilizar un manual, se debe comprobar que corresponda al modelo y la configuración disponibles. Los accesorios instalados y las versiones de los sistemas electrónicos pueden requerir instrucciones adicionales. También es importante reconocer los símbolos de advertencia y localizar los apartados relacionados con la tarea que se realizará.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/t5/f3.png" style="width: 292px").m-auto

    p.mt-4 El manual del operador es la referencia principal para el alistamiento y la operación cotidiana. Explica los mandos, las revisiones previas, los procedimientos de arranque y parada y las tareas de mantenimiento autorizadas. Los manuales del implemento y de los equipos de precisión complementan esta información con instrucciones específicas de acople, calibración y configuración.

    .bloque-texto-g.bloque-texto-g--t5.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-down")
      .bloque-texto-g__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/f4.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Entre los criterios de alistamiento se encuentran las presiones de inflado, los límites de carga, los lastres permitidos, los intervalos de lubricación y las condiciones de conexión. Estos valores deben consultarse para la situación de trabajo prevista. Si una indicación no es clara o se detectan diferencias entre el equipo y el documento, corresponde solicitar orientación al servicio técnico.

    p.mt-4 La siguiente tabla diferencia los principales manuales y su utilidad en la preparación de la maquinaria:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 9.
          span Tipos de manuales técnicos y su uso en la operación

        .tabla-a.tabla--t5(data-aos="fade-down")
          table
            thead
              tr
                th Manual
                th Contenido
                th Uso en la operación
            tbody
              tr
                td Del operador del tractor
                td Seguridad, mandos, arranque, operación, parada y mantenimiento autorizado.
                td Alistamiento y operación diaria.
              tr
                td Del implemento
                td Acople, ajustes, calibración, funcionamiento y mantenimiento.
                td Preparación y verificación de la labor.
              tr
                td De equipos de precisión
                td Configuración, compatibilidad, manejo de archivos y diagnóstico básico.
                td Preparación del monitor, guiado y registros.
              tr
                td De servicio
                td Diagnóstico especializado, reparaciones y especificaciones técnicas.
                td Intervenciones del taller o personal autorizado.

    separador

    #t_5_5.titulo-segundo.color-acento-contenido
      h2 5.5 Mandos, controles y mantenimiento en los manuales

    figure.mt-4(data-aos="fade-down")
      img(src="@/assets/curso/temas/t5/f5.png" style="width: 1228px").m-auto

    .bg-5.p-4.p-md-5(data-aos="fade-down")
      p.mb-0 Los mandos y controles son los dispositivos mediante los cuales el operador dirige el tractor y acciona sus sistemas. Su ubicación, identificación y funcionamiento varían entre modelos. Algunos equipos utilizan principalmente palancas y pedales; otros integran funciones en un apoyabrazos, una pantalla o controles electrónicos.

    p.mt-4 Antes de operar, se deben reconocer los controles y consultar su secuencia de utilización. También es necesario distinguir los indicadores que informan sobre el funcionamiento de aquellos que advierten una anomalía. Familiarizarse con un tractor nuevo requiere revisar el manual y recibir la orientación correspondiente, aunque se tenga experiencia con otros equipos.

    p Entre los controles principales se encuentran:

    SlyderF.slyder-f--t2.mt-4(columnas="col-sm-6 col-lg-4")
      .tarjeta.tarjeta--control.p-4(v-for="(c, i) in controles" :key="'ctrl-'+i")
        .row.justify-content-center
          .col-auto
            figure
              img(:src="require_src(c.icono)" style="width: 128px")
        h3.text-center.mt-3(v-html="c.titulo")
        p.text-center.mb-0 {{ c.texto }}

    .row.align-items-center.mt-4
      .col-lg-9.mb-4.mb-lg-0
        p Además de explicar los controles, los manuales establecen las tareas de mantenimiento, sus frecuencias y los productos requeridos. Estas pueden incluir lubricación, limpieza, revisión de filtros y comprobación de niveles. La periodicidad depende del modelo, las horas de uso y las condiciones de trabajo; no todas las actividades son diarias.
        .cajon.color-primario.p-4(data-aos="fade-down")
          p.mb-0 El operador debe realizar únicamente las tareas autorizadas, registrar su ejecución y reportar anomalías como fugas, ruidos o calentamientos inusuales. Los registros permiten conocer el historial del equipo y programar intervenciones antes de que una condición afecte la continuidad del trabajo.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/t5/f6.png" style="width: 292px").m-auto

    separador

    #t_5_6.titulo-segundo.color-acento-contenido
      h2 5.6 Alistamiento de temporada

    .row.align-items-start.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t5/f7.png" style="width: 396px").m-auto
      .col-lg-8
        p El alistamiento de temporada es una preparación programada antes de los periodos de mayor actividad, como la preparación del suelo, la siembra o la cosecha. A diferencia del chequeo diario, permite revisar con anticipación necesidades de mantenimiento, repuestos, configuración y capacitación.
        .bg-1.p-4(data-aos="fade-down")
          p.mb-0 Su planificación debe considerar las horas acumuladas de uso, el historial de fallas y las exigencias de la próxima campaña. Conviene programarlo con tiempo suficiente para conseguir piezas, atender reparaciones y realizar pruebas. De esta manera, las actividades pendientes no se concentran en el momento en que la maquinaria debe comenzar a trabajar.

    .row.mt-4
      .col-lg-8
        p.mb-0 Las principales áreas del alistamiento de temporada son:

    .row.justify-content-center.mt-4
      .col-lg-7
        LineaTiempoD.linea-tiempo-d--t1(data-aos="fade-down")
          .row(v-for="(a, i) in areas" :key="'area-'+i" :numero="String(i + 1)" :titulo="a.titulo")
            .col-md-12
              p.mb-0 {{ a.texto }}
      .col-lg-3.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t5/ilustracion-56.png" style="width: 292px").m-auto

    p.mt-4 El alistamiento de temporada se completa con pruebas de funcionamiento y el registro de las intervenciones realizadas. Las condiciones inseguras deben corregirse antes de autorizar el uso del equipo, y las demás novedades deben evaluarse y atenderse según su importancia. Durante la campaña, esta preparación se complementa con las revisiones diarias.

    .row.justify-content-center.mt-4
      .col-lg-10
        .bg-3.p-4(data-aos="fade-down")
          p.mb-0
            b Para reflexionar
          p.mb-0 Conviene preguntarse cuántos operadores han leído completo el manual del tractor que manejan. Muchas fallas y accidentes se deben a desconocer un control o una advertencia que estaba en el manual.

    p.mt-4 Para finalizar, la siguiente figura muestra la secuencia de fases del alistamiento de la maquinaria antes de la labor:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Figura 8.
          span Ruta del alistamiento de la maquinaria
        figure(data-aos="fade-down")
          img.d-block.d-md-none.m-auto(src="@/assets/curso/temas/t5/figura-8-m.svg" alt="" style="width: 400px")
          img.d-none.d-md-block(src="@/assets/curso/temas/t5/figura-8.svg" alt="Figura 8. Ruta de cinco fases del alistamiento de la maquinaria: planear, inspeccionar, acoplar y ajustar, configurar, y probar y liberar. El recorrido completo deja la máquina segura, ajustada y configurada para iniciar la labor." style="width: 1020px").m-auto
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    fases: [
      {
        titulo: 'Planeación',
        texto:
          'Definir la labor, el lote, el equipo, los insumos y el operador. Consultar la orden de trabajo y los manuales para identificar los parámetros y recursos necesarios.',
      },
      {
        titulo: 'Inspección',
        texto:
          'Comprobar el estado del tractor y del implemento mediante una lista de chequeo. Registrar las anomalías y determinar cuáles requieren corrección antes de continuar.',
      },
      {
        titulo: 'Acople y ajuste',
        texto:
          'Realizar el enganche y las conexiones correspondientes, verificar los seguros y regular el implemento según la labor. Incluir la nivelación y la calibración cuando sean necesarias.',
      },
      {
        titulo: 'Configuración',
        texto:
          'Preparar los sistemas electrónicos disponibles. Verificar los datos del equipo, el ancho de trabajo y, cuando corresponda, los archivos del lote y las funciones de guiado.',
      },
      {
        titulo: 'Prueba',
        texto:
          'Realizar una comprobación en condiciones controladas para observar el funcionamiento y la calidad de la labor. Corregir las desviaciones antes de ampliar el trabajo al resto del lote.',
      },
      {
        titulo: 'Liberación',
        texto:
          'Confirmar que se cumplieron los requisitos para iniciar la operación y dejar el registro correspondiente. Una firma no sustituye la corrección de condiciones inseguras.',
      },
    ],
    controles: [
      {
        icono: '@/assets/curso/temas/t5/ci1.svg',
        titulo: 'Acelerador de mano',
        texto:
          'Permite establecer un régimen de revoluciones para determinadas labores. Su regulación debe corresponder con las necesidades del trabajo y las instrucciones del fabricante.',
      },
      {
        icono: '@/assets/curso/temas/t5/ci2.svg',
        titulo: 'Selector de gama y marcha',
        texto:
          'Permite elegir la relación de transmisión y la velocidad de avance. Las condiciones para cambiar de marcha o gama dependen del tipo de transmisión.',
      },
      {
        icono: '@/assets/curso/temas/t5/ci3.svg',
        titulo: 'Control de la toma de fuerza',
        texto:
          'Conecta o desconecta el accionamiento del implemento. Su utilización exige conocer la velocidad requerida y las condiciones de conexión y parada.',
      },
      {
        icono: '@/assets/curso/temas/t5/ci4.svg',
        titulo: 'Controles del enganche',
        texto:
          'Regulan la posición del implemento y, cuando existe control de tiro, la respuesta del sistema ante variaciones del esfuerzo de tracción.',
      },
      {
        icono: '@/assets/curso/temas/t5/ci5.svg',
        titulo: 'Controles hidráulicos remotos',
        texto:
          'Accionan cilindros o motores del implemento. El operador debe identificar qué conexión corresponde a cada función y respetar los requerimientos del equipo.',
      },
      {
        icono: '@/assets/curso/temas/t5/ci6.svg',
        titulo: 'Bloqueo del diferencial',
        texto:
          'Limita la diferencia de giro entre las ruedas motrices para mejorar la tracción en determinadas condiciones. Su conexión y desconexión deben seguir las indicaciones del manual.',
      },
    ],
    areas: [
      {
        titulo: 'Tractores',
        texto:
          'Realizar el mantenimiento correspondiente al horómetro y revisar llantas, frenos, luces, conexiones y dispositivos de protección. Las intervenciones deben responder al estado del equipo y a las instrucciones del fabricante.',
      },
      {
        titulo: 'Implementos',
        texto:
          'Inspeccionar piezas de desgaste, rodamientos, cadenas, conexiones y dosificadores. Reemplazar los componentes que alcancen los límites de desgaste establecidos y efectuar los ajustes y las calibraciones necesarios para la labor prevista.',
      },
      {
        titulo: 'Equipos de precisión',
        texto:
          'Respaldar archivos y comprobar configuraciones, límites de lotes, líneas guía y comunicaciones. Revisar la estación base RTK cuando se utilice. Las actualizaciones de firmware o software deben realizarse cuando corresponda, verificando su compatibilidad y probando el funcionamiento antes de la campaña.',
      },
      {
        titulo: 'Repuestos e insumos',
        texto:
          'Verificar la disponibilidad de piezas críticas, filtros, lubricantes, combustible e insumos. Organizar su almacenamiento e identificar proveedores y tiempos de suministro para reducir interrupciones durante el trabajo.',
      },
      {
        titulo: 'Personal',
        texto:
          'Asignar equipos y responsabilidades, identificar necesidades de capacitación y revisar los procedimientos de operación, seguridad y reporte de novedades. Los operadores deben conocer las características de la maquinaria que tendrán a su cargo.',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
