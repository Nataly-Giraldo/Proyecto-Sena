<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo2.png">
      <NosotrosComp msg="Quienes somos - Costuras S.A.S"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
    import NosotrosComp from '@/components/NosotrosComp.vue';
  
  export default {
    name: 'NosotrosView',
    components: {
    NosotrosComp
}
  }
  </script>