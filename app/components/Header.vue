<template>
  <header class="border-b bg-background sticky top-0 z-50">
    <nav class="shadow-md">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        <a class="font-bold text-xl" href="#">{{ portfolio.name }}</a>
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="item in navigation" :key="item.name"
             :href="item.href"
             class="transition duration-300 hover:text-primary"
             @click.prevent="scrollToSection(item.href)">
            {{ item.name }}
          </a>
        </div>
        <ThemeToggle />
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a v-for="item in navigation" :key="item.name"
             :href="item.href"
             class="block px-3 py-2 rounded transition duration-300 hover:bg-gray-100"
             @click.prevent="scrollToSection(item.href); mobileMenuOpen = false">
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import portfolioData from "~/data/portfolioData";

const mobileMenuOpen = ref(false);

const navigation = ref([
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]);

const scrollToSection = (href: string) => {
  if (href === '#') {
    // Scroll to top for home
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }

  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const portfolio = ref(portfolioData);
</script>
