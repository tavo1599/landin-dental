<script setup>
import { ref } from 'vue';
import { Check, X } from 'lucide-vue-next';

const isAnnual = ref(false);

const plans = [
  {
    name: "Consultorio Start",
    desc: "Para empezar a ordenar tus pacientes y agenda.",
    priceMonthly: 60,  // Cubre tus costos base
    priceAnnual: 600,  // 2 meses gratis
    features: [
      "1 Usuario Doctor",
      "Agenda (Día, Semana, Mes)",
      "Registro con DNI",
      "Historia Clínica y Odontograma",
      "Dashboard Básico (Citas del día)",
      "Subida de Imágenes/Radiografías"
    ],
    missing: [
      "App Móvil para Doctor",
      "Caja Diaria y Gastos",
      "Periodontograma y Ortodoncia",
      "Configuración de Logo Propio"
    ],
    highlight: false,
    buttonVariant: "outline"
  },
  {
    name: "Clínica Pro",
    desc: "Control total: Finanzas, App móvil y Especialidades.",
    priceMonthly: 100, // Precio atractivo y rentable
    priceAnnual: 1000,
    features: [
      "Hasta 3 Doctores",
      "App Móvil (Android)", // TU FUERTE
      "Caja Diaria y Balance de Gastos", // TU FUERTE
      "Dashboard Financiero (Ingresos/Top)",
      "Periodontograma y Ortodoncia",
      "Personalización (Logo)",
      "Firma Digital"
    ],
    missing: ["Página Web Propia", "Auditoría de Seguridad"],
    highlight: true, // DESTACADO
    buttonVariant: "solid"
  },
  {
    name: "Pack Digital 360",
    desc: "Gestión avanzada + Tu página web en internet.",
    priceMonthly: 180,
    priceAnnual: 1800,
    features: [
      "Doctores Ilimitados",
      "Todo lo del Plan Clínica Pro",
      "Página Web Dental (midominio.sonriandes.com)",
      "Auditoría de Acciones (Seguridad)",
      "Reportes Avanzados Exportables",
      "Soporte VIP Prioritario"
    ],
    missing: [],
    highlight: false,
    buttonVariant: "outline"
  }
];
</script>

<template>
  <section class="py-24 bg-white relative overflow-hidden" id="pricing">
    
    <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      
      <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Planes a tu medida</h2>
        <p class="text-lg text-slate-600 mb-8">Precios en Soles (PEN). Sin contratos forzosos.</p>

        <div class="flex items-center justify-center gap-4">
          <span class="text-sm font-medium" :class="!isAnnual ? 'text-slate-900' : 'text-slate-500'">Mensual</span>
          
          <button 
            @click="isAnnual = !isAnnual"
            class="relative inline-flex h-8 w-14 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            :class="isAnnual ? 'bg-blue-600' : 'bg-slate-200'"
          >
            <span 
              class="inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-200"
              :class="isAnnual ? 'translate-x-7' : 'translate-x-1'"
            />
          </button>
          
          <span class="text-sm font-medium flex items-center gap-2" :class="isAnnual ? 'text-slate-900' : 'text-slate-500'">
            Anual
            <span class="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">
              2 Meses GRATIS
            </span>
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        <div 
          v-for="(plan, index) in plans" 
          :key="index"
          class="rounded-3xl p-8 transition-all duration-300 relative bg-white border"
          :class="[
            plan.highlight 
              ? 'border-blue-500 shadow-2xl shadow-blue-200 scale-105 z-10' 
              : 'border-slate-200 hover:border-blue-300 hover:shadow-xl',
          ]"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div v-if="plan.highlight" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
            Más Vendido
          </div>

          <h3 class="text-xl font-bold text-slate-900">{{ plan.name }}</h3>
          <p class="text-sm text-slate-500 mt-2 h-10">{{ plan.desc }}</p>

          <div class="my-6">
            <span class="text-xl font-bold text-slate-500 align-top mt-2 inline-block">S/</span>
            <span class="text-5xl font-bold text-slate-900">
              {{ isAnnual ? plan.priceAnnual : plan.priceMonthly }}
            </span>
            <span class="text-slate-500">/{{ isAnnual ? 'año' : 'mes' }}</span>
          </div>

          <a href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20el%20plan" class="block w-full py-3 px-6 rounded-xl font-bold text-center transition-all mb-8"
            :class="[
              plan.highlight 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30' 
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
            ]"
          >
            Elegir Plan
          </a>

          <ul class="space-y-4">
            <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-3 text-slate-600 text-sm">
              <Check class="w-5 h-5 text-green-500 shrink-0" />
              {{ feature }}
            </li>
            <li v-for="miss in plan.missing" :key="miss" class="flex items-start gap-3 text-slate-400 text-sm line-through decoration-slate-300">
              <X class="w-5 h-5 text-slate-300 shrink-0" />
              {{ miss }}
            </li>
          </ul>

        </div>

      </div>
      
      <p class="text-center text-slate-500 text-sm mt-12" data-aos="fade-in">
        * Precios incluyen IGV. Acceso inmediato tras el pago.
      </p>

    </div>
  </section>
</template>