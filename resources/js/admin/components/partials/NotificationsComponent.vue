<template>
    <li class="dropdown dropdown-notification nav-item">
        <a class="nav-link nav-link-label" href="#" data-toggle="dropdown">
            <i class="ficon ft-bell"></i>
            <span v-if="notifications && notifications.length>0" class="badge">{{ notifications.length }}</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
            <li class="dropdown-menu-header">
                <h6 class="dropdown-header m-0"><span class="grey darken-2">Notifications</span></h6>
            </li>
            <li class="dropdown-menu-footer">
                <router-link class="dropdown-item text-muted text-center" :to="{ name: 'notifications'}">
                    VIEW ALL Notifications
                </router-link>
            </li>


            <li v-bind:key="index" v-if="notifications && notifications.length>0" class="scrollable-container media-list ps-container ps-theme-dark ps-active-y"
                v-for="(notification, index) in notifications" :key="notification.id">
                <a @click.prevent="redirectTo(index)" href="javascript:void(0)">
                    <div class="media">
                        <div class="media-left align-self-center">
                            <i class="ft-plus-square icon-bg-circle bg-cyan"></i>
                        </div>
                        <div class="media-body">
                            <h6 class="media-heading">{{ notification.data.subject }}</h6>
                            <p class="notification-text font-small-3 text-muted">{{ notification.data.notifcation_text }}</p>
                            <small>
                                <timeago class="media-meta text-muted" :datetime="notification.created_at"></timeago>
                            </small>
                        </div>
                    </div>
                </a>
            </li>
            <li v-if="notifications && notifications.length>0" class="dropdown-menu-footer">
                <a @click.prevent="markAllRead" class="dropdown-item text-muted text-center" href="javascript:void(0)">Read all notifications</a>
            </li>
        </ul>
    </li>
</template>
<style>
    .dropdown-notification > ul.dropdown-menu.dropdown-menu-media.dropdown-menu-right.show {
        max-height: 400px;
        overflow: scroll;
    }

    li.dropdown.dropdown-notification.nav-item a span {
        background: #482051;
        width: 20px;
    }
</style>
<script>

    export default {
        data(){
            return {
                notifications: undefined,
                interval: undefined,
                baseUrl: window.base_url,
            };
        },
        mounted() {
            this.loadNotifications();
            // this.interval = setInterval(this.loadNotifications, 5000);
        },
        // beforeDestroy() { clearInterval(this.interval); },
        methods:{
            loadNotifications(){
                axios.get(`get-notifications?take=5`)
                    .then(({data}) => {
                        this.notifications = data;
                    }).catch( e => clearInterval(this.interval))
            },

            redirectTo(index){
                // axios.put(`notifications/${this.notifications[index].id}`)
                // .then(({message}) => {
                //     this.$router.push(this.notifications[index].data.link);
                //     this.notifications.splice(index, 1);
                // })
            },
            markAllRead(){
                // axios.put(`notifications`)
                //     .then(({message}) => {
                // })
            }
        }
    }
</script>
