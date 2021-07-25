<template>

    <section id="configuration">
        <div class="row">
            <div class="col-12">
                <h1 class="">
                    <router-link :to="{ name: 'usermg' }" class="back">
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
                                    <h5 class="mb-0">Organization Id</h5>
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
                                        <div class="card">
                                            <div class="card-header" id="heading-2">
                                                <h5 class="abc">
                                                    <a class="collapsed" role="button" data-toggle="collapse"
                                                        href="#collapse-2" aria-expanded="false"
                                                        aria-controls="collapse-2">
                                                        Description
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapse-2" class="collapse" data-parent="#accordion"
                                                aria-labelledby="heading-2">
                                                <div class="card-body">
                                                    <p>
                                                        {{ user.description }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="heading-5">
                                                <h5 class="abc">
                                                    <a class="collapsed" role="button" data-toggle="collapse"
                                                        href="#collapse-5" aria-expanded="false"
                                                        aria-controls="collapse-5">
                                                        Verification Document
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapse-5" class="collapse" data-parent="#accordion"
                                                aria-labelledby="heading-5">
                                                <div class="card-body">
                                                    <div class="row mb-1">
                                                        <div class="col-md-3 col-12">
                                                            <label>Document name:</label>
                                                        </div>
                                                        <div class="col-md-9 col-12">
                                                            <label>Core Business Risk</label>
                                                        </div>
                                                    </div>

                                                    <div class="row mb-1">
                                                        <div class="col-md-3 col-12">
                                                            <label>Document Expiry Date:</label>
                                                        </div>
                                                        <div class="col-md-9 col-12">
                                                            <label>01-06-2019</label>
                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="col-12 d-flex align-items-end">
                                                            <img src="/images/Documents_03.png" class="pdf-icon">

                                                        </div>
                                                    </div>
                                                    <div class="row" v-if="user.status == 0">
                                                        <div class="col-12 text-right">
                                                            <a href="javascript:;" @click.prevent="approve(user.id)" class="blue-btn py-1">Verify</a>
                                                            <a href="javascript:;" data-target="#rejectModal" data-toggle="modal" 
                                                            @click.prevent="rejectedUser = user" class="red-btn py-1">Reject</a>
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
        <div v-if="user.status == 0" id="rejectModal" class="modal fade bd-example-delete-modal-lg-1 another-modal another-modal-with-buttons delete-modal "
            tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lgg">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span
                            aria-hidden="true">&times;</span> </button>
                    <div class="payment-modal-main">
                        <div class="payment-modal-inner">
                            <form action="">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <p class="mb-2 blue-text">User {{rejectedUser ? rejectedUser.name : ''}},<br>
                                            Profile has been rejected please provide a reason
                                            for rejection</p>
                                        <label>Reason:</label>
                                        <textarea v-model="reason"></textarea>
                                        <button type="button" @click.prevent="reject()" class="blue-btn">Submit</button>

                                    </div>
                                </div>
                            </form>
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
                user: undefined,
                pr: {
                    user_id: this.$route.params.id
                },
                rejectedUser: undefined,
                reason: '',

            }
        },
        components: {
            TheMask
        },
        mounted() {
            this.getUser();
        },
        methods: {
            getUser() {
                axios.get(`/organizations/${this.$route.params.id}`)
                    .then(data => {
                        this.user = data.data.data;
                    });
            },
            approve(id) {
                this.$dialog.confirm(`Are you sure you want to Approve this organization?`).then(
                    dialog => {
                        axios.delete(`/organizations/${id}/action?type=approve`).then(d => {
                            this.getUser();
                            this.$toastr.success(d.data.message, 'Success', {});
                            dialog.close();
                        }).catch(d => {});
                    })
            },
            reject() {
                    axios.delete(`/organizations/${this.rejectedUser.id}/action?type=reject`).then(d => {
                        this.getUser();
                        $('#rejectModal').modal('toggle');
                        this.$toastr.success(d.data.message, 'Success', {});
                        dialog.close();
                    }).catch(d => {});

            },             
            submit(scope) {
                this.$validator.validateAll(scope).then((result) => {
                    if (!result)
                        return;
                    this.changePassword();
                });
            },
        }
    }
</script>