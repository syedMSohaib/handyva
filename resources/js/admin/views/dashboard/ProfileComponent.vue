<template>
    <section id="configuration" class="search view-cause a-profile t-profile">
        <div class="row">
            <div class="col-12">
                <h1 class="">
                    <router-link :to="{ name: 'home' }" class="back">
                        <i class="fa fa-angle-left"></i>
                    </router-link> {{ $route.meta.title }}
                </h1>
            </div>
            <div class="col-12">
                <div class="add-user">
                    <div class="card ">
                        <div class="card-content collapse show">
                            <div class="card-dashboard top p-1">
                                <div class="row">
                                    <div class="col-lg-2 col-sm-4 col-12 text-center">
                                        <div class="attached"> <img :src="user.image" class="img-full" alt=""> </div>
                                    </div>
                                    <div class="col-lg-10 col-sm-8 col-12 ">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="row">
                                                    <div class="col-md-3 col-12 align-self-center">
                                                        <label class="blue-text">First name:</label>
                                                    </div>
                                                    <div class="col-md-9 col-12 ">
                                                        <input disabled="" type="text" contenteditable="true"
                                                            spellcheck="true" class="form-control" :placeholder="user.first_name">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-3 col-12 align-self-center">
                                                        <label class="blue-text">Last name:</label>
                                                    </div>
                                                    <div class="col-md-9 col-12">
                                                        <input disabled="" type="text" contenteditable="true"
                                                            spellcheck="true" class="form-control"
                                                            :placeholder="user.last_name">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-3 col-12 align-self-center">
                                                        <label class="blue-text">Email:</label>
                                                    </div>
                                                    <div class="col-md-9 col-12">
                                                        <input disabled="" type="email" contenteditable="true"
                                                            spellcheck="true" class="form-control"
                                                            :placeholder="user.email">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <a href="#" class="blue-text text-decoration-underline "
                                                    data-toggle="modal"
                                                data-target="#changePasswordModal"><u>Change password</u></a>
                                            </div>

                                            <div class="col-12 text-right">
                                                <router-link :to="{ name: 'profile.edit'}" class="blue-btn">Edit Profile
                                                </router-link>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="login-fail-main user admin-profile">
                <div class="featured inner">
                    <div class="modal fade bd-example-modal-lg" id="changePasswordModal" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalCenterTitle" style="display: none;" aria-hidden="true">
                        <div class="modal-dialog modal-lgg conf">
                            <div class="modal-content">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <div class="payment-modal-main">
                                    <div class="payment-modal-inner text-left">
                                        <div class="row">
                                            <div class="col-12">
                                                <h1>Change Password</h1>
                                            </div>
                                            <form data-vv-scope="changepassword-form" class="width100"
                                                @submit.prevent="submit">
                                                <div class="col-12 form-group">
                                                    <label for="">Current Password</label>
                                                    <input v-validate="'required'" type="password"
                                                        v-model="pr.currentPassword" class="width100 form-control"
                                                        spellcheck="true" placeholder="Current Password"
                                                        name="current password">
                                                    <span
                                                        class="text-danger">{{ errors.first(`current password`) }}</span>
                                                </div>
                                                <div class="col-12 form-group">
                                                    <label for="">New Password</label>
                                                    <input v-validate="'required'" type="password" ref="newPassword"
                                                        class="width100 form-control" v-model="pr.newPassword"
                                                        spellcheck="true" placeholder="New Password"
                                                        name="new password">
                                                    <span class="text-danger">{{ errors.first(`new password`) }}</span>
                                                </div>
                                                <div class="col-12 form-group">
                                                    <label for="">Retype Password</label>
                                                    <input v-validate="'required|confirmed:newPassword'" type="password"
                                                        class="width100 form-control" v-model="pr.confirmNewPassword"
                                                        spellcheck="true" placeholder="Retype Password"
                                                        name="confirm new password">
                                                    <span
                                                        class="text-danger">{{ errors.first(`confirm new password`) }}</span>
                                                </div>
                                                <div class="col-12 text-center">
                                                    <button type="submit" class="blue-btn">save</button>
                                                </div>
                                            </form>
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
    import BarChart from "./BarChart.vue";

    export default {
        components: {
            BarChart,
        },
        data() {
            return {
                user: window.user,
                pr: {}
            }
        },
        mounted() {},
        methods: {
            submit(scope) {
                this.$validator.validateAll(scope).then((result) => {
                    if (!result)
                        return;
                    this.changePassword();
                });
            },
            changePassword() {
                console.log(this.pr);
                axios.post(`/update-password`, this.pr)
                    .then(data => {
                        this.pr = {};
                        $('#changePasswordModal').modal('hide');
                        this.$toastr.success(data.data.message, "Success !");
                    }).catch(e => {
                        let errors = e.response.data.errors;
                        Object.keys(errors).forEach(key => {
                            this.$toastr.error(errors[key], "Error!");
                        });
                    });
            },
        },
        watch: {}
    }
</script>

<style>

</style>