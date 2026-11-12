<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    #Actividad
    ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Motores listos para el campo.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los fundamentos para seleccionar y preparar maquinaria agrícola, considerando la potencia, la compatibilidad de los implementos, las condiciones del terreno y los procedimientos de alistamiento establecidos en los manuales técnicos.',
      barajarPreguntas: true,
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la función principal de una máquina agrícola?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Almacenar energía para utilizarla durante el mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Transformar energía en trabajo útil para una labor agropecuaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Regular las condiciones del cultivo mediante registros digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir la planificación de las actividades del sistema productivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Una bomba de un implemento recibe movimiento mediante un eje cardánico conectado al tractor. ¿Qué forma de entrega de potencia utiliza?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Potencia eléctrica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Potencia hidráulica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Potencia a la barra de tiro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Potencia a la toma de fuerza.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Una rueda recorre 100 m sin carga de tracción y 80 m trabajando, con el mismo número de vueltas. ¿Cuál es el patinamiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '20 %.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '25 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '45 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '85 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué permite identificar la consulta de las curvas características del motor?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La categoría del enganche requerida por cada implemento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La presión de inflado apropiada para todas las labores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La relación entre revoluciones, potencia, par y consumo específico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La profundidad de trabajo correspondiente a cada tipo de suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué caracteriza principalmente a un implemento agrícola?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Generar siempre su propia potencia mediante un motor independiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Realizar cualquier labor sin modificar sus condiciones de ajuste.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acoplarse al tractor para ejecutar una labor específica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reemplazar los sistemas de transmisión y dirección del tractor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué diferencia la calibración del simple ajuste de un valor en el monitor?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprobar la entrega real y compararla con la cantidad objetivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Seleccionar una dosis y conservarla durante toda la temporada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cambiar el ancho de trabajo sin efectuar mediciones posteriores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Elegir la velocidad de avance según la experiencia del operador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué elemento permite modificar la nivelación longitudinal de un implemento suspendido?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La barra de tiro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El estabilizador lateral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El brazo elevador ajustable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tercer punto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Un implemento tiene una categoría de enganche compatible con el tractor. ¿Qué debe comprobarse antes de utilizarlo?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que ambos equipos sean del mismo año de fabricación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que también cumpla los requisitos de levante, estabilidad y conexiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que su ancho de trabajo coincida con el ancho del tractor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que pueda conectarse sin consultar el manual del fabricante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué criterio permite determinar si un conjunto terminará la labor dentro del periodo disponible?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color y la presentación comercial de la maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El número de accesorios ofrecidos por el distribuidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La antigüedad del modelo seleccionado para la compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La capacidad efectiva de trabajo del conjunto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Un implemento requiere una fuerza de tiro de 15 kN y trabaja a 2 m/s. ¿Qué potencia necesita en la barra de tiro?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '7,5 kW.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '30 kW.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '17 kW.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '150 kW.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Una rastra de 3 m trabaja a 6 km/h con una eficiencia de campo del 80 %. ¿Cuál es su capacidad efectiva?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1,80 ha/h.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '2,25 ha/h.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '1,44 ha/h.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '14,40 ha/h.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Una finca necesita maquinaria para una labor ocasional y no dispone de operadores ni capacidad de mantenimiento. ¿Qué alternativa responde mejor a esas condiciones?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contratar el servicio con maquinaria y personal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Alquilar únicamente el equipo sin operador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comprar maquinaria para mantenerla disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Adquirir un tractor de mayor potencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué describe la variabilidad espacial de un lote?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las diferencias de suelo o cultivo entre sus distintas zonas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Los cambios de precio de los insumos durante la temporada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las variaciones de horario entre las jornadas de los operadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las diferencias de mantenimiento entre máquinas de una flota.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cómo deben interpretarse los mapas de conductividad eléctrica aparente del suelo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como una medición directa y exclusiva de la fertilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como una recomendación automática de profundidad de labranza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como información que requiere contrastarse con muestreos y otros datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Como un reemplazo de los análisis y las observaciones de campo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el propósito principal del tráfico controlado de maquinaria?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Distribuir las huellas sobre toda la superficie cultivada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Concentrar la circulación en carriles para reducir el área transitada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Incrementar las pasadas para uniformar la resistencia del terreno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la necesidad de planear accesos y maniobras de cosecha.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Al realizar una prueba manual de humedad, ¿qué aspecto debe considerarse para interpretar el resultado?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La marca del tractor utilizado en la temporada anterior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La categoría de enganche del implemento seleccionado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La capacidad del depósito de combustible de la máquina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La textura del suelo y la profundidad de muestreo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Durante el chequeo preoperacional se encuentra una guarda faltante en un componente móvil. ¿Qué corresponde hacer?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Iniciar el trabajo y registrar la novedad al finalizar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Corregir la condición antes de poner el equipo en servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Compensar la ausencia de la guarda reduciendo la velocidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Continuar la labor si el operador tiene suficiente experiencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la referencia principal para identificar mandos, realizar revisiones y consultar procedimientos de operación del tractor?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El catálogo comercial de implementos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El registro de rendimiento del cultivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La orden de compra de la maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El manual del operador del tractor.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué distingue el alistamiento de temporada del chequeo diario?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La preparación anticipada de mantenimiento, repuestos y capacitación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La sustitución de las inspecciones durante toda la campaña.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La revisión exclusiva de los niveles antes de cada arranque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La autorización para reparar equipos sin consultar los manuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Después de acoplar, ajustar y configurar el conjunto, ¿qué permite la pasada de prueba?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar la calibración por una observación general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Autorizar el trabajo sin registrar las novedades encontradas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comprobar el funcionamiento y corregir desviaciones de la labor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Establecer una regulación permanente para cualquier terreno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia la comprensión de los conceptos y criterios técnicos necesarios para planear el uso de la maquinaria agrícola de acuerdo con las necesidades productivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
