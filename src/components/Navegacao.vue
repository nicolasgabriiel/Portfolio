<template>
    <header>
        <div>
            
        </div>
        <nav>
            <h1>{{ $t('hello') }}</h1>
            <button>Home</button>
            <button>Sobre</button>
            <button>Habilidades</button>
            <button>Projetos</button>
        </nav>
        <div>
            <TrocaDeLinguagem/>
        </div>
    </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TrocaDeLinguagem from './TrocaDeLinguagem.vue';

export default defineComponent({
    name: 'Navegacao-Component',
    components: { TrocaDeLinguagem }
})
</script>