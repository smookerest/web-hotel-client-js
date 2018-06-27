<template>
    <div class="RightMenu">
        <nav class="nav flex-column">
            <router-link tag="li" to="/dashboard" class="nav-item">
                <a class="nav-link">Dashboard</a>                       
            </router-link>
            <router-link tag="li" to="/booking" class="nav-item">
                <a class="nav-link">Booking</a>                              
            </router-link>
            <router-link tag="li" to="/login" class="nav-item">
                <a class="nav-link">Caja General</a>
            </router-link>
            <router-link tag="li" to="/rooms" class="nav-item">
                <a class="nav-link">Habitaciones</a>
            </router-link>
            <router-link tag="li" to="/costumers" class="nav-item">
                <a class="nav-link">Clientes</a>
            </router-link>
            <router-link tag="li" to="/users" class="nav-item">
                <a class="nav-link">Usuarios</a>
            </router-link>
        </nav>
    </div>
</template>
      
      <script>
      export default {
        name: 'RightMenu',
      }
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
        nav li a {
            color: snow
        }

        nav li {
            background-color: #6c5ce7
        }

        nav li:hover {
            background-color: #a29bfe
        }
      </style>
      