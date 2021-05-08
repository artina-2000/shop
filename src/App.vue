<template>
  <div id="wrapper">
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
        <Content />
        <!-- /.container-fluid -->
      </div>

      <!-- End of Main Content -->

      <!-- Footer -->
        <Footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Sidebar,
    Navbar,
    Content,
    Footer
  },
};
</script>
<style lang="scss">
</style>
