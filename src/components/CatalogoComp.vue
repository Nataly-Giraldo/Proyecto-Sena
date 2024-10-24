<template>
  
    <div class="hello">
      <h1>{{ msg }}</h1>
      <section>
      <div></div>
      <div class="imagen" style="text-align: center;">
        <img alt="chaquetas" src="../assets/chaquetas.jpg" width="200" height="200">

        <img alt="Buzos" src="../assets/buzos.jpg" width="200" height="200">

        <img alt="Vestidos" src="../assets/vestidos-casuales.jpg" width="200" height="200">

        <img alt="sudaderas" src="../assets/sudaderas.jpg" width="200" height="200">

        <img alt="Faldas" src="../assets/faldas.jpg" width="200" height="200">

        <img alt="camisetas" src="../assets/camisetas.jpg" width="200" height="200">
    </div>
    <div></div>
  </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  section{
    display: grid;
    grid-template-columns: 1fr 6fr 1fr ;
    grid-auto-rows: 1fr;
  }
.imagen{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
img{
  padding: 20px;
  width:80%;
}
  </style>
  