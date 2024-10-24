<template>
    <div class="Home">
      <div class="components">
        <FormularioClientes msg="Formulario Clientes"/>
        <TablaClientes msg="Tabla Clientes"/>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import FormularioClientes from '@/components/FormularioClientes.vue';
import TablaClientes from '@/components/TablaClientes.vue';
  
  export default {
    name: 'ClienteView',
    components: {
    FormularioClientes,
    TablaClientes
  }
}
  </script>