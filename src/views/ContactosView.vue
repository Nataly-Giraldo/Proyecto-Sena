<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo2.png">
    <ContactosComp msg="Contactos - Costuras S.A.S"/>
  </div>
</template>
  
<script>
  // @ is an alias to /src
  import ContactosComp from '@/components/ContactosComp.vue';
  
export default {
  name: 'ContactosView',
  components: {
    ContactosComp
  }
}
</script>