<script setup lang="ts">
const colorMode = useState<string>("color-mode");
</script>

<template>
  <header class="hero">
    <!-- Video Background -->
    <div class="hero-video-container">
      <video
        :key="colorMode"
        autoplay
        muted
        loop
        playsinline
        class="hero-video"
      >
        <source
          :src="colorMode === 'dark' ? '/dark-vid-bg.mp4' : '/light-vid-bg.mp4'"
          type="video/mp4"
        />
      </video>
      <div class="hero-video-overlay"></div>
    </div>

    <div class="container hero-content">
      <p class="eyebrow reveal-text">Collective of Digital Specialists</p>
      <h1 class="hero-title reveal-text">
        We build systems that work, <br />
        <span>so you can focus on scale.</span>
      </h1>
      <p class="hero-lead reveal-text">
        We are a lean collective of engineers and designers who partner with
        ambitious teams to ship high-quality software. No middlemen, no
        overhead—just direct access to experts.
      </p>
      <div class="hero-actions reveal-text">
        <a href="#contact" class="btn btn-primary">Start a Project</a>
        <a href="#works" class="btn btn-secondary">View Portfolio</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 16rem 0 12rem;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(128, 0, 0, 0.08) 0%,
    transparent 60%
  );
  text-align: center;
  margin-top: -82px; /* Pull hero under transparent navbar */
}

/* Video Background */
.hero-video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--hero-overlay);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-content::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140%;
  height: 140%;
  background: var(--hero-glow);
  z-index: -1;
  pointer-events: none;
  filter: blur(40px);
}

.hero-title {
  font-size: clamp(2.5rem, 7.3vw, 3.75rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text-color);
  margin-bottom: 2rem;
  max-width: 900px;
}

.hero-title span {
  color: var(--accent-color);
}

.hero-lead {
  max-width: 650px;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 auto 3rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  border-radius: 100px; /* Standardized to pill */
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: var(--accent-color);
  color: #ffffff;
}

.btn-primary:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--border-color);
}

.eyebrow {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent-color);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 12rem 0 8rem;
  }
}
</style>
