<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1> Página Web - Cosuras S.A.S.</h1>
        <section>
            <div class="A">
            <img class="imagen" src="../assets/2.png" alt="1" width="auto" height="350">
            <P class="parrafo">Nuestros procesos, son eficientes y de calidad, generando así un estilo express, a la vanguardia de los tiempos actuales. donde las nuevas colecciones o arreglos son perfectos.</P>
        </div>
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

.A{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: justify;
    display: flex;
    justify-content: center;
     align-items: center; 
}
img{
  width:300px;
}
.parrafo{
    padding-left: 20px;
    width:500px
}

.imagen{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
