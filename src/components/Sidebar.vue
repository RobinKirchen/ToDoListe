<script setup>

</script>

<template>
  <aside>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-symbols-outlined">
          menu
        </span>
      </button>
    </div>
  </aside>

</template>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  width: 4rem;
  background-color: var(--dark);
  color: var(--light);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  transition: 0.2s ease-out;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }

}
</style>