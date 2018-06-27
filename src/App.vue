<template>
  <div id="app">
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="">Home</a>
        <div id="auth">
            <ul class="navbar-nav">
                <li class="nav-item active">
                  <a v-on:click="logout" class="nav-link" href="">Logout</a>
                  
                </li>
              </ul>
        </div>      
      </nav> 
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      user: ''
    }
  },
  methods: {
    logout () {
      if(localStorage.getItem("username"))
      {
        localStorage.removeItem("username")
        this.$router.push({name: 'login'})
      }
    }
  },
  watch: {
    async user() {
      this.user = await localStorage.getItem("username")
    }
  },
    async mounted() {
      this.user = await localStorage.getItem("username")
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#auth {
  margin-left: 10%, 
}
</style>
