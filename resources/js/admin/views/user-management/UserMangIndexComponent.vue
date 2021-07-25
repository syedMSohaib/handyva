<template>
    <section id="configuration" class=" menu clients">
        <div class="row">
            <div class="col-12">
                <h1 class="">{{ $route.meta.title }}</h1>                
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-content collapse show">
                        <div class="card-body card-dashboard top">
                                <div class="row">
                                    <div class="col-12">
                                        <ul class="nav nav-tabs nav-underline no-hover-bg">
                                            <li class="nav-item"> <a class="nav-link active" id="base-tab30" data-toggle="tab"
                                                    aria-controls="tab30" href="#tab30" aria-expanded="false">Customer</a> </li>
                                            <li class="nav-item"> <a class="nav-link " id="base-tab32" data-toggle="tab"
                                                    aria-controls="tab32" href="#tab32" aria-expanded="false">Employee</a> </li>
                                            <li class="nav-item"> <a class="nav-link" id="base-tab33" data-toggle="tab"
                                                    aria-controls="tab33" href="#tab33" aria-expanded="true">Business Organization</a> </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="tab-content">
                                    <div class="tab-pane active" id="tab30">
                                        <CustomerComponent />
                                    </div>
                                    <div class="tab-pane" id="tab32">
                                        <EmployeeComponent />
                                    </div>
                                    <div class="tab-pane" id="tab33">
                                        <OrganizationComponent  />
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
    import Datepicker from 'vuejs-datepicker';
    import CustomerComponent  from "./CustomerComponent";
    import EmployeeComponent  from "./EmployeeComponent";
    import OrganizationComponent  from "./OrganizationComponent";

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
        components: { Datepicker, CustomerComponent, EmployeeComponent, OrganizationComponent },
        mounted() {
            console.log(this.$route);
            this.getclients();
        },
        methods: {
            getclients() {
                if (this.table !== undefined)
                    this.table.destroy();

                axios.get(`/clients?from=${this.dateFormat(this.from)}&to=${this.dateFormat(this.to)}&status=${this.blocked? 0: 1}`)
                    .then(data => {
                        this.data = data.data.data;
                        setTimeout(() => this.table = $('#userTable').DataTable(), 100);
                    });
            },
            blockRow(id) {
                this.$dialog.confirm(`Are you sure you want to ${this.blocked? 'unblock': 'block'} this user?`).then(
                    dialog => {
                        axios.delete(`/clients/${id}`).then(d => {
                            this.getclients();
                            this.$toastr.success(d.data.message, 'Success', {});
                            dialog.close();
                        }).catch(d => {});
                    })
            }
        },
        watch: {
            'blocked': function () {
                document.title = (this.blocked) ? `${window.appname} - Blocked clients` :
                    `${window.appname} - Active Clients`
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