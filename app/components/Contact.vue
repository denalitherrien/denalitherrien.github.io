<script setup lang="ts">
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

function submitForm() {
  // Handle form submission logic here
  alert('Form submitted!');
  console.log(contactForm.value);
  // Reset form
  contactForm.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
}
</script>

<template>
  <section id="contact" class="py-16">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Get In Touch</h2>
      <div class="max-w-2xl mx-auto">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block mb-2">Name</label>
              <input type="text" id="name" v-model="contactForm.name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            </div>
            <div>
              <label for="email" class="block mb-2">Email</label>
              <input type="email" id="email" v-model="contactForm.email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            </div>
          </div>
          <div>
            <label for="subject" class="block mb-2">Subject</label>
            <input type="text" id="subject" v-model="contactForm.subject" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label for="message" class="block mb-2">Message</label>
            <textarea id="message" v-model="contactForm.message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div>
            <button type="submit" class="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>