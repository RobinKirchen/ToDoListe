<script setup>
import { ref, computed } from 'vue';


let id = 0;
const todos = ref([]);
const newTodo = ref("");
const hideCompleted = ref(false);
const selectedPriority = ref();
const orderByPriority = ref(false);


// Map of priorities so it is easy to change them or add additional ones later on
const priorities = new Map();
priorities.set("high", 2);
priorities.set("medium", 1);
priorities.set("low", 0);


const filteredTodos = computed(() => {
  // contains either the whole list or a list containing only the entrys where completed equals false based on the value of hideCompleted
  let todoList = hideCompleted.value ? todos.value.filter(entry => entry.completed === false) : todos.value;

  // sorts list either by priority or by id based on the value of orderByPriority
  todoList = orderByPriority.value ? todoList.sort((a, b) => priorities.get(b.priority) - priorities.get(a.priority)) : todoList.sort((a, b) => a.id - b.id);
  return todoList;
});


function addToList() {

  todos.value.push(
    {
      id: id,
      name: newTodo.value,
      completed: false,
      priority: selectedPriority.value
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
      <input type="text" class="entry" v-model="newTodo" placeholder="Add a new todo" required>
      <label>Priority:</label>
      <select v-model="selectedPriority" required>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <input type="submit" value="Add Todo">
    </form>

    <div v-if="todos.length > 0">
      <div v-for="entry in filteredTodos" :key="entry.id">
        <div class="todo-entry" :class="entry.priority">
          <input type="checkbox" v-model="entry.completed">
          <span class="todo-text">{{ entry.name }}</span>
          <button @click="deleteEntry(entry.id)" class="delete">X</button>
        </div>
      </div>
    </div>
    <div v-else>Add an entry to your list</div>
    <button @click="hideCompleted = !hideCompleted">{{ hideCompleted ? "Show All" : "Hide completed" }}</button>
    <button @click="orderByPriority = !orderByPriority">{{ orderByPriority ? "Order by Date" : "Order by Priority"
      }}</button>

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
  text-align: left;
}

main .high {
  background-color: red;
}

main .entry {
  display: flex;
  flex-grow: 1;
  border: none;
  background: transparent;
}

main .medium {
  background-color: orange;
}

main .low {
  background-color: yellow;
}

main .delete {
  float: right;
  border-color: blueviolet;
  border-width: 1px;
}
</style>
