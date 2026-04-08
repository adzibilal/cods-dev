<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badges: string[];
  isFeatured?: boolean;
}>();
</script>

<template>
  <div class="work-card" :class="{ 'is-featured': isFeatured }">
    <!-- Image Section -->
    <div class="work-image-container">
      <img :src="image" :alt="title" class="work-image" />
      <!-- Small Overlay Badge (Optional, matching reference icons) -->
      <div class="image-overlay" v-if="isFeatured">
        <span class="icon-plus">+</span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="work-content">
      <!-- Badges -->
      <div class="work-badges">
        <span v-for="tag in badges" :key="tag" class="badge">
          {{ tag }}
        </span>
      </div>

      <!-- Text -->
      <h3 class="work-title">{{ title }}</h3>
      <p class="work-description">{{ description }}</p>

      <!-- Footer/Price (matching reference area) -->
      <div class="work-footer">
        <span class="view-project">View Case Study</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="arrow-icon"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work-card {
  background: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
}

/* Featured (Inverted) State - Matching the black card in reference */
.work-card.is-featured {
  background: #000000;
  color: #ffffff;
  border-color: #333333;
}

.work-card.is-featured .work-title {
  color: #ffffff;
}

.work-card.is-featured .work-description {
  color: rgba(255, 255, 255, 0.7);
}

.work-card.is-featured .badge {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.work-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-color);
}

/* Image Container */
.work-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: #f5f5f7;
}

.work-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.work-card:hover .work-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  background: var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
}

/* Content */
.work-content {
  padding: 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.work-badges {
  display: flex;
  gap: 0.5rem;
}

.badge {
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(128, 0, 0, 0.08);
  color: var(--accent-color);
  padding: 0.4rem 0.75rem;
  border-radius: 100px;
}

.work-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-color);
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.work-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Footer */
.work-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.work-card.is-featured .work-footer {
  border-top-color: rgba(255, 255, 255, 0.1);
}

.view-project {
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.work-card:hover .arrow-icon {
  transform: translateX(4px);
  color: var(--accent-color);
}
</style>
