<template>
    <section id="configuration" class="search view-cause all-notifications">
        <div class="row">
            <div class="col-12">
                <div class="card rounded pad-20">
                    <div class="card-content collapse show">
                        <div class="card-body table-responsive card-dashboard">
                            <div class="row">
                                <div class="col-12 d-block d-sm-flex justify-content-between">
                                    <div class="left">
                                        <h1 class="pull-left">Notifications</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="row">

                                <div class="col-lg-12 col-xl-12 col-sm-12">
                                    <div class="noti-inner-cards" v-for="(noti, index) in notifications">
                                        <div class="card mt-3">
                                            <div class="notification-title">
                                                <h5>{{ noti.data.subject}}</h5>
                                                <h4 v-if="(noti.read_at !== null)">New</h4>
                                            </div>
                                            <div class="noti-content">
                                                <div class="media align-items-center">
                                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                                    <div class="media-body">
                                                        <p>{{noti.data.notification_text || noti.data.text}}</p>

                                                    </div>
                                                    <h5><timeago :datetime="noti.created_at"></timeago></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export  default {
        components: {
        },
        data(){
            return {
                notifications: []
            }
        },
        mounted() {
            this.loadNotifications();
        },
        methods: {
            loadNotifications(){
                axios.get(`get-notifications?type=all`)
                    .then(({data}) => {
                        this.notifications = data;
                    }).catch( e => console.log(e))
            },
        },
        watch: {

        }
    }
</script>

<style>

</style>
