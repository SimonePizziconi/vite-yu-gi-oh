<script>
    import {store} from "../store"

    export default{
        name: "AppSelectCard",
        data (){
        return {
            store,
        }
        },
    }

</script>

<template>
    <select v-model="store.archetype" @change="$emit(`search`)" name="Type" id="">
        <option value="">Seleziona archetype</option>
        <option value="Alien">Alien</option>
    </select>
</template>

<style lang="scss" scoped>
    select{
        position: absolute;
        left: 350px;
        top: 50px;
    }
</style>