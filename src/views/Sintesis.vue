<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p(data-aos="fade-down") El componente formativo aborda los fundamentos necesarios para planear la utilización de maquinaria agrícola de acuerdo con las necesidades productivas y los parámetros técnicos. Para ello, desarrolla las características y la clasificación de las máquinas, las fuentes y el aprovechamiento de la potencia, el patinamiento y la operación económica del tractor. Asimismo, comprende los equipos e implementos, sus niveles tecnológicos, los procedimientos de enganche, calibración y ajuste, y los criterios de compatibilidad y selección del conjunto. También examina las condiciones del terreno, las técnicas de monitoreo, la variabilidad espacial, el control del tráfico y el momento oportuno de las labores. Finalmente, integra el alistamiento diario y de temporada, el chequeo preoperacional y la consulta de manuales técnicos, con el propósito de fundamentar la selección y preparación de los equipos, favorecer la seguridad y contribuir al uso eficiente de los recursos y la conservación del suelo.

    figure.mt-4(data-aos="fade-down")
      img(src="@/assets/curso/sintesis.svg" alt="La síntesis presenta la planeación de la maquinaria agrícola, organizada en cinco temas: máquinas agrícolas y aprovechamiento de la potencia; equipos e implementos y su enganche al tractor; selección de máquinas, equipos y herramientas; condiciones del terreno y labor agrícola mecanizada; y alistamiento de la maquinaria y manuales técnicos." style="width: 1228px").m-auto

    .row.justify-content-center.mt-5
      .col-auto
        a.anexo(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
