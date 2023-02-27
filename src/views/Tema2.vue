<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Arquitectura

    .cajon-b.cajon-end.color-acento-contenido.p-3.mb-4(data-aos="fade-right")
      p.mb-0 En muchas áreas, la energía está estrechamente relacionada con los edificios, es decir, la construcción se debe hacer usando máquinas y herramientas. Con respecto a la eficiencia energética en el diseño de edificios, han existido debates sobre el diseño de estructuras, se dice que, deben ser eficientes en cuanto al uso de recursos, de principio a fin, por tanto, esto puede repercutir en su diseño, teniendo en cuenta la necesidad de protección y cuidado ambiental.
    
    .row.justify-content-end.align-items-center.mb-4
      .col-lg-5.col-8.img-01.mb-lg-0.mb-4(style="z-index: 1" data-aos="fade-right")
        img(src="@/assets/curso/tema2/img01.png")
      .col-lg-8(style="z-index: 2" data-aos="fade-left")
        .BG04.p-4
          p.mb-0 La condición climática de las estructuras solares pasivas tiene en cuenta la lluvia, el sol y situaciones adversas en el entorno construido. Cada vez se planifican más edificaciones de bajo consumo energético, porque reduce el uso de electricidad y mejora los costos. Los edificios bioclimáticos aprovechan el poder del clima para transformar energía gratuita, ilimitada y renovable. Las percepciones sobre el consumo de energía en los edificios están cambiando, de esta manera, la forma en que se diseñan y construye también debe cambiar, es decir que, cuanto más autosuficientes sean las construcciones, mejor se adaptarán a las próximas décadas, en las cuales los costes de los recursos no renovables aumentarán.

    separador
    h3(data-aos="fade-right").mb-4 Tipo de arquitectura
    
    p.mb-5 Los sistemas eléctricos son circuitos cerrados que se utilizan para transmitir energía, para realizar diversos procesos, tareas y actividades. Aunque existen diferentes tipos de aparatos eléctricos según el voltaje o el uso, todos coinciden en que su principal función, que es la de transferir electricidad desde los elementos generadores a los consumidores. A continuación, se explican las diferencias entre estos tipos de instalación:

    .row.justify-content-center.mb-4
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img02.png")
      .col-lg-9(data-aos="fade-left")
        TabsA.color-primario
          .BGR09.p-4(titulo="Generadores")
            .h4 Instalaciones de generadores
            p.mb-0 Generadores, estos describen la energía eléctrica a partir de otras formas convertidas. Las líneas de alto voltaje se utilizan para transportar corriente alterna desde un punto de generación hasta un punto de consumo, como ciudades o plantas industriales, que pueden estar a kilómetros de distancia.
          .BGR09.p-4(titulo="Transporte")
            .h4 Instalaciones de transporte
            p.mb-0 Las líneas de transmisión son líneas eléctricas que se conectan a otros sistemas de energía. Cuando se instalan en galerías y fosos, se denominan subterráneos, aunque también pueden ser aéreos, con escalera instalada sobre postes.
          .BGR09.p-4(titulo="Transformadoras")
            .h4 Instalaciones transformadoras
            p.mb-0 Con este tipo de instalaciones, la energía eléctrica cambia algunos parámetros, se caracteriza por que son diferentes a las originales. Este es el caso de las subestaciones en las cuales se cambia el voltaje, es decir, aumenta o disminuye, se logra un uso seguro del vehículo y la tensión alcanza de seis (6) kV., a tres (3) kV.
          .BGR09.p-4(titulo="Receptoras")
            .h4 Instalaciones receptoras
            p Tanto los hogares como diversos edificios de uso industrial o comercial, utilizan este equipo receptor. A diferencia de las plantas generadoras, esta convierte la energía eléctrica en otras formas  para uso general. El receptor consta de cinco partes diferentes:
            ol.lista-ol--cuadro.lista-ol--separador.ms-5
              li
                .lista-ol--cuadro__vineta(style="background-color: #FD9927") 
                  span 1
                p.mb-0 #[b Fuente de alimentación]: a través de esta parte, la energía externa ingresa al sistema receptor, puede ser muy diferente en el caso de las centrales (química, radio, mecánica, entre otras.), aunque la más común es la eléctrica. 
              li
                .lista-ol--cuadro__vineta(style="background-color: #FD9927") 
                  span 2
                p.mb-0 #[b Elementos de protección y seguridad]: gracias a ellos se evitan sobrecargas y cortocircuitos, ya que garantizan la salud de las personas y la integridad de los bienes. 
              li
                .lista-ol--cuadro__vineta(style="background-color: #FD9927") 
                  span 3
                p.mb-0 #[b Cableado de un sistema eléctrico]: son los alambres y cables a través de los cuales fluye la corriente a los componentes de todo el sistema, consta de varios conductores, que a su vez son principalmente construidos de cobre o aluminio, pueden transportar más corriente.
              li
                .lista-ol--cuadro__vineta(style="background-color: #FD9927") 
                  span 4
                p.mb-0 #[b Control y operación]: los interruptores y relés son los encargados de interrumpir el flujo de energía. Regula, distribuye y cambia la energía según sea necesario.
              li
                .lista-ol--cuadro__vineta(style="background-color: #FD9927") 
                  span 5
                p.mb-0 #[b Puntos consumidores]: son los receptores finales de energía y los encargados de convertirla en otro tipo, como luminosa, térmica o mecánica, entre otras.
      
    separador
    h3(data-aos="fade-right").mb-4 Clasificación red eléctrica
    
    p Las redes eléctricas se dividen en:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img03.svg")
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="BGR03A")
          div(titulo="Redes de transporte")
            p.mb-0 Transfieren energía desde la estación generadora a la subestación. En la estación auxiliar se distribuye la tensión para su posterior uso.
          div(titulo="Redes de distribución")
            p.mb-0 Distribución de electricidad a usuarios finales.
          div(titulo="Red primaria")
            p.mb-0 Consta de líneas de media tensión de cinco (5) kV., 66 kV., o 132kV. Se utilizan para transmisión o consumo industrial en redes secundarias.
          div(titulo="Red secundaria")
            p.mb-0 Se compone de líneas aéreas o subestaciones de 15 kV., y 20 kV., centros de maniobra de media a baja tensión (MT/BT), líneas de baja tensión (BT) o subterráneas. Una red de distribución secundaria puede estar dedicada a un solo usuario o compartida por múltiples.

    separador
    h3(data-aos="fade-right").mb-4 Herramientas eléctricas
    
    .cajon-b.cajon-end.color-acento-contenido.p-3.mb-4(data-aos="fade-right")
      p.mb-4 Hay señales eléctricas que se pueden registrar y medir. Por lo tanto, es importante contar con instrumentos de medición adecuados que se adapten a las tareas de quienes los operan. Cabe señalar que estas mediciones se pueden realizar con base a parámetros establecidos a través de propiedades como la presión, la corriente, la fuerza o la temperatura.
      p.mb-0 En el video que se muestra a continuación, podrá identificar, los diferentes tipos de herramientas eléctricas que pueden ser utilizadas:

    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    h3(data-aos="fade-right").mb-4 Equipos de redes eléctricas
    
    p Ahora, lo invitamos a conocer a detalle, algunos de los equipos de redes eléctricas:

    .row.justify-content-center.mb-4
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img04.png")
      .col-lg-10(data-aos="fade-left")
        TabsA.color-primario
          .BGR09.p-4(titulo="Amperímetro")
            p.mb-0 Es una unidad de medida de intensidad de corriente eléctrica, la cual forma parte de las variables de energía que corre por todos los aparatos electrónicos ya sean de corriente directa o funcionando a baterías, consta de una aguja, un resorte, una bobina y un galvanómetro formado por dos imanes permanentes, cuyo funcionamiento se basa en la fuerza magnética. La aguja está unida por un resorte helicoidal al eje de una bobina rectangular, que está suspendida por el campo magnético de un imán, es impulsada por sus polos, de modo que cuando pasa una corriente a través de ella, crea su propio campo, haciendo que la bobina gire dependiendo de la dirección y la magnitud de este amperaje. Los amperímetros tienen varias escalas. Aquí es donde entran las resistencias de derivación en serie, ya que cada una representa una escala diferente. Dado que la resistencia se coloca en paralelo con la bobina, la mayor parte de la corriente fluye a través de la resistencia y solo una pequeña parte a través de la bobina, pero esta parte sigue siendo proporcional a la corriente total.
          .BGR09.p-4(titulo="Capacímetro")
            p.mb-0 Es un instrumento de prueba utilizado para medir la magnitud o capacidad eléctrica presente en un condensador o capacitor electrolítico, o cerámico; es decir, es un equipo electrónico a través del cual se puede comprobar la capacidad que expresa tener en su descripción un condensador y determinar si éste está apto o no para su uso, son muy fáciles de operar, pero necesita saber cómo funcionan para usarlos correctamente y leer su análisis. Este dispositivo tiene una pantalla que refleja los resultados y para realizar las mediciones, tiene dos extremos dispuestos en pares de condensadores positivos y negativos, que le permite elegir una escala que produzca la carga correcta en el capacitor. Si las medidas dadas son incorrectas, se puede determinar si el condensador está funcionando o no. Las mediciones pueden dar resultados que están por debajo de la capacidad, incluidos los nuevos, ya que la energía almacenada se pierde con el tiempo.
          .BGR09.p-4(titulo="Galvanómetro")
            p.mb-0 Es un instrumento empleado para indicar el paso de corrientes eléctricas pequeñas por un circuito, así como para medir con precisión la intensidad de estas. El funcionamiento del galvanómetro se basa en un puntero conectado por resorte al eje de una bobina rectangular suspendida por la acción de dos polos opuestos de un imán permanente. La corriente a medir comienza a fluir en una bobina plana rectangular. Cuando esta se coloca en el centro del campo magnético de un imán permanente, comienza a girar sobre su eje vertical, rompiendo el resorte espiral. Dado que este movimiento es proporcional a la corriente, el movimiento de la aguja también lo es. En una escala adecuada, la aguja marca el valor actual.
          .BGR09.p-4(titulo="Multímetro")
            p.mb-0 Es un instrumento portátil de medición de magnitudes eléctricas, dispone de un selector que le permite cambiar a voltímetro, amperímetro y ohmímetro, por lo que permite medir al menos tres propiedades eléctricas. El funcionamiento y las funciones básicas del multímetro son similares a los multímetros analógicos y digitales. Después de conectar el cable negro al puerto común y el cable rojo a uno de los puertos restantes, gire la perilla para seleccionar la función y el rango apropiado, según su propósito de medición. Por ejemplo, si se establece en 20 V CC, la unidad detectará voltajes de CC de hasta 20 V. Para leer voltajes más bajos, se debe seleccionar el rango de mV. El conductor de prueba debe tocar la terminal o el cable bajo prueba para que se realice la medición. El voltaje resultante se muestra en la pantalla. Los multímetros son seguros para usar en circuitos activos, siempre que la corriente no exceda la capacidad máxima del dispositivo. Asimismo, no se debe tocar los cables de prueba durante el funcionamiento, puede causar una descarga eléctrica.
          .BGR09.p-4(titulo="Osciloscopio")
            p.mb-0 Es un instrumento portátil de medición de magnitudes eléctricas, dispone de un selector que le permite cambiar entre trabajar como voltímetro, amperímetro y ohmímetro, por lo que permite medir al menos tres propiedades eléctricas. Los osciloscopios tienen principalmente tres tipos de controles, que actúan como indicadores para ajustar la señal de entrada para que pueda medirse en la pantalla. De esta forma se puede ver la señal medida por el osciloscopio, esto se llama técnica y se usa para monitorear la señal que desea medir. El primer control configura el eje X (horizontal) para evaluar fracciones de tiempo (segundos, milisegundos, microsegundos, dependiendo de la resolución del dispositivo). El segundo ajusta el eje Y (vertical) controlando el voltaje de entrada (voltios, milivoltios, microvoltios, dependiendo de la resolución del dispositivo). El tercer control es la configuración del generador (o #[i trigger] en inglés). Esto permite la sincronización de señales que se repiten periódicamente utilizando sus características como referencia. Se utilizan varios tipos de disparadores, siendo el más común el flanco ascendente o descendente de una señal, en el cual, se aplica el voltaje de disparo y si el borde sube o baja. Estas restricciones definen valores de escala para la cuadrícula de la pantalla, permiten saber cuánto representa cada cuadrado de la pantalla y medir los valores de la señal en voltaje, frecuencia o ciclos.

</template>

<script>
export default {
  name: 'Tema2',
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
