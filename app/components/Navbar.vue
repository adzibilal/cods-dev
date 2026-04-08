<script setup lang="ts">
import { 
  NavigationMenuRoot, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink 
} from 'reka-ui'

const colorMode = useState('color-mode')
const isScrolled = ref(false)

if (import.meta.client) {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
}
</script>

<template>
  <nav class="navbar-wrapper" :class="{ 'is-scrolled': isScrolled }">
    <div class="navbar-container">
      <!-- Logo Section -->
      <NuxtLink to="/" class="brand-logo">
        <img 
          :src="colorMode === 'dark' ? '/logo-white.png' : '/logo-maroon.png'" 
          alt="CODS Dev" 
          class="logo-img" 
        />
      </NuxtLink>
      
      <!-- Navigation Menu -->
      <NavigationMenuRoot class="nav-root">
        <NavigationMenuList class="nav-list">
          <NavigationMenuItem class="nav-item">
            <NavigationMenuLink href="#services" class="nav-link">Services</NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem class="nav-item">
            <NavigationMenuLink href="#works" class="nav-link">Works</NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem class="nav-item">
            <NavigationMenuLink href="#process" class="nav-link">Process</NavigationMenuLink>
          </NavigationMenuItem>
          
          <div class="nav-group">
            <NavigationMenuItem class="nav-item">
              <NavigationMenuLink href="mailto:hello@cods.dev" class="nav-cta">
                Get in Touch
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenuRoot>
    </div>
  </nav>
</template>

<style scoped>
/* Reset & Reset for Headless Components */
:deep(.nav-list) {
  display: flex !important;
  flex-direction: row !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  gap: 2.5rem;
  align-items: center;
}

:deep(.nav-item) {
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* Navbar Wrapper */
.navbar-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem 0;
}

.navbar-wrapper.is-scrolled {
  background: var(--bg-color);
  opacity: 0.98;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 0;
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Brand Logo */
.brand-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.brand-logo:hover {
  transform: scale(1.02);
}

.logo-img {
  height: 34px;
  width: auto;
  display: block;
}

/* Nav Root */
.nav-root {
  display: flex;
  align-items: center;
}

.nav-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Links & Interaction */
.nav-link {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
  letter-spacing: -0.01em;
}

.nav-link:hover {
  color: var(--accent-color);
}

/* Custom indicator line */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--accent-color);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover::after {
  width: 100%;
}

/* CTA Button */
.nav-cta {
  background: var(--text-color);
  color: var(--bg-color);
  padding: 0.75rem 1.75rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.nav-cta:hover {
  background: var(--accent-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(128, 0, 0, 0.2);
}

/* Responsive Styles */
@media (max-width: 768px) {
  :deep(.nav-list) {
    gap: 1rem;
  }
  
  .nav-link {
    display: none; 
  }
  
  .nav-group {
    gap: 0.75rem;
  }
  
  .nav-cta {
    padding: 0.6rem 1rem;
    font-size: 0.75rem;
  }
}
</style>
