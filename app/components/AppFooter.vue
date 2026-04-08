<script setup lang="ts">
// No extra setup needed
</script>

<template>
  <footer id="contact" class="footer-new">
    <div class="container">
      <div class="footer-split">
        <div class="footer-left">
          <h2 class="footer-cta-text">
            Let's work together and make <span>cool things!</span>
          </h2>
          <a href="#contact" class="btn-talk"
            >Let's Talk <span class="dot-sm"></span
          ></a>
        </div>

        <div class="footer-right">
          <div class="footer-links-grid">
            <div class="footer-group">
              <h4 class="footer-group-title">Contact</h4>
              <p>Jakarta / Remote</p>
              <a href="mailto:hello@cods.dev">hello@cods.dev</a>
              <p>+62 (812) 3456-7890</p>
            </div>
            <div class="footer-group">
              <h4 class="footer-group-title">Follow Us</h4>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>

          <div class="footer-brand-area">
            <div class="brand-signature">
              CODS Dev <span class="reg-mark">®</span>
            </div>
            <p class="studio-tag">Digital Collective</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-new {
  background: #000000;
  color: #ffffff;
  padding: 10rem 0 6rem;
}

.footer-split {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 6rem;
}

.footer-cta-text {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.04em;
  margin-bottom: 4rem;
}

.footer-cta-text span {
  color: rgba(255, 255, 255, 0.4);
}

.btn-talk {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.75rem;
  background: #ffffff;
  color: #000000;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.btn-talk:hover {
  transform: scale(1.05);
}

.dot-sm {
  width: 8px;
  height: 8px;
  background: #000000;
  border-radius: 50%;
}

.footer-links-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 8rem;
}

.footer-group-title {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 2rem;
}

.footer-group p,
.footer-group a {
  display: block;
  font-size: 1.125rem;
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 0.75rem;
  opacity: 0.8;
}

.footer-group a:hover {
  opacity: 1;
  color: var(--accent-color);
}

.footer-brand-area {
  text-align: right;
  margin-top: auto;
}

.brand-signature {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.reg-mark {
  font-size: 0.3em;
  vertical-align: top;
  margin-left: 0.1em;
}

.studio-tag {
  font-size: 1.25rem;
  font-weight: 500;
  opacity: 0.4;
}

@media (max-width: 1024px) {
  .footer-split {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .footer-brand-area {
    text-align: left;
  }
}
</style>
