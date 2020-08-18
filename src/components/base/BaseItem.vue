<template>
    <v-list-item
    :to="item.to"
    class="white--text"
    >
    <v-list-item-icon>
        <v-icon v-text="item.icon" class="white--text"></v-icon>
    </v-list-item-icon>

    <v-list-item-content class="white--text"> 
        <v-list-item-title v-text="item.titulo"></v-list-item-title>
    </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    

    props:{
        item:{
            type: Object,
            default: () => ({
                titulo:'',
                icon:'',
                to:''
            })
        }
    }
}
</script>