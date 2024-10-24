<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo2.png">
    <CatalogoComp msg="Catalogo - Costuras S.A.S"/>
  </div>
</template>
  
<script>
  // @ is an alias to /src
  import CatalogoComp from '@/components/CatalogoComp.vue';
  
export default {
  name: 'CatalogoView',
  components: {
    CatalogoComp
  }
}
</script>