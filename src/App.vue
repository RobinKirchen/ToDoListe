<template>
  <h1>Hello App!</h1>
  <div class="app">
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/toDoList">Go to About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>