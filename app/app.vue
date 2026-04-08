<script setup lang="ts">
const colorMode = useState("color-mode", () => "dark");

// Initialize theme
if (import.meta.client) {
  const saved = localStorage.getItem("theme");
  if (saved) {
    colorMode.value = saved;
  } else {
    // Default to dark
    colorMode.value = "dark";
  }
}

watch(
  colorMode,
  (newVal) => {
    if (import.meta.client) {
      localStorage.setItem("theme", newVal);
      if (newVal === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  },
  { immediate: true },
);

useHead({
  script: [
    {
      id: "color-mode-init",
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
      type: "text/javascript",
    },
  ],
});
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
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --text-secondary: rgba(26, 26, 26, 0.7);
  --border-color: #f2f2f2;
  --accent-color: #800000;
  --card-bg: #ffffff;
  --footer-bg: #1a1a1a;
  --footer-text: #ffffff;
  --gray-box: #f2f2f2;
  --hero-overlay: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0.3) 70%,
    transparent 100%
  );
  --hero-glow: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.5) 40%,
    transparent 75%
  );
}

html.dark {
  --bg-color: #0e0e0e;
  --text-color: #f2f2f2;
  --text-secondary: rgba(242, 242, 242, 0.7);
  --border-color: #1a1a1a;
  --accent-color: #a00000; /* Slightly brighter maroon for dark mode */
  --card-bg: #1d1d1d;
  --footer-bg: #000000;
  --footer-text: #f2f2f2;
  --gray-box: #0f0f0f;
  --hero-overlay: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.3) 70%,
    transparent 100%
  );
  --hero-glow: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.5) 40%,
    transparent 75%
  );
}

html {
  font-family: "Inter", system-ui, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
}

* {
  box-sizing: border-box;
}

/* Global Layout & Typography Helpers */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.container.narrow {
  max-width: 800px;
}

.section {
  padding: 8rem 0;
}

.section-header-custom {
  margin-bottom: 4rem;
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header-top-simple {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
}

.label-eyebrow {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.header-index,
.header-index-alt {
  font-size: 0.8125rem;
  color: var(--text-secondary);
  font-weight: 600;
}

.title-giant {
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 600;
  line-height: 1.2;
  color: var(--text-color);
  letter-spacing: -0.02em;
  max-width: 900px;
}

.title-giant span {
  color: var(--text-secondary);
}

.btn-pill-small {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1.25rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--text-color);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-pill-small:hover {
  border-color: var(--accent-color);
}

.dot-sm {
  width: 6px;
  height: 6px;
  background: var(--accent-color);
  border-radius: 50%;
}

/* GSAP Reveal Init State */
.reveal,
.reveal-up,
.reveal-stagger > * {
  opacity: 0;
}

@media (max-width: 768px) {
  .section {
    padding: 6rem 0;
  }

  .title-giant {
    font-size: 2.25rem;
  }
}
</style>
