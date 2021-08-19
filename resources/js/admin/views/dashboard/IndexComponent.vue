<template>
        <div class="container-fluid">

        <div class="form-head mb-sm-5 mb-3 d-flex flex-wrap align-items-center">
            <h2 class="font-w600 mb-2 mr-auto ">Dashboard</h2>
        </div>
        <div v-can="28" class="row justify-content-center">
            <div class="col-xl-3 col-sm-6 m-t35">
                <div class="card card-coin">
                    <div @click="$router.push({ name: 'task'})" class="card-body text-center">
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
                <div @click="$router.push({ name: 'task', query: { status: 1 } })"  class="card card-coin">
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
                <div @click="$router.push({ name: 'task', query: { status: 0 } })" class="card card-coin">
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
                    <div @click="$router.push({ name: 'task', query: { status: 2 } })"  class="card-body text-center">
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
                    <div @click="$router.push({ name: 'task', query: { recurring: 1 } })"  class="card-body text-center">
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
                <div @click="$router.push({ name: 'task', query: { status: 3 } })"  class="card card-coin">
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
                <div @click="$router.push({ name: 'task', query: { status: 4 } })"  class="card card-coin">
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
        <div class="row">

        </div>
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header border-0 flex-wrap pb-0">
                        <div class="mb-3">
                            <h4 class="fs-20 text-black">Analytics</h4>
                            <p class="mb-0 fs-12 text-black">Will be added later</p>
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
    import BarChart from "./BarChart.vue";
    export default {
        components: {
            BarChart,
        },
        data() {
            return {
                baseUrl: window.base_url,
                years: Array.from({
                    length: 10
                }, (value, index) => new Date().getFullYear() - index),
                filter: new Date().getFullYear(),
                employees: 0,
                user: undefined,
                task: {},
                referrels: [],
                reminders: [],

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
                        this.referrels = data.referrels;

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
