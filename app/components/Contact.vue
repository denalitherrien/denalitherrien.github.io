<script setup lang="ts">
import portfolioData from '@/data/portfolioData';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"; // Import portfolio data

</script>

<template>
  <section id="contact" class="py-16">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-5">Get In Touch</h2>
      <div class="max-w-2xl mx-auto">
        <!-- Contact Information Section -->
        <div class="space-y-6 text-center">
          <div class="mb-4">
            <h3 class="text-xl font-semibold text-primary text-center">Contact Information</h3>
            <p class="text-muted-foreground mb-2">{{ portfolioData.name }}</p>
            <p class="text-muted-foreground mb-2">
              <a :href="`mailto:${portfolioData.email}`" class="text-blue-500">{{ portfolioData.email }}</a>
            </p>
            <p class="text-muted-foreground mb-2">
              <a :href="`tel:${portfolioData.phone}`" class="text-blue-500">{{ portfolioData.phone }}</a>
            </p>
          </div>

          <!-- Social Links Section -->
          <div>
            <h3 class="text-xl font-semibold text-primary text-center">Find me on:</h3>
            <div class="flex justify-center space-x-4 mt-2">
              <a v-for="link in portfolioData.socialLinks" :key="link.name" :href="link.url" class="text-blue-500 hover:text-blue-700">
                <font-awesome-icon :icon="link.icon" class="h-6 w-6 text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
