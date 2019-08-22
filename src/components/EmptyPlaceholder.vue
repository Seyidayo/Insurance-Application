<template>
  <section class="text-center">
    <h5 class="text-primary">
      <b>Unable to Fetch Results</b>
    </h5>
    <b-btn class="refresh-button my-4" v-on:click="refresh()">↻</b-btn>
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
