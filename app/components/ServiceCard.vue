<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon?: string
}>()
</script>

<template>
  <div class="service-card">
    <div class="icon-wrapper" v-if="icon">
      <slot name="icon"></slot>
    </div>
    <h3 class="service-title">{{ title }}</h3>
    <p class="service-description">{{ description }}</p>
  </div>
</template>

<style scoped>
.service-card {
  padding: 2rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  transition: transform 0.2s, border-color 0.2s, background-color 0.3s;
}

.service-card:hover {
  border-color: var(--accent-color);
  transform: translateY(-4px);
}

.service-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.75rem;
}

.service-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.icon-wrapper {
  color: var(--accent-color);
  margin-bottom: 1.25rem;
}
</style>
