<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <section>
        <div class="cople">
            <img src="../assets/t.jpg">
            <button type="button" class="btn btn-secondary disabled" role="button" id="A"><b><i>CosturasS.A.S.@sitiotextil.co</i></b></button>
        </div>
        <div class="cople">
            <img src="../assets/w.png">
            <button type="button" class="btn btn-secondary disabled" role="button" id="A">+57 (300) - 132 4980</button>
        </div> 

        <div class="cople">
            <img src="../assets/ff.png" >
            <button type="button" class="btn btn-secondary disabled" role="button" id="A" >CosturasS.A.S.@sitiotextil.co</button>
        </div>

        <div class="cople">
            <img src="../assets/i.png">
            <button type="button" class="btn btn-secondary disabled" role="button" id="A">CosturasS.A.S.23@gmail.com</button>
        </div>

        <div class="cople">
            <img src="../assets/c.jpg">
            <button type="button" class="btn btn-secondary disabled" role="button" id="A">CosturasS.A.S.@sitiotextil.co</button>
        </div>

        <div class="cople">
            <img src="../assets/horario.jpg">
            <button type="button" class="btn btn-secondary disabled" role="button" id="A">Lunes-Viernes: 8AM - 5PM - Sábado: 9AM - 4PM</button>
        </div>

        <div class="cople">
            <img src="../assets/u.jpg">
            <button type="button" class="btn btn-secondary disabled" role="button" id="A">KR 23 # 35 - 48. - Bogotá, Colombia</button>
        </div>

        <div class="cople">
            <img src="../assets/tel.png">
            <button type="button" class="btn btn-secondary disabled" role="button" id="A">(601) - 228 - 1260</button>
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
 h1{
            font-family: "Sofia", 'Verdana';
            text-align: center;
            text-shadow: 3px 3px 3px grey;
        }
        section{
            width: auto;
            margin:30px;
            zoom:80%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-auto-rows: 1fr;
        }
        
        .cople{
            margin: 20px;
            display: grid;
            grid-template-columns: .1fr .4fr;
            width: 100%;
        }
        button{
            width: 100%;
        }
  </style>
  