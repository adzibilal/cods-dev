<script setup lang="ts">
defineProps<{
  services: any[];
}>();
</script>

<template>
  <section id="services" class="section services">
    <div class="container">
      <div class="section-header-custom reveal">
        <div class="header-top">
          <span class="label-eyebrow">• Services</span>
          <span class="header-index">(04)</span>
        </div>
        <h2 class="title-giant reveal-type">
          Full-stack execution and <span>technical strategy tailored</span> to
          your needs.
        </h2>
      </div>
      <div class="service-grid reveal-stagger">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          v-bind="service"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
</style>
