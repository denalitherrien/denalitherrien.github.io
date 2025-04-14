export default defineEventHandler(async (event) => {
  // This would typically fetch from a database
  return {
    projects: [
      {
        id: 1,
        title: 'Portfolio Website',
        description: 'Personal portfolio website built with Nuxt 3',
        technologies: ['Vue', 'Nuxt', 'TypeScript'],
        image: '/images/portfolio.jpg',
        url: 'https://example.com'
      },
      {
        id: 2,
        title: 'E-commerce Platform',
        description: 'Online store with cart and checkout functionality',
        technologies: ['Vue', 'Node.js', 'MongoDB'],
        image: '/images/ecommerce.jpg',
        url: 'https://example.com/store'
      },
      {
        id: 3,
        title: 'Weather App',
        description: 'Real-time weather application using modern APIs',
        technologies: ['Vue', 'OpenWeather API', 'Tailwind CSS'],
        image: '/images/weather.jpg',
        url: 'https://example.com/weather'
      }
    ]
  }
})
