<template>
    <div id="default-layout" class="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <!-- Menubar with ThemeToggle aligned to the far right -->
      <div class="border-b bg-background">
        <div class="container flex items-center justify-end h-12 px-4">
          <ThemeToggle />
        </div>
      </div>
      
      <div class="flex-1 bg-background">
        <main class="container">
          <slot />
        </main>
      </div>
      <Footer />
    </div>
  </template>
  