<template>
  <main id="app" class="bg-gray-100">
    <Navbar />
    <router-view />
  </main>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>