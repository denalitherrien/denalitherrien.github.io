<template>
  <div class="about-me-container">
    <!-- Name Header with HTML-style brackets -->
    <div class="name-header">
      <div class="name-wrapper">
        <span class="bracket animate-in">&lt;</span>
        <span class="name animate-in">Denali Therrien</span>
        <span class="bracket animate-in">&gt;</span>
      </div>
    </div>

    <!-- About Me Content -->
    <div class="content animate-in">
      <h2>About Me</h2>
      <div class="about-content">
        <div class="text">
          <p>Hello! Denali Therrien, a passionate developer and designer with over 2 years of experience
            creating intuitive and impactful digital experiences. I believe in combining creative thinking
            with technical expertise to build solutions that not only work flawlessly but also delight users.</p>

          <p>My fascination with technology began in the computer labs at school,
            where I developed my skills through creative exploration and pushing
            system boundaries—discovering how things worked by occasionally finding their limits.
            Since then, I've cultivated my skills across various domains of software development,
            from frontend frameworks to backend architectures. I'm particularly interested
            in user experience design and accessibility, ensuring that everything I create
            can be enjoyed by everyone.</p>

          <p>When I'm not coding, you can find me reading my latest fantasy fixation, playing competitive video games,
            or calculating the odds of surviving that next encounter in my D&D campaign.
            I believe in continuous learning and am currently enjoying web development</p>
        </div>
      </div>
    </div>

    <!-- Closing Tag -->
    <div class="name-header closing">
      <div class="name-wrapper">
        <span class="bracket animate-in">&lt;/</span>
        <span class="name animate-in">Denali Therrien</span>
        <span class="bracket animate-in">&gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Add a class after component is mounted to trigger animations
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-in');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('active');
        }, index * 150); // Stagger the animations
      });
    }, 100);
  }
}
</script>

<style scoped>
.about-me-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
  overflow-x: hidden; /* Prevent horizontal scrollbar during animation */
}

.name-header {
  margin: 40px 0;
  position: relative;
}

.name-wrapper {
  display: flex;
  align-items: flex-end; /* Align items to the bottom */
  justify-content: flex-start;
  flex-wrap: nowrap;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Courier New', monospace; /* Monospace font for HTML tags */
}

.closing {
  margin-top: 30px;
}

.bracket {
  font-size: 120px;
  font-weight: bold;
  color: #2c3e50;
  line-height: 0.8; /* Lower line height to adjust the bracket position */
  margin: 0; /* Remove any margin */
  padding: 0; /* Remove any padding */
}

.name {
  font-size: 60px;
  font-weight: bold;
  color: #3498db;
  line-height: 1;
  margin: 0; /* Remove margins to eliminate spacing */
  padding: 0; /* Remove padding to eliminate spacing */
}

.content {
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.about-content {
  margin-top: 20px;
}

.text {
  line-height: 1.7;
}

/* Animation styles */
.animate-in {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease-out;
}

.animate-in.active {
  opacity: 1;
  transform: translateX(0);
}

/* Stagger content animation slightly */
.content.animate-in {
  transition-delay: 0.6s;
}
</style>
