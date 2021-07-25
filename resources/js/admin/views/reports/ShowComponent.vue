<template>
    <section id="configuration">
        <div class="row">
            <div class="col-12">
                <h1 class="">
                    <router-link :to="{ name: 'home' }" class="back">
                        <i class="fa fa-angle-left"></i>
                    </router-link> {{ $route.meta.title }}
                </h1>
            </div>
            <div class="col-12 mt-4">
                <div class="card p-1">
                    <div class="card-content collapse show">
                        <div class="card-dashboard top">
                            <div class="row">
                                <div class="col-12">
                                    <h5 class="mb-1">Report Information</h5>
                                    <hr class="mb-2">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <h5>User Reporting</h5>
                                    <div class="row mb-1">
                                        <div class="col-md-3 col-12">
                                            <label class="bold">Name: </label>
                                        </div>
                                        <div class="col-md-9 col-12">
                                            <label>{{ report.reportable.name }}</label>
                                        </div>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col-md-3 col-12">
                                            <label class="bold">Email:</label>
                                        </div>
                                        <div class="col-md-9 col-12">
                                            <label>{{ report.reportable.email }}</label>
                                        </div>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col-md-3 col-12">
                                            <label class="bold">Report Type: </label>
                                        </div>
                                        <div class="col-md-9 col-12">
                                            <label>{{ report.report_type }}</label>
                                        </div>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col-md-3 col-12">
                                            <label class="bold">Reason: </label>
                                        </div>                                        
                                        <div class="col-9">
                                            <p v-if="report.reason_type == 0" >From List</p>
                                            <p v-if="report.reason_type == 1" >Other</p>
                                        </div>
                                        <div class="col-12 mt-1">
                                            <p v-if="report.reason_type == 0">{{ report.reason.reason }}</p>
                                            <p v-if="report.reason_type == 1">{{ report.description }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 offset-lg-2 offset-md-0">
                                    <div class="grey-card">
                                        <h5 class="mb-1">User Reported</h5>
                                        <div class="row">
                                            <div class="col-md-3 col-12">
                                                <label class="bold">Name: </label>
                                            </div>
                                            <div class="col-md-9 col-12">
                                                <label>{{ report.toreportable.name }}</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3 col-12">
                                                <label>Email:</label>
                                            </div>
                                            <div class="col-md-9 col-12">
                                                <label class="w-100">{{ report.toreportable.email }}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <hr>

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
    import {
        TheMask
    } from 'vue-the-mask'
    export default {
        data() {
            return {
                report: undefined,
                mode: 0,
            }
        },
        components: {
            TheMask
        },
        mounted() {
            this.getCommision();
        },
        methods: {
            getCommision() {
                axios.get(`/reports/${this.$route.params.id}`)
                    .then(data => {
                        this.report = data.data.data;
                    });
            },
            updateCommision() {
                axios.post(`/packages/commision/update-all`, this.commision)
                    .then(data => {
                        this.mode = 0;
                        this.$toastr.success(d.data.message, 'Success', {});
                        this.commision();
                    });
            },
        }
    }
</script>
<style scoped>
    .bold {
        font-weight: bold;
    }
</style>