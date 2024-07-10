<script>
import AppHeader from "./components/AppHeader.vue";
import AppCardContainer from "./components/AppCardContainer.vue"
import AppSelectCard from "./components/AppSelectCard.vue"

// Import Store
import {store} from "./store"

// Import Axios
import axios from "axios";

export default{
  name: "app",
  components: {
    AppHeader,
    AppCardContainer,
    AppSelectCard,
  },
  data (){
    return {
      store,
    }
  },
  methods: {
    getCharacters(){
      // Assegnamo Variabile all'EndPoint
      let endPoint = store.apiURL;


      // Condizione per fare una chiamata all'api richiesta
      if(store.archetype !== ``){
          endPoint += `${store.apiNameParam}${store.archetype}`
      }

      axios.
      get(endPoint)
      .then(result => {
        store.charactersList = result.data.data;
      })
      .catch(error => {
        console.log(error);
      })
    },
    getArchetype(){
      axios.
      get(store.archetypeApiURL)
      .then(result => {
        console.log(result.data);
        store.archetypeList = result.data;
        console.log(store.archetypeList);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  created(){
    this.getCharacters();
    this.getArchetype();
  }
}
</script>

<template>
  <AppHeader/>
  <main>
    <AppSelectCard @search="getCharacters"/>
    <AppCardContainer/>
  </main>
</template>

<style lang="scss">
@use "../src/style/partials/variables.scss" as *;
@use "../src/style/partials/mixins.scss" as *;

  main{
    position: relative;
    background-color: $bg-color;
    @include centerFlex();

  }
  
  

</style>