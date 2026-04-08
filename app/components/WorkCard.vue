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
  <div class="work-card">
    <div class="work-image-container">
      <img :src="image" :alt="title" class="work-image" />
      <div class="work-badges-overlay">
        <span v-for="tag in badges" :key="tag" class="badge">
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="work-content">
      <h3 class="work-title">{{ title }}</h3>
      <p class="work-description">{{ subtitle }}</p>

      <div class="work-footer-simple">
        <span class="view-project">View Case Study</span>
        <span class="dot-sm"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.work-card:hover {
  transform: translateY(-8px);
}

.work-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: 24px;
  overflow: hidden;
  background: var(--gray-box);
  margin-bottom: 2rem;
  border: 1px solid var(--border-color);
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

.work-badges-overlay {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  display: flex;
  gap: 0.5rem;
}

.badge {
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.9);
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

:global(html.dark) .badge {
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.1);
}

.work-content {
  padding: 0 0.5rem;
}

.work-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;
}

.work-card:hover .work-title {
  color: var(--accent-color);
}

.work-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.work-footer-simple {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: auto;
}

.view-project {
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-color);
}

.dot-sm {
  width: 6px;
  height: 6px;
  background: var(--text-color);
  border-radius: 50%;
}

.work-card:hover .dot-sm {
  background: var(--accent-color);
}
</style>
