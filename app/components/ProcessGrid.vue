<script setup lang="ts">
const processes = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive into your business goals and technical constraints to ensure we are building the right solution.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We map out the architecture and prioritize the MVP to get your product in front of users as fast as possible.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  },
  {
    num: "03",
    title: "Execution",
    desc: "Fast-paced, iterative development with continuous feedback loops and weekly demos.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  },
  {
    num: "04",
    title: "Handoff",
    desc: "We ship the product with full documentation, clean code, and a clear path to scale.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  },
];
</script>

<template>
  <div class="process-grid">
    <div
      v-for="(proc, index) in processes"
      :key="proc.num"
      class="process-card"
    >
      <div class="process-card-header">
        <div class="step-dots">
          <span
            v-for="i in 4"
            :key="i"
            class="dot"
            :class="{ active: i - 1 === index }"
          ></span>
        </div>
        <span class="process-num">{{ proc.num }}</span>
      </div>

      <div class="process-icon" v-html="proc.icon"></div>

      <h3 class="process-title">{{ proc.title }}</h3>
      <p class="process-desc">{{ proc.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.process-card {
  background: var(--card-bg);
  padding: 2.5rem 2rem;
  border-radius: 24px;
  border: 1px solid var(--border-color);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
  display: flex;
  flex-direction: column;
}

.process-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color);
}

.process-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}

.step-dots {
  display: flex;
  gap: 4px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(97, 97, 97, 0.15);
  transition: all 0.3s;
}

.dot.active {
  background: var(--accent-color);
  width: 12px;
  border-radius: 100px;
}

:global(html.dark) .dot {
  background: rgba(255, 255, 255, 0.3);
}

:global(html.dark) .dot.active {
  background: var(--accent-color);
}

.process-num {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--text-secondary);
  font-variant-numeric: tabular-nums;
}

.process-icon {
  width: 38px;
  height: 38px;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
}

.process-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.process-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.process-desc {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .process-grid {
    grid-template-columns: 1fr;
  }
}
</style>
