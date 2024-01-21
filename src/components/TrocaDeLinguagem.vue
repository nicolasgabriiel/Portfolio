<!-- LanguageSwitcher.vue -->
<template>
  <div>
    <div class="custom-dropdown">
      <div class="dropdown-header" @click="toggleDropdown">
        {{ lingugemAtual }}
      </div>
      <div v-if="dropdownOpen" class="dropdown-options">
        <div @click="alterarLinguagem('Português-BR')">Português-BR</div>
        <div @click="alterarLinguagem('English-US')">English-US</div>
        <div @click="alterarLinguagem('Espanõl-ES')">Espanõl-ES</div>
      </div>
    </div>
  </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'LanguageSwitcher',
    setup() {
    const i18n = useI18n();
    const lingugemAtual = ref(i18n.locale.value);
   
    const alterarLinguagem = (novoValor: string) => {
      // Lógica para alternar para o próximo idioma
      const proxLinguagem = novoValor
      i18n.locale.value = proxLinguagem;
      lingugemAtual.value = proxLinguagem;
      console.log('funcionou',  proxLinguagem ,lingugemAtual)
      dropdownOpen.value = false;
      
    }

    const dropdownOpen = ref(false);

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value;
    };

    return { alterarLinguagem, lingugemAtual, dropdownOpen, toggleDropdown};
  },
  });
  </script>


<style scoped>
.custom-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-header {
  cursor: pointer;
  padding: 8px 20px;
  background-color: transparent;
  color: white;
  font-size: 18px;
  border: 2px solid white;
  font-weight: bold;
}

.dropdown-options {
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: black;
  font-weight: bold;
}

.dropdown-options div {
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}

.dropdown-options div:hover {
  background-color: #f0f0f0;
}
</style>
  