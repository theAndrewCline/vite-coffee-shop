<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
  hello: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ hello }}</h1>
</template>

<style scoped></style>
