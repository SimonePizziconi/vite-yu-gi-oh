import { reactive } from "vue"

export const store = reactive ({
    // Array da popolare con api ed il suo URL
    charactersList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",

    // Array da popolare con api archetype ed il suo URL
    archetypeList: [],
    archetypeApiURL: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    
    // Parametro per filtrare archetype
    apiNameParam: "&archetype=",
    archetype: ``,
});