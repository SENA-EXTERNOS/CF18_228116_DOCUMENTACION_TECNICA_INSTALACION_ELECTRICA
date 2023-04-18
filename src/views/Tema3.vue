<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Circuitos eléctricos
    
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img01.jpg")
      .col-lg-8.BG05.img-02.p-4(data-aos="fade-left")
        p.mb-0 Un circuito es una serie de elementos conectados a través de los cuales puede circular una corriente eléctrica. Este es el movimiento de electrones, que debe formar el paso a través de sus elementos. Si la corriente es un circuito cerrado, solo hay un paso a través de la cadena. Siempre son cerrados, aunque en algún momento se puede abrir para interrumpir el flujo de corriente con un interruptor, botón u otro elemento del circuito.

    separador
    h3(data-aos="fade-right").mb-4 Cálculos eléctricos
    
    p Los hilos o cables eléctricos en instalaciones deben cumplir con dos reglas o condiciones que determinan su sección transversal:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img02.png")
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR05")
          div(titulo="Condición térmica")
            p.mb-0 No exceder la tensión máxima admisible que el hilo puede soportar, para que el aislamiento no se caliente y cause daños o incluso quemaduras.
          div(titulo="Condición de caída de tensión máxima")
            p No superar la máxima posible entre el inicio de la instalación y el punto más lejano.
            p.mb-0 <span style="color: #0B5999">#[b  Nota]</span>: en algunos casos también es necesario calcular la sección para tensión de cortocircuito.
          div(titulo="Explicación")
            p Cada país tiene su propia normativa de baja tensión, en España es el REBT, en Argentina es la normativa de instalaciones eléctricas en inmuebles, en Chile Nch: cifras de consumidores de baja tensión, en Perú y Venezuela, código eléctrico nacional, en México norma oficial mexicana (NOM) y código eléctrico #[i approval], en los Estados Unidos NEC (#[i National Electrical Code]), <span style="color: #0B5999">#[b entre otros (Sectoriales, 2002)]</span>.
            p.mb-0 <span style="color: #0B5999">#[b  Nota importante]</span>: si se tiene un circuito protegido por un pequeño interruptor automático (PIA) u otro elemento protector, se debe calcular las <span style="color: #0B5999">#[b secciones para las corrientes de corte del elemento protector, no de la tensión resultante del rendimiento esperado de la salida del circuito].</span>
          div(titulo="Primera condición")
            p Condición térmica. Voltaje y calor en los cables.
            p El efecto #[i Joule] calienta los cables y receptores cuando pasa una corriente a través de ellos. Cuando se quiere transmitir o distribuir energía eléctrica, todo lo que se convierte en calor a través de este efecto es una pérdida y también puede hacer que se sobrecalienten y dañen permanentemente o incluso quemar su aislamiento y provocar un incendio. Es posible que el calor no sea peligroso todo el tiempo, pero cuando se acumula lo es, ya que, al exponerse los aisladores a estas temperaturas, pierden parte de su capacidad aislante y envejecen rápidamente, haciéndolos quebradizos y casi inútiles. Esto ocurre porque los cables tienen resistencia eléctrica, que se opone al flujo de corriente a través de ellos y se convierte en parte de la energía que los electrones convierten en calor y por lo tanto en pérdida a medida que viajan a través del conductor.
    

    .bloque-texto-g.color-primario.bloque-40.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img03.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 A continuación, se describe una pérdida, esta se puede expresar como pérdida de potencia de línea (PpL) y aumenta lógicamente con la resistencia del conductor:<br>Si <span style="color: #0B5999">#[b potencia = V x I]</span>; y según la ley de Ohm <span style="color: #0B5999">#[b V = I x R]</span>.<br>Sustituyendo la fórmula de la potencia V según la ley de Ohm se obtiene: <span style="color: #0B5999">#[b Potencia = R x I2]</span>, usando esta fórmula para calcular la distribución de potencia anterior: <br><span style="color: #0B5999">#[b PpL = RL x I2]</span>.<br>Donde PpL = potencia distribuida en la línea, RL es la resistencia de la línea, I es la corriente que circula por ella. <br>No es posible modificar la tensión que circula por la línea, ya que es absorbida por los receptores. Por tanto, si se quiere conseguir bajas pérdidas y evitar este efecto nocivo del calor, se debe reducir la resistencia de los conductores.

    separador
    h3(data-aos="fade-right").mb-4 Normas de seguridad
    
    p Normas de seguridad e higiene: la electricidad significa progreso y bienestar, por lo que la intervención directa o indirecta, es ahora parte integral de todas las actividades, ya sean domésticas o industriales; pero también un peligro para las personas y sus bienes si no se dispone de los conocimientos o recursos necesarios para utilizarlos adecuadamente. En este caso, se ofrece a continuación una serie de medidas preventivas generales, relacionadas con los riesgos eléctricos que son más habituales en el entorno laboral y afectan a cualquiera que trabaje en él. Estas normas son importantes para prevenir accidentes, ya que implica riesgos, por lo que se debe conocer las normas básicas de seguridad y aplicarlas siempre. A continuación, se repasan las reglas básicas de este tipo de trabajo.
    p Las principales normas son:

    .row.justify-content-center.mb-4
      .col-xl-5.col-md-6.col-8.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.hg-01.p-3
            p.ms-5.mb-0 Es obligatorio el uso de zapatos dieléctricos. Estos zapatos aíslan del suelo, también deben ir acompañados del uso de guantes aislantes y gafas que protejan en caso de chispas.
      .col-xl-5.col-md-6.col-8.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.hg-01.p-3
            p.ms-5.mb-0 No usar ni recoger objetos metálicos cuando trabaje con electricidad. Las cadenas, los relojes o los anillos pueden causar un cortocircuito o dibujar un arco. El metal es un excelente conductor de electricidad, por lo que tocarlo provocará una descarga muy peligrosa.
      .col-xl-5.col-md-6.col-8.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.hg-01.p-3
            p.ms-5.mb-0 Usar ropa ajustada para evitar contacto y caídas.
      .col-xl-5.col-md-6.col-8.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img07.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.hg-01.p-3
            p.ms-5.mb-0 Funciona mejor sin fuente de alimentación. La mayoría de los dispositivos están distribuidos para controlar el flujo de energía con un interruptor. Si es necesario, detenga el flujo general.
      .col-xl-5.col-md-6.col-8.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img08.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.hg-01.p-3
            p.ms-5.mb-0 Calcular la potencia antes de arrancar. Utilice un comprobador de corriente fiable y seguro.
      .col-xl-5.col-md-6.col-8.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img09.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.hg-01.p-3
            p.ms-5.mb-0 No trabajar con electricidad en lugares húmedos o cerca de líquidos.
      .col-xl-5.col-md-6.col-8.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.hg-01.p-3
            p.ms-5.mb-0 Analizar el circuito y las conexiones. Antes de comenzar a trabajar, estudie la composición y las características del esquema. Esto le permite evaluar los riesgos y adaptar los estándares de seguridad al tipo de circuito con el que está trabajando.
      .col-xl-5.col-md-6.col-8.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.hg-01.p-3
            p.ms-5.mb-0 Trabajar con una sola mano si es posible. La razón es muy sencilla: durante una descarga, la electricidad entra por una mano, sale por la otra y pasa por el corazón.
      .col-xl-5.col-md-6.col-8.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.hg-01.p-3
            p.ms-5.mb-0 Al instalar dispositivos eléctricos, se debe dejar espacio para la libertad de trabajar sin problemas en el futuro. Todas las partes del circuito deben ser accesibles en todo momento.
      .col-xl-5.col-md-6.col-8.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR06.hg-01.p-3
            p.ms-5.mb-0 Las impresoras deben estar bien protegidas para que elementos externos no entren en esta zona.

      .col-lg-10.mt-4
        .cajon.color-acento-contenido.p-4(data-aos="flip-up")
          p.mb-0 Usa tus herramientas con responsabilidad. Afortunadamente, hoy en día hay todo tipo de herramientas disponibles, pero a veces se usan para fines que no fueron diseñadas. Trabaje con un conjunto completo de herramientas y no corra riesgos.

    separador
    h3(data-aos="fade-right").mb-4 Tipo de cableado eléctrico
    
    p Existen muchos tipos de cables eléctricos a la venta, a continuación, se muestran los tipos principales y más comunes:

    .BG07.p-4.mb-4(data-aos="fade-right")
      ol.lista-ol--cuadro.lista-ol--separador.ms-5
        li
          .lista-ol--cuadro__vineta(style="background-color: #FD9927") 
            span 1
          p.mb-0 #[b Unipolares]: formados por un hilo conductor.
        li
          .lista-ol--cuadro__vineta(style="background-color: #FD9927")
            span 2
          p.mb-0 #[b Multipolares]: formados por más de un hilo.
        li
          .lista-ol--cuadro__vineta(style="background-color: #FD9927")
            span 3
          p.mb-0 #[b Mangueras]: formado por dos o tres conductores rodeados de protección.
        li
          .lista-ol--cuadro__vineta(style="background-color: #FD9927")
            span 4
          p.mb-0 #[b Rígidos]: difíciles de deformar.
        li
          .lista-ol--cuadro__vineta(style="background-color: #FD9927")
            span 5
          p.mb-0 #[b Flexibles]: fáciles de deformar.
        li
          .lista-ol--cuadro__vineta(style="background-color: #FD9927")
            span 6
          p.mb-0 #[b Planos]: de forma plana.
        li
          .lista-ol--cuadro__vineta(style="background-color: #FD9927")
            span 7
          p.mb-0 #[b Redondos]: de forma redonda.
        li
          .lista-ol--cuadro__vineta(style="background-color: #FD9927")
            span 8
          p.mb-0 #[b Coaxial]: tiene un núcleo chapado en cobre, rodeado por un aislante dieléctrico.

    p En el cableado eléctrico existe un escudo tejido de cobre que rodea la capa aislante, el cual está finalmente unido por una cubierta de plástico más exterior. A continuación, se muestran algunos tipos de tejido:

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10
        img(src="@/assets/curso/tema3/img15.svg")
    
    separador
    h3(data-aos="fade-right").mb-4 Funcionamiento de tableros eléctricos
    
    p.mb-5 Los tableros son los encargados de proteger los componentes de comando y control de todos los sistemas eléctricos, desde un simple circuito doméstico hasta una máquina industrial. En estos pueden concentrarse dispositivos de conexión, maniobra, protección, que permiten que el sistema funcione en óptimas condiciones. Estas plantas deben contar con un conjunto de normas que garanticen un correcto funcionamiento y un adecuado suministro de energía. Esto significa que la seguridad de los dispositivos con placa de circuito industrial puede garantizarse si la distribución de corriente es correcta.

    .h4 Aplicaciones de los tableros eléctricos

    p Dependiendo del área al que se quiera aplicar el tablero, puede usarse en el ámbito industrial, minero o doméstico y según el uso de energía eléctrica, sus aplicaciones son las siguientes:

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10
        ImagenInfograficaB.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img16.svg')
          .row.justify-content-center(x="20%" y="85%" tooltip="Centros de carga o de uso residencial" numero="1")
            .col-lg-8.order-lg-1.order-2
              .h4 Centros de carga o de uso residencial
              p.mb-0 Es un lugar donde se pueden conectar y desconectar todos los circuitos eléctricos de una casa. Se recomienda que un electricista certificado realice la instalación. 
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img17.jpg")
          .row.justify-content-center(x="8%" y="53%" tooltip="Celdas de seccionamiento" numero="2")
            .col-lg-8.order-lg-1.order-2
              .h4 Celdas de seccionamiento
              p.mb-0 Un centro de segmento es una instalación eléctrica que se compone principalmente de una serie de celdas y dispositivos de aislamiento y protección eléctrica. Su función es conectar la red eléctrica de la empresa a las instalaciones específicas a las que da servicio. 
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img18.jpg")
          .row.justify-content-center(x="20%" y="23%" tooltip="Centro de control de motores" numero="3")
            .col-lg-8.order-lg-1.order-2
              .h4 Centro de control de motores
              p.mb-0 Los tableros eléctricos de control son soluciones esenciales a los desafíos de la ingeniería actual, implementando soluciones eficientes, flexibles y seguras. Se integran en gabinetes diseñados para diferentes tipos de ambientes, disponiendo dispositivos de protección, control, comunicación, medición y señalización para integrarse con funciones específicas y automatizar procesos industriales. 
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img19.jpg")
          .row.justify-content-center(x="51%" y="9%" tooltip="Centro de distribución de potencia" numero="4")
            .col-lg-8.order-lg-1.order-2
              .h4 Centro de distribución de potencia (PDU por sus siglas en inglés)
              p.mb-0 Tiene las ventajas de sintonización distribuida sin complejidad, y monitorear variables eléctricas. 
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img20.jpg")
          .row.justify-content-center(x="80%" y="23%" tooltip="Centro de fuerza" numero="5")
            .col-lg-8.order-lg-1.order-2
              .h4 Centro de fuerza
              p.mb-0 El centro de carga es una placa metálica que soporta almohadillas termomagnéticas para protección y desconexión de pequeñas tensiones. Todos los edificios, independientemente de su orientación, requieren electricidad para alimentar sus luces y accesorios. 
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img21.jpg")
          .row.justify-content-center(x="92%" y="53%" tooltip="Alumbrado" numero="6")
            .col-lg-8.order-lg-1.order-2
              .h4 Alumbrado
              p.mb-0 Un cable de alimentación es un elemento fabricado y diseñado para conducir electricidad. El principal material del que están hechos es el cobre (por su alta conductividad), pero también se utiliza aluminio, que es menos conductor, pero más económico que el cobre. 
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img22.jpg")
          .row.justify-content-center(x="80%" y="85%" tooltip="Subestaciones" numero="7")
            .col-lg-8.order-lg-1.order-2
              .h4 Subestaciones
              p.mb-0 Es una obra encargada de realizar conversiones de tensión, frecuencia, número de fases o enlace de dos o más circuitos eléctricos. Pueden estar cerca de centrales eléctricas, en las afueras de las áreas de consumo, o en el exterior e interior de los edificios. 
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img23.jpg")

    separador
    h3(data-aos="fade-right").mb-4 Trazado línea eléctrica
    
    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 La colocación de cables y tuberías especiales en grandes redes subterráneas es cada vez más complicada. Los efectos del terreno causados por diferentes tipos de suelo y la proximidad de otros cables hacen que el trabajo sea aún más difícil y lento. Para ello se dispone de un localizador que permite ubicar cables subterráneos de baja, media y alta tensión, así como tuberías metálicas en cualquier terreno. Además, se puede rastrear de principio a fin y conocer la profundidad de su entierro. La instalación y colocación de líneas eléctricas se puede realizar tanto en modo vivo como no vivo. Utilizando uno de sus accesorios, el #[em Arc A-Frame], se pueden encontrar fugas en el cable de tierra.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img24.png")
    
    .cajon.color-secundario.p-4(data-aos="flip-up")
      p.mb-0 Aprendiz, ha finalizado de manera satisfactoria el estudio de este componente formativo, recuerde explorar los demás recursos que se encuentran disponibles; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema3',
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
