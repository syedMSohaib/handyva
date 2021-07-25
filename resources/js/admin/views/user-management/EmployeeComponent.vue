<template>
        <div class="top">
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
                <div
                    class="col-6 mt-1 text-right">
                    <!-- <router-link v-if="!blocked" :to="{ name: 'clients.add'}" class="blue-btn d-inline">
                        Add new Customer
                    </router-link> -->
                    <a href="javascript:;" @click="blocked = !blocked" class="red-btn blocked d-inline py-1">
                        {{ !blocked? 'Blocked Employee': 'Active Employee'}}</a>

                </div>
            </div>
            <div class="maain-tabble mt-3 table-responsive">
                <table class="table table-striped table-bordered zero-configuration" id="empDatatable">
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
                                            :to="{ name: 'usermg.employee.show', params: { id: row.id } }">
                                            <i class="fa fa-eye"></i>View
                                        </router-link>
                                        <a class="dropdown-item" @click.prevent="blockRow(row.id)"><i
                                                class="fa fa-ban"></i>{{ blocked? 'Unblock': 'Block'}}</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!--  Modal start here-->
                <div class="login-fail-main user">
                    <div class="featured inner">
                        <div class="modal fade bd-example-modal-lg" id="exampleModalCenter"
                            tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lgg conf">
                                <div class="modal-content">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal"
                                                aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form action="">
                                            <div class="payment-modal-main">
                                                <div class="payment-modal-inner">
                                                    <div class="row">
                                                        <div class="col-12 text-center">
                                                            <img :src="`${$baseUrl}/images/block.png`"
                                                                class="img-fluid" alt="">
                                                            <h1>Are you sure you want to block this
                                                                User?</h1>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 text-center">
                                                            <button type="button" class="can"
                                                                data-dismiss="modal">Cancel</button>
                                                            <button type="button" class="con"
                                                                data-dismiss="modal">Block</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--modal end here-->
            </div>
        </div>

</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    export default {
        data() {
            return {
                blocked: false,
                data: [],
                from:'',
                to:'',
                table: undefined
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

                axios.get(`/employees?from=${this.dateFormat(this.from)}&to=${this.dateFormat(this.to)}&status=${this.blocked? 0: 1}`)
                    .then(data => {
                        this.data = data.data.data;
                        setTimeout(() => this.table = $("#empDatatable").DataTable(), 100);
                    });
            },
            blockRow(id) {
                this.$dialog.confirm(`Are you sure you want to ${this.blocked? 'unblock': 'block'} this employees?`).then(
                    dialog => {
                        axios.delete(`/employees/${id}`).then(d => {
                            this.getclients();
                            this.$toastr.success(d.data.message, 'Success', {});
                            dialog.close();
                        }).catch(d => {});
                    })
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