<template>
  <div id="about" class="font-['Segoe_UI'] max-w-4xl mx-auto px-5 py-6 leading-6 overflow-x-hidden flex-grow-1">
    <!-- Name Header with HTML-style brackets -->
    <div class="my-10 relative">
      <div class="flex items-center justify-start flex-nowrap font-['JetBrains_Mono']">
        <span class="animate-in text-[120px] font-bold text-slate-800 leading-[0.8] m-0 p-0">&lt;</span>
        <span class="animate-in text-[60px] font-bold text-blue-500 leading-none m-0 p-0">{{ portfolio.name }}</span>
        <span class="animate-in text-[120px] font-bold text-slate-800 leading-[0.8] m-0 p-0">&gt;</span>
      </div>
    </div>

    <!-- About Me Content -->
    <div class="animate-in place-self-end">
      <h2 class="text-xl font-semibold text-primary border-b-2 border-blue-500 pb-2.5">About Me</h2>
      <div class="mt-5">
        <div v-for="about in portfolio.about" :key="about.text" class="leading-7 ">
          <p class="py-4">{{about.text}}</p>
        </div>
      </div>
    </div>

    <!-- Closing Tag -->
    <div class="my-8 relative">
      <div class="flex items-center justify-start flex-nowrap font-['JetBrains_Mono']">
        <span class="animate-in text-[120px] font-bold text-slate-800 leading-[0.8] m-0 p-0">&lt;/</span>
        <span class="animate-in text-[60px] font-bold text-blue-500 leading-none m-0 p-0">{{ portfolio.name }}</span>
        <span class="animate-in text-[120px] font-bold text-slate-800 leading-[0.8] m-0 p-0">&gt;</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue';
import portfolioData from "~/data/portfolioData.js";

const portfolio = ref(portfolioData);

// Add a class after component is mounted to trigger animations
onMounted(() => {
  setTimeout(() => {
    const elements = document.querySelectorAll('.animate-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-x-0');
      }, index * 150);
    });
  }, 100);
});
</script>

<style scoped>
/* We only keep the animation styles since Tailwind can't handle dynamic classes */
.animate-in {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease-out;
}

.animate-in.opacity-100.translate-x-0 {
  opacity: 1;
  transform: translateX(0);
}

/* Stagger content animation slightly */
.content.animate-in {
  transition-delay: 0.6s;
}
</style>