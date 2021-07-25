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
            <div class="row">
                <div
                 v-if="Number(com.type) == 0" v-for="(com, index) in commision" v-bind:key="index"
                 class="col-lg-5 col-md-6 col-12 mt-4 d-flex">
                    <div class="card radius-8 p-1">
                        <div class="card-dashboard top ">
                            <div class="top">
                                <div class="row align-items-center">
                                    <div class="col-12">
                                        <h5 class="mb-1">Per job</h5>
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-12"><label>Jobs posted by customers (%)</label></div>
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <input class="w-100" type="text" v-model="com.job_posted_customer" :placeholder="`${com.job_posted_customer}%`" :disabled="mode == 0">
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-12"><label>Jobs posted by Business (%)
                                            Organizations</label></div>
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <input class="w-100" type="text" v-model="com.job_posted_bo" :placeholder="`${com.job_posted_bo}%`" :disabled="mode == 0">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div
                 v-if="Number(com.type) == 1" v-for="(com, index) in commision" v-bind:key="index"
                 class="col-lg-5 col-md-6 col-12 mt-4 d-flex">
                    <div class="card radius-8 p-1">
                        <div class="card-dashboard top ">
                            <div class="top">
                                <div class="row align-items-center">
                                    <div class="col-12">
                                        <h5 class="mb-1">Per Project</h5>
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-12"><label>Jobs posted by customers (%)</label></div>
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <input class="w-100" type="text" v-model="com.job_posted_customer" :placeholder="`${com.job_posted_customer}%`" :disabled="mode == 0">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div class="row align-items-center">

                <div class="col-12 text-lg-right">
                    <button v-if="mode == 0" @click="mode = 1" type="button" class="blue-btn">Edit</button>
                    <button v-if="mode == 1" @click="mode = 0" type="button" class="red-btn">Reset</button>
                    <button v-if="mode == 1" @click="updateCommision" type="button" class="blue-btn">Update</button>
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
                commision: [],
                mode : 0,
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
                axios.get(`/packages/commision/all`)
                    .then(data => {
                        this.commision = data.data;
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