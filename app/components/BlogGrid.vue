<script setup lang="ts">
const { find } = useStrapiClient();
const { initReveal } = useScrollReveal();
const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

// Fetch Articles from Strapi
const { data: blogData, pending } = await useAsyncData("articles", () =>
  find<any>("articles", { populate: ["category"] }),
);

const posts = computed(() => {
  if (!blogData.value?.data) return [];
  return blogData.value.data.map((post: any) => ({
    title: post.title,
    category: post.category?.name || "General",
    date: new Date(post.publishedAt || post.createdAt).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    ),
    image: post.cover?.url
      ? post.cover.url.startsWith("http")
        ? post.cover.url
        : `${strapiUrl}${post.cover.url}`
      : "/blog-1.png",
  }));
});

// Re-initialize animations after dynamic content loads
watch(pending, (isPending) => {
  if (!isPending) {
    nextTick(() => {
      initReveal();
    });
  }
});
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
  grid-template-columns: repeat(3, minmax(300px, 1fr));
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
