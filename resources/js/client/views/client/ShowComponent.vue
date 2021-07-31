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
                    <li class="breadcrumb-item"><a href="javascript:void(0)">All Client</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Client Detail</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->

        <div class="row" v-if="client">
            <div class="col-xl-12">
                <div class="card task-card">
                    <div class="card-body">
                        <div class="row mt-12">
                            <div class="col-lg-6">
                                <p class="task--description">
                                    <strong>First Name:</strong> <br>
                                    {{ client.first_name }}
                                </p>
                                <p class="task--description">
                                    <strong>Last Name:</strong> <br>
                                    {{ client.first_name }}
                                </p>
                                <p class="task--description">
                                    <strong>Email :</strong> <br>
                                    {{ client.email }}
                                </p>
                                <p class="task--description">
                                    <strong>Country:</strong> <br>
                                    {{ client.country }}
                                </p>

                            </div>
                            <div class="col-lg-6">
                                <div class="profile-photo">
                                    <img :src="client.image" class="img-fluid" alt="">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <p class="task--description">
                                    <strong>Timezone:</strong> <br>
                                    {{ client.timezone }}
                                </p>
                            </div>
                            <div class="col-lg-12">
                                <p class="task--description">
                                    <strong>Remaining Task:</strong> <br>
                                    {{ client.remaining_tasks }}
                                </p>
                            </div>
                            <div class="col-12">
                                <div class="profile-personal-info">
                                    <h4 class="text-primary mb-4"><b>Plan Information</b></h4>
                                    <div class="row mb-2">
                                        <div class="col-sm-3 col-5">
                                            <h5 class="f-w-500">Current Plan <span class="pull-right">:</span>
                                            </h5>
                                        </div>
                                        <div class="col-sm-9 col-7"><span class="">{{ client.plan.title }} ({{client.plan.no_of_task}}
                                                Tasks)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-footer">
                        <div class="row my-2">
                            <div class="col-12 text-center">
                                <!-- <router-link :to="{ name: 'client.edit', params: { id: client.id } }"
                                    class="btn btn-handy-task mr-md-2 mr-0">Edit</router-link>
 -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>
<style>

    .profile-photo{
        width: 250px;
        height: 250px;
        float: right;
    }

    .profile-photo img {
        width: 100%;
        height: 100%;
    }



</style>
<script>
    export default {
        data() {
            return {
                client: undefined,
                baseUrl: window.axios.defaults.baseURL,
            }
        },
        components: {},
        mounted() {
            this.getUser();
        },
        methods: {
            getUser() {
                axios.get(`/client/${this.$route.params.id}`)
                    .then(({
                        data
                    }) => {
                        this.client = data;
                    })
            },
        },
        watch: {}
    }
</script>
