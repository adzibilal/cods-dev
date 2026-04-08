<script setup lang="ts">
const { find } = useStrapiClient();
const { initReveal } = useScrollReveal();
const config = useRuntimeConfig();
const strapiUrl = config.public.strapiUrl;

// Fetch Works from Strapi
const { data: workData, pending } = await useAsyncData("works", () =>
  find<any>("works", { populate: ["image"] }),
);

const works = computed(() => {
  if (!workData.value?.data) return [];
  return workData.value.data.map((item: any) => {
    // Extract text from Strapi Blocks field if necessary
    const description = Array.isArray(item.description)
      ? item.description
          .map((block: any) => block.children?.map((c: any) => c.text).join(""))
          .join(" ")
      : item.description;

    // Get the first image from the multiple media field
    const firstImage = Array.isArray(item.image) ? item.image[0] : item.image;
    const imageUrl = firstImage?.url || firstImage;

    return {
      id: item.id.toString(),
      title: item.title,
      subtitle: item.subtitle,
      description,
      image:
        typeof imageUrl === "string"
          ? imageUrl.startsWith("http")
            ? imageUrl
            : `${strapiUrl}${imageUrl}`
          : "/placeholder-work.jpg",
      badges: item.badges || [],
      isFeatured: item.isFeatured,
    };
  });
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
  <section id="works" class="section works">
    <div class="container">
      <div class="section-header-custom reveal">
        <div class="header-top">
          <span class="label-eyebrow">• Selected Works</span>
          <span class="header-index">(05)</span>
        </div>
        <h2 class="title-giant reveal-type">
          A look at some of the <span>problems we've solved recently.</span>
        </h2>
      </div>
      <div class="work-grid-2col reveal-stagger">
        <WorkCard v-for="work in works" :key="work.id" v-bind="work" />
      </div>
      <div class="section-actions text-center reveal-up">
        <a href="#" class="btn-pill-small">
          See all projects <span class="dot-sm"></span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work-grid-2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;
}

.section-actions {
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .work-grid-2col {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
