<template>

    <section id="configuration">
        <div class="row">
            <div class="col-12">
                <h1 class="">
                    <router-link :to="{ name: 'usermg' }" class="back">
                        <i class="fa fa-angle-left"></i>
                    </router-link> {{ $route.meta.title }}</h1>                

            </div>
            <div class="col-12 mt-4">
                <div class="card p-1">
                    <div class="card-content collapse show">
                        <div class="card-dashboard top">
                            <div class="row">
                                <div class="col-12">
                                    <h5 class="mb-0">Customer Id</h5>
                                    <p>{{ user.id}}</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 accordion">
                                    <div id="accordion">
                                        <div class="card">
                                            <div class="card-header" id="heading-1">
                                                <h5 class="abc">
                                                    <a role="button" data-toggle="collapse" href="#collapse-1"
                                                        aria-expanded="true" aria-controls="collapse-1">
                                                        Basic Detail
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapse-1" class="collapse show" data-parent="#accordion"
                                                aria-labelledby="heading-1">
                                                <div class="row">


                                                    <div class="col-lg-10 col-md-9 col-12 order-md-1 order-2">
                                                        <div class="row mb-1">
                                                            <div class="col-md-4 col-12">
                                                                <label>Full name: </label>
                                                            </div>
                                                            <div class="col-md-8 col-12">
                                                                <label>{{ user.name }}</label>
                                                            </div>
                                                        </div>

                                                        <div class="row mb-1">
                                                            <div class="col-md-4 col-12">
                                                                <label>Email:</label>
                                                            </div>
                                                            <div class="col-md-8 col-12">
                                                                <label>{{ user.email }}</label>
                                                            </div>
                                                        </div>

                                                        <div class="row mb-1">
                                                            <div class="col-md-4 col-12">
                                                                <label>Phone:</label>
                                                            </div>
                                                            <div class="col-md-8 col-12">
                                                                <label>{{ user.phone }}</label>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-1">
                                                            <div class="col-md-4 col-12">
                                                                <label>Date of Birth:</label>
                                                            </div>
                                                            <div class="col-md-8 col-12">
                                                                <label>{{ user.dob }}</label>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-1">
                                                            <div class="col-md-4 col-12">
                                                                <label>Address:</label>
                                                            </div>
                                                            <div class="col-md-8 col-12">
                                                                <label>{{ user.address }}</label>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-1">
                                                            <div class="col-md-4 col-12">
                                                                <label>Country:</label>
                                                            </div>
                                                            <div class="col-md-8 col-12">
                                                                <label>{{ user.country }}</label>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-1">
                                                            <div class="col-md-4 col-12">
                                                                <label>State:</label>
                                                            </div>
                                                            <div class="col-md-8 col-12">
                                                                <label>{{ user.state }}</label>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-1">
                                                            <div class="col-md-4 col-12">
                                                                <label>City:</label>
                                                            </div>
                                                            <div class="col-md-8 col-12">
                                                                <label>{{ user.city }}</label>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-1">
                                                            <div class="col-md-4 col-12">
                                                                <label>Zipcode:</label>
                                                            </div>
                                                            <div class="col-md-8 col-12">
                                                                <label>{{ user.zipcode }}</label>
                                                            </div>
                                                        </div>




                                                    </div>
                                                    <div
                                                        class="col-lg-2 col-md-3 col-12 orde1-md-2 order-1 text-md-right text-center">
                                                        <img :src="user.image" class="accordion-img">
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
    </section>
</template>

<script>
    import {TheMask} from 'vue-the-mask'
    export default {
        data(){
            return {
                user: undefined,
                pr : {
                    user_id : this.$route.params.id
                }
            }
        },
        components: {
            TheMask
        },
        mounted() {
            this.getUser();
        },
        methods: {
            getUser(){
                axios.get(`/clients/${this.$route.params.id}`)
                    .then(data => {
                        this.user = data.data.data;
                    });
            },
            submit(scope){
                this.$validator.validateAll(scope).then((result) => {
                    if (!result)
                        return;
                    this.changePassword();
                });
            },
            changePassword(){
                console.log(this.pr);
                axios.post(`/clients/update-password`, this.pr)
                    .then(data => {
                        this.pr = {};
                        $('#changePasswordModal').modal('hide');
                        this.$toastr.success(data.data.message, "Success !");
                    }).catch( e => {
                        let errors = e.response.data.errors;
                        Object.keys(errors).forEach(key=>{
                            this.$toastr.error(errors[key], "Error!");
                        });
                });
            },
        }
    }
</script>
