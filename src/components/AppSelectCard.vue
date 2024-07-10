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
    <div>
        <label for="archetypeSelect">Scegli un archetipo:</label>
        <select v-model="store.archetype" @change="$emit(`search`)" name="Type" id="archetypeSelect">
        <option v-for="archetype in store.archetypeList" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
    div {
        position: absolute;
        left: 350px;
        top: 50px;
    }
</style>