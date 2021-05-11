<template>
  <div id="wrapper" v-if="isConnected">
    <!-- Sidebar -->
    <Sidebar />
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
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
    <!-- End of Content Wrapper -->
  </div>
  <div v-else>
    <input type="text" v-model="username" />
    <input type="password" v-model="pwd" />
    <button v-on:click="login()">Se connecter</button>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: "App",
  created() {
    if (localStorage.getItem("users") == null) {
      this.users = [{ username: "Manitra", pwd: "2000" }];
      localStorage.setItem("users", JSON.stringify(this.users));
    } else {
      this.users = JSON.parse(localStorage.getItem("users"));
    }

    if (localStorage.getItem("isConnected") == null) {
      localStorage.setItem("isConnected", JSON.stringify(false));
    } else {
      this.isConnected = JSON.parse(localStorage.getItem("isConnected"));
    }
  },
  data() {
    return {
      isConnected: false,
      users: [],
      username: "",
      pwd: "",
    };
  },
  methods: {
    login() {
      const find = (user) => {
        if (user.username == this.username && user.pwd == this.pwd) {
          return true;
        } else {
          return false;
        }
      };
      const foundUser = this.users.find(find);
      if (foundUser) {
        this.isConnected = true;
        localStorage.setItem("isConnected", JSON.stringify(foundUser));
      } else {
        console.log("tsy misy");
      }
    },
  },
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
};
</script>
<style lang="scss">
</style>
