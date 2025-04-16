<template>
  <div class="font-['Segoe_UI'] max-w-4xl mx-auto px-5 py-6 leading-6 overflow-x-hidden">
    <!-- Name Header with HTML-style brackets -->
    <div class="my-10 relative">
      <div class="flex items-end justify-start flex-nowrap font-['JetBrains_Mono']">
        <span class="animate-in text-[120px] font-bold text-slate-800 leading-[0.8] m-0 p-0">&lt;</span>
        <span class="animate-in text-[60px] font-bold text-blue-500 leading-none m-0 p-0">{{ portfolio.name }}</span>
        <span class="animate-in text-[120px] font-bold text-slate-800 leading-[0.8] m-0 p-0">&gt;</span>
      </div>
    </div>

    <!-- About Me Content -->
    <div class="animate-in p-8 rounded-lg shadow-md">
      <h2 class="text-slate-800 border-b-2 border-blue-500 pb-2.5">About Me</h2>
      <div class="mt-5">
        <div class="leading-7">
          <p class="rounded-lg bg-blue-100 text-gray-800 p-4 mb-4">Hello! Denali Therrien, a passionate developer and
            designer with over 2 years of experience
            creating intuitive and impactful digital experiences. I believe in combining creative thinking
            with technical expertise to build solutions that not only work flawlessly but also delight users.</p>

          <p class="mb-4">My fascination with technology began in the computer labs at school,
            where I developed my skills through creative exploration and pushing
            system boundaries—discovering how things worked by occasionally finding their limits.
            Since then, I've cultivated my skills across various domains of software development,
            from frontend frameworks to backend architectures. I'm particularly interested
            in user experience design and accessibility, ensuring that everything I create
            can be enjoyed by everyone.</p>

          <p class="mb-4">When I'm not coding, you can find me reading my latest fantasy fixation, playing
            competitive video games,
            or calculating the odds of surviving that next encounter in my D&D campaign.
            I believe in continuous learning and am currently enjoying web development</p>
        </div>
      </div>
    </div>

    <!-- Closing Tag -->
    <div class="my-8 relative">
      <div class="flex items-end justify-start flex-nowrap font-['JetBrains_Mono']">
        <span class="animate-in text-[120px] font-bold text-slate-800 leading-[0.8] m-0 p-0">&lt;/</span>
        <span class="animate-in text-[60px] font-bold text-blue-500 leading-none m-0 p-0">{{ portfolio.name }}</span>
        <span class="animate-in text-[120px] font-bold text-slate-800 leading-[0.8] m-0 p-0">&gt;</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import portfolioData from "~/data/portfolioData.js";

const portfolio = ref(portfolioData);

// Add a class after component is mounted to trigger animations
setTimeout(() => {
  const elements = document.querySelectorAll('.animate-in');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('opacity-100', 'translate-x-0');
    }, index * 150); // Stagger the animations
  });
}, 100);
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