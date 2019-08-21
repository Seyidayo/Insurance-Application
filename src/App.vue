<template>
  <main id="app" class="main-background">
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