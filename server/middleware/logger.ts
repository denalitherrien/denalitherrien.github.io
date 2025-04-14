export default defineEventHandler((event) => {
  const start = Date.now()
  
  // Add afterResponse hook for logging
  event.node.res.on('finish', () => {
    const duration = Date.now() - start
    console.log(`[${new Date().toISOString()}] ${event.node.req.method} ${event.node.req.url} - ${event.node.res.statusCode} (${duration}ms)`)
  })
})
