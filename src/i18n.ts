import { createI18n } from 'vue-i18n';

const messages = {
    'en': {
      hello: 'Hello!'
    },
    'pt': {
      hello: 'Olá!'
    }
  };
  
  const i18n = createI18n({
    legacy: false, // use Composition API
    locale: 'en', // set locale
    messages, // set locale messages
  });
  
  export default i18n;