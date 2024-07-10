<script>
    export default{
        name: "AppCard",
        props: ["info"]
    }
</script>

<template>
    <div class="card-container">
        <div class="img-container">
            <img :src="info.card_images[0].image_url" :alt="info.name">
        </div>
        <div class="text-card">
            <h5>{{info.name}}</h5>
            <h6>{{info.archetype}}</h6> 
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use "../src/style/partials/variables.scss" as *;

    .card-container{
        width: calc( 100% / 5 - 20px);
        

        .img-container{
        
            img{
                width: 100%;
                display: block;
            }
        }

        .text-card{
            background-color: $bg-color;
            width: 100%;
            text-align: center;
            padding: 30px;
            margin-bottom: 20px;

            h5{
                color: #fff;
                margin-bottom: 10px;
                font-size: 20px;
            }

            h6{
                font-size: 15px;
            }
        }
    }
</style>