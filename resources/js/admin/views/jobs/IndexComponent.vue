<template>
    <section id="configuration" class=" menu clients">
        <div class="row">
            <div class="col-12">
                <h1 class="">
                    <router-link :to="{ name: 'usermg' }" class="back">
                        <i class="fa fa-angle-left"></i>
                    </router-link> {{ $route.meta.title }}</h1>                
            </div>
            <div class="col-12">
                <div class="card rounded pad-20">
                    <div class="card-content collapse show">
                        <div class="card-body card-dashboard">
                                <div class="top">
                                    <div class="row align-items-center">
                                        <div class="col-xl-4 col-md-6 col-12 ">
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

                            <div class="maain-tabble mt-3  table-responsive">
                                <table class="table table-striped table-bordered zero-configuration" id="jobTable">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Date created</th>
                                            <th>Job-ID</th>
                                            <th>Organization</th>
                                            <th>Project Name</th>
                                            <th>Job Title</th>
                                            <th>Apply Before</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-bind:key="index" v-for="(row, index) in data">
                                            <td>{{ index+1 }}</td>
                                            <td>{{ row.created_date }}</td>
                                            <td>{{ row.id }}</td>
                                            <td class="name-td">
                                                <img class="avatar"
                                                    :src="row.jobable.image">&nbsp;&nbsp;<span>{{ row.jobable.name }}</span>
                                            </td>
                                            <td>{{ row.project_title }}</td>
                                            <td>{{ row.title }}</td>
                                            <td>{{ row.apply_before_date }}</td>
                                            <td>{{ row.status_value }}</td>

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
                                                            :to="{ name: 'jobs.show', params: { id: row.id } }">
                                                            <i class="fa fa-eye"></i>View
                                                        </router-link>
                                                        <router-link class="dropdown-item"
                                                            :to="{ name: 'jobs.candidates,show', params: { id: row.id } }">
                                                            <i class="fa fa-users"></i>Candidates
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
    import Datepicker from 'vuejs-datepicker';
    export default {
        data() {
            return {
                data: [],
                from:'',
                to:'',
                table: undefined
            }
        },
        components: { Datepicker },
        mounted() {
            this.getJobs();
        },
        methods: {
            getJobs() {
                if (this.table !== undefined)
                    this.table.destroy();

                axios.get(`/jobs?&from=${this.dateFormat(this.from)}&to=${this.dateFormat(this.to)}`)
                    .then(data => {
                        this.data = data.data.data;
                        setTimeout(() => this.table = $('#jobTable').DataTable(), 100);
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