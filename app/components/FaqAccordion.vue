<script setup lang="ts">
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionHeader,
} from "reka-ui";

const { find } = useStrapiClient();
const { initReveal } = useScrollReveal();

// Fetch FAQs from Strapi
const { data: faqData, pending } = await useAsyncData("faqs", () =>
  find<any>("faqs"),
);

const faqs = computed(() => {
  if (!faqData.value?.data) return [];
  return faqData.value.data.map((item: any, index: number) => ({
    num: (index + 1).toString().padStart(2, "0"),
    question: item.question,
    answer: item.answer,
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
  <div class="faq-layout">
    <div class="faq-info">
      <div class="section-header">
        <p class="eyebrow small">FAQ</p>
        <h2 class="section-title reveal-type">Frequently Asked <br />Questions</h2>
        <p class="section-lead">
          Your questions about our process, services, and workflow — answered.
        </p>
      </div>
    </div>

    <div class="faq-content">
      <AccordionRoot
        type="single"
        :collapsible="true"
        class="accordion-root"
        default-value="01"
      >
        <AccordionItem
          v-for="faq in faqs"
          :key="faq.num"
          :value="faq.num"
          class="accordion-item"
        >
          <AccordionHeader class="accordion-header">
            <AccordionTrigger class="accordion-trigger">
              <span class="faq-num">{{ faq.num }}.</span>
              <span class="faq-question">{{ faq.question }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="faq-arrow"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent class="accordion-content">
            <div class="content-inner">
              {{ faq.answer }}
            </div>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    </div>
  </div>
</template>

<style scoped>
.faq-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: flex-start;
}

.faq-info .eyebrow.small {
  font-size: 0.75rem;
  margin-bottom: 1rem;
}

.faq-content {
  background: var(--gray-box);
  border-radius: 24px;
  padding: 1rem;
}

.accordion-root {
  width: 100%;
}

.accordion-item {
  background: var(--card-bg);
  border-radius: 16px;
  margin-bottom: 0.5rem;
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.accordion-item:last-child {
  margin-bottom: 0;
}

.accordion-trigger {
  all: unset;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.75rem 2rem;
  cursor: pointer;
  box-sizing: border-box;
}

.faq-num {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color);
  margin-right: 1rem;
}

.faq-question {
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-color);
  padding-right: 2rem;
}

.faq-arrow {
  color: var(--text-color);
  opacity: 0.6;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion-item[data-state="open"] .faq-arrow {
  transform: rotate(180deg);
}

.accordion-content {
  overflow: hidden;
  animation: slideDown 0.3s ease-out;
}

.accordion-item[data-state="closed"] .accordion-content {
  animation: slideUp 0.3s ease-out;
}

.content-inner {
  padding: 0 2rem 2rem 4rem;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

@keyframes slideDown {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-accordion-content-height);
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
}

@media (max-width: 1024px) {
  .faq-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
