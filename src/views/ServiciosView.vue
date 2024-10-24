<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo2.png">
    <ServiciosComp msg="Servicios - Costuras S.A.S"/>
  </div>
</template>
  
<script>
  // @ is an alias to /src
  import ServiciosComp from '@/components/ServiciosComp.vue';
  
export default {
  name: 'ServiciosView',
  components: {
    ServiciosComp
  }
}
</script>