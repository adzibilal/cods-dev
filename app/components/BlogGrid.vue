<script setup lang="ts">
const posts = [
  {
    title: "10 Tips for Elevating Your Design Game",
    category: "Design",
    date: "June 27, 2026",
    image: "/blog-1.png"
  },
  {
    title: "Building Scalable Fintech Infrastructure",
    category: "Fintech",
    date: "November 16, 2026",
    image: "/blog-2.png"
  },
  {
    title: "Designing for Emotion: Connection with Users",
    category: "UX / UI",
    date: "January 6, 2027",
    image: "/blog-3.png"
  }
];
</script>

<template>
  <div class="blog-grid">
    <div v-for="post in posts" :key="post.title" class="blog-card">
      <div class="blog-image-container">
        <img :src="post.image" :alt="post.title" class="blog-image" />
        <span class="blog-category">{{ post.category }}</span>
      </div>
      <div class="blog-info">
        <h3 class="blog-title">{{ post.title }}</h3>
        <p class="blog-date">{{ post.date }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.blog-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.blog-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: 24px;
  overflow: hidden;
  background: var(--gray-box);
  margin-bottom: 1.5rem;
}

.blog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.blog-card:hover .blog-image {
  transform: scale(1.05);
}

.blog-category {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  background: rgba(255, 255, 255, 0.9);
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  backdrop-filter: blur(4px);
}

:global(html.dark) .blog-category {
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.blog-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.blog-card:hover .blog-title {
  color: var(--accent-color);
}

.blog-date {
  font-size: 0.875rem;
  color: var(--text-secondary);
}
</style>
