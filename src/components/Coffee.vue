<script>
import { coffees } from "./database";

export default {
  data() {
    return {
      coffee: coffees.find(
        (c) => c.title.toLowerCase() === this.$route.params.title
      ),
    };
  },
};

/* const coffee = coffees.find((c) => c.title === this.$route.params.title); */
</script>

<template>
  <div>
    <h2>{{ coffee.title }}</h2>
    <!--  <img src="{{ coffee.img_url }}" /> -->
    <p>{{ coffee.description }}</p>
    <div>{{ coffee.price }}</div>
  </div>
</template>
