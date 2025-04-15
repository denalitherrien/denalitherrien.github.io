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

const mobileMenuOpen = ref(false);

const navigation = ref([
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]);

const portfolio = ref({
  name: 'Denali Therrien',
  headline: 'Creative Developer & UI/UX Designer',
  introduction: 'I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. I specialize in creating applications with Vue.js and crafting beautiful user interfaces.',
  heroImage: '',
  footerTagline: 'Building digital products, brands, and experiences',
  skills: [
    { name: 'Vue.js', description: 'Front-end framework', icon: 'fab fa-vuejs' },
    { name: 'JavaScript', description: 'Programming language', icon: 'fab fa-js' },
    { name: 'Responsive Design', description: 'Mobile-first approach', icon: 'fas fa-mobile-alt' },
    { name: 'UI/UX Design', description: 'User-centered design', icon: 'fas fa-pencil-ruler' },
    { name: 'Node.js', description: 'Backend development', icon: 'fab fa-node-js' },
    { name: 'Git', description: 'Version control', icon: 'fab fa-git-alt' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS', icon: 'fas fa-paint-brush' },
    { name: 'API Integration', description: 'REST & GraphQL', icon: 'fas fa-plug' }
  ],
  projects: [
    {
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.',
      image: '',
      tags: ['Vue.js', 'Vuex', 'Tailwind CSS', 'Node.js'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A drag-and-drop task management application with real-time updates and team collaboration features.',
      image: '',
      tags: ['Vue.js', 'Firebase', 'Vuetify'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A custom portfolio website template with smooth animations and a responsive design.',
      image: '',
      tags: ['Vue.js', 'GSAP', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays forecasts based on user location with interactive maps.',
      image: '',
      tags: ['Vue.js', 'OpenWeatherAPI', 'ChartJS'],
      link: '#'
    },
    {
      title: 'Blog Platform',
      description: 'A full-featured blog platform with rich text editing, comments, and analytics.',
      image: '',
      tags: ['Vue.js', 'Nuxt.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Music Player',
      description: 'A streaming music player with playlist management and audio visualization.',
      image: '',
      tags: ['Vue.js', 'Web Audio API', 'Electron'],
      link: '#'
    }
  ],
  testimonials: [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart',
      avatar: '',
      quote: 'John delivered an exceptional website that exceeded our expectations. His attention to detail and creative approach transformed our online presence.'
    },
    {
      name: 'Michael Chen',
      position: 'Product Manager, InnovateX',
      avatar: '',
      quote: 'Working with John was a pleasure. He understood our requirements perfectly and delivered a polished product on time and on budget.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthLabs',
      avatar: '',
      quote: 'John\'s work on our web application dramatically improved user engagement. His UI/UX skills are top-notch, and he\'s incredibly responsive to feedback.'
    }
  ],
  socialLinks: [
    { name: 'Twitter', url: '#', icon: 'fab fa-twitter' },
    { name: 'GitHub', url: '#', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin' },
    { name: 'Dribbble', url: '#', icon: 'fab fa-dribbble' }
  ]
});
</script>
