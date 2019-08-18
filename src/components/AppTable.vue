<template>
  <section>
    <b-card class="my-2">
      <h5 class="py-2">Insurance Applications</h5>
      <b-table striped hover :items="APPLICATIONS">
        <template slot="status" slot-scope="data">
          <span v-if="data.value" class="rounded-lg bg-green-300 text-green-800 p-2">* Completed</span>
          <span v-else class="rounded-lg bg-red-200 p-2">* Incomplete</span>
        </template>
        <template slot="action" slot-scope="data">
          <b-btn v-if="data.value" type="submit">Make a Claim</b-btn>
          <b-btn v-else type="submit">Complete Process</b-btn>
        </template>
      </b-table>
    </b-card>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["APPLICATIONS"])
  }
};
</script>
