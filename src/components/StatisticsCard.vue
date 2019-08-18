<template>
  <b-card class="shadow-md">
    <!-- <img :src="getImage(id)" :alt="getDescription(id)" /> -->
    <h4>{{stat}}</h4>
    <p>{{getDescription(id)}}</p>
  </b-card>
</template>
<script>
export default {
  name: "StatisticsCard",
  data() {
    return {
      description: [
        "Total Insurance Bought",
        "Total Amount of Insurance",
        "Total Insurance Claims",
        "Total Amount of Claims"
      ]
    };
  },
  methods: {
    getDescription(index) {
      return this.description[index];
    }
  },
  props: {
    stat: Number,
    id: Number
    // description: String
  }
};
</script>