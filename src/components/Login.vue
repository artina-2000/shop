<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-12">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Your Name"
                        v-model="username"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="pwd"
                      />
                    </div>
                    <button
                    type="button"
                      class="btn btn-primary btn-user btn-block"
                      v-on:click="login()"
                      v-bind:disabled="username == '' || pwd == ''"
                    >
                      Login
                    </button>
                  </form>
                </div>
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
  name: "Logout",
  created() {
    if (localStorage.getItem("users") == null) {
      this.users = [{ username: "Manitra", pwd: "2000" }];
      localStorage.setItem("users", JSON.stringify(this.users));
    } else {
      this.users = JSON.parse(localStorage.getItem("users"));
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
        this.$parent.isConnected = true;
        localStorage.setItem("isConnected", JSON.stringify(foundUser));
      } else {
        console.log("tsy misy");
      }
    },
  },
};
</script>

<style>
</style>