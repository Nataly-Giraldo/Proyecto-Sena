<template>
    <!--Tabla que lista todos los registros de la entidad-->
      <div class="container">
        <h1>{{msg}}</h1>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Celular</th>
              <th>Dirección</th>
              <th>Cédula</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in clientes" :key="cliente.codigo">
              <td>{{ cliente.codigo }}</td>
              <td>{{ cliente.nombre }}</td>
              <td>{{ cliente.cel }}</td>
              <td>{{ cliente.dire }}</td>
              <td>{{ cliente.iden }}</td>

            </tr>
    
            <router-view />
    
          </tbody>
        </table>
      </div>
    </template>
    
    <script>
    import axios from "axios";
    //contructor de las variables
    export default {
        props: {
        msg: String
    },
      data(){
        return{
          clientes:[]
        }
      },
      methods: {
        obtenerClientes(){
          // Método para obtener la lista de clientes
          axios.get("http://localhost:8081/api/cliente/listar")
          .then((response)=>{
            this.clientes= response.data;
          })
          .catch((error)=>{
            console.error("Error al obtener clientes: ", error);
          })
        }
      },
      mounted(){
        //Llamar al método para obtener la lista de clientes al cargar el componente
        this.obtenerClientes();
        
      },
    }
    </script>