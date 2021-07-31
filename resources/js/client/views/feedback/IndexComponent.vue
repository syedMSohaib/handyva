<template>
    <section id="configuration" class="search view-cause">
        <div class="row">
            <div class="col-12">
                <div class="card rounded pad-20">
                    <div class="card-content collapse show">
                        <div class="card-body table-responsive card-dashboard">
                            <div class="row">
                                <div class="col-12 d-block d-sm-flex justify-content-between">
                                    <div class="left">
                                        <h1 class="pull-left">Feedbacks</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="maain-tabble mt-3">
                                <table class="table table-striped table-bordered zero-configuration" id="userTable">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Date</th>
                                            <th>User Type</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Subject</th>
                                            <th>Replied</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-bind:key="index" v-for="(row, index) in data">
                                            <td>{{ index+1 }}</td>
                                            <td>{{ row.created_date }}</td>
                                            <td>{{ row.user.name }}</td>
                                            <td>
                                                <img class="avatar" :src="row.user.image" >&nbsp;&nbsp;<span>{{ row.user.name }}</span>
                                            </td>
                                            <td>{{ row.user.email }}</td>
                                            <td>{{ row.subject }}</td>
                                            <td>{{ row.status ? "Replied" : "Pending" }}</td>
                                            <td>
                                                <div class="btn-group mr-1 mb-1">
                                                    <button type="button" class="btn  btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i class="fa fa-ellipsis-v"/>
                                                    </button>
                                                    <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                        <router-link class="dropdown-item" :to="{ name: 'feedback.show', params: { id: row.id } }">
                                                            <i class="fa fa-eye"></i>View
                                                        </router-link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
        data(){
            return {
                blocked: false,
                data: [],
                table: undefined
            }
        },
        mounted() {
            this.feedbacks();

        },
        methods: {
            feedbacks(){
                if(this.table !== undefined)
                    this.table.destroy();

                axios.get(`/feedbacks`)
                    .then(data => {
                        this.data = data.data;
                        setTimeout(()=> this.table = $('#userTable').DataTable(), 100);
                    });
            },
        },
        watch: {
        }
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
        margin: 30px 10px 0 0!important;
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

    @media (max-height: 700px){
        .dg-content-cont--floating {
            top: 50% !important;
            transform: translateY(-50%);
        }
    }

</style>
