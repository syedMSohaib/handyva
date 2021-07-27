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
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">All CLient</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <!-- <div class="card-header">
                        <router-link class="mt-2" :to="{ name: 'client.create'}"><h4 class="card-title">Create Client</h4></router-link>
                    </div> -->

                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="clienttable" class="table display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>Client ID</th>
                                        <th>Created at</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Current Plan</th>
                                        <th>Remaining Task</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(client, index) in data" :key="index">
                                        <td>{{client.id}}</td>
                                        <td>{{client.created_date}}</td>
                                        <td>{{client.name}}</td>
                                        <td>{{client.email}}</td>
                                        <td>{{client.plan.title}} [Task: {{ client.plan.no_of_task }}]</td>
                                        <td>{{client.remaining_tasks}}</td>
                                        <td>
                                            <div class="d-flex">
                                                <router-link :to="{ name: 'client.show', params: { id:  client.id } }" title="View Client"
                                                    class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-eye"></i></router-link>
                                                <!-- <a href="javascript:;" @click.prevent="deleteClient(client.id)" title="Delete Client" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a> -->
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
                    'default',
                    'success',
                    'warning',
                    'danger',
                ]
            }
        },
        components: { Datepicker },
        mounted() {
            this.getClient();
        },
        methods: {
            getClient() {
                if (this.table !== undefined)
                    this.table.destroy();

                axios.get(`/client`)
                    .then(({data}) => {
                        this.data = data;
                        setTimeout(() => this.table = $('#clienttable').DataTable(), 100);
                    });
            },
            deleteClient(id) {
                this.$dialog.confirm(`Are you sure you want to delete this client ? The Action is irreversible`).then(
                    dialog => {
                        axios.delete(`/client/${id}`).then(d => {
                            this.getClient();
                            this.$toastr.success(d.data.message, 'Success', {});
                            dialog.close();
                        }).catch(d => {});
                    })
            }
        },
        watch: {
            '$route' : function() {
                this.getClient();
            },
        }
    }
</script>

