<template>
    <div class="container-fluid">
        <!-- Add Project -->
        <div class="row page-titles mx-0">
            <div class="col-sm-6 p-md-0">
                <div class="welcome-text">
                    <h4>{{ $route.meta.title }}</h4>
                </div>
            </div>
            <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">All Referral</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <router-link class="mt-2" :to="{ name: 'referral.create'}"><h4 class="card-title">Create Referral</h4></router-link>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="referralTable" class="table display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Created at</th>
                                        <th>Referral Code</th>
                                        <th>Referred Client Name</th>
                                        <th>Referred Client Email</th>
                                        <th>Registration Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ref, index) in data" :key="index">
                                        <td>{{ref.id}}</td>
                                        <td>{{ref.created_date}}</td>
                                        <td>{{ref.referral_code}}</td>
                                        <td>{{ref.referred_client_name}}</td>
                                        <td>{{ref.referred_client_email}}</td>
                                        <td>
                                            <span :class="`badge light badge-${type_class[ref.registration_status]}`">
                                                {{ ref.registration_status ? "Registered" : "Pending" }}
                                            </span>

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
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    export default {
        data() {
            return {
                data: [],
                from:'',
                to:'',
                table: undefined,
                type_class: [
                    'warning',
                    'success',
                ]
            }
        },
        components: { Datepicker },
        mounted() {
            this.getReferral();
        },
        methods: {
            getReferral() {
                if (this.table !== undefined)
                    this.table.destroy();

                axios.get(`/referral`)
                    .then(({data}) => {
                        this.data = data;
                        setTimeout(() => this.table = $('#referralTable').DataTable(), 100);
                    });
            },
        },
        watch: {
            '$route' : function(){
                this.getReferral();
            },
        }
    }
</script>

