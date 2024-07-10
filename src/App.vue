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
          endPoint += `&archetype=alien`
      }

      axios.
      get(endPoint)
      .then(result => {
        console.log(result.data);
        store.charactersList = result.data.data;
        console.log(store.charactersList);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  created(){
    this.getCharacters();
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