<script setup>
import { ref, computed } from 'vue';


let id = 0;
const todos = ref([]);
const newTodo = ref("");
const hideCompleted = ref(false);
const selectedPriority = ref();


const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter(entry => entry.completed === false) : todos.value;
});

function addToList() {

  todos.value.push(
    {
      id: id,
      name: newTodo.value,
      completed: false,
      priority: selectedPriority
    }
  );
  id++;
  newTodo.value = "";
  console.log(todos);
}

function deleteEntry(entryId) {
  todos.value = todos.value.filter(entry => entry.id !== entryId);
}


</script>

<template>
  <main>
    <h2>ToDoList:</h2>
    <form @submit.prevent="addToList">
      <input type="text" id="entry" v-model="newTodo" placeholder="Add a new todo" required>
      <label>Priority:</label>
      <select v-model="selectedPriority" required>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input type="submit" value="Add Todo">
    </form>

    <div v-if="todos.length > 0" v-for="entry in filteredTodos">
      <div class="todo-entry" :class="entry.priority">
        <input type="checkbox" v-model="entry.completed">
        <span class="todo-text">{{ entry.name }}</span>
        <button @click="deleteEntry(entry.id)" class="delete">X</button>
      </div>
    </div>
    <div v-else>Add an entry to your list</div>
    <button @click="hideCompleted = !hideCompleted">{{ hideCompleted ? "Show All" : "Hide completed" }}</button>

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Distribute space between the checkbox the text and delete button. For equal space distribution on all sides use space-around instead*/
  font-size: large;
  width: 100%;
  margin-bottom: 5px;
}

main .todo-text {
  margin-left: 5px;
  flex-grow: 1;
  /* Allow the text to take up remaining space */
  text-align: left;
}

main .High {
  background-color: red;
}

main .delete {
  float: right;
  border-color: blueviolet;
  border-width: 1px;
}
</style>
