<template>
  <section class="text-center">
    <h3>NO RESULTS</h3>
    <button class="refresh-button" v-on:click="refresh()">↻</button>
  </section>
</template>

<script >
export default {
  name: "EmptyPlaceHolder",
  props: {
    refresh: {
      type: Function
    }
  }
};
</script>
