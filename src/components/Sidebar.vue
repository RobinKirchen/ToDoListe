<script setup>
import { ref } from 'vue';

const is_expanded = ref(false);

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};

</script>

<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
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

.is-expanded {
  width: var(--sidebar-width);
}

.menu-toggle-wrap {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  position: relative;
  top: 0;
  transition: 0.2s ease-out;
}

.menu-toggle {
  transition: 0.2s ease-out;
}


.material-symbols-outlined:hover {
  background-color: var(--grey);
}

.material-symbols-outlined {
  font-size: 2rem;
  background-color: var(--light);
  color: var(--dark);
}
</style>