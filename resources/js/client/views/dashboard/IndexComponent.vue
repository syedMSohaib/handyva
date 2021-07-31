<template>
        <div class="container-fluid">

        <div class="form-head mb-sm-5 mb-3 d-flex flex-wrap align-items-center">
            <h2 class="font-w600 mb-2 mr-auto ">Dashboard</h2>
        </div>
        <div v-if="task" class="row justify-content-center">
            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <i class="fi-rr-gallery"></i>
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">All Task</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ task.all_task }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <i class="fi-rr-interactive"></i>
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">Active Tasks</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ task.active_tasks }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <i class="fi-rr-hourglass-end"></i>
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">Pending Tasks</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ task.pending_tasks }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <i class="fi-rr-settings"></i>
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">Work In Progress</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ task.work_in_progress }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <i class="fi-rr-refresh"></i>
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">Recurring</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ task.recurring }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <i class="fi-rr-time-check"></i>
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">Completed</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ task.completed }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div class="card-body text-center">
                        <div class="icon-wrp">
                            <i class="fi-rr-cross-circle"></i>
                        </div>
                        <div class="flex-d-custom">
                            <h2 class="text-black mb-2 font-w600 custom-big-stat">Canceled</h2>
                            <p class="mb-0 fs-14 custom-dash-text-stats">
                                {{ task.cancelled }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div v-if="user" class="row">
            <div class="col-lg-12">
                <div class="card text-white bg-secondary">
                    <div class="card-header d-flex align-items-center justify-content-between">
                        <h5 class="card-title text-white">Account Summary</h5>
                        <div class="acc-sum-icon">
                            <i class="fi-rr-user-add"></i>
                        </div>
                    </div>
                    <div class="card-body mb-0">
                        <div class="row">
                            <div class="col-12 d-flex align-items-center justify-content-between flex-column flex-sm-row">
                                <h4 class="text-white heading-badge">Full Name</h4>
                                <p class="dash-acc-summ">{{ user.name }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 d-flex align-items-center justify-content-between flex-column flex-sm-row">
                                <h4 class="text-white heading-badge">Current Package</h4>
                                <p class="dash-acc-summ">{{ user.plan.title }} {{user.plan.no_of_task}} Tasks</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 d-flex align-items-center justify-content-between flex-column flex-sm-row">
                                <h4 class="text-white heading-badge">Next Billing Date</h4>
                                <p class="dash-acc-summ">{{ user.billing_date }}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 d-flex align-items-center justify-content-between flex-column flex-sm-row">
                                <h4 class="text-white heading-badge">Remaining Tasks</h4>
                                <p class="dash-acc-summ">{{ user.remaining_tasks }}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header border-0 flex-wrap pb-0">
                        <div class="mb-3">
                            <h4 class="fs-20 text-black">Referral Analytics</h4>
                            <p class="mb-0 fs-12 text-black">Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <select class="form-control style-1 default-select">
                            <option>Weekly (2021)</option>
                            <option>Daily (2021)</option>
                            <option>Yearly (2021)</option>
                        </select>
                    </div>
                    <div class="card-body pb-0">
                        <div id="marketChart" class="market-line"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    // import BarChart from "./BarChart.vue";
    export default {
        components: {
            // BarChart,
        },
        data() {
            return {
                baseUrl: window.base_url,
                years: Array.from({
                    length: 10
                }, (value, index) => new Date().getFullYear() - index),
                filter: new Date().getFullYear(),
                user: undefined,
                task: undefined,
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                axios.get(`/dashboard?year=${this.filter}`)
                    .then(({data}) => {
                        this.user = data.user;
                        this.task = data.task;
                    });
            }
        },
        watch: {
            filter: function () {
                this.getData();
            }
        }
    }
</script>

<style>

</style>
