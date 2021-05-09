<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">LES PRODUITS</h1>
    </div>

    <!-- Content Row -->
    <div class="row">
      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4" v-for="(produit, index) in produits" :key="produit.id" ::key="index">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                >
{{produit.name}}                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
${{produit.price}}                </div>
              </div>
              <div class="col-auto">
                <img src="../assets/robe.jpg" style="width:100%;"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Produits",
  data() {
    return {
      modal: false,
      produits: [
        { name: "robe de soirée", price: 1500, img: "../assets/robe.jpg" },
        { name: "Costume", price: 2500, img: "../assets/robe.jpg" },
      ],
    };
  },
};
</script>

<style>
</style>