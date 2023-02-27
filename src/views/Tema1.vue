<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Planos
    
    p Un plano eléctrico es un dibujo de varios esquemas que organizan y definen una instalación eléctrica, detallando las características de los materiales y equipos disponibles, este se puede representar en uno o en más niveles. Para representarlos, es posible utilizar diferentes tipos de diseños eléctricos prescritos y estandarizados, estos, se entienden como un conjunto de conexiones eléctricas y relaciones correspondientes a través de símbolos de componentes del sistema eléctrico. En la elaboración de un plano o un esquema se suelen utilizar símbolos y figuras, así como marcas o referencias.

    separador 
    .row.justify-content-around.mb-4
      .col-lg-7.order-lg-1.order-2
        h3(data-aos="fade-right").mb-4 Tipo de planos eléctricos
        .cajon.color-acento-contenido.p-4(data-aos="flip-up")
          p.mb-0 A continuación, se describen los tipos de planos eléctricos:
      .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img01.svg")
      
    .BGR01.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.mb-4
          .col-lg-6.order-lg-1.order-2
            .h4 Alimentación general
            p.mb-0 Estos dibujos describen la fuente de alimentación y cualquier circuito adicional derivado de ella. Estos caminos alimentan los diversos componentes eléctricos y de control que componen el sistema representado. Estos planos incluyen transformadores, interruptores, fusibles, dispositivos de protección magnética (#[i breakers]), fuentes de alimentación, cables de alimentación trifásicos, entre otros.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img02.png")
        .row.justify-content-center.mb-4
          .col-lg-8.order-lg-1.order-2
            .h4 Planos de potencia
            p.mb-0 Los diagramas de energía muestran la conexión de los elementos que más energía consumen en el sistema, generalmente motores eléctricos. Suelen incluir los siguientes elementos: motores, protecciones termomagnéticas (protectores de motor), fusibles, protecciones magnéticas (cavidades), térmicas, contactores (arrancadores), variadores de frecuencia, servomotores, arrancadores suaves, alimentación trifásica, sistema de suministro, entre otros.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img03.png")
        .row.justify-content-center.mb-4
          .col-lg-4.order-lg-1.order-2
            .h4 Planos de entrada y salidas
            p.mb-0 En sistemas con controladores como los #[i programmable logic controller] (PLC), un conjunto contiene planos de entrada y salida. Las capas de entrada representan las conexiones desde el campo hasta el controlador, normalmente botones, selectores y contactos. En las fotos originales se pueden ver las conexiones que van del controlador al campo, generalmente las bobinas y las luces indicadoras.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img04.png")
        .row.justify-content-center.mb-4
          .col-lg-2.order-lg-1.order-2
            .h4 Plano de salida
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img05.png")
        .row.justify-content-center.mb-4
          .col-lg-8.order-lg-1.order-2
            .h4 Planos de mando
            p.mb-0 Los niveles de comando o control describen la lógica de comunicación del sistema. A veces, esta lógica está diseñada para controlar los componentes que se muestran en los esquemas eléctricos. Suelen incluir elementos tales como: botones, selectores, indicadores luminosos, bobinas (de válvulas o relés), contactos abiertos o cerrados (relés o sensores), entre otros.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img06.png")
        .row.justify-content-center.mb-4
          .col-lg-7.order-lg-1.order-2
            .h4 Planos de alimentación
            p.mb-0 Los diagramas de fuente de alimentación, muestran cómo ciertos elementos reciben energía de los circuitos descritos en el diagrama general. Los elementos que normalmente cubre este plan incluyen sensores, fuentes de alimentación, interfaces de operador y controles.
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img07.png")
        .row.justify-content-center.mb-4
          .col-lg-4.order-lg-1.order-2
            .h4 Planos de borneras
            p.mb-0 Estos planos muestran los detalles de conexión de cada conjunto de estaciones terminales involucradas en el sistema.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img08.png")
        .row.justify-content-center.mb-4
          .col-lg-4.order-lg-1.order-2
            .h4 Planos de armario
            p.mb-0 Muestran la distribución de elementos en los armarios.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img09.png")
        .row.justify-content-center.mb-4
          .col-lg-4.order-lg-1.order-2
            .h4 Plano de red
            p.mb-0 Es un mapa que muestra la conectividad de los nodos en diferentes redes del sistema.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img10.png")
            
    separador 
    h3(data-aos="fade-right").mb-4 Clasificación de símbolos

    .row.justify-content-center.mb-4
      .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
        .BG02.p-4
          p.mb-0 Este es el código utilizado en electrodomésticos residenciales y comerciales. <span style="color: #0B5999">#[b Los símbolos eléctricos están estandarizados y normalizados para que no encontremos diferencias en los planos eléctricos y sepamos identificar cada elemento]</span>. En algunos países, los códigos mencionados, en los edificios residenciales, pueden cambiar y no están estandarizados. Dependiendo del tipo de familia, existen más de 1.500 símbolos de los principales estándares internacionales. Los símbolos eléctricos se muestran gráficamente para cada elemento de un circuito o instalación eléctrica.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img11.png")

    separador 
    h3(data-aos="fade-right").mb-4 Nomenclatura en planos 
    
    p.mb-4 En los esquemas eléctricos, a cada símbolo que identifica un dispositivo, se le asigna un nombre en el grupo, en los otros documentos relacionados con el sistema y en el propio dispositivo (como una etiqueta adhesiva) después de la instalación en campo. Hay muchas formas de elegir un nombre, el diseño describe dos usos muy comunes, como se muestra a continuación:

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="BGR03A")
          div(titulo="Forma 1")
            p.mb-0 El nombre del símbolo consta de dos partes, clase y número. Por ejemplo, el número tres (3) en una abreviatura de Q3, que muestra inyección, se usa para distinguir la presencia de muchas unidades protectoras. En un período de tiempo, la combinación de letras múltiples es común, por ejemplo, la letra K muestra deportación o contratista (inicio) si se recolecta con M y luego se muestra en los motores KM. De acuerdo con el estándar IEC 750  (1991), el nombre debe comenzar con un guion, por ejemplo -Q3A.
          div(titulo="Forma 2")
            p.mb-0 Consta de tres partes, nombre del símbolo, número de dibujo, categoría y ubicación en el dibujo. Por ejemplo, 1Q15 se refiere al interruptor en el punto 15 del nivel 1 (el nivel suele estar dividido en secciones o cuadrantes para facilitar la colocación de elementos). En variaciones de esta forma, las posiciones en los niveles generalmente se reemplazan por números consecutivos, por ejemplo, si el nivel 1 tuviera dos teclas, se llamarían 1Q1 y 1Q2.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img12.png")
      
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 1
      span #[i Clases para la nomenclatura]
    
    .tabla-a.color-acento-contenido(data-aos="zoom-in")
      table
        caption Nota. Control real (2015). Control de planos eléctricos.
        thead(style="border-color: transparent")
          tr
            th(style="background-color: #FECA2E; width: 10%").text-center Letra
            th(style="background-color: #FECA2E; width: 45%").text-center Tipo de aparato
            th(style="background-color: #FECA2E; width: 45%").text-center Ejemplo
        tbody    
          tr
            td(style="background-color: #F6F6F6;").text-center A.
            td(style="background-color: #F6F6F6;") Grupos constructivos.<br>Partes de grupos constructivos.
            td(style="background-color: #F6F6F6;") Amplificadores, amplificadores magnéticos, láser, máser, combinaciones de aparatos.
          tr
            td(style="background-color: #FFF;").text-center B.
            td(style="background-color: #FFF;") Convertidores de magnitudes no eléctricas a magnitudes eléctricas y, al contrario.
            td(style="background-color: #FFF;") Transductores, sondas termoeléctricas, termo células, células fotoeléctricas, dinamómetros, cristales piezoeléctricos, micrófonos, pick-up, altavoces, aparatos de campo giratorio.
          tr
            td(style="background-color: #F6F6F6;").text-center C.
            td(style="background-color: #F6F6F6;") Condensadores.
            td(style="background-color: #F6F6F6;") 
          tr
            td(style="background-color: #FFF;").text-center D.
            td(style="background-color: #FFF;") Dispositivos de retardo, de memoria, elementos binarios.
            td(style="background-color: #FFF;") Conductores de retardo, elementos biestables, elementos monoestables, memorias de núcleos, registradores, memorias de discos, aparatos de cintas magnéticas.
          tr
            td(style="background-color: #F6F6F6;").text-center E.
            td(style="background-color: #F6F6F6;") Diversos.
            td(style="background-color: #F6F6F6;") Instalaciones de alumbrado, de calefacción; que no están indicadas en otro lugar de esta tabla.
          tr
            td(style="background-color: #FFF;").text-center F.
            td(style="background-color: #FFF;") Dispositivo de protección.
            td(style="background-color: #FFF;") Fusibles, descargador de sobretensión, relés de protección, disparador.
          tr
            td(style="background-color: #F6F6F6;").text-center G.
            td(style="background-color: #F6F6F6;") Generadores.
            td(style="background-color: #F6F6F6;") Generadores rotativos, transformadores de frecuencia rotativos, baterías, equipos de alimentación, osciladores.
          tr
            td(style="background-color: #FFF;").text-center H.
            td(style="background-color: #FFF;") Equipos de señalización.
            td(style="background-color: #FFF;") Aparatos de señalización ópticos y acústicos.

          tr
            td(style="background-color: #FFF;").text-center K.
            td(style="background-color: #FFF;") Relés, contactores.
            td(style="background-color: #FFF;") Contactores de potencia, contactores auxiliares, relés auxiliares, relés intermitentes, relés de tiempo, relés Reed.
          tr
            td(style="background-color: #F6F6F6;").text-center L.
            td(style="background-color: #F6F6F6;") Inductividad.
            td(style="background-color: #F6F6F6;") Bobinas de reactancia.
          tr
            td(style="background-color: #FFF;").text-center M.
            td(style="background-color: #FFF;") Motores.
            td(style="background-color: #FFF;") —
          tr
            td(style="background-color: #F6F6F6;").text-center N.
            td(style="background-color: #F6F6F6;") Amplificadores, reguladores.
            td(style="background-color: #F6F6F6;") Circuitos integrados.
          tr
            td(style="background-color: #FFF;").text-center P.
            td(style="background-color: #FFF;") Instrumentos de medición, equipos de pruebas.
            td(style="background-color: #FFF;") Instrumentos de medición, registradores y contadores, emisores de impulsos, relojes.
          tr
            td(style="background-color: #F6F6F6;").text-center Q.
            td(style="background-color: #F6F6F6;") Aparatos de maniobra para altas intensidades.
            td(style="background-color: #F6F6F6;") Interruptores de potencia, de protección, para protección de motores, automáticos, seccionadores, seccionadores bajo carga con fusibles.
          tr
            td(style="background-color: #FFF;").text-center R.
            td(style="background-color: #FFF;") Resistencias.
            td(style="background-color: #FFF;") Resistencias, potenciómetros, reostatos, shunts, resistencias, en derivación, termistores.
          tr
            td(style="background-color: #F6F6F6;").text-center S.
            td(style="background-color: #F6F6F6;") Interruptores, selectores.
            td(style="background-color: #F6F6F6;") Pulsadores, interruptores de posición y de mando, conmutador, selector, selectores rotativos, adaptadores selectores, emisores de señales.
          tr
            td(style="background-color: #FFF;").text-center T.
            td(style="background-color: #FFF;") Transformadores.
            td(style="background-color: #FFF;") Transformadores de tensión y de intensidad.
          tr
            td(style="background-color: #F6F6F6;").text-center U.
            td(style="background-color: #F6F6F6;") Moduladores, convertidores.
            td(style="background-color: #F6F6F6;") Discriminadores, convertidores de frecuencia, demoduladores, inversores, onduladores.
          tr
            td(style="background-color: #FFF;").text-center V.
            td(style="background-color: #FFF;") Válvulas, semiconductores.
            td(style="background-color: #FFF;") Válvulas de vacío, de descarga en gases, diodos, transistores, tiristores.
          tr
            td(style="background-color: #F6F6F6;").text-center W.
            td(style="background-color: #F6F6F6;") Vías de conducción, guía ondas.
            td(style="background-color: #F6F6F6;") Hilos de conexión, cables, guía ondas, acoplamientos dirigidos por guía ondas, dipolos, antenas parabólicas.
          tr
            td(style="background-color: #FFF;").text-center X.
            td(style="background-color: #FFF;") Bornes, clavijas, enchufes.
            td(style="background-color: #FFF;") Clavijas y cajas de enchufe, clavijas de pruebas, regletas de bornes, regletas de soldadura.
          tr
            td(style="background-color: #F6F6F6;").text-center Y.
            td(style="background-color: #F6F6F6;") Equipos eléctricos accionados mecánicamente.
            td(style="background-color: #F6F6F6;") Frenos, embragues, válvulas.
          tr
            td(style="background-color: #FFF; border-bottom: 10px solid #0B5999").text-center Z.
            td(style="background-color: #FFF; border-bottom: 10px solid #0B5999") Equipos de compensación, filtros limitadores.
            td(style="background-color: #FFF; border-bottom: 10px solid #0B5999") Circuitos para imitación de cables, reguladores dinámicos, filtros de cristal.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
