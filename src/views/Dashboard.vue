<template>
  <section class="py-6 container">
    <Loader v-if="STATISTICS_IS_FETCHING" />
    <Header v-else />
    <Loader v-if="APPLICATIONS_IS_FETCHING" />
    <ApplicationsTable v-else />
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import ApplicationsTable from "@/components/AppTable.vue";
import Loader from "@/components/Loader.vue";
export default {
  created() {
    this.$store.dispatch("SET_STATISTICS");
    this.$store.dispatch("SET_APPLICATIONS");
  },
  components: {
    Header,
    ApplicationsTable,
    Loader
  },
  computed: {
    ...mapGetters(["APPLICATIONS_IS_FETCHING", "STATISTICS_IS_FETCHING"])
  }
};
</script>
