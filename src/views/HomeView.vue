<template>
  <div class="home">
      <NavegacaoComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavegacaoComponent from '../components/Navegacao.vue';




export default defineComponent({
  name: 'HomeView',
  components: {
    NavegacaoComponent
  },
});
</script>
