<script>
    export default{
        name: "AppHeader"
    }
</script>

<template>
    <div class="header-container">
        <div class="logo-container">   
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg" alt="Logo Yu-Gi-Oh!">
        </div>
        <h1>Yu-Gi-Oh Api</h1>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;


    .header-container{
        @include centerFlex(horizontal);
        height: 100px;


        .logo-container{
        width: 200px;

        img{
            width: 100%;
        }
    }
    }
    
</style>