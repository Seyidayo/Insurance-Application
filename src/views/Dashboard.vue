<template>
  <section>
    <Header />
  </section>
</template>
<script>
import Header from "@/components/Header.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  created() {
    this.$store.dispatch("SET_APPLICATIONS");
  },
  computed: {
    ...mapGetters(["TOKEN"])
  },
  components: {
    Header
  }
};
</script>
