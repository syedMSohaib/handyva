<template>
    <section id="configuration" class="search view-cause">
        <div class="row">
            <div class="col-xl-4 col-12 d-flex w-100  ">
                <div class="box">
                    <div class="d-sm-flex justify-content-between align-items-center">
                        <div class=""> <img :src="`${baseUrl}/images/card-icon1.png`" class="img-fluid" alt="">
                        </div>
                        <div class="text-center">
                            <h3>Register Customers</h3>
                            <h2>{{ client }}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-12 d-flex w-100  ">
                <div class="box">
                    <div class="d-sm-flex justify-content-between align-items-center">
                        <div class=""> <img :src="`${baseUrl}/images/card-icon2.png`" class="img-fluid" alt="">
                        </div>
                        <div class="text-center">
                            <h3>Register Employers</h3>
                            <h2>{{ employees }}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-12 d-flex w-100  ">
                <div class="box">
                    <div class="d-sm-flex justify-content-between align-items-center">
                        <div class=""> <img :src="`${baseUrl}/images/card-icon4.png`" class="img-fluid" alt="">
                        </div>
                        <div class="text-center">
                            <h3>Registered Organizations</h3>
                            <h2>{{ org }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
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
                client: 0,
                org: 0,
                totalorders: 0,
                orders: [],
                ordersGraphs: [],
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                axios.get(`/dashboard?year=${this.filter}`)
                    .then(data => {
                        this.employees = data.data.employees;
                        this.client = data.data.client;
                        this.org = data.data.org;
                        this.totalorders = data.data.totalorders;
                        this.orders = data.data.orders;
                        this.ordersGraphs = data.data.ordersGraphs;
                        // this.livestreams = data.data.liveStreamGraph;
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
