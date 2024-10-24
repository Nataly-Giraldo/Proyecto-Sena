<template>
    <div class="container">
    <h1>{{ msg }}</h1>
    <form id="client-form" @submit.prevent="guardar">
        <div class="form-group">
            <label for="codigo">Código:</label>
            <input type="number" name="codigo" id="codigo" required v-model="codigo">
        </div>
        <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" required v-model="nombre">
        </div>
        <div class="form-group">
            <label for="celular">Celular:</label>
            <input type="tel" name="celular" id="cel" required v-model="cel">
        </div>
        <div class="form-group">
            <label for="direccion">Dirección:</label>
            <input type="text" name="direccion" id="dire" required v-model="dire">
        </div>
        <div class="form-group">
            <label for="cedula">Cédula:</label>
            <input type="number" name="cedula" id="iden" required v-model="iden">
        </div>
        <br>
        
        <button id="guardar" type="submit" name="guardar">Guardar</button>
        <button id="consultar" type="button" name="cosultar" @click="consultar">Conlsultar</button>
        <button id="actualizar" type="button" name="actualizar" @click="actualizar">Actualizar</button>
        <button id="eliminar" type="button" name="eliminar" @click="eliminar">Eliminar</button>
    </form>        
    </div>
</template>

<script>
import axios from "axios";
//contructor de las variables
export default {
    name: 'FormularioClientes',
    props: {
      msg: String
    },
        data() {
        return{
            codigo: "",
            nombre: "",
            cel: "",
            dire: "",
            iden: "",
        };
    },
    //metodos CRUD
    methods:{
        guardar(){

            axios
            .post('http://costurassasbackend-production.up.railway.app/api/clientes',{
                codigo: this.codigo,
                nombre: this.nombre,
                cel: this.cel,
                dire: this.dire,
                iden: this.iden,

            })
            .then((response)=>{
                console.log("Cliente registrado con exito", response.data);
                alert("Cliente registrado con exito");
                this.codigo = '';
                this.nombre = '';
                this.cel = '';
                this.dire = '';
                this.iden = '';
            })
            .catch((error)=>{
                console.error("Error al registrar cliente:", error);
            });
        },
    
    consultar(){

        axios
            .get('http://costurassasbackend-production.up.railway.app/api/cliente/'+this.codigo)
            .then((response)=>{
            //actualiza los campos del formulario con los datos del estudiante consultado
                this.nombre = response.data.nombre;
                this.cel = response.data.cel;
                this.dire = response.data.dire;
                this.iden = response.data.iden;

            })
            .catch((error) =>{
                console.error("Error al consultar cliente: ", error);
            });
    },

    actualizar(){
        axios
            .put('http://costurassasbackend-production.up.railway.app/api/cliente/actualizar/'+this.codigo,{
                codigo: this.codigo,
                nombre: this.nombre,
                cel: this.cel,
                dire: this.dire,
                iden: this.iden,

            })
            .then((response)=>{
                console.log("Cliente actualizado con exito", response.data);
                this.codigo = '';
                this.nombre = '';
                this.cel = '';
                this.dire = '';
                this.iden = '';

            })
            .catch((error)=>{
                console.error("Error al actualizar cliente", error);
            });
    },

    eliminar(){

        axios
            .delete('http://costurassasbackend-production.up.railway.app/api/cliente/'+this.codigo)
            .then(()=>{
            console.log("Cliente eliminado con exito");
            //Limpiar los campos del formulario despues de eliminar          
                this.codigo = '';
                this.nombre = '';
                this.cel = '';
                this.dire = '';
                this.iden = '';

            })
            .catch((error)=>{
                console.log("Error al eliminar cliente", error);
            });
    },
  },
}
</script>