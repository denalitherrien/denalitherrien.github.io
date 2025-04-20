<template>
    <div id="default-layout" class="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <div class="flex-1 bg-background">
        <main class="container">
          <slot />
        </main>
      </div>
      <Footer />
    </div>
  </template>
  