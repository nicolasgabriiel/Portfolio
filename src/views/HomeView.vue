<template>
  <div class="home">
      <NavegacaoComponent/>
  </div>
  <div>
    <p>{{ hello }}</p>
    <button @click="toggleLanguage">Toggle Language</button>
    <p>Current Language: {{ currentLocale }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref } from 'vue';
import NavegacaoComponent from '../components/Navegacao.vue';
import { useI18n } from 'vue-i18n';
import i18n from '@/i18n';


export default defineComponent({
  name: 'HomeView',
  components: {
    NavegacaoComponent
  },
  setup() {
    const { t, locale } = useI18n();

    const toggleLanguage = () => {
      const newLocale = locale.value === 'en' ? 'pt' : 'en';
      i18n.global.locale = newLocale;
    };

    return {
      t,
      toggleLanguage,
      currentLocale: locale 
    };
  },
});
</script>
