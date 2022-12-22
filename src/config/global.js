export default {
  global: {
    componenteFormativo: 'Documentación técnica de la instalación eléctrica',
    descripcionCurso:
      'Una instalación eléctrica es un conjunto de circuitos destinados a suministrar energía a edificios, inmuebles, oficinas, entre otros. Incluye los dispositivos y microsistemas necesarios para el funcionamiento de la habitación y permite conectar varios dispositivos eléctricos. El equipo define un conjunto de sistemas que tienen la capacidad de transmitir, distribuir y recibir energía para su uso posterior.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipo de planos eléctricos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de símbolos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Nomenclatura en planos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Arquitectura',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipo de arquitectura',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación red eléctrica',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas eléctricas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Equipos de redes eléctricas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Circuitos eléctricos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Cálculos eléctricos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Normas de seguridad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tipo de cableado eléctrico',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Funcionamiento de tableros eléctricos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Trazado línea eléctrica',
            hash: 't_3_5',
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
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: 'Tablero eléctrico, montaje y cableado - paso a paso',
      referencia:
        'AGT Power (24 de septiembre de 2018). Tablero eléctrico, montaje y cableado - “paso a paso. [Archivo de video]. YouTube. Consultado de:',
      tipo: 'Video',
      link: 'https://youtu.be/TYZiJ95dhvc',
    },
    {
      tema: 'Reglamento técnico de Instalaciones Eléctricas - RETIE',
      referencia:
        'Ministerio de minas y energía.  (2017). Página web institucional. Reglamento Técnico de Instalaciones Eléctricas - RETIE. Consultado de:',
      tipo: 'Documento',
      link:
        'https://www.minenergia.gov.co/es/misional/energia-electrica-2/reglamentos-tecnicos/reglamento-t%C3%A9cnico-de-instalaciones-el%C3%A9ctricas-retie/',
    },
    {
      tema: 'Tutorial de cómo usar el multímetro',
      referencia:
        'Rincón Ingenieril. (3 de septiembre de 2016) Cómo usar el multímetro - Tutorial [Archivo de video]. YouTube. Consultado de:',
      tipo: 'Video',
      link: 'https://youtu.be/WzsQDgi9GlY',
    },
    {
      tema: 'Montaje estructura en bandera Redes de Distribución SENA Cúcuta',
      referencia:
        'Servicio nacional de aprendizaje [SENA]. (31 de enero de 2019). Montaje estructura en bandera Redes de Distribución SENA Cúcuta [Archivo de video]. YouTube. Consultado de:',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=mWlL7zw5K2s&ab_channel=ElectricidadSENA',
    },
  ],
  glosario: [
    {
      termino: 'AC',
      significado:
        'la abreviatura se refiere a corriente alterna. Es la propiedad de una corriente eléctrica que exhibe un cambio de amplitud sinusoidal con el tiempo y la frecuencia. Esto también se aplica a la tensión.',
    },
    {
      termino: 'Anomalía',
      significado:
        'información que se reporta como parte de la lectura de medidores, en sitio y análisis de consumos y proceso crítico mediante el uso de códigos previamente establecidos por la empresa, los cuales describen los problemas o situaciones encontradas en la cuenta producto de la lectura y/o consumo análisis.',
    },
    {
      termino: '<em>Breakers</em>',
      significado:
        'es el término en inglés para un disyuntor, que funciona cerrando o interrumpiendo automáticamente la corriente en un circuito para proteger las instalaciones y las personas de daños causados por cortocircuitos o sobrecargas.',
    },
    {
      termino: 'Controlador lógico programable (PLC por sus siglas en inglés)',
      significado:
        'es principalmente una computadora utilizada en la tecnología de automatización industrial, para monitorear máquinas de producción o situaciones mecánicas.',
    },
    {
      termino: 'Efecto <em>Joule</em>',
      significado:
        'este es un fenómeno en el que los electrones que se mueven en una corriente eléctrica chocan con el material que atraviesan. La energía cinética de los electrones se convierte luego en energía térmica, calentando el material a través del cual viajan.',
    },
    {
      termino: 'Electrones',
      significado:
        'son partículas que tienen una carga eléctrica negativa, forman una capa exterior de átomos reactivos, que interactúan entre sí y forman enlaces químicos que mantienen unidas a las moléculas. El flujo de electrones entre dos puntos crea una corriente eléctrica.',
    },
    {
      termino: 'Kilovoltio (VK por sus siglas en inglés)',
      significado: 'Medida de potencia eléctrica.',
    },
    {
      termino: 'Línea general de alimentación (LGA)',
      significado:
        'enlace entre la caja general de protección con la centralización de contadores.',
    },
    {
      termino:
        'Reglamento electrotécnico de baja tensión (REBT por sus siglas en inglés)',
      significado:
        'conjunto de normas o instrucciones técnicas complementarias que establecen la regulación en cuanto a instalaciones eléctricas de baja tensión en España.',
    },
    {
      termino: 'Resistencia',
      significado:
        'la propiedad del material para resistir el paso de la corriente eléctrica. La resistencia depende de la longitud del cable, su material, sección transversal y temperatura. La unidad de resistencia es Ω.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aura energía (12 de diciembre de 2022). Página web de la organización. Red de distribución de energía eléctrica. Recuperado de:',
      link: 'https://www.aura-energia.com/red-distribucion-energia-electrica/',
    },
    {
      referencia:
        'Cediel, P. (2009 ). Coordinación de protecciones. Schneider Electric. Recuperado de:',
      link: 'https://docplayer.es/2752298-Coordinacion-de-protecciones-bt.html',
    },
    {
      referencia:
        'Control real español (2015 ). Página web de la organización. Consultado en:',
      link:
        'https://controlreal.com/es/nomenclatura-de-planos-electricos/#:~:text=Clases%20para%20la,filtros%20de%20cristal',
    },
    {
      referencia:
        'Essa- EPM (2020). Redes aéreas de baja tensión. Documento de trabajo.  Recuperado de:',
      link:
        'https://www.essa.com.co/site/Portals/proveedores/normas-tecnicas-transicion/ntr-03-redes-aereas-de-baja-tension.pdf?ver=2021-10-19-162943-823',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (2022). Reglamento técnico de instalaciones eléctricas. Recuperado en:',
      link: 'https://www.minenergia.gov.co/documents/9024/9703.pdf',
    },
    {
      referencia:
        'Torres B. M. (2014 ) Tecnología por proyectos. Xunta de Galicia.  Recuperado de:',
      link:
        'https://www.edu.xunta.gal/espazoAbalar/sites/espazoAbalar/files/datos/1464947843/contido/315_elementos_de_proteccin.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
