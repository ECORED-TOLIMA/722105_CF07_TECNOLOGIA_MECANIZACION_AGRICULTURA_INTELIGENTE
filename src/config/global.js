export default {
  global: {
    Name: 'Planeación de la maquinaria agrícola',
    Description:
      'El componente formativo aborda los fundamentos de la planeación de maquinaria agrícola, considerando las características de las máquinas e implementos, el aprovechamiento de la potencia, la selección y compatibilidad de equipos, las condiciones del terreno y las labores mecanizadas, así como los procedimientos de enganche, calibración y alistamiento establecidos en los manuales técnicos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Máquinas agrícolas y aprovechamiento de la potencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y características de las máquinas agrícolas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos, clasificación y nivel de tecnología',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Configuración y fuentes de potencia del tractor',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Sistemas auxiliares del motor y su relación con la operación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Relación peso-potencia, patinamiento y formas de aprovechamiento',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Curvas del motor y operación económica',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Equipos e implementos y su enganche al tractor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Equipos e implementos: concepto, características y tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Nivel tecnológico, sistemas y componentes de los implementos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Enganche, calibración y ajustes de los implementos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Enganche conjunto máquina, equipos e implementos: concepto, función y tipos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Categorías del enganche de tres puntos y compatibilidad',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Selección de máquinas, equipos y herramientas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Selección: concepto, función y clasificación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Potencia del motor y requerimientos de potencia según el implemento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Manejo y capacidad de trabajo en la selección',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Maquinaria especializada para ladera: concepto y función',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Operación y aplicación de la maquinaria de ladera',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Comprar, alquilar o contratar el servicio',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Condiciones del terreno y labor agrícola mecanizada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Condiciones del terreno: concepto, clases y variables',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de monitoreo del terreno',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Labor agrícola mecanizada: concepto, tipos y características',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Variabilidad espacial en la labor agrícola',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Control de tráfico de maquinaria: concepto, tipos y sistemas',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo:
              'Limitaciones, ventajas y aplicaciones del control de tráfico',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Humedad del suelo y momento oportuno de la labor',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Alistamiento de la maquinaria y manuales técnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Alistamiento: concepto y alcances',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Fases del alistamiento',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Chequeo preoperacional',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Manuales técnicos: concepto, tipos y criterios de alistamiento',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Mandos, controles y mantenimiento en los manuales',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Alistamiento de temporada',
            hash: 't_5_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
        nombreRuta: 'glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alistamiento',
      significado:
        'conjunto de revisiones, ajustes y preparativos que dejan la máquina lista para operar con seguridad.',
    },
    {
      termino: 'Barra de tiro',
      significado:
        'punto de enganche del tractor para arrastrar implementos y remolques.',
    },
    {
      termino: 'Calibración',
      significado:
        'medición y ajuste para comprobar que el implemento entregue la cantidad prevista de insumos.',
    },
    {
      termino: 'Capacidad de campo',
      significado:
        'superficie que una máquina trabaja por unidad de tiempo, expresada en hectáreas por hora.',
    },
    {
      termino: 'Capacidad de levante',
      significado:
        'carga que puede elevar el sistema del tractor bajo las condiciones especificadas por el fabricante.',
    },
    {
      termino: 'Chequeo preoperacional',
      significado:
        'inspección previa al uso para comprobar el funcionamiento y la seguridad de la maquinaria.',
    },
    {
      termino: 'Compactación del suelo',
      significado:
        'aumento de la densidad del suelo por reducción de sus espacios porosos.',
    },
    {
      termino: 'Eficiencia de campo',
      significado:
        'relación entre la capacidad efectiva y la capacidad teórica de trabajo, expresada en porcentaje.',
    },
    {
      termino: 'Enganche de tres puntos',
      significado:
        'sistema de acoplamiento formado por dos brazos inferiores y uno superior para sostener implementos.',
    },
    {
      termino: 'Friabilidad',
      significado:
        'condición en la que el suelo se desmenuza fácilmente sin deformarse ni pulverizarse excesivamente.',
    },
    {
      termino: 'Implemento agrícola',
      significado:
        'equipo acoplado al tractor para realizar una labor específica.',
    },
    {
      termino: 'Lastre',
      significado:
        'peso adicional que se agrega al tractor para mejorar la tracción y la estabilidad.',
    },
    {
      termino: 'Patinamiento',
      significado:
        'pérdida de avance de las ruedas motrices respecto a su giro, expresada en porcentaje.',
    },
    {
      termino: 'Toma de fuerza',
      significado:
        'eje del tractor que transmite potencia rotativa a implementos accionados.',
    },
    {
      termino: 'Variabilidad espacial',
      significado:
        'diferencias en las características del suelo o del cultivo dentro de un mismo lote.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Society of Agricultural and Biological Engineers. (2006). <em>ASAE EP496.3 FEB2006 (R2020): Agricultural machinery management.</em> ASABE.',
      link: '',
    },
    {
      referencia:
        'American Society of Agricultural and Biological Engineers. (2011). <em>ASAE D497.7 MAR2011 (R2020): Agricultural machinery management data.</em> ASABE.',
      link: '',
    },
    {
      referencia:
        'Department of Natural Resources and Environment Tasmania. (s. f.). <em>Agricultura con tráfico controlado</em> (traducción del título original). NRE Tas.',
      link: '',
    },
    {
      referencia:
        'Junta de Desarrollo de la Agricultura y la Horticultura. (s. f.). <em>Evaluación de la humedad del suelo para una labranza adecuada</em> (traducción del título original). AHDB.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015). <em>Decreto 1072 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo.</em> Función Pública.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s. f.). <em>Mecanización agrícola sostenible.</em> FAO.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Cindy Carolina Gámez Ávila',
          cargo: 'Instructora técnica',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑADOR Y DESARROLLADOR DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
