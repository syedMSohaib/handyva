<template>
    <section class="customr-following-main">
        <div class="container">
            <div class="row" id="ocs-call-window"></div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                baseUrl: window.base_url,
                user: window.user,
                soachat: window.soachat,
                ocs: window.ocs,
            }
        },
        mounted() {
            this.initSoachat();
        },
        methods: {
            initSoachat() {
                this.ocs.init({
                    appid: soachat.appid,
                    appkey: soachat.appkey,
                    domain: soachat.domain,
                    global: (this.$route.params.id) ? '0' : '1',
                    id: user.uuid,
                    toid: (this.$route.params.id) ? this.$route.params.id : '',
                    element: "#ocs-call-window",
                    colorScheme: '70c164',
                });
            }
        },
        watch: {}
    }
</script>

<style>

</style>
