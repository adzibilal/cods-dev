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
  },
  {
    title: "System Architecture",
    description:
      "Designing robust backends, database schemas, and cloud infrastructure ready for scale.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive interfaces that balance modern aesthetics with deep functionality.",
  },
  {
    title: "Technical Audits",
    description:
      "Deep-dives into existing codebases to improve performance, security, and developer experience.",
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
    isFeatured: false
  },
  {
    id: "02",
    title: "Splitbillz",
    subtitle: "Fintech / Consumer Product",
    description:
      "A streamlined mobile app for managing shared expenses with offline-first reliability.",
    image: "/works-splitbillz.png",
    badges: ["Fintech", "Mobile App"],
    isFeatured: false
  },
  {
    id: "03",
    title: "Acclime Group",
    subtitle: "Data Visualization / Corporate",
    description:
      "A high-performance dashboard for global data management with zero-lag rendering.",
    image: "/works-acclime.png",
    badges: ["Data Viz", "Corporate"],
    isFeatured: false
  },
];

const testimonials = [
  {
    name: "Emma Richardson",
    role: "Product Manager",
    quote: "Working with CODS Dev felt like having an elite internal engineering team. Their technical depth and speed are unmatched.",
    avatar: "/avatars/avatar-1.png"
  },
  {
    name: "Daniel Lee",
    role: "CTO @ Streamline",
    quote: "The modular team approach is brilliant. We got exactly the niche expertise we needed for our integration without the overhead.",
    avatar: "/avatars/avatar-2.png"
  },
  {
    name: "Maria Lopez",
    role: "Senior Engineer",
    quote: "CODS doesn't just write code; they design systems that scale. Their pragmatic approach to quality saved us months of rework.",
    avatar: "/avatars/avatar-3.png"
  },
  {
    name: "Priya Sharma",
    role: "Founder, GrowthMetric",
    quote: "The level of transparency and direct access to engineers is refreshing. No middlemen, just pure execution and results.",
    avatar: "/avatars/avatar-4.png"
  },
  {
    name: "Sarah Williams",
    role: "UX Lead",
    quote: "They truly understand the intersection of design and engineering. The end product was both technically robust and beautiful.",
    avatar: "/avatars/avatar-5.png"
  }
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
        <div class="section-header">
          <h2 class="section-title">What We Do</h2>
          <p class="section-lead">
            Full-stack execution and technical strategy tailored to your needs.
          </p>
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
        <div class="section-header text-center">
          <h2 class="section-title">Selected Works</h2>
          <p class="section-lead">
            A look at some of the problems we've solved recently.
          </p>
        </div>
        <div class="work-grid">
          <WorkCard v-for="work in works" :key="work.id" v-bind="work" />
        </div>
        <div class="section-actions text-center">
          <a href="#" class="btn btn-dark-pill">See all projects</a>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="section testimonials">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title uppercase">Hear From Our <br/>Partners</h2>
        </div>
        
        <div class="testimonial-grid">
          <!-- Featured Stats Card -->
          <div class="testimonial-featured">
            <h3 class="stats-number">92%</h3>
            <p class="stats-text">
              Of our partners transition to long-term retained collaboration after their first project.
            </p>
          </div>
          
          <!-- Testimonial Cards -->
          <TestimonialCard 
            v-for="t in testimonials" 
            :key="t.name" 
            v-bind="t" 
          />
        </div>
      </div>
    </section>

    <!-- Why Us Section -->
    <section class="section why-us">
      <div class="container gray-box">
        <div class="why-header">
          <h2 class="section-title">The CODS Way</h2>
          <p class="section-lead">
            Why we're different from your average agency.
          </p>
        </div>
        <div class="why-grid">
          <div class="why-item">
            <h3 class="why-title">Direct Collaboration</h3>
            <p>
              You talk to the engineers building your code, not a project
              manager middleman.
            </p>
          </div>
          <div class="why-item">
            <h3 class="why-title">Pragmatic Quality</h3>
            <p>
              We write clean, testable code without over-engineering for
              problems you don't have yet.
            </p>
          </div>
          <div class="why-item">
            <h3 class="why-title">Transparent Process</h3>
            <p>
              Weekly demos and async updates via Slack/Discord. No black boxes.
            </p>
          </div>
          <div class="why-item">
            <h3 class="why-title">Modular Teams</h3>
            <p>
              We spin up the right specialists for your specific tech stack,
              ensuring niche expertise.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section id="process" class="section process">
      <div class="container">
        <div class="process-header-complex">
          <div class="process-top-row">
            <span class="process-label"><span class="dot-prefix">•</span> Our Process</span>
            <span class="process-index">(03)</span>
          </div>
          <h2 class="process-big-title">
            A Thoughtful, Step-by-Step Process<br />
            <span>Designed to Deliver Exceptional Results</span>
          </h2>
        </div>
        <ProcessGrid />
      </div>
    </section>

    <!-- Contact Section -->
    <footer id="contact" class="footer">
      <div class="container footer-inner">
        <div class="footer-cta">
          <h2 class="footer-title">Ready to build something extraordinary?</h2>
          <p class="footer-lead">Consult your project with our collective.</p>
          <a href="mailto:hello@cods.dev" class="btn btn-primary lg"
            >hello@cods.dev</a
          >
        </div>
        <div class="footer-bottom">
          <div class="footer-info">
            <img src="/logo-white.png" alt="CODS Dev" class="footer-logo" />
            <span class="divider"></span>
            <span class="location">Jakarta / Remote</span>
          </div>
          <div class="copyright">© 2026 CODS Dev. Built for performance.</div>
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
.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.section-actions {
  margin-top: 2rem;
}

.btn-dark-pill {
  background: #000000;
  color: #FFFFFF;
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

/* Complex Process Header */
.process-header-complex {
  margin-bottom: 1rem;
}

.process-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
  margin-bottom: 2.5rem;
}

.process-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dot-prefix {
  font-size: 1.25rem;
  color: var(--text-color);
  line-height: 0.5;
}

.process-index {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  letter-spacing: 0.05em;
}

.process-big-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  line-height: 1.2;
  color: var(--text-color);
  letter-spacing: -0.02em;
}

.process-big-title span {
  color: var(--text-secondary);
}

/* Footer Style */
.footer {
  background: var(--footer-bg);
  color: var(--footer-text);
  padding: 10rem 0 4rem;
}

.footer-cta {
  text-align: center;
  margin-bottom: 8rem;
}

.footer-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.footer-lead {
  font-size: 1.25rem;
  opacity: 0.7;
  margin-bottom: 3rem;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  font-size: 0.875rem;
  opacity: 0.6;
}

.footer-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.footer-logo {
  height: 24px;
  width: auto;
  opacity: 0.8;
}

.brand-small {
  font-weight: 700;
  letter-spacing: 0.05em;
}

.divider {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .gray-box {
    padding: 3rem 1.5rem;
  }

  .footer-title {
    font-size: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
