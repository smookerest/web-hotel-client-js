<template>
        <div class="hello">
            <div class="row">
                    <div class="col-md-2">
                            <RightMenu></RightMenu>
                    </div>
                    <div class="col-md-10">
                        
                    </div>      
            </div>           
        </div>
</template>
      
      <script>
      import RightMenu from './Right-Menu'
      export default {
        name: 'HelloWorld',
        components: {
            RightMenu
        },
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
        methods: {
            async sayHi () {
                await LoginService.p(this.user)
                    .then(response => {
                      if (response.data.user) {
                        this.loginUser = response.data
                        console.log(this.loginUser.username)
                      } else {
                        this.error = response.data.error
                        console.log(this.error)
                      }
                        
                    })
            }
        }
      }
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>

      </style>
      