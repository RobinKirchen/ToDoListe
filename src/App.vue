<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="app">
    <Sidebar/>
    <RouterView />
  </div>
</template>


<style>

:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}


button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app{
  display:flex;

}

main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px){
      padding-left: 6rem;
    }
  }



</style>
