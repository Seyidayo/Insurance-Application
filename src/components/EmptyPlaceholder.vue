<template>
  <section class="text-center">
    <h3>NO RESULTS</h3>
    <b-btn class="refresh-button" v-on:click="refresh()">↻</b-btn>
  </section>
</template>

<script >
export default {
  name: "EmptyPlaceholder",
  props: {
    refresh: {
      type: Function
    }
  }
};
</script>
