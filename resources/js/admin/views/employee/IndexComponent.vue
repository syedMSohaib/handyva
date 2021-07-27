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
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">All Employee</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <router-link class="mt-2" :to="{ name: 'employee.create'}"><h4 class="card-title">Create Employee</h4></router-link>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="emptable" class="table display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>Emp ID</th>
                                        <th>Created at</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(employee, index) in data" :key="index">
                                        <td>{{employee.id}}</td>
                                        <td>{{employee.created_date}}</td>
                                        <td>{{employee.name}}</td>
                                        <td>{{employee.email}}</td>
                                        <td>{{employee.gender}}</td>
                                        <td>{{employee.phone}}</td>
                                        <td>
                                            <div class="d-flex">
                                                <router-link :to="{ name: 'employee.show', params: { id:  employee.id } }" title="View Task"
                                                    class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-eye"></i></router-link>
                                                <a href="javascript:;" @click.prevent="deleteEmployee(employee.id)" title="View Task" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
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
            this.getEmployee();
        },
        methods: {
            getEmployee() {
                if (this.table !== undefined)
                    this.table.destroy();

                axios.get(`/user`)
                    .then(({data}) => {
                        this.data = data;
                        setTimeout(() => this.table = $('#emptable').DataTable(), 100);
                    });
            },
            deleteEmployee(id) {
                this.$dialog.confirm(`Are you sure you want to delete this employee ? The Action is irreversible`).then(
                    dialog => {
                        axios.delete(`/employee/${id}`).then(d => {
                            this.getEmployee();
                            this.$toastr.success(d.data.message, 'Success', {});
                            dialog.close();
                        }).catch(d => {});
                    })
            }
        },
        watch: {
            '$route' : function() {
                this.getEmployee();
            },
        }
    }
</script>

