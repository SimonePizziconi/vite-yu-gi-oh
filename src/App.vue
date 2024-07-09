<script>
import AppHeader from "./components/AppHeader.vue";
import AppCardContainer from "./components/AppCardContainer.vue"

export default{
  name: "app",
  components: {
    AppHeader,
    AppCardContainer,
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