<template>
  <nav>
    <b-navbar toggleable="sm" class="bg-white">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-container>
        <b-navbar-brand>
          <router-link to="/">Logo</router-link>
        </b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link to="/">Dashboard</router-link>
            </b-nav-item>

            <b-nav-item>Buy Insurance</b-nav-item>

            <b-nav-item>
              <router-link to="/stat">Account Settings</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <em>User</em>
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
<style lang="scss">
nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>