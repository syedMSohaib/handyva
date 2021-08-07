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
                <ul class="metismenu" id="menu" style="margin-bottom: 20%">
                    <li class="mm-active">
                        <router-link class="ai-icon" :to="{ name: 'home' }">
                            <i class="flaticon-144-layout"></i>
                            <span class="nav-text">Dashboard</span>
                        </router-link>

                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                            <i class="flaticon-077-menu-1"></i>
                            <span class="nav-text">Tasks</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><router-link :to="{ name: 'task'}">All Tasks</router-link></li>
                            <li><router-link :to="{ name: 'task', query: { qt : 'Active Tasks', status: 1 } }" >Active Tasks</router-link></li>
                            <li><router-link :to="{ name: 'task', query: { qt : 'Pending Tasks', status: 0 } }" >Pending Tasks</router-link></li>
                            <li><router-link :to="{ name: 'task', query: { qt : 'Excess Tasks', excess: 1 } }" >Excess Tasks</router-link></li>
                            <li><router-link :to="{ name: 'task', query: { qt : 'WIP Tasks', status: 2 } }" >WIP Tasks</router-link></li>
                            <li><router-link :to="{ name: 'task', query: { qt : 'Extensive Tasks', extensive: 1 } }" >Extensive Tasks</router-link></li>
                            <li><router-link :to="{ name: 'task', query: { qt : 'Recurring Tasks', recurring: 1 } }" >Recurring Tasks</router-link></li>
                            <li><router-link :to="{ name: 'task', query: { qt : 'Completed Tasks', status: 3 } }" >Completed Tasks</router-link></li>
                            <li><router-link :to="{ name: 'task', query: { qt : 'Cancelled Tasks', status: 4 } }" >Cancelled Tasks</router-link></li>
                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                            <i class="fi-rr-user"></i>
                            <span class="nav-text">Profile</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><router-link :to="{ name: 'profile'}">Profile</router-link></li>
                            <li><router-link :to="{ name: 'profile.social_life'}">Social Life</router-link></li>
                            <li><router-link :to="{ name: 'profile.contacts'}">Contacts</router-link></li>
                            <li><router-link :to="{ name: 'profile.travels'}">Travels</router-link></li>
                        </ul>
                    </li>

                    <li><router-link class="ai-icon" :to="{ name: 'referral'}">
                            <i class="fi-rr-receipt"></i>
                            <span class="nav-text">Referrals</span>
                        </router-link>
                    </li>
                    <li><router-link class="ai-icon" :to="{ name: 'reminders'}">
                            <i class="fi-rr-receipt"></i>
                            <span class="nav-text">Reminders</span>
                        </router-link>
                    </li>
                    <li><router-link class="ai-icon" :to="{ name: 'chat'}">
                            <i class="fi-rr-comment"></i>
                            <span class="nav-text">Chatbox Support</span>
                        </router-link>
                    </li>
                    <li><router-link class="ai-icon" :to="{ name: 'faqs'}">
                            <i class="fi-rr-comment"></i>
                            <span class="nav-text">FAQs</span>
                        </router-link>
                    </li>

                </ul>
            </PerfectScrollbar>

        </div>
    </div>

</template>

<style>
    .ps {
        height: 350px;
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
