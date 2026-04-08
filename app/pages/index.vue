<script setup lang="ts">
const { initReveal } = useScrollReveal();

useHead({
  title: "CODS Dev — Modern Engineering for Digital Products",
  meta: [
    {
      name: "description",
      content:
        "We build systems that work, so you can focus on scale. A collective of engineers and designers for high-quality software.",
    },
  ],
});

onMounted(() => {
  initReveal();
});

const services = [
  {
    title: "Product Engineering",
    description: "Building scalable web and mobile apps from the ground up with clean, maintainable code.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  },
  {
    title: "System Architecture",
    description: "Designing robust backends, database schemas, and cloud infrastructure ready for scale.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive interfaces that balance modern aesthetics with deep functionality.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M14 11l5 5"></path></svg>`,
  },
];
</script>

<template>
  <div class="landing-page">
    <Navbar />
    <Hero />
    <LogoCarousel />
    <ServicesSection :services="services" />
    <WorksSection />
    <TestimonialsSection />
    <ProcessSection />
    <TeamSection />
    <FaqSection />
    <BlogSection />
    <ContactSection />
    <AppFooter />
  </div>
</template>

<style scoped>
.landing-page {
  overflow-x: hidden;
}
</style>
