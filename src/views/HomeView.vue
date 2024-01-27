<template>
  <div class="home">
      <NavegacaoComponent/>
      <InicioComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavegacaoComponent from '../components/Navegacao.vue';
import InicioComponent from '../components/Inicio.vue';





export default defineComponent({
  name: 'HomeView',
  components: {
    NavegacaoComponent,
    InicioComponent 
  },
});
</script>
