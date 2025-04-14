export const useTheme = () => {
  const appConfig = useAppConfig()
  const colorMode = useState<'light' | 'dark'>('colorMode', () => 
    appConfig.theme?.dark ? 'dark' : 'light'
  )

  const toggleTheme = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
    
    // You would update your app config here in a real app
    // This is just a simple example
  }

  return {
    colorMode,
    toggleTheme,
    isDark: computed(() => colorMode.value === 'dark')
  }
}
