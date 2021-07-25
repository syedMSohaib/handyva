<template>
    <section id="configuration" class=" menu clients">
        <div class="row">
            <div class="col-12">
                <h1 class="">
                    <router-link :to="{ name: 'usermg' }" class="back">
                        <i class="fa fa-angle-left"></i>
                    </router-link> {{ $route.meta.title }}
                </h1>
            </div>
            <div class="col-12 text-lg-right">
                <button v-if="mode == 0" type="button" @click="mode=1" class="blue-btn">Edit</button>
                <button v-if="mode == 1" type="button" @click="mode=0" class="red-btn">Reset</button>
            </div>            
            <div class="col-12 mt-4">
                <div class="card p-1">
                    <div class="card-content collapse show">
                        <div class="card-dashboard top">
                            <div class="row">
                                <div class="col-12">
                                    <ul class="nav nav-tabs nav-underline no-hover-bg">
                                        <li class="nav-item"> <a class="nav-link active" id="base-tab30"
                                                data-toggle="tab" aria-controls="tab30" href="#tab30"
                                                aria-expanded="false">Customer </a>
                                        </li>
                                        <li class="nav-item"> <a class="nav-link" id="base-tab31" data-toggle="tab"
                                                aria-controls="tab31" href="#tab31" aria-expanded="true">
                                                Business Organzition</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content ">
                                        <div role="tabpanel" class="tab-pane order-log active" id="tab30"
                                            aria-expanded="true" aria-labelledby="base-tab30">
                                            <div class="col-12 accordion mt-3">
                                                <div id="accordion">

                                                    <div v-if="Number(pack.type) == 0" v-for="(pack, index) in packages" v-bind:key="index" class="card">
                                                        <div>
                                                            <div class="card-header" id="heading-1">
                                                                <h5 class="abc">
                                                                    <a role="button" data-toggle="collapse"
                                                                        :href="`#collapse-${pack.id}`" aria-expanded="true"
                                                                        aria-controls="collapse-1">
                                                                        Package # {{++index}}
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div :id="`#collapse-${pack.id}`" class="collapse show"
                                                                data-parent="#accordion" aria-labelledby="heading-1">

                                                                <div class="top">
                                                                    <div class="row align-items-center">
                                                                        <div class="col-lg-2 col-md-3 col-12">Package Name
                                                                        </div>
                                                                        <div class="col-lg-10 col-md-9 col-12">
                                                                            <input type="text" v-model="pack.name" :placeholder="pack.name"
                                                                                :disabled="mode == 0">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="top">
                                                                    <div class="row align-items-center">
                                                                        <div class="col-lg-2 col-md-3 col-12">Duration</div>
                                                                        <div class="col-lg-10 col-md-9 col-12">
                                                                            <input type="text" v-model="pack.month" :placeholder="pack.month" :disabled="mode == 0">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="top">
                                                                    <div class="row align-items-center">
                                                                        <div class="col-lg-2 col-md-3 col-12">Charge</div>
                                                                        <div class="col-lg-10 col-md-9 col-12">
                                                                            <input type="text" v-model="pack.amount" :placeholder="pack.amount" :disabled="mode == 0">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="top">
                                                                    <div class="row align-items-center">
                                                                        <div class="col-lg-2 col-md-3 col-12">Description:
                                                                        </div>
                                                                        <div class="col-lg-10 col-md-9 col-12">
                                                                            <input type="text"
                                                                                v-model="pack.description"
                                                                                :placeholder="pack.description"
                                                                                :disabled="mode == 0">
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        <div class="clearfix"></div>
                                        </div>
                                        <div class="tab-pane order-log" id="tab31" aria-labelledby="base-tab31">
                                            <div class="col-12 accordion mt-3">
                                                <div id="accordion-1">

                                                    <div v-if="Number(pack.type) == 1" v-for="(pack, index) in packages" v-bind:key="index" class="card">
                                                        <div v-if="Number(pack.type) == 1">
                                                            <div class="card-header" id="heading-1">
                                                                <h5 class="abc">
                                                                    <a role="button" data-toggle="collapse"
                                                                        :href="`#collapse-${pack.id}`" aria-expanded="true"
                                                                        aria-controls="collapse-1">
                                                                        Package # {{++index}}
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div :id="`#collapse-${pack.id}`" class="collapse show"
                                                                data-parent="#accordion" aria-labelledby="heading-1">

                                                                <div class="top">
                                                                    <div class="row align-items-center">
                                                                        <div class="col-lg-2 col-md-3 col-12">Package Name
                                                                        </div>
                                                                        <div class="col-lg-10 col-md-9 col-12">
                                                                            <input type="text" :placeholder="pack.name"
                                                                                v-model="pack.name"
                                                                                :disabled="mode == 0">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="top">
                                                                    <div class="row align-items-center">
                                                                        <div class="col-lg-2 col-md-3 col-12">Duration</div>
                                                                        <div class="col-lg-10 col-md-9 col-12">
                                                                            <input type="text" 
                                                                            v-model="pack.month" 
                                                                            :placeholder="pack.month" :disabled="mode == 0">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="top">
                                                                    <div class="row align-items-center">
                                                                        <div class="col-lg-2 col-md-3 col-12">Charge</div>
                                                                        <div class="col-lg-10 col-md-9 col-12">
                                                                            <input type="text" 
                                                                            v-model="pack.amount"
                                                                            :placeholder="pack.amount" :disabled="mode == 0">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="top">
                                                                    <div class="row align-items-center">
                                                                        <div class="col-lg-2 col-md-3 col-12">Description:
                                                                        </div>
                                                                        <div class="col-lg-10 col-md-9 col-12">
                                                                            <input type="text"
                                                                                v-model="pack.description"
                                                                                :placeholder="pack.description"
                                                                                :disabled="mode == 0">
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
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="mode == 1" class="row align-items-center">
                    <div class="col-12 text-lg-right text-left">
                        <button @click.prevent="updatePackage" type="button" class="blue-btn">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    export default {
        data() {
            return {
                packages: [],
                mode: 0,
            }
        },
        components: {
            Datepicker
        },
        mounted() {
            this.getPackages();
        },
        methods: {
            getPackages() {
                axios.get(`/packages`)
                    .then(data => {
                        this.packages = data.data;
                    });
            },
            updatePackage() {
                axios.post(`/packages/update-all`, this.packages)
                    .then(data => {
                        this.mode = 0;
                        this.$toastr.success(d.data.message, 'Success', {});
                        this.getPackages();                        
                    });
            },
        },
        watch: {}
    }
</script>

<style>
    .dg-content-footer {
        text-align: center;
        border: none;
        padding: 0;
    }

    .dg-content-footer>button {
        float: none;
    }

    button.dg-btn {
        margin: 30px 10px 0 0 !important;
        min-width: 130px;
        padding: 10px 40px;
        box-shadow: 0 0 0 0;
        background: transparent !important;
        color: #993e99;
        border: 1px solid #993e99;
        border-radius: 100px;
        float: none;
        font-weight: 500;
        font-size: 14px;
    }

    button.dg-btn.dg-btn--ok {
        background: transparent !important;
        border: 1px solid #993e99;
    }

    .dg-content-body {
        padding-bottom: 0 !important;
        border-bottom: none !important;
    }

    .dg-content {
        font-size: 16px !important;
        font-weight: 600;
        word-break: initial !important;
        text-align: center;

        color: #333333 !important;
        margin: 20px 0 0 0;
        text-transform: capitalize;
    }

    .dg-main-content {
        padding: 50px 20px !important;
        max-width: 500px !important;
        border-radius: 20px !important;
    }

    .dg-content:before {
        content: "";
        display: block;
        width: 100%;
        height: 80px;
        margin-bottom: 10px;
        /*background: url("/images/block.png") no-repeat center;*/
    }

    .dg-btn-loader .dg-circle {
        background-color: #993e99 !important;
    }

    .dg-backdrop {
        background-color: rgba(0, 0, 0, 0.5) !important;
    }

    .media .swiper-container.swiper-container-initialized {
        width: 300px;
        display: block;
        margin-right: 12px;
    }

    @media (max-height: 700px) {
        .dg-content-cont--floating {
            top: 50% !important;
            transform: translateY(-50%);
        }
    }
</style>