<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="javascript:void(0)"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fab fa-shopify"></i>
      </div>
      <div class="sidebar-brand-text mx-3">HAZEN<sup>Field</sup></div>
    </a>

    <!-- Divider -->

    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <router-link class="nav-link" to="/">
        <i class="fas fa-shopping-cart"></i> <span>Produits</span>
      </router-link>
      <!-- <a class="nav-link" href="index.html">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Produits</span>
      </a> -->
    </li>
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <router-link class="nav-link" to="/utilisateurs">
        <i class="fas fa-user"></i> <span>Utilisateurs</span></router-link
      >
    </li>
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <a class="nav-link" href="javascript:void(0)" v-on:click="logout()">
        <i class="fas fa-sign-out-alt"></i> <span>Se déconnecter</span> </a
      >>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    logout() {
      this.$parent.isConnected = false;
      localStorage.removeItem("isConnected");
    },
  },
};
</script>

<style>
</style>