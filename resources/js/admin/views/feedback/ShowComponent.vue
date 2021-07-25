<template>
    <section id="configuration" class="search view-cause feedback-details">
        <div class="row">
            <div class="col-12 col-xl-8 col-lg-10">
                <div class="">
                    <div class="card rounded pad-20">
                        <div class="card-content collapse show">
                            <div class="card-body card-dashboard">
                                <div class="row">
                                    <div class="col-12 d-block d-sm-flex justify-content-between">
                                        <div class="left">
                                            <h1 class="pull-left">
                                                <router-link :to="{ name: 'feedbacks' }" class="back">
                                                    <i class="fa fa-angle-left"></i>
                                                </router-link> Feedback Details
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <p>Username</p>
                                        <h6>{{ data.user.name }}</h6>

                                        <p>Email</p>
                                        <h6>{{ data.user.email }}</h6>

                                        <p>Subject</p>
                                        <h6>{{ data.subject }}</h6>

                                        <p>Message</p>
                                        <h6>{{ data.message }}</h6>
                                    </div>
                                    <div v-if="Number(data.status) == 0" class="col-12 text-center">
                                        <button @click="markReplied" type="button" class="blue-btn">Mark as Replied</button>
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
    export default {
        data() {
            return {
                blocked: false,
                data: [],
                table: undefined
            }
        },
        mounted() {
            this.feedback();

        },
        methods: {
            markReplied(){
                axios.get(`/feedbacks/${this.$route.params.id}/mark-as-read`)
                    .then(data => {
                        this.$toastr.success(data.data.message, "Updated!");
                        this.feedback();
                    });

            },
            feedback() {
                axios.get(`/feedbacks/${this.$route.params.id}`)
                    .then(data => {
                        this.data = data.data;
                        // setTimeout(()=> this.table = $('#userTable').DataTable(), 100);
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