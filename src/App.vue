<script setup>
import { ref } from 'vue';


let todos = ref([]);

function addToList() {
  todos.value.push(document.getElementById("entry").value);
  console.log(todos);
}

</script>

<template>
  <main>
    <h2>ToDoList:</h2>
      <input type="text" id="entry">
      <button @click="addToList">Add item</button>
    <div v-if="todos.length > 0">
      <ul v-for="entry in todos">
      {{ entry }}
      </ul>
   </div>
   <div v-else>Add an entry to your list</div>
    
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
