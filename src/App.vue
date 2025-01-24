<script setup>

function addToList() {

}

</script>

<template>
  <main>
    <h2>ToDoList:</h2>
    <form>
      <input type="text" id="entry">
      <button @click="addToList">Add item</button>
    </form>
    <ul></ul>
    
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
