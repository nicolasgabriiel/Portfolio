import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false, // Use a nova API do Vue I18n
  locale: 'pt-br', // Defina o idioma padrão
  messages: {
    'pt-br': require('./locales/pt-br.json'),
    'en-us': require('./locales/en-us.json'),
    // Adicione mais idiomas conforme necessário
  },
});

export default i18n;