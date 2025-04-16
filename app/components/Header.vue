<template>
  <header class="border-b bg-background">
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        <a class="font-bold text-xl" href="#">{{ portfolio.name }}</a>
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="item in navigation" :key="item.name"
             :href="item.href"
             class="transition duration-300">
            {{ item.name }}
          </a>
        </div>
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
             class="block px-3 py-2 rounded transition duration-300">
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
<!--    <nav>
      <router-link to="/">Denali Therrien</router-link>
      <router-link to="/about">About Me</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>-->
<!--    <div class="container flex items-center justify-between h-16 px-4">
      <div class="flex items-center space-x-4">
        <h1 class="text-xl font-bold text-foreground">Denali Therrien</h1>
      </div>
    </div>-->
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import portfolioData from "~/data/portfolioData";

const mobileMenuOpen = ref(false);

const navigation = ref([
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]);

const portfolio = ref(portfolioData);
</script>
