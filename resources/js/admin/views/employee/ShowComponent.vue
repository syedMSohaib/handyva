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
                    <li class="breadcrumb-item"><a href="javascript:void(0)">All Employee</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Employee Detail</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->

        <div class="row" v-if="employee">
            <div class="col-xl-12">
                <div class="card task-card">
                    <div class="card-body">
                        <div class="row mt-12">
                            <div class="col-lg-6">
                                <p class="task--description">
                                    <strong>Name:</strong> <br>
                                    {{ employee.name }}
                                </p>
                                <p class="task--description">
                                    <strong>Email :</strong> <br>
                                    {{ employee.email }}
                                </p>
                                <p class="task--description">
                                    <strong>Gender:</strong> <br>
                                    {{ employee.gender }}
                                </p>

                            </div>
                            <div class="col-lg-6">
                                <div class="profile-photo">
                                    <img :src="employee.image" class="img-fluid" alt="">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <p class="task--description">
                                    <strong>Phone:</strong> <br>
                                    {{ employee.phone }}
                                </p>
                            </div>
                            <div class="col-lg-12">
                                <p class="task--description">
                                    <strong>Cnic:</strong> <br>
                                    {{ employee.cnic }}
                                </p>
                            </div>
                            <div class="col-lg-12">
                                <p class="task--description">
                                    <strong>Address:</strong> <br>
                                    {{ employee.address }}
                                </p>
                            </div>
                            <div class="col-lg-12">
                                <p class="task--description">
                                    <strong>CV:</strong> <br>
                                    <a :href="employee.cv" :download="`${employee.name}-CV`">Download CV</a>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div class="card-footer">
                        <div class="row my-2">
                            <div class="col-12 text-center">
                                <router-link :to="{ name: 'employee.edit', params: { id: employee.id } }"
                                    class="btn btn-handy-task mr-md-2 mr-0">Edit</router-link>

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
                employee: undefined,
                baseUrl: window.axios.defaults.baseURL,
            }
        },
        components: {},
        mounted() {
            this.getUser();
        },
        methods: {
            getUser() {
                axios.get(`/user/${this.$route.params.id}`)
                    .then(({
                        data
                    }) => {
                        this.employee = data;
                    })
            },
        },
        watch: {}
    }
</script>
