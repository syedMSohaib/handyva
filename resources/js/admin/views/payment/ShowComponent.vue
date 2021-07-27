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
                                        <h1 class="pull-left">{{ ($route.params.type == "live-streams") ? "PAYMENTS LOG > LIVE STREAM" : "PAYMENTS LOG > Seminars"  }}</h1>
                                    </div>
                                    <div class="right">
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2 cat-cards">
                                <div class="col-xl-12 col-12">
                                    <div class="row">
                                        <div class="col-xl-4 col-md-8 col-12">
                                            <div class="card rounded mr-2">
                                                <div class="card-content">
                                                    <div class="card-body cleartfix">
                                                        <div class="media">
                                                            <div class="media-body align-self-center">
                                                                <p class="m-0">Grand <br> total</p>
                                                            </div>
                                                            <div class="align-self-center">
                                                                <span class="card-price">$ {{ data.map((row) => Number(row.trainer_amount)).reduce((a, b) => a + b, 0).toFixed(2) }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=" logs-filter">
                                <div class="row mt-2 filter-main justify-content-between">
                                    <div class="col-lg-6 col-md-12 col-sm-12  form-group">
                                        <div class="row">

                                            <div class="col-lg-6 col-md-6 col-sm-12">
                                                <label for="">From:</label>
                                                <datepicker :clear-button="true" name="from"  format="MM-dd-yyyy" v-model="from"  placeholder="30-July-2019"></datepicker>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-12">
                                                <label for="">To:</label>
                                                <datepicker :clear-button="true" name="to"  format="MM-dd-yyyy" v-model="to"  placeholder="30-July-2019"></datepicker>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="maain-tabble mt-3">
                                <table v-if="$route.params.type == 'live-streams'" class="table table-striped table-bordered zero-configuration" ref="livestreamTable">
                                    <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Date</th>
                                        <th>Livestream Title </th>
                                        <th>User Name</th>
                                        <th>Subscription Package</th>
                                        <th>Package Amount</th>
                                        <th>Trainer's Amount</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, index) in data">
                                            <td>{{ index+1 }}</td>
                                            <td>{{ row.created_at }}</td>
                                            <td>{{ row.livestream.title }}</td>
                                            <td>
                                                <img class="avatar" :src="row.user.image" >&nbsp;&nbsp;<span>{{ row.user.name }}</span>
                                            </td>
                                            <td>{{ row.package.title }}</td>
                                            <td>$ {{ Number(row.netTotal).toFixed(2) }}</td>
                                            <td>$ {{ Number(row.trainer_amount).toFixed(2) }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table v-else class="table table-striped table-bordered zero-configuration" ref="livestreamTable">
                                    <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Date</th>
                                        <th>Seminar Session Title </th>
                                        <th>User Name</th>
                                        <th>Total Tickets Bought</th>
                                        <th>Total Amount</th>
                                        <th>Trainer's Amount</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, index) in data">
                                            <td>{{ index+1 }}</td>
                                            <td>{{ row.created_at }}</td>
                                            <td>{{ row.seminar.title }}</td>
                                            <td>
                                                <img class="avatar" :src="row.user.image" >&nbsp;&nbsp;<span>{{ row.user.name }}</span>
                                            </td>
                                            <td>{{ row.quantity }}</td>
                                            <td>$ {{ Number(row.netTotal).toFixed(2) }}</td>
                                            <td>$ {{ Number(row.trainer_amount).toFixed(2) }}</td>
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
    import Datepicker from 'vuejs-datepicker';
    export default {
        data(){
            return {
                blocked: false,
                data: [],
                categories: [],
                table: undefined,
                cat:'',
                name:'',
                from:'',
                to:'',
                cat_name:'',
                cat_descp:'',
                st:0,
                status : window.STATUS
            }
        },
        components: { Datepicker },
        mounted() {
            this.getSession();
            this.getCategories();
        },
        methods: {
            getCategories(){
                axios.get(`/categories`)
                    .then(data => {
                        this.categories = data.data;
                    });
            },
            getSession(){
                this.blocked = this.st == 1;
                if(this.table !== undefined)
                    this.table.destroy();

                axios.get(`/payemnts/details?query=${this.$route.params.id}&type=${(this.$route.params.type == "live-streams") ? 'livestream' : 'seminar'}&from=${this.dateFormat(this.from)}&to=${this.dateFormat(this.to)}&category=${this.cat}&name=${this.name}&status=${this.st}`)
                    .then(data => {
                        this.data = data.data;
                        setTimeout(()=> this.table = $(this.$refs['livestreamTable']).DataTable(), 200);
                    });
            },
            filterBlocked(){
                this.blocked = !this.blocked;
                this.st = (this.blocked) ?  1 : 0;
            },
        },
        watch: {
            'from': function(){
                this.getLiveStreams()
            },
            'to': function(){
                this.getLiveStreams()
            },
            'cat': function(){
                this.getLiveStreams()
            },
            'st': function(){
                this.getLiveStreams()
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
        background: url("/images/block.png") no-repeat center;
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
