<script setup>
import { coffees } from "./database";
</script>

<template>
  <h1>Coffees</h1>

  <div v-for="coffee in coffees" :key="coffee.title" :coffee="coffee">
    <router-link :to="'/coffee/' + coffee.title.toLowerCase()">
      <h2>{{ coffee.title }}</h2>
      <img :src="coffee.img_url" />
      <p>{{ coffee.description }}</p>
      <div>{{ coffee.price }}</div>
    </router-link>
  </div>
</template>

<style></style>
