<script>
    export default{
        name: "AppCardContainer"
    }
</script>

<template>
    <div class="card-container">
        <div class="cards-found">   
            <h3>Sono State Trovate 20 Carte</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .card-container{
        width: 70%;
        margin: 0 auto;
        background-color: #fff;
        padding: 50px;
        margin-top: 100px;
        // DEBUG
        height: 1000px;

        .cards-found{
            background-color: #212529;
            color: #fff;
            padding: 20px;
        }
    }

</style>