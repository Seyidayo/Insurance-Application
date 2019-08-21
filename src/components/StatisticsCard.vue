<template>
  <b-card class="shadow-sm stat-card" :style="{ backgroundImage: `url(${getBgImage(id)})`}">
    <img :src="getImage(id)" alt height="64" width="64" />
    <div>
      <h3>{{stat}}</h3>
      <p>{{getDescription(id)}}</p>
    </div>
  </b-card>
</template>
<script>
import AmountOfClaimsIcon from "@/assets/image/amount-of-claims-icon.png";
import InsuranceBoughtIcon from "@/assets/image/insurance-bought-icon.png";
import InsuranceClaimIcon from "@/assets/image/insurance-claim-icon.png";
import TotalAmountOfInsuranceIcon from "@/assets/image/total-amount-icon.png";

import AmountOfClaimsBg from "@/assets/image/amount-of-claims-bg.png";
import InsuranceBoughtBg from "@/assets/image/insurance-bought-bg.png";
import InsuranceClaimBg from "@/assets/image/insurance-claim-bg.png";
import TotalAmountOfInsuranceBg from "@/assets/image/total-amount-bg.png";

export default {
  name: "StatisticsCard",
  data() {
    return {
      description: [
        "Total Insurance Bought",
        "Total Amount of Insurance",
        "Total Insurance Claims",
        "Total Amount of Claims"
      ],
      images: [
        [InsuranceBoughtIcon, InsuranceBoughtBg],
        [TotalAmountOfInsuranceIcon, TotalAmountOfInsuranceBg],
        [InsuranceClaimIcon, InsuranceClaimBg],
        [AmountOfClaimsIcon, AmountOfClaimsBg]
      ]
    };
  },
  methods: {
    getDescription(index) {
      return this.description[index];
    },
    getImage(index) {
      return this.images[index][0];
    },
    getBgImage(index) {
      return this.images[index][1];
    }
  },
  props: {
    stat: String,
    id: Number
  }
};
</script>