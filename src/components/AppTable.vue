<template>
  <section>
    <b-card class="my-2 shadow-md" id="table">
      <h5 class="py-2">Insurance Applications</h5>
      <b-table striped responsive hover v-if="APPLICATIONS.length > 0" :items="APPLICATIONS">
        <template
          slot="table-caption"
          class="sr-only"
        >Table Showing your Insurance application stages</template>
        <template slot="status" slot-scope="data">
          <span v-if="data.value" class="badge success-badge p-2">&bull; Completed</span>
          <span v-else class="badge fail-badge p-2">&bull; Incomplete</span>
        </template>
        <template slot="action" slot-scope="data">
          <b-btn v-if="data.value" type="submit">Make a Claim</b-btn>
          <b-btn v-else type="submit">Complete Process</b-btn>
        </template>
        <template slot="blank">
          <b-dropdown id="dropdown-offset" offset="25" text="More Actions">
            <b-dropdown-item href="#">View Policy</b-dropdown-item>
            <b-dropdown-item href="#">Make a Claim</b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table>
      <EmptyPlaceholder v-else :refresh="refresh"></EmptyPlaceholder>
    </b-card>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import EmptyPlaceholder from "@/components/EmptyPlaceholder";
export default {
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
