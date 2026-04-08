<script setup lang="ts">
const { initReveal } = useScrollReveal();

// Fetch Home Page Settings with shared composable
const { data: homeData, pending } = await useHomePageData();

// Re-initialize animations after dynamic content loads
watch(pending, (isPending) => {
  if (!isPending) {
    nextTick(() => {
      initReveal();
    });
  }
});

// Fallback content
const defaultEmail = "hello@cods.dev";
const defaultLead =
  "Our engineering collective is ready to dive into your most complex challenges. No middlemen, no corporate bloat—just direct paths to execution.";
</script>

<template>
  <section id="connect" class="section connect">
    <div class="container">
      <div class="section-header-custom reveal">
        <div class="header-top">
          <span class="label-eyebrow">• Connect</span>
          <span class="header-index">(11)</span>
        </div>
        <h2 class="title-giant reveal-type">
          Have a project in mind? <span>Let's talk technical.</span>
        </h2>
      </div>

      <div class="connect-layout reveal-up">
        <div class="connect-info">
          <p class="connect-lead">
            {{ homeData?.data?.contactCopywriting || defaultLead }}
          </p>
          <div class="connect-details">
            <div class="detail-item">
              <span class="detail-label">Office</span>
              <p>Jakarta / Remote</p>
            </div>
            <div class="detail-item">
              <span class="detail-label">Email</span>
              <p>
                {{ homeData?.data?.contactEmail || defaultEmail }}
              </p>
            </div>
          </div>
        </div>
        <div class="connect-form-area">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.connect-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 6rem;
  align-items: flex-start;
}

.connect-lead {
  font-size: 1.5rem;
  line-height: 1.4;
  color: var(--text-color);
  margin-bottom: 4rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.connect-details {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.detail-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  font-weight: 700;
}

.detail-item p {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
}

@media (max-width: 1024px) {
  .connect-layout {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}
</style>
