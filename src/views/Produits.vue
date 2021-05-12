<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">LES PRODUITS</h1>
      <a
        href="#"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        v-on:click="create()"
        data-toggle="modal"
        data-target="#exampleModal2"
      >
        Créer</a
      >
    </div>
    <div class="row">
      <div
        class="col-xl-3 col-md-6 mb-4"
        v-for="(produit, index) in produits"
        :key="produit.id"
        ::key="index"
      >
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div
                class="col mr-2"
                data-toggle="modal"
                data-target="#exampleModal"
                v-on:click="openModal(index)"
              >
                <div
                  class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                >
                  {{ produit.name }}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  ${{ produit.price }}
                </div>
              </div>
              <div class="dropdown">
                <button
                  class="pull-right btn btn-secondary"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ...
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a
                    class="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    v-on:click="contextuelMenu(index)"
                    >supprimer</a
                  >
                </div>
              </div>
              <div class="col-auto">
                <img src="../assets/robe.jpg" style="width: 100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Produits</h5>

          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputname1"
              v-model="name"
            />
          </div>
          <div class="form-group">
            <label for="price">Prix</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputprice1"
              v-model="price"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-dismiss="modal"
            v-on:click="sauvegarde(index)"
            v-bind:disabled="name == '' || price == ''"
          >
            Sauvegarder
          </button>
          <button
            type="button"
            class="btn btn-danger"
            data-dismiss="modal"
            v-on:click="annuleModif(index)"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="exampleModal2"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Produits</h5>

          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputname1"
              v-model="name"
            />
          </div>
          <div class="form-group">
            <label for="price">Prix</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputprice1"
              v-model="price"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-dismiss="modal"
            v-on:click="addproduit()"
            v-bind:disabled="name == '' || price == ''"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <h3 class="text-center">Vous êtes sur?</h3>
          <h5 class="text-center text-danger">
            Cette action est irreversible!
          </h5>
        </div>
        <div class="text-center">
          <button
            type="button"
            class="btn btn-danger"
            data-dismiss="modal"
            style="margin: 2%"
            v-on:click="deleteProduit(index)"
          >
            Oui,Supprimer
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style="margin: 2%"
            data-dismiss="modal"
            v-on:click="annuleDelete(index)"
          >
            Non,Annuler
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Produits",
  created() {
    if (localStorage.getItem("produits")) {
      const jsonProduits = JSON.parse(localStorage.getItem("produits"));
      this.produits = jsonProduits;
    }
  },
  data() {
    return {
      name: "",
      price: "",
      editIndex: null,
      deleteIndex: null,
      ptsuspension: false,
      produits: [
        // {name: 'robe de nuit', price: 15000}
      ],
    };
  },
  methods: {
    openModal(index) {
      this.name = this.produits[index].name;
      this.price = this.produits[index].price;
      this.editIndex = index;
    },
    annuleModif() {
      this.name = this.produits[this.editIndex].name;
      this.price = this.produits[this.editIndex].price;
    },
    sauvegarde() {
      this.produits[this.editIndex].name = this.name;
      this.produits[this.editIndex].price = this.price;
      const stringProduits = JSON.stringify(this.produits);
      localStorage.setItem("produits", stringProduits);
    },
    contextuelMenu(index) {
      this.deleteIndex = index;
    },
    deleteProduit() {
      const filter = (produit, i) => {
        if (this.deleteIndex != i) return true;
        else return false;
      };
      this.produits = this.produits.filter(filter);
      const stringProduits = JSON.stringify(this.produits);
      localStorage.setItem("produits", stringProduits);
    },
    annuleDelete() {
      this.deleteIndex = null;
    },
    create() {
      this.name = "";
      this.price = "";
    },
    addproduit() {
      this.produits.push({ name: this.name, price: this.price });
      const stringProduits = JSON.stringify(this.produits);
      localStorage.setItem("produits", stringProduits);
    },
  },
};
</script>

<style>
</style>