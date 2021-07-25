<template>
    <div class="deznav" v-if="shouldShow">
        <div class="deznav-scroll">
            <div class="main-profile">
                <img :src="user.image" alt="">
                <router-link :to="{ name: 'profile' }">
                    <i class="fa fa-cog" aria-hidden="true"></i></router-link>
                <h5 class="mb-0 fs-20 text-black "><span class="font-w400">Hello,</span> {{user.name}}</h5>
                <p class="mb-0 fs-14 font-w400">{{user.email}}</p>
            </div>
            <PerfectScrollbar ref="scrollbar">
                <ul class="metismenu" id="menu">
                    <li class="mm-active">
                        <router-link class="ai-icon" :to="{ name: 'profile' }">
                            <i class="flaticon-144-layout"></i>
                            <span class="nav-text">Dashboard</span>
                        </router-link>

                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                            <i class="flaticon-077-menu-1"></i>
                            <span class="nav-text">Tasks</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a href="tasks.html">All Tasks (5)</a></li>
                            <li><a href="#">Active Tasks (0)</a></li>
                            <li><a href="#">Pending Tasks (5)</a></li>
                            <li><a href="#">Excess Tasks 0</a></li>
                            <li><a href="#">WIP Tasks (0)</a></li>
                            <li><a href="#">Extensive Tasks (0)</a></li>
                            <li><a href="#">Recurring Tasks (0)</a></li>
                            <li><a href="#">Completed Tasks 0</a></li>
                            <li><a href="#">Cancelled Tasks (0)</a></li>
                        </ul>
                    </li>
                    <li><a class="ai-icon" href="profile.html">
                            <i class="fi-rr-user"></i>
                            <span class="nav-text">Profile</span>
                        </a>
                    </li>
                    <li><a class="ai-icon" href="reminders.html">
                            <i class="fi-rr-alarm-clock"></i>
                            <span class="nav-text">Set Reminders</span>
                        </a>
                    </li>
                    <li><a class="ai-icon" href="reminders.html">
                            <i class="fi-rr-receipt"></i>
                            <span class="nav-text">Referrals</span>
                        </a>
                    </li>
                    <li><a class="ai-icon" href="chat.html">
                            <i class="fi-rr-comment"></i>
                            <span class="nav-text">Chatbox Support</span>
                        </a>
                    </li>

                </ul>

                <!-- <ul class="metismenu" id="menu">
                    <li v-for="(item, index) in items" :class="{
                    hasSub : !! item.subItems.length,
                    open: (!!item.subItems.length)? item.path.indexOf(currentNav) >= 0 || item.isOpen: currentNav === item.path,
                    active: currentNav.indexOf(item.path) >= 0
                    }" v-bind:key="index" @click="open(item)">
                        <router-link :title="item.name" :to="item.subItems.length > 0? '': item.path" class="ai-icon" :class="{  }">
                            <i class="" :class="item.icon"></i>
                            <span class="nav-text">{{item.name}}</span>
                        </router-link>
                        <ul v-if="item.subItems.length>0" class="menu-content">
                            <li class="nav-item" v-for="(subitem, idx) in item.subItems" v-bind:key="idx">
                                <router-link :title="subitem.name" :to="subitem.path" class="menu-item"
                                    :class="{isShown: subitem.path === currentNav}">
                                    <i class="nav-icon fa " :class="item.icon"></i>
                                    {{ subitem.name }}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul> -->
            </PerfectScrollbar>

        </div>
    </div>

</template>

<style>
    .ps {
        height: 100%;
    }

</style>
<script>
    import MetisMenu from 'metismenujs';
    export default {
        components: {
            MetisMenu,
        },
        data() {
            return {
                shouldShow: true,
                baseUrl: window.base_url,
                user: window.user,
                currentNav: '/dashboard',
                items: [{
                        name: 'Dashboard',
                        icon: 'flaticon-144-layout',
                        path: '/dashboard',
                        image: false,
                        subItems: []
                    },
                    {
                        name: 'Dashboard',
                        icon: 'flaticon-144-layout',
                        path: '/dashboard',
                        image: false,
                        subItems: []
                    },

                    // { name: 'User Managment', icon: 'fa-users', path: '/user-management', image: false, subItems: [] },
                    // { name: 'Job Managment', icon: 'fa fa-briefcase', path: '/job-management', image: false, subItems: [] },
                    // { name: 'Project Management', icon: 'fa-project-diagram', path: '#', image: false, subItems: [] },
                    // { name: 'Package Managment', icon: 'fa-archive', path: '/package-managment', image: false, subItems: [] },
                    // { name: 'Commision Module', icon: 'fa-money-bill-alt', path: '/commision-module', image: false, subItems: [] },
                    // { name: 'Report Log', icon: 'fa-file-alt', path: '/report-log', image: false, subItems: [] },
                    // { name: 'Payment Log', icon: 'fa-money-bill-alt', path: '/payment-logs', image: false, subItems: [] },
                    // { name: 'Subscription Log', icon: 'fa-calendar-check', path: '/subscription-logs', image: false, subItems: [] },
                    // { name: 'Rate & Reviews', icon: 'fa-star', path: '/rate-and-reviews', image: false, subItems: [] },
                    // // { name: 'feedback', icon: 'fa-inbox', path: '/feedback', image: false, subItems: [] }
                ]
            }
        },

        mounted() {
            this.currentNav = this.$route.path;

            this.items.forEach(i => {
                if (this.currentNav.indexOf(i.path) >= 0 && i.subItems.length)
                    i.isOpen = true;
            });

            MetisMenu.attach('#menu');

            // this.shouldShow = this.$route.name !== 'notfound';
        },
        methods: {
            isActive(menu) {
                if (this.currentNav !== '/' + menu.path) {
                    console.log(!!menu.subItems.map(sm => sm.parent === menu.path).length);
                    return !!menu.subItems.map(sm => sm.parent === menu.path).length;
                }
                return this.currentNav === '/' + menu.path;
            },
            getClasses(menu, parent = true) {
                let c = {
                    'has-sub': menu.subItems.length > 0,
                    'open': menu.isOpen
                };

                if (!parent) {
                    c['open'] = false;
                    return c;
                }

                menu.isOpen = true;
                return c;
            },
            open(menu) {
                this.items.forEach(m => m.isOpen = false);
                menu.isOpen = true;
            }
        },
        watch: {
            '$route.path'() {
                this.currentNav = this.$route.path;
                // this.shouldShow = this.$route.name !== 'notfound';
            }
        }
    }

</script>
