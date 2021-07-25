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
                                    <h5 class="mb-1">Review Information</h5>
                                    <hr class="mb-2">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <h5>User Reviewing</h5>
                                    <div class="row mb-1">
                                        <div class="col-md-3 col-12">
                                            <label class="bold">Name: </label>
                                        </div>
                                        <div class="col-md-9 col-12">
                                            <label>{{ report.rateable.name }}</label>
                                        </div>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col-md-3 col-12">
                                            <label class="bold">Email:</label>
                                        </div>
                                        <div class="col-md-9 col-12">
                                            <label>{{ report.rateable.email }}</label>
                                        </div>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col-md-3 col-12">
                                            <label class="bold">Report For: </label>
                                        </div>
                                        <div class="col-md-9 col-12">
                                            <label>{{ report.torateable_type.substr(4) }}</label>
                                        </div>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col-md-3 col-12">
                                            <label class="bold">Rating: </label>
                                        </div>                                        
                                        <div class="col-9">
                                            <p >{{ report.rating }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 offset-lg-2 offset-md-0">
                                    <div class="grey-card">
                                        <h5 class="mb-1">Review For</h5>
                                        <div class="row">
                                            <div class="col-md-3 col-12">
                                                <label class="bold">Name: </label>
                                            </div>
                                            <div class="col-md-9 col-12">
                                                <label>{{ report.torateable.name }}</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3 col-12">
                                                <label>Email:</label>
                                            </div>
                                            <div class="col-md-9 col-12">
                                                <label class="w-100">{{ report.torateable.email }}</label>
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
            this.getReview();
        },
        methods: {
            getReview() {
                axios.get(`/reports/reviews/${this.$route.params.id}`)
                    .then(data => {
                        this.report = data.data;
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