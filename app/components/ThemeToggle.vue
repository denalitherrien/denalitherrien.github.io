<template>
  <ClientOnly>
    <Button
      variant="ghost"
      size="icon"
      @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
      class="theme-toggle"
    >
      <Icon
        :name="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'" 
        class="h-[1.2rem] w-[1.2rem] transition-all"
        aria-hidden="true"
      />
      <span class="sr-only">{{ colorMode.value === 'dark' ? 'Switch to light theme' : 'Switch to dark theme' }}</span>
    </Button>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>