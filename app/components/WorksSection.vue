<script setup lang="ts">
defineProps<{
  works: any[];
}>();
</script>

<template>
  <section id="works" class="section works">
    <div class="container">
      <div class="section-header-custom reveal">
        <div class="header-top">
          <span class="label-eyebrow">• Selected Works</span>
          <span class="header-index">(05)</span>
        </div>
        <h2 class="title-giant">
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
