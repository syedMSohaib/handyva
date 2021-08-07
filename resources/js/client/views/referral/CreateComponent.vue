<template>
    <div class="container-fluid">
        <!-- Add Project -->
        <div class="row page-titles mx-0">
            <div class="col-sm-6 p-md-0">
                <div class="welcome-text">
                    <h4>{{ $route.meta.title }}</h4>
                </div>
            </div>
            <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item"><a href="javascript:void(0)">All Referral</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Create Referral</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->

        <div class="row">
            <div class="col-xl-12">
                <div class="card task-card">
                    <div class="card-body">
                        <form id="form1" enctype="multipart/form-data">
                            <div class="row row-sm mg-b-10 first-parent">
                                <div class="col-sm-12">
                                    <input type="text" v-model="referral.referred_client_name" class="form-control" placeholder="Enter Client Name" name="name">
                                </div>
                                <div class="col-sm-12">
                                    <input type="email" v-model="referral.referred_client_email" class="form-control" placeholder="Enter Client Email" name="email">
                                </div>
                                <div class="col-sm-12">
                                    <select v-model="referral.suggested_package" class="form-control">
                                        <option>Select Package</option>
                                        <!-- <option
                                        v-for="(referral, rid) in packages" :key="rid"
                                        v-value="referral.id"
                                        v-text="`${referral.title} - ( ${referral.no_of_task} Task)`"></option> -->
                                    </select>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-12 col-sm-12 mt-5 mg-t-10">
                                    <button type="button" class="btn btn-primary float-right"
                                        @click="store">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


        </div>

    </div>
</template>
<script>

    export default {
        data() {
            return {
                referral: {
                    suggested_package: '',
                },
                packages: [],
            }
        },
        components: {
        },
        mounted() {
            this.fetchPackages();
        },
        methods: {
            fetchPackages(){
                axios.get('packages').then(({data}) => this.packages = data );
            },
            store(){
                axios.post('referral', this.referral)
                    .then(({data}) => {

                    }).catch(e => {
                        console.log(e);
                        let errors = e.response.data.errors;
                        Object.keys(errors).forEach(key => {
                            this.$toastr.error(errors[key], "Error!");
                        });
                    });

            }
        },
        watch: {}
    }
</script>
