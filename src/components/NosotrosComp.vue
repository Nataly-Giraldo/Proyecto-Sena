<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <div class="bloques">
      <div>
        <img alt="Vue logo" src="../assets/mision.png">
            <br>
            <a href="#" class="btn btn-dark" id="C0"> NUESTRA MISION</a>
            <P class="p1">El grupo de Costuras S.A.S., es una empresa 
                con integridad y profecionalismo que ofrece servicios
                de la más alta calidad, formato en arreglos de ropa de
                alta costura, diseños personalizados y exclusivos, 
                con la clara idea de suplir con las necesidad del cliente,
                donde hay empleabilidad para todos adultos mayor, madre cabeza de hogar
                y jovenes en situación de vulnerabilidad.
            </P>
        </div>
        
        <div>
          <img alt="Vue logo" src="../assets/respinsabilidad social.png">
            <br>
            <a href="#" class="btn btn-dark" id="D9"> NUESTRA RESPONCIBILIDAD SOCIAL</a>
            <P class="p3">Costuras S.A.S. con el ánimo impulsar y ampliar el espectro 
                con inclusión de empleabilidad formal, a llegados a traves de terceros 
                a capacitar a Jovenes y Adultos en esta carrera tecnica de arreglos y diseños 
                de prendas, las cual fomenta día a día y nos queremos expandir a nivel 
                nacional, para que de esta manera llegar a sectores vulnerables conformados por 
                adulto mayor, madres cabezas de hogar y jovenes en riesgo 
            </P>
        </div>

        <div>
          <img alt="Vue logo" src="../assets/vision.png">
            <br>

            <a href="#" class="btn btn-dark" id="D3">NUESTRA VISION</a>
            <P class="p2">Consolidarnos como empresa en Colombia en Servicios de 
                ropa de alta costura, personalizados y exclusivos, así como queremos 
                unaaplicación virtual, que simplifique de la presentación de nuestro
                exclusivo servicios, para nuestros clientes.
            </P>
        </div>
      </div> 
    </div>
  </template>
  
  <script>
  export default {
    name: 'NosotrosComp',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  img{
    width:50px;
    height:50px;
  }
  .bloques{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-auto-rows: 1fr;
    text-align: justify;
  }

  div{
    padding-right: 20px;
    padding-left: 20px;
  }
  </style>
  