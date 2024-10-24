<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo2.png">
    <HelloWorld msg="Bienvenidos a Costuras S.A.S"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
