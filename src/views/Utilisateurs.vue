<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">LES UTILISATEURS</h1>
      <a
        href="#"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        v-on:click="createUser()"
        data-toggle="modal"
        data-target="#exampleModal2"
      >
        Créer</a
      >
    </div>
    <div class="card shadow mb-4">
      <div class="card-header py-3"></div>
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Nom d'utilisateurs</th>
                <th>Mot de passe</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="showInput">
                <td>
                  <input type="text" class="form-control" v-model="username" />
                </td>
                <td>
                  <input type="password" class="form-control" v-model="pwd" />
                </td>
                <td>
                  <button v-on:click="insertUser()" class="btn btn-secondary" v-bind:disabled="username == '' || pwd == ''">
                    Insérer
                  </button>
                </td>
              </tr>
              <tr v-for="(user, index) in users" :key="user.id" ::key="index">
                <td v-if="index != modifyIndex" v-on:click="modify(index)">
                  {{ user.username }}
                </td>
                <td v-else>
                  <input type="text" class="form-control" v-model="username" />
                </td>
                <td v-if="index != modifyIndex" v-on:click="modify(index)">
                  {{ showMdp(user.pwd) }}
                </td>
                <td v-else>
                  <input type="password" class="form-control" v-model="pwd" />
                </td>
                <td v-if="index != modifyIndex">
                  <button
                    class="btn btn-danger"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    v-on:click="deleteModal(index)"
                  >
                    Supprimer
                  </button>
                </td>
                <td v-else>
                  <div class="text-center">
                    <button
                      v-bind:disabled="username == '' || pwd == ''"
                      class="btn btn-primary margin-20"
                      v-on:click="validModif(index)"
                    >
                      Enregistrer
                    </button>
                    <button
                      class="btn btn-danger margin-20"
                      style="margin-rigth: 2%"
                      v-on:click="annulModif(index)"
                    >
                      Annuler
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <button class="btn btn-success" v-on:click="createUser()">Créer</button> -->
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
            v-on:click="deleteUser(index)"
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
  name: "Utilisateurs",
 created() {
    if(localStorage.getItem('users')) {
      const jsonUsers = JSON.parse(localStorage.getItem('users'));
      this.users = jsonUsers;
    }
  },
  data() {
    return {
      username: "",
      pwd: "",
      showInput: false,
      modifyIndex: null,
      deleteIndex: null,
      users: [{ username: "Manitra", pwd: "2000" }],
    };
  },
  methods: {
    createUser() {
      this.modifyIndex = null;
      this.showInput = true;
    },
    insertUser() {
      this.users.push({
        username: this.username,
        pwd: this.pwd,
      });
      console.log(this.users);
      this.username = "";
      this.pwd = "";
      this.showInput = false;
       const stringUsers = JSON.stringify(this.users);
      localStorage.setItem('users', stringUsers);
    },
    modify(index) {
      this.modifyIndex = index;
      this.showInput = false;
      this.username = this.users[index].username;
      this.pwd = this.users[index].pwd;
 
    },
    validModif(index) {
      this.users[index].username = this.username;
      this.users[index].pwd = this.pwd;
      this.username = "";
      this.pwd = "";
      this.modifyIndex = null;
       const stringUsers = JSON.stringify(this.users);
      localStorage.setItem('users', stringUsers);
    },
    annulModif() {
      this.modifyIndex = null;
      this.username = "";
      this.pwd = "";
    },
    deleteModal(index) {
      this.deleteIndex = index;
    },
    deleteUser() {
      const filter = (user, i) => {
        if (this.deleteIndex != i) return true;
        else return false;
      };
      this.users = this.users.filter(filter);
       const stringUsers = JSON.stringify(this.users);
      localStorage.setItem('users', stringUsers);
    },
    showMdp(mdp) {
      let mdpHide = "";
      for (let m of mdp) {
        mdpHide += "*";
        if (m) {
          m = +"";
        }
      }
      return mdpHide;
    },
  },
};
</script>

<style>
.margin-20 {
  margin-left: 10px;
}
</style>