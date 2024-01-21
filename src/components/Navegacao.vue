<template>
    <header class="cabecalho">
        <div>
            <img src="../assets/icon-ng.png" class="icon-ng">
        </div>
        <nav class="nav">
            <button>{{ $t('nav[0]') }}</button>
            <button>{{ $t('nav[1]') }}</button>
            <button>{{ $t('nav[2]') }}</button>
            <button>{{ $t('nav[3]') }}</button>
        </nav>
        <div class="lang">
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

<style scoped>
.cabecalho{
    font-family: 'Cabin', sans-serif;
    background-color: #01041c;
    display: flex;
    align-items:  center;
    justify-content: space-between;
}
.nav button{
    background-color: transparent;
    color: white;
    border: none;
    box-shadow: none;
    font-family: 'Cabin', sans-serif;
    text-transform:  uppercase;
    font-size: 22px;
    margin: 0 20px;
    cursor: pointer;
    font-weight: bold;
}
.nav button:hover{
    color: rgb(171, 80, 255);
}
.icon-ng{
    padding: 20px 0px;
    margin: 0px 0px 0px 120px;
    width: 110px;
    height: 70px;
    cursor: pointer;
}
.lang{
    margin: 0 120px 0 0;
}

</style>