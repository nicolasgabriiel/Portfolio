<!-- LanguageSwitcher.vue -->
<template>
    <div>
      <button @click="changeLanguage">Trocar Idioma</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  
  export default defineComponent({
    name: 'LanguageSwitcher',
    setup() {
    const i18n = useI18n();
    const currentLocale = ref(i18n.locale.value);

    const changeLanguage = () => {
      // Lógica para alternar para o próximo idioma
      const nextLocale = currentLocale.value === 'pt-br' ? 'en-us' : 'pt-br';

      i18n.locale.value = nextLocale;
      currentLocale.value = nextLocale;
    };

    return { changeLanguage };
  },
  });
  </script>
  