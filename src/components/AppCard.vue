<script>
    export default{
        name: "AppCard",
        props: ["info"]
    }
</script>

<template>
    <div class="card-container">
        <div class="img-container">
            <img :src="info.card_images[0].image_url" alt="">
        </div>
        <div class="text-card">
            <h6>Nome Carta</h6>
            <h6>Tipo Carta</h6> 
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use "../src/style/partials/variables.scss" as *;

    .card-container{
        width: calc( 100% / 5 );

        .img-container{
        
            img{
                width: 100%;
                display: block;
            }
        }

        .text-card{
            background-color: $bg-color;
        }
    }
</style>