<script setup>
import { ref } from 'vue';
import { Plus, Minus } from 'lucide-vue-next';

const openIndex = ref(null);

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const faqs = [
  {
    question: "¿Los mensajes de WhatsApp se envían solos?",
    answer: "El sistema funciona como tu asistente personal: te genera una lista diaria de quiénes tienen cita o cumpleaños y te prepara el mensaje. Tú solo das un clic para enviar. Esto evita que WhatsApp bloquee tu número por spam."
  },
  {
    question: "¿La App funciona si no tengo internet?",
    answer: "Nuestra tecnología es 100% en la nube para asegurar que tus datos estén siempre sincronizados entre tu celular y la computadora. Requiere conexión a internet (Wi-Fi o Datos)."
  },
  {
    question: "¿Puedo personalizar la Historia Clínica?",
    answer: "Contamos con 3 plantillas profesionales validadas por especialistas: General, Odontopediatría y Ortodoncia. Cubren el 99% de los casos clínicos necesarios."
  },
  {
    question: "¿Qué pasa si necesito ayuda?",
    answer: "Al ser un servicio exclusivo, tendrás contacto directo con el equipo de ingeniería. No hablarás con robots, sino con las personas que crearon el sistema."
  },
  {
    question: "¿Cómo funciona el periodo de prueba?",
    answer: "Tienes 7 días de acceso total al Plan Profesional (incluyendo la App). No te pedimos tarjeta de crédito para empezar. Si te gusta, eliges tu plan al finalizar."
  }
];
</script>

<template>
  <section class="py-24 bg-white relative overflow-hidden" id="faq">
    
    <div class="absolute -left-20 top-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

    <div class="max-w-4xl mx-auto px-4 relative z-10">
      
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-5xl font-bold text-slate-900 mb-4">¿Tienes dudas?</h2>
        <p class="text-lg text-slate-600">Resolvemos las inquietudes más comunes de nuestros doctores.</p>
      </div>

      <div class="space-y-4" data-aos="fade-up" data-aos-delay="200">
        
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-slate-200 rounded-2xl bg-white transition-all duration-300"
          :class="openIndex === index ? 'shadow-lg border-blue-200 ring-1 ring-blue-100' : 'hover:border-blue-300'"
        >
          <button 
            @click="toggle(index)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-transparent"
          >
            <span class="text-lg font-bold text-slate-800">{{ faq.question }}</span>
            <span 
                class="p-2 rounded-full transition-all duration-300 ease-in-out shrink-0 ml-4" 
                :class="openIndex === index ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'"
            >
              <Minus v-if="openIndex === index" class="w-5 h-5" />
              <Plus v-else class="w-5 h-5" />
            </span>
          </button>

          <div 
            class="grid transition-[grid-template-rows] duration-300 ease-out"
            :class="openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
                <div class="px-6 pb-6 text-slate-600 leading-relaxed border-t border-transparent" :class="openIndex === index ? 'border-slate-100 pt-4' : ''">
                    {{ faq.answer }}
                </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>