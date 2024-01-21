import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false, // Use a nova API do Vue I18n
  locale: 'Portugês-BR', // Defina o idioma padrão
  messages: {
    'Portugês-BR': require('./locales/pt-br.json'),
    'English-US': require('./locales/en-us.json'),
    'Espanõl-ES': require('./locales/es-es.json'),
    // Adicione mais idiomas conforme necessário
  },
});

export default i18n;