<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'app',
        data(){
            return {

            }
        },
        mounted(){
            this.getUser()
            this.getCartCount()
        },
        methods:{
            getUser(){
                this.axios.get('/user').then( () =>{

                })
            },
            getCartCount(){
                 this.axios.get('/carts/products/sum').then( () =>{

                })
            }
        },
        components:{
           
        },
    }
</script>
<style lang="scss">
    @import "./assets/scss/reset";
    @import "./assets/scss/base";
</style>
