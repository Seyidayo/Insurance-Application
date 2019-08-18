<template>
  <section>
    <Header />
    <AppTable />
  </section>
</template>
<script>
import Header from "@/components/Header.vue";
import AppTable from "../components/AppTable.vue";
export default {
  created() {
    this.$store.dispatch("SET_STATISTICS");
    this.$store.dispatch("SET_APPLICATIONS");
  },
  components: {
    Header,
    AppTable
  }
};
</script>
