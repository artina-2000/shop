<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">LES UTILISATEURS</h6>
    </div>
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
                <button v-on:click="insertUser()" class="btn btn-primary">
                  Insérer
                </button>
              </td>
            </tr>
            <tr v-for="(user, index) in users" :key="user.id" ::key="index">
              <td v-if="!user.modifyOn" v-on:click="modify(index)">
                {{ user.username }}
              </td>
              <td v-else>
                <input type="text" class="form-control" v-model="username" />
              </td>
              <td v-if="!user.modifyOn" v-on:click="modify(index)">
                {{ user.pwd }}
              </td>
              <td v-else>
                <input type="password" class="form-control" v-model="pwd" />
              </td>
              <td v-if="!user.modifyOn">
                <button class="btn btn-danger">Supprimer</button>
              </td>
              <td v-else>
                <button class="btn btn-warning" v-on:click="validModif(index)">
                  Enregistrer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="btn btn-success" v-on:click="createUser()">Créer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Utilisateurs",
  data() {
    return {
      username: "",
      pwd: "",
      showInput: false,
      modifyIndex: null,
      users: [{ username: "Manitra", pwd: "2000", modifyOn: false }],
    };
  },
  methods: {
    createUser() {
      this.showInput = true;
    },
    insertUser() {
      this.users.push({ username: this.username, password: this.pwd });
      this.username = "";
      this.pwd = "";
      this.showInput = false;
    },
    modify(index) {
      this.users[index].modifyOn = true;
      this.username = this.users[index].username;
      this.password = this.users[index].password;
    },
    validModif(index) {
      this.users[index].modifyOn = false;
      this.users[index].username = this.username;
      this.users[index].password = this.password;
    },
  },
};
</script>

<style>
</style>