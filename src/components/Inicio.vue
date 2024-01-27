<template>
  <section :class="'box-inicio'">
    <div class="fundo-bg">
      <div class="container-central">
        <div class="imagem-perfil"></div>
        <div class="sobre">
          <h1>{{ $t("sobre[0]") }}</h1>
          <h2>{{ $t("sobre[1]") }}</h2>
          <ul>
            <a :href="github" target="_blank"><li class="gh"></li></a>     
            <a :href="linkedin" target="_blank"><li class="lk"></li></a>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Inicio-Component",
  data(){
    return{
        github:'https://github.com/nicolasgabriiel',
        linkedin: 'https://www.linkedin.com/in/nicolasgabriiel/',
        bgGithub:'../assets/icons/github)'
    }
  }
});
</script>

<style scoped>
.box-inicio {
  color: white;
  background-image: url(../assets/bg-principal.jpg);
}
.fundo-bg {
  background-color: rgba(1, 4, 28, 0.6);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}.container-central{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(1, 4, 28);
}
.imagem-perfil{
    width: 20vw;
    height: calc(20vw);
    background-color: red;
    border-radius: 100%;
}
.sobre{
    width: 100%;
}
.sobre ul {
    background-color: aqua;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    padding: 0;
}
.sobre ul li{
    width: 50px;
    height: 50px;
    margin: 10px;
    display: block;
    border-radius: 100%;
    cursor: pointer;
    background-position: cover;
    background-size: 100% ;
    transition: 0.2s;
}
.sobre ul li:hover{
    scale: 1.05;
}
.sobre ul a:first-child li{
    background-image: url(../assets/icons/github.png);
}
.sobre ul a:last-child li{
    background-image: url(../assets/icons/linkedin.png);
}


</style>