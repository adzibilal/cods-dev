<script setup lang="ts">
defineProps<{
  quote: string;
  name: string;
  role: string;
  avatar: string;
}>();
</script>

<template>
  <div class="testimonial-card">
    <p class="testimonial-quote">"{{ quote }}"</p>

    <div class="testimonial-footer">
      <div class="author-info">
        <h4 class="author-name">{{ name }}</h4>
        <p class="author-role">{{ role }}</p>
      </div>
      <img :src="avatar" :alt="name" class="author-avatar" />
    </div>
  </div>
</template>

<style scoped>
.testimonial-card {
  background: var(--card-bg);
  padding: 2.5rem;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color);
}

.testimonial-quote {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 2.5rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.testimonial-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0;
}

.author-role {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0.25rem 0 0;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-color);
}
</style>
