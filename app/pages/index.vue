<script setup lang="ts">
const colorMode = useState<string>("color-mode");

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

const services = [
  {
    title: "Product Engineering",
    description:
      "Building scalable web and mobile apps from the ground up with clean, maintainable code.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  },
  {
    title: "System Architecture",
    description:
      "Designing robust backends, database schemas, and cloud infrastructure ready for scale.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive interfaces that balance modern aesthetics with deep functionality.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M14 11l5 5"></path></svg>`,
  },
];

const works = [
  {
    id: "01",
    title: "MindSync",
    subtitle: "Enterprise Knowledge Base / AI",
    description:
      "A platform that transforms messy documentation into a searchable, chat-enabled knowledge base using vector-search.",
    image: "/works-mindsync.png",
    badges: ["AI / Knowledge", "Enterprise"],
    isFeatured: false,
  },
  {
    id: "02",
    title: "Splitbillz",
    subtitle: "Fintech / Consumer Product",
    description:
      "A streamlined mobile app for managing shared expenses with offline-first reliability.",
    image: "/works-splitbillz.png",
    badges: ["Fintech", "Mobile App"],
    isFeatured: false,
  },
  {
    id: "03",
    title: "Acclime Group",
    subtitle: "Data Visualization / Corporate",
    description:
      "A high-performance dashboard for global data management with zero-lag rendering.",
    image: "/works-acclime.png",
    badges: ["Data Viz", "Corporate"],
    isFeatured: false,
  },
];

const testimonials = [
  {
    name: "Emma Richardson",
    role: "Product Manager",
    quote:
      "Working with CODS Dev felt like having an elite internal engineering team. Their technical depth and speed are unmatched.",
    avatar: "/avatars/avatar-1.png",
  },
  {
    name: "Daniel Lee",
    role: "CTO @ Streamline",
    quote:
      "The modular team approach is brilliant. We got exactly the niche expertise we needed for our integration without the overhead.",
    avatar: "/avatars/avatar-2.png",
  },
  {
    name: "Maria Lopez",
    role: "Senior Engineer",
    quote:
      "CODS doesn't just write code; they design systems that scale. Their pragmatic approach to quality saved us months of rework.",
    avatar: "/avatars/avatar-3.png",
  },
  {
    name: "Priya Sharma",
    role: "Founder, GrowthMetric",
    quote:
      "The level of transparency and direct access to engineers is refreshing. No middlemen, just pure execution and results.",
    avatar: "/avatars/avatar-4.png",
  },
  {
    name: "Sarah Williams",
    role: "UX Lead",
    quote:
      "They truly understand the intersection of design and engineering. The end product was both technically robust and beautiful.",
    avatar: "/avatars/avatar-5.png",
  },
];
</script>

<template>
  <div class="landing-page">
    <Navbar />

    <!-- Hero Section -->
    <header class="hero">
      <!-- Video Background -->
      <div class="hero-video-container">
        <video
          :key="colorMode"
          autoplay
          muted
          loop
          playsinline
          class="hero-video"
        >
          <source
            :src="
              colorMode === 'dark' ? '/dark-vid-bg.mp4' : '/light-vid-bg.mp4'
            "
            type="video/mp4"
          />
        </video>
        <div class="hero-video-overlay"></div>
      </div>

      <div class="container hero-content">
        <p class="eyebrow">Collective of Digital Specialists</p>
        <h1 class="hero-title">
          We build systems that work, <br />
          <span>so you can focus on scale.</span>
        </h1>
        <p class="hero-lead">
          We are a lean collective of engineers and designers who partner with
          ambitious teams to ship high-quality software. No middlemen, no
          overhead—just direct access to experts.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Start a Project</a>
          <a href="#works" class="btn btn-secondary">View Portfolio</a>
        </div>
      </div>
    </header>

    <LogoCarousel />

    <!-- Services Section -->
    <section id="services" class="section services">
      <div class="container">
        <div class="section-header-custom">
          <div class="header-top">
            <span class="label-eyebrow">• Services</span>
            <span class="header-index">(04)</span>
          </div>
          <h2 class="title-giant">
            Full-stack execution and <span>technical strategy tailored</span> to
            your needs.
          </h2>
        </div>
        <div class="service-grid">
          <ServiceCard
            v-for="service in services"
            :key="service.title"
            v-bind="service"
          />
        </div>
      </div>
    </section>

    <!-- Works Section -->
    <section id="works" class="section works">
      <div class="container">
        <div class="section-header-custom">
          <div class="header-top">
            <span class="label-eyebrow">• Selected Works</span>
            <span class="header-index">(05)</span>
          </div>
          <h2 class="title-giant">
            A look at some of the <span>problems we've solved recently.</span>
          </h2>
        </div>
        <div class="work-grid-2col">
          <WorkCard v-for="work in works" :key="work.id" v-bind="work" />
        </div>
        <div class="section-actions text-center">
          <a href="#" class="btn-pill-small"
            >See all projects <span class="dot-sm"></span
          ></a>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="section testimonials">
      <div class="container">
        <div class="section-header-custom">
          <div class="header-top">
            <span class="label-eyebrow">• Testimonials</span>
            <span class="header-index">(06)</span>
          </div>
          <h2 class="title-giant">
            Hear from our clients <span>around the world.</span>
          </h2>
        </div>

        <div class="testimonial-grid">
          <!-- Featured Stats Card -->
          <div class="testimonial-featured">
            <h3 class="stats-number">92%</h3>
            <p class="stats-text">
              Of our partners transition to long-term retained collaboration
              after their first project.
            </p>
          </div>

          <!-- Testimonial Cards -->
          <TestimonialCard v-for="t in testimonials" :key="t.name" v-bind="t" />
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section id="process" class="section process">
      <div class="container">
        <div class="section-header-custom">
          <div class="header-top">
            <span class="label-eyebrow">• Our Process</span>
            <span class="header-index">(07)</span>
          </div>
          <h2 class="title-giant">
            A Thoughtful, Step-by-Step Process
            <span>Designed to Deliver Exceptional Results</span>
          </h2>
        </div>
        <ProcessGrid />
      </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="section team">
      <div class="container">
        <div class="section-header-custom">
          <div class="header-top">
            <span class="label-eyebrow">• About Us</span>
            <span class="header-index">(08)</span>
          </div>
          <h2 class="title-giant">
            The faces behind <span>successful projects execution</span>
          </h2>
        </div>
        <TeamGrid />
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="section faq">
      <div class="container">
        <div class="header-top-simple">
          <span class="header-index-alt">(09)</span>
        </div>
        <FaqSection />
      </div>
    </section>

    <!-- Blog Section -->
    <section id="blog" class="section blog">
      <div class="container">
        <div class="section-header-custom">
          <div class="header-top">
            <span class="label-eyebrow">• Our Blog</span>
            <span class="header-index">(10)</span>
          </div>
          <div class="title-with-action">
            <h2 class="title-giant">
              Latest trends and <span>insights from our team</span>
            </h2>
            <a href="#" class="btn-pill-small"
              >All Blogs <span class="dot-sm"></span
            ></a>
          </div>
        </div>
        <BlogGrid />
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="footer-new">
      <div class="container">
        <div class="footer-split">
          <div class="footer-left">
            <h2 class="footer-cta-text">
              Let's work together and make <span>cool things!</span>
            </h2>
            <a href="mailto:hello@cods.dev" class="btn-talk"
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
  </div>
</template>

<style scoped>
.landing-page {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.container.narrow {
  max-width: 800px;
}

.eyebrow {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent-color);
  margin-bottom: 2rem;
}

.section {
  padding: 8rem 0;
}

.section-header {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.section-lead {
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.text-center {
  text-align: center;
}

/* Hero Style */
.hero {
  position: relative;
  overflow: hidden;
  padding: 16rem 0 12rem;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(128, 0, 0, 0.08) 0%,
    transparent 60%
  );
  text-align: center;
  margin-top: -82px; /* Pull hero under transparent navbar */
}

/* Video Background */
.hero-video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--hero-overlay);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-content::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140%;
  height: 140%;
  background: var(--hero-glow);
  z-index: -1;
  pointer-events: none;
  filter: blur(40px);
}

.hero-title {
  font-size: clamp(2.5rem, 7.3vw, 3.75rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: var(--text-color);
  margin-bottom: 2rem;
  max-width: 900px;
}

.hero-title span {
  color: var(--accent-color);
}

.hero-lead {
  max-width: 650px;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 auto 3rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}

.btn.lg {
  padding: 1.25rem 3rem;
  font-size: 1.25rem;
}

.btn-primary {
  background: var(--accent-color);
  color: #ffffff;
}

.btn-primary:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--border-color);
}

/* Service Grid */
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Works Grid */
.work-grid-2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 4rem;
}

.section-actions {
  margin-top: 2rem;
}

.btn-dark-pill {
  background: #000000;
  color: #ffffff;
  padding: 0.875rem 2.5rem;
  border-radius: 100px;
  font-size: 0.9375rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #333333;
}

.section-title.uppercase {
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.1;
}

/* Testimonials Grid */
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.testimonial-featured {
  background: var(--accent-color);
  color: #ffffff;
  padding: 3rem 2.5rem;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stats-number {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.04em;
}

.stats-text {
  font-size: 1.125rem;
  line-height: 1.5;
  opacity: 0.9;
  font-weight: 500;
}

/* Why Us Section */
.gray-box {
  background: var(--gray-box);
  padding: 6rem 4rem;
  border-radius: 12px;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
}

.why-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.why-item p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

/* Layout Helpers */
.section-header-custom {
  margin-bottom: 4rem;
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header-top-simple {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
}

.label-eyebrow {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.header-index,
.header-index-alt {
  font-size: 0.8125rem;
  color: var(--text-secondary);
  font-weight: 600;
}

.title-giant {
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 600;
  line-height: 1.2;
  color: var(--text-color);
  letter-spacing: -0.02em;
  max-width: 900px;
}

.title-giant span {
  color: var(--text-secondary);
}

.title-with-action {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
}

.btn-pill-small {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1.25rem;
  background: var(--gray-box);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--text-color);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-pill-small:hover {
  border-color: var(--accent-color);
}

/* Footer New */
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

.btn-pill-small .dot-sm {
  background: var(--text-color);
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

  .title-with-action {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .gray-box {
    padding: 3rem 1.5rem;
  }
}
</style>
