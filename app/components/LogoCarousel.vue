<script setup lang="ts">
const logos = [
  { name: "Swiss", text: "SWISS" },
  { name: "Rise", text: "RISE" },
  { name: "Greenish", text: "GREEN" },
  { name: "Bristol", text: "BRISTOL" },
  { name: "Italic", text: "italic" },
  { name: "Phoenix", text: "PHOENIX" },
];
</script>

<template>
  <section class="logo-carousel-section">
    <div class="container">
      <h2 class="carousel-title">Trusted By Leading Teams</h2>

      <div class="carousel-container">
        <!-- Mask for fading edges -->
        <div class="carousel-mask">
          <div class="carousel-track">
            <!-- First set of logos -->
            <div v-for="logo in logos" :key="logo.name" class="logo-card">
              <span class="logo-text">{{ logo.text }}</span>
            </div>
            <!-- Second set for seamless loop -->
            <div
              v-for="logo in logos"
              :key="logo.name + '-loop'"
              class="logo-card"
            >
              <span class="logo-text">{{ logo.text }}</span>
            </div>
            <!-- Third set for wider screens -->
            <div
              v-for="logo in logos"
              :key="logo.name + '-loop-2'"
              class="logo-card"
            >
              <span class="logo-text">{{ logo.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo-carousel-section {
  padding: 4rem 0;
  background-color: var(--bg-color);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.carousel-title {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 3rem;
}

.carousel-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.carousel-mask {
  display: flex;
  overflow: hidden;
  user-select: none;
  /* Fading edges */
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
}

.carousel-track {
  display: flex;
  flex-shrink: 0;
  gap: 2rem;
  padding: 10px 0;
  min-width: 100%;
  animation: marquee 30s linear infinite;
}

.logo-card {
  flex-shrink: 0;
  width: 180px;
  height: 90px;
  background: var(--card-bg);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

/* Dark mode adjustments for logo cards */
:global(html.dark) .logo-card {
  background: var(--card-bg);
  border-color: rgba(255, 255, 255, 0.05);
  box-shadow: none;
}

.logo-text {
  font-family: "Space Grotesk", system-ui, sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--text-color);
  letter-spacing: -0.02em;
}

:global(html.dark) .logo-text {
  color: #f2f2f2;
}

.logo-card:hover {
  transform: translateY(-2px);
  border-color: var(--accent-color);
  box-shadow: 0 10px 15px -3px rgba(128, 0, 0, 0.1);
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3));
  } /* Slide through one set of logos */
}

@media (max-width: 768px) {
  .logo-card {
    width: 140px;
    height: 70px;
  }
  .logo-text {
    font-size: 1rem;
  }
  .carousel-title {
    font-size: 0.75rem;
  }
}
</style>
