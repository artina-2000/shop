<template>
  <div id="wrapper" v-if="isConnected">
    <!-- Sidebar -->
    <Sidebar />
    <!-- End of Sidebar -->

    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <Navbar />
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <router-view></router-view>
        <!-- /.container-fluid -->
      </div>

      <!-- End of Main Content -->

      <!-- Footer -->
      <Footer />
      <!-- End of Footer -->
    </div>
  </div>
  <div v-else>
    <Logout />
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Logout from "./components/Login";
export default {
  name: "App",
  created() {

    if (localStorage.getItem("isConnected") == null) {
      localStorage.setItem("isConnected", JSON.stringify(false));
    } else {
      this.isConnected = JSON.parse(localStorage.getItem("isConnected"));
    }
  
 },
 data() {
    return {
      isConnected: false,
    };
  },
  components: {
    Sidebar,
    Navbar,
    Footer,
    Logout
  },
};
</script>
<style lang="scss">
</style>
