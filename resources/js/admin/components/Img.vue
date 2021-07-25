<template>
    <img :src="baseUrl+src"/>
</template>

<script>
    export default {
        props: [
            'src'
        ],
        components: {
        },
        data(){
            return {
                baseUrl: window.base_url,
            }
        },
        mounted(){
        },
        methods: {
        }
    }
</script>
<style>


</style>
