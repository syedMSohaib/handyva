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
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Employee</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Roles</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <a href="javascript:;" class="mt-2" data-toggle="modal" data-target="#createRole">
                            <h4 class="card-title">Create Role</h4></a>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="roletable" class="table display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>S.no</th>
                                        <th>Created at</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(role, index) in data" :key="index">
                                        <td>{{role.id}}</td>
                                        <td>{{role.created_date}}</td>
                                        <td>{{role.name}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>



        </div>


        <div class="modal fade" id="createRole">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Manage Role</h5>
                        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    </div>
                    <div class="modal-body py-2 px-4">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Enter Name</label>
                                    <input type="text" v-model="role.name" class="form-control">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                        <button type="button" @click="save" class="btn btn-primary">Save</button>
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
                role: {}
            }
        },
        components: { Datepicker },
        mounted() {
            this.getRoles();
        },
        methods: {
            save(){
                axios.post('roles', this.role)
                    .then(({data}) => {
                        this.$toastr.success(data.message, 'Success');
                        this.getRoles();
                    }).catch( e => {
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach(key=>{
                        this.$toastr.error(errors[key], "Error!");
                    });
                });

            },
            getRoles() {
                if (this.table !== undefined)
                    this.table.destroy();

                axios.get(`/roles`)
                    .then(({data}) => {
                        this.data = data;
                        setTimeout(() => this.table = $('#roletable').DataTable(), 100);
                    });
            },
        },
        watch: {
            '$route' : function() {
                this.getRoles();
            },
        }
    }
</script>

