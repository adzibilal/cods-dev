<script setup lang="ts">
const { find } = useStrapiClient();
const { initReveal } = useScrollReveal();
const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

// Fetch Testimonials from Strapi
const { data: testimonialData, pending } = await useAsyncData("testimonials", () =>
  find<any>("testimonials", { populate: "avatar" }),
);

const testimonials = computed(() => {
  if (!testimonialData.value?.data) return [];
  return testimonialData.value.data.map((t: any) => ({
    name: t.name,
    role: t.role,
    quote: t.quote,
    avatar: t.avatar?.url
      ? t.avatar.url.startsWith("http")
        ? t.avatar.url
        : `${strapiUrl}${t.avatar.url}`
      : "/avatars/avatar-1.png",
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
  <section id="testimonials" class="section testimonials">
    <div class="container">
      <div class="section-header-custom reveal">
        <div class="header-top">
          <span class="label-eyebrow">• Testimonials</span>
          <span class="header-index">(06)</span>
        </div>
        <h2 class="title-giant reveal-type">
          Hear from our clients <span>around the world.</span>
        </h2>
      </div>

      <div class="testimonial-grid reveal-stagger">
        <!-- Featured Stats Card -->
        <div class="testimonial-featured">
          <h3 class="stats-number">92%</h3>
          <p class="stats-text">
            Of our partners transition to long-term retained collaboration
            after their first project.
          </p>
        </div>

        <!-- Testimonial Cards -->
        <TestimonialCard v-for="t in testimonials" :key="t.name" v-bind="t" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.testimonial-featured {
  background: var(--accent-color);
  color: #ffffff;
  padding: 3rem 2.5rem;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stats-number {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.04em;
}

.stats-text {
  font-size: 1.125rem;
  line-height: 1.5;
  opacity: 0.9;
  font-weight: 500;
}

@media (max-width: 768px) {
  .stats-number {
    font-size: 4rem;
  }
}
</style>
