<script setup>
import { ref } from 'vue';

let todos = ref([]);
let newTodo = ref("");

function addToList() {

  if(newTodo.value.length > 0) {
    todos.value.push(newTodo.value);
  }
  newTodo.value = "";
  console.log(todos);
}

function deleteEntry(todo) {
  todos.value = todos.value.filter(entry => entry !== todo);
}

</script>

<template>
  <main>
    <h2>ToDoList:</h2>
    <input type="text" id="entry" v-model="newTodo" placeholder="Add a new todo">
    <button @click="addToList">Add item</button>

      <div v-if="todos.length > 0" v-for="entry in todos">
        <div class="todo-entry">
          <input type="checkbox">
          {{ entry }}
          <button @click="deleteEntry(entry)" class="delete">Delete</button>
        </div>
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

main .todo-entry {
  word-wrap: break-word;
  display: flex;
  place-items: center;
  font-size: large;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;
}

main .delete{
  float: right;
  border-color: blueviolet;
  border-width: 1px;
}
</style>
