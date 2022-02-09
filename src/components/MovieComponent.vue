<template>
  <div>
    <div align="center">
      <h1>{{ movie }}</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['movie'],
    name:"MovieDetails"
});
</script>