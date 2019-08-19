<template>
  <nav>
    <b-navbar toggleable="sm" class="bg-white">
      <b-container>
        <b-navbar-brand>
          <router-link to="/">
            <img :src="CompanyLogo" alt />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link to="/">Dashboard</router-link>
            </b-nav-item>

            <b-nav-item>Buy Insurance</b-nav-item>

            <b-nav-item>
              <router-link to="/settings">Account Settings</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <span class="badge success-badge">LD</span> Lois Dorello
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </nav>
</template>
<script>
import CompanyLogo from "@/assets/image/Logo.png";
export default {
  name: "Navbar",
  data() {
    return {
      CompanyLogo
    };
  }
};
</script>
