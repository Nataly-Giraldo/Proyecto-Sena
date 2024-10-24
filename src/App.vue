<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/clientes">Clientes</router-link> |
    <router-link to="/nosotros">Nosotros</router-link> |
    <router-link to="/servicios">Servicios</router-link> |
    <router-link to="/catalogo">Catalogo</router-link> |
    <router-link to="/contactos">Contactos</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-image: url(assets/hola.jpg);
}
img{
  width: 70px;
}
nav {
  padding: 30px;
}

nav a {
  zoom:120%;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.contenidos{
  display: grid;
  grid-column-gap: .1rem;
  grid-row-gap: .5rem;
  grid-template-columns: 1fr 5fr;
  grid-auto-rows: 1fr;
  min-height: 70vh;
}

section{
  margin-top: 1%;
  padding: 1%;
}

.Home{
  zoom: 80%;
  display: inline-block;
  position:relative;
  color: #181218;
  margin-left: 1rem;
  margin-right: 1rem;
}

.components{
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 2.5fr;
  zoom: 95%;
}

.container{
  width: auto;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(76, 92, 164, 1);
  background-color: rgb(250, 250, 250);
  padding-left: 1rem;
  padding-right: 1rem;
}
 
h1 {
  text-align: center;
  font-family: "Sofia", sans-serif;
  font-size: 30px;
  text-shadow: 3px 3px 3px rgb(128, 128, 128);
}

.form-group {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 10px;
  grid-gap: 10px;
}

label {
  display: block;
  font-weight: bold;
  text-align: right;
  padding: 5px;
}

input{
  padding: 5px;
  margin-right: 50px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button{
  display: block;
  padding: 8px;
  margin-bottom: 20px;
  margin-left: 30%;
  margin-right: 30%;
  background-color: #4177da;
  border-radius: 5px;
  color:white;
  border: none;
  width: 40%;
  cursor: pointer;  
}

button:hover {
  color:rgb(35, 144, 11);
  background-color: #00d5ff;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.6);

}

table{
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
}

th, td{
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

thead{
  background-color: #e43be1;
  color: white;
  
}

tr:hover td:nth-of-type(1n+1) {
  background-color: #f5f5f5;
}

</style>
