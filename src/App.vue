<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Coffee from "./components/Coffee.vue";
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + Vite" hello="Coffee Shop" />
  <router-view></router-view>
  <footer>
    <address>Contact info</address>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
