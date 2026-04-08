<script setup lang="ts">
const team = [
  {
    name: "Emma Richardson",
    role: "Lead Designer",
    avatar: "/avatars/avatar-1.png"
  },
  {
    name: "Daniel Lee",
    role: "Brand Strategist",
    avatar: "/avatars/avatar-2.png"
  },
  {
    name: "Maria Lopez",
    role: "Web Designer",
    avatar: "/avatars/avatar-3.png"
  },
  {
    name: "Priya Sharma",
    role: "UX/UI Specialist",
    avatar: "/avatars/avatar-4.png"
  }
];
</script>

<template>
  <div class="team-grid">
    <div v-for="member in team" :key="member.name" class="team-card">
      <div class="team-image-container">
        <img :src="member.avatar" :alt="member.name" class="team-image" />
      </div>
      <div class="team-info">
        <div class="info-left">
          <h3 class="team-name">{{ member.name }}</h3>
          <p class="team-role">{{ member.role }}</p>
        </div>
        <div class="info-right">
          <a href="#" class="social-icon">in</a>
          <a href="#" class="social-icon">X</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.team-card {
  background: var(--card-bg);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-color);
}

.team-image-container {
  width: 100%;
  aspect-ratio: 4/5;
  overflow: hidden;
  background: var(--gray-box);
}

.team-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-card:hover .team-image {
  transform: scale(1.05);
}

.team-info {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: var(--card-bg);
}

.team-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0;
}

.team-role {
  font-size: 0.8125rem;
  color: var(--text-secondary);
  margin: 0.25rem 0 0;
}

.info-right {
  display: flex;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
}

.social-icon {
  text-decoration: none;
  color: var(--text-color);
  opacity: 0.6;
  transition: opacity 0.2s;
}

.social-icon:hover {
  opacity: 1;
  color: var(--accent-color);
}
</style>
