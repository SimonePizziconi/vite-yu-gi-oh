<script>
import AppHeader from "./components/AppHeader.vue";
import AppCardContainer from "./components/AppCardContainer.vue"

// Import Store
import {store} from "./store"

// Import Axios
import axios from "axios";

export default{
  name: "app",
  components: {
    AppHeader,
    AppCardContainer,
  },
  data (){
    return {
      store,
    }
  },
  methods: {
    getCharacters(){
      axios.
      get(store.apiURL)
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
    <AppCardContainer/>
  </main>
</template>

<style lang="scss">
@use "../src/style/partials/variables.scss" as *;
@use "../src/style/partials/mixins.scss" as *;

  main{
    background-color: $bg-color;
    @include centerFlex();

  }
  
  

</style>