<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <div class="bloques">
        <div class="bloque_interno">
            <img alt="Vue logo" src="../assets/arreglos de ropa.jpg" width="150" height="150">
            <P>Expertos de reducción y ampliación, se encargarán
                que la prenda que ya no te queda, se ajuste a tus 
                nuevas medidas.
            </P>
        </div>
        
        <div class="bloque_interno">
            <img alt="Vue logo" src="../assets/vestidos-casuales.jpg" width="150" height="150">
            <P>Presentamos nuevas alternativas para que tu nueva prenda
                te gusta y la sigas disfrutando desde otra
                iniciativa enla moda casual.
            </P>
        </div>
        
        <div class="bloque_interno">
            <img alt="Vue logo" src="../assets/solicitudes.jpg">
            <P>Los clientes tendran que comunicarse con los contactos 
                de la empresa para hacer sus pedidos, tales como: 
                WhatsApp, Instagram, Facebook, Correo, etc...   
            </P>
        </div>
      </div>
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
  img{
    width:150px;
    height:150px;
  }
  .bloques{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
  }

  .bloque_interno{
    display: grid;
    grid-template-columns: .4fr 1fr;
    grid-auto-rows: .1fr;
    text-align: justify;
  }
  div{
    padding-right: 20px;
    padding-left: 20px;
  }
  </style>
  