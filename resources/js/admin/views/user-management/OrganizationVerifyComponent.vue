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
                            <div class="col-12 top">
                                <div class="row align-items-center mt-2">
                                    <div class="col-6">
                                        <label for="">Sort by</label>
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-12">
                                                <datepicker :clear-button="true" name="from"  format="MM-dd-yyyy" v-model="from"  placeholder="From"></datepicker>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12">
                                                <datepicker :clear-button="true" name="to"  format="MM-dd-yyyy" v-model="to"  placeholder="To"></datepicker>
                                            </div>                                                        
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="maain-tabble mt-3 table-responsive">
                                    <table class="table table-striped table-bordered zero-configuration" id="orgDatatable">
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Date Registered</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-bind:key="index" v-for="(row, index) in data">
                                                <td>{{ index+1 }}</td>
                                                <td>{{ row.created_date }}</td>
                                                <td class="name-td">
                                                    <img class="avatar"
                                                        :src="row.image">&nbsp;&nbsp;<span>{{ row.name }}</span>
                                                </td>
                                                <td>{{ row.email }}</td>
                                                <td>
                                                    <div class="btn-group mr-1 mb-1">
                                                        <button type="button" class="btn  btn-drop-table btn-sm"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                            <i class="fa fa-ellipsis-v" />
                                                        </button>
                                                        <div class="dropdown-menu" x-placement="bottom-start"
                                                            style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                            <router-link class="dropdown-item"
                                                                :to="{ name: 'usermg.org.show', params: { id: row.id } }">
                                                                <i class="fa fa-eye"></i>View
                                                            </router-link>
                                                            <a class="dropdown-item" @click.prevent="approve(row.id)"><i
                                                                    class="fa fa-check"></i>Approve</a>
                                                            <a class="dropdown-item" data-target="#rejectModal" data-toggle="modal" 
                                                            @click.prevent="rejectedUser = row"><i
                                                                    class="fa fa-ban"></i>Reject</a>


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
        </div>

        <div id="rejectModal" class="modal fade bd-example-delete-modal-lg-1 another-modal another-modal-with-buttons delete-modal "
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
    import Datepicker from 'vuejs-datepicker';
    export default {
        data() {
            return {
                action: false,
                data: [],
                from:'',
                to:'',
                table: undefined,
                rejectedUser: undefined,
                reason: '',
            }
        },
        components: { Datepicker },
        mounted() {
            this.getclients();
        },
        methods: {
            getclients() {
                if (this.table !== undefined)
                    this.table.destroy();

                axios.get(`/organizations?from=${this.dateFormat(this.from)}&to=${this.dateFormat(this.to)}&status=0`)
                    .then(data => {
                        this.data = data.data.data;
                        setTimeout(() => this.table = $("#orgDatatable").DataTable(), 100);
                    });
            },
            approve(id) {
                this.$dialog.confirm(`Are you sure you want to Approve this organization?`).then(
                    dialog => {
                        axios.delete(`/organizations/${id}/action?type=approve`).then(d => {
                            this.getclients();
                            this.$toastr.success(d.data.message, 'Success', {});
                            dialog.close();
                        }).catch(d => {});
                    })
            },
            reject() {
                    axios.delete(`/organizations/${this.rejectedUser.id}/action?type=reject`).then(d => {
                        this.getclients();
                        $('#rejectModal').modal('toggle');
                        this.$toastr.success(d.data.message, 'Success', {});
                        dialog.close();
                    }).catch(d => {});

            }            
        },
        watch: {
            'blocked': function () {
                document.title = (this.blocked) ? `${window.appname} - Blocked Employee` :
                    `${window.appname} - Active Employee`
                this.getclients()
            }
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