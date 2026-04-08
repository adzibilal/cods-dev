<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon?: string
}>()
</script>

<template>
  <div class="service-card">
    <div class="icon-wrapper" v-if="icon" v-html="icon"></div>
    <h3 class="service-title">{{ title }}</h3>
    <p class="service-description">{{ description }}</p>
  </div>
</template>

<style scoped>
.service-card {
  padding: 2.5rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  transition: transform 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  border-color: var(--accent-color);
  transform: translateY(-8px);
}

.icon-wrapper {
  width: 38px;
  height: 38px;
  color: var(--accent-color);
  margin-bottom: 2rem;
}

.icon-wrapper :deep(svg) {
  width: 100%;
  height: 100%;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.service-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--text-secondary);
}
</style>
