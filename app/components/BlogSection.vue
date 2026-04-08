<script setup lang="ts">
// BlogGrid is already a global component
</script>

<template>
  <section id="blog" class="section blog">
    <div class="container">
      <div class="section-header-custom reveal">
        <div class="header-top">
          <span class="label-eyebrow">• Our Blog</span>
          <span class="header-index">(10)</span>
        </div>
        <div class="title-with-action">
          <h2 class="title-giant">
            Latest trends and <span>insights from our team</span>
          </h2>
          <a href="#" class="btn-pill-small">
            All Blogs <span class="dot-sm"></span>
          </a>
        </div>
      </div>
      <div class="reveal-up">
        <BlogGrid />
      </div>
    </div>
  </section>
</template>

<style scoped>
.title-with-action {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
}

@media (max-width: 1024px) {
  .title-with-action {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
