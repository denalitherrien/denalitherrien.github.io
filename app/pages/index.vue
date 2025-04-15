<template>
  <div>
    <AboutMe />
    <section class="py-12">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">My Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="skill in portfolio.skills" :key="skill.name"
               class="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <div class="mb-3">
              <i :class="skill.icon" class="text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ skill.name }}</h3>
            <p class="">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in portfolio.projects" :key="project.title"
               class="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <div class="h-48 overflow-hidden">
              <img :src="project.image || '/api/placeholder/400/320'" alt="Project thumbnail"
                   class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in project.tags" :key="tag"
                      class="px-3 py-1 text-sm font-medium rounded-full">
                  {{ tag }}
                </span>
              </div>
              <a :href="project.link" class="hover:text-blue-800 font-medium inline-flex items-center">
                View Project
                <svg class="w-4 h-4 ml-1" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">What People Say</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="testimonial in portfolio.testimonials" :key="testimonial.name"
               class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div class="flex items-center mb-4">
              <div class="h-12 w-12 rounded-full bg-gray-300 overflow-hidden">
                <img :src="testimonial.avatar || '/api/placeholder/100/100'" alt="Avatar"
                     class="h-full w-full object-cover">
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-800">{{ testimonial.name }}</h3>
                <p class="text-gray-600">{{ testimonial.position }}</p>
              </div>
            </div>
            <p class="text-gray-600 italic">{{ testimonial.quote }}</p>
          </div>
        </div>
      </div>
    </section>
    <Contact />
  </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';
import portfolioData from '../data/portfolioData';
import Contact from "~/pages/Contact.vue";

definePageMeta({
  layout: 'default'
})

const portfolio = ref(portfolioData);

</script>
