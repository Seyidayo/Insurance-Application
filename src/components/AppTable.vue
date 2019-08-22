<template>
  <section>
    <b-card class="mt-5 mb-20 shadow-md table-card" id="table">
      <h6 class="my-3 mx-6 line-down">Insurance Applications</h6>
      <hr class="line-down" />
      <b-table striped responsive hover v-if="APPLICATIONS.length > 0" :items="APPLICATIONS">
        <template slot="status" slot-scope="data">
          <span v-if="data.value" class="badge success-badge p-2">&bull; Completed</span>
          <span v-else class="badge fail-badge p-2">&bull; Incomplete</span>
        </template>
        <template slot="action" slot-scope="data">
          <b-btn v-if="data.value" type="submit">Make a Claim</b-btn>
          <b-btn v-else type="submit">Complete Process</b-btn>
          <b-dropdown id="dropdown-offset" offset="25" text="More Actions" class="ml-10" no-caret>
            <b-dropdown-item>View Policy</b-dropdown-item>
            <b-dropdown-item>Make a Claim</b-dropdown-item>
          </b-dropdown>
        </template>
        <template slot="blank"></template>
      </b-table>
      <EmptyPlaceholder v-else :refresh="refresh"></EmptyPlaceholder>
    </b-card>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import EmptyPlaceholder from "@/components/EmptyPlaceholder";
export default {
  name: "ApplicationsTable",
  computed: {
    ...mapGetters(["APPLICATIONS"])
  },
  components: {
    EmptyPlaceholder
  },
  methods: {
    refresh() {
      this.$store.dispatch("SET_APPLICATIONS");
    }
  }
};
</script>
