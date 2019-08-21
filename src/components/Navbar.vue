<template>
  <nav>
    <b-navbar toggleable="sm" class="bg-white shadow-sm">
      <b-container>
        <b-navbar-brand>
          <router-link to="/">
            <img :src="CompanyLogo" alt />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="ml-6">
            <b-nav-item class="mr-4">
              <router-link to="/">Dashboard</router-link>
            </b-nav-item>

            <b-nav-item class="mr-4">Buy Insurance</b-nav-item>

            <b-nav-item class="mr-4">
              <router-link to="/settings">Account Settings</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <img class="inline-block mr-2" :src="Avatar" alt width="40" height="40" />
                <span class="text-primary">Lois Durello</span>
              </template>
              <b-dropdown-item>
                <router-link to="/settings">Account Settings</router-link>
              </b-dropdown-item>
              <b-dropdown-item>Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </nav>
</template>
<script>
import CompanyLogo from "@/assets/image/Logo.png";
import Avatar from "@/assets/image/Avatar.png";
export default {
  name: "Navbar",
  data() {
    return {
      CompanyLogo,
      Avatar
    };
  }
};
</script>