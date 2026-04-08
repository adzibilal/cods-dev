<script setup lang="ts">
const colorMode = useState('color-mode', () => 'dark')

// Initialize theme
if (import.meta.client) {
  const saved = localStorage.getItem('theme')
  if (saved) {
    colorMode.value = saved
  } else {
    // Default to dark
    colorMode.value = 'dark'
  }
}

watch(colorMode, (newVal) => {
  if (import.meta.client) {
    localStorage.setItem('theme', newVal)
    if (newVal === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}, { immediate: true })

useHead({
  script: [
    {
      id: 'color-mode-init',
      innerHTML: `
        (function() {
          const saved = localStorage.getItem('theme');
          if (saved === 'dark' || !saved) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        })();
      `,
      type: 'text/javascript'
    }
  ]
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <ThemeToggle />
  </div>
</template>

<style>
:root {
  --bg-color: #FFFFFF;
  --text-color: #1A1A1A;
  --text-secondary: rgba(26, 26, 26, 0.7);
  --border-color: #F2F2F2;
  --accent-color: #800000;
  --card-bg: #FFFFFF;
  --footer-bg: #1A1A1A;
  --footer-text: #FFFFFF;
  --gray-box: #F2F2F2;
  --hero-overlay: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.3) 70%, transparent 100%);
  --hero-glow: radial-gradient(circle at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 40%, transparent 75%);
}

html.dark {
  --bg-color: #0F0F0F;
  --text-color: #F2F2F2;
  --text-secondary: rgba(242, 242, 242, 0.7);
  --border-color: #1A1A1A;
  --accent-color: #A00000; /* Slightly brighter maroon for dark mode */
  --card-bg: #161616;
  --footer-bg: #0A0A0A;
  --footer-text: #F2F2F2;
  --gray-box: #161616;
  --hero-overlay: radial-gradient(ellipse at center, rgba(15, 15, 15, 0.85) 0%, rgba(15, 15, 15, 0.3) 70%, transparent 100%);
  --hero-glow: radial-gradient(circle at center, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 40%, transparent 75%);
}

html {
  font-family: 'Inter', system-ui, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
</style>
