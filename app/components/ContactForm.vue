<script setup lang="ts">
const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);
const isSuccess = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  isSubmitting.value = false;
  isSuccess.value = true;

  // Reset form after 3 seconds
  setTimeout(() => {
    isSuccess.value = false;
    formData.name = "";
    formData.email = "";
    formData.message = "";
  }, 3000);
};
</script>

<template>
  <div class="contact-form-wrapper" id="contact">
    <form v-if="!isSuccess" @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          placeholder="What's your name?"
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          placeholder="how@can.we.reach.you?"
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          placeholder="Tell us about your project..."
          required
          class="form-textarea"
          rows="5"
        ></textarea>
      </div>

      <div class="form-actions">
        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span>{{ isSubmitting ? "Sending..." : "Send Message" }}</span>
          <span class="dot-sm"></span>
        </button>
      </div>
    </form>

    <div v-else class="success-message">
      <div class="success-icon">✓</div>
      <h3 class="success-title">Message Received!</h3>
      <p>We'll get back to you within 24 hours.</p>
    </div>
  </div>
</template>

<style scoped>
.contact-form-wrapper {
  width: 100%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-group label {
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-color);
  opacity: 0.6;
}

.form-input,
.form-textarea {
  width: 100%;
  background: var(--gray-box);
  border: 1px solid var(--border-color);
  border-radius: 24px; /* Harmonized with cards */
  padding: 1.25rem 1.5rem;
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-color);
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  background: var(--bg-color);
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.5rem;
  background: var(--text-color);
  color: var(--bg-color);
  border: none;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: var(--accent-color);
  color: #ffffff;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dot-sm {
  width: 8px;
  height: 8px;
  background: var(--bg-color);
  border-radius: 50%;
  transition: background 0.3s ease;
}

.submit-btn:hover .dot-sm {
  background: #ffffff;
}

/* Success State */
.success-message {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--gray-box);
  border-radius: 24px;
  border: 1px solid var(--accent-color);
  animation: fadeIn 0.5s ease-out;
}

.success-icon {
  width: 64px;
  height: 64px;
  background: var(--accent-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 2rem;
}

.success-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
