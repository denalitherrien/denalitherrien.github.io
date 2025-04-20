<template>
  <div class="bg-background text-foreground flex flex-wrap justify-center">
    <AboutMe/>

    <!-- Skills Section -->
    <section id="skills" class="py-12">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12 text-primary">My Skills</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="skill in portfolio.skills" :key="skill.name"
               class="p-6 rounded-lg bg-item-1 shadow-md hover:shadow-lg transition duration-300 text-center border border-border">
            <div class="mb-3 text-accent flex justify-center">
              <font-awesome-icon :icon="skill.icon" class="h-5 w-5 text-blue-500" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-primary">{{ skill.name }}</h3>
            <p class="text-muted-foreground">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12 text-primary">Featured Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in portfolio.projects" :key="project.title"
               class="rounded-lg overflow-hidden bg-item-2 shadow-md hover:shadow-xl transition duration-300 border border-border">
            <div class="h-48 overflow-hidden relative">
              <!-- Image carousel -->
              <div class="carousel w-full h-full">
                <img
                    :src="project.images[project.currentImageIndex] || '/api/placeholder/400/320'"
                    :alt="`${project.title} image ${project.currentImageIndex + 1}`"
                    class="w-full h-full object-cover"
                />
              </div>

              <!-- Navigation arrows -->
              <div class="absolute inset-y-0 left-0 flex items-center">
                <button @click="prevImage(project)" class="p-1 rounded-full bg-black/30 text-white hover:bg-black/50">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center">
                <button @click="nextImage(project)" class="p-1 rounded-full bg-black/30 text-white hover:bg-black/50">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
              <!-- Dots indicator -->
              <div class="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                <button v-for="(image, index) in project.images" :key="index"
                        @click="setCurrentImage(project, index)"
                        class="w-2 h-2 rounded-full"
                        :class="project.currentImageIndex === index ? 'bg-white' : 'bg-white/50'">
                </button>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-primary">{{ project.title }}</h3>
              <p class="mb-4 text-muted-foreground">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in project.tags" :key="tag"
                  class="px-3 py-1 text-sm font-medium rounded-full bg-accent text-accent-foreground">
              {{ tag }}
            </span>
              </div>
              <a :href="project.link" class="font-medium inline-flex items-center text-primary hover:text-primary/80">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <!--
    <section class="py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12 text-primary">What People Say</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="testimonial in portfolio.testimonials" :key="testimonial.name"
               class="p-6 rounded-lg bg-item-3 shadow-md hover:shadow-lg transition duration-300 border border-border">
            <div class="flex items-center mb-4">
              <div class="h-12 w-12 rounded-full overflow-hidden border-2 border-primary">
                <img :src="testimonial.avatar || '/api/placeholder/100/100'" alt="Avatar"
                     class="h-full w-full object-cover">
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-primary">{{ testimonial.name }}</h3>
                <p class="text-muted-foreground">{{ testimonial.position }}</p>
              </div>
            </div>
            <p class="italic text-foreground">{{ testimonial.quote }}</p>
          </div>
        </div>
      </div>
    </section>
    -->

    <Contact/>
  </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';
import portfolioData from '../data/portfolioData';
import type {Project} from "~/data/portfolioData";
import Contact from "~/components/Contact.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

definePageMeta({
  layout: 'default'
});

const prevImage = (project: Project) => {
  if (project.images.length <= 1) return;
  project.currentImageIndex = (project.currentImageIndex - 1 + project.images.length) % project.images.length;
};

const nextImage = (project: Project) => {
  if (project.images.length <= 1) return;
  project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
};

const setCurrentImage = (project: Project, index: number) => {
  project.currentImageIndex = index;
};

const portfolio = ref(portfolioData);

</script>
