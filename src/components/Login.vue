<template>
    <div class="Login">
        <nav class="navbar navbar-dark bg-primary fixed-top">
            <a class="navbar-brand" href="">Home</a>
            <div id="auth">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                     <a class="nav-link" href="">Login</a>
                    </li>
                  </ul>
            </div>
            
          </nav> 
     <p v-if="error" class="alert alert-danger">
        {{ error }}
     </p> 
      <div class="">
          <form class="form-signin center">
            <div class="text-center mb-4">
              <div class="form-group">
                  <label for="inputUser">Usuario</label>
                  <input class="form-control" v-model="user.username" type="text">
              </div>
                <div class="form-group">
                    <label for="inputPassword">Contraseña</label>
                    <input class="form-control" v-model="user.password" type="password">
                </div>              
                
            </div>
              
          </form>
          <button class="form-signin btn btn-primary btn-block" v-on:click="sayHi">Entrar</button>
      </div>    
    </div>
  </template>
  
  <script>
  import LoginService from '@/services/LoginService'

  export default {
    name: 'Login',
    data () {
      return {
        user: {
            username: '',
            password: ''
        },
        logingUser: {
            username: '',
            password: ''
        },
        error: ''
      }
    },
    mounted () {
      if(localStorage.getItem("username"))
      {
        this.$router.push({name: 'dashboard'})
      }
    },
    methods: {
        async sayHi () {
            await LoginService.p(this.user)
                .then(response => {
                  if (response.data.user) {
                    alert('En hora buena')
                    this.loginUser = response.data.user
                    console.log(response.data.user.UserName)
                    localStorage.setItem("username", this.loginUser.UserName)
                    this.$router.push({name: 'dashboard'})
                  } else {
                    this.error = response.data.error
                  }
                    
                })
        }
    }
  }
  </script>
<style>

.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

.form-signin label, button {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font: bold;
}
</style>
  