<script setup lang="ts">
const colorMode = useState('color-mode')

function toggleTheme() {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button 
    class="theme-toggle-float" 
    @click="toggleTheme" 
    aria-label="Toggle Theme"
  >
    <svg v-if="colorMode === 'dark'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="0" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="24"></line>
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line>
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="4" y2="12"></line>
      <line x1="20" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line>
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle-float {
  all: unset;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: var(--text-color);
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-toggle-float:hover {
  background: var(--accent-color);
  color: white;
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 8px 24px rgba(128, 0, 0, 0.25);
}

.theme-toggle-float:active {
  transform: translateY(0) scale(0.95);
}

@media (max-width: 768px) {
  .theme-toggle-float {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 44px;
    height: 44px;
  }
}
</style>
