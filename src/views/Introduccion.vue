<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-start.mt-4(data-aos="fade-down")
      .col-auto.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/intro/icono-tractor.svg" style="width: 84px")
      .col
        p.mb-0 La planeación de la maquinaria agrícola requiere comprender las características de las máquinas y los implementos, sus capacidades y las condiciones en las que se desarrollarán las labores mecanizadas. La potencia disponible, la compatibilidad de los equipos y las características del terreno influyen en la selección de los recursos y en la preparación del trabajo.

    .row.align-items-start.mt-4(data-aos="fade-down")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/intro/foto-1.png" style="width: 396px").m-auto
      .col-lg-8
        .cajon.color-secundario.p-4
          p.mb-0 En este contexto, conocer las fuentes de potencia del tractor, el patinamiento y el funcionamiento de los sistemas auxiliares permite establecer criterios para aprovechar la maquinaria. Asimismo, el análisis de la humedad del suelo, la pendiente y la capacidad de trabajo contribuye a seleccionar los equipos y organizar las labores según las necesidades de producción.
        p.mt-4 A lo largo de este componente formativo se abordarán las máquinas agrícolas y el aprovechamiento de la potencia, los equipos e implementos y su enganche, la selección de maquinaria, las condiciones del terreno y el alistamiento conforme a los manuales técnicos. Estos conocimientos permitirán fundamentar las decisiones de planeación y preparar el conjunto tractor–implemento para su posterior operación.
        p.mb-0 Para complementar la comprensión de los temas abordados, se recomienda acceder al siguiente video:

    figure.mt-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
