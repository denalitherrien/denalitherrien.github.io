<template>
  <div class="py-8">
    <h1 class="text-3xl font-bold mb-4 text-foreground">Welcome to My Portfolio</h1>
    
    <div class="bg-card text-card-foreground rounded-lg border p-6 shadow-sm max-w-2xl">
      <p class="mb-4">
        Thank you for visiting my portfolio website. This site is built with Nuxt.js and features a clean, accessible design that respects your theme preferences.
      </p>
      <p>
        Try the theme toggle in the menubar to switch between light and dark mode. The content on this page will automatically adjust to provide the best reading experience in either theme.
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
