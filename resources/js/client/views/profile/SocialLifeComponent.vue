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
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Profile</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Social Life</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <a href="javascript:;" @click="social={}" data-toggle="modal" data-target="#sociallife"
                            class="mt-2"><h4 class="card-title">Add Social Life</h4></a>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="socialTable" class="table display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Created at</th>
                                        <th>Platform</th>
                                        <th>Username</th>
                                        <th>Profile Link</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ref, index) in data" :key="index">
                                        <td>{{ref.id}}</td>
                                        <td>{{ref.created_date}}</td>
                                        <td>{{ref.platform_name}}</td>
                                        <td>{{ref.username}}</td>
                                        <td>
                                            <a :href="ref.profile_link" target="_blank">{{ref.profile_link}} </a>
                                        </td>
                                        <td>
                                            <div class="d-flex">
                                                <a href="javascript:;" @click.prevent="social = ref" data-toggle="modal"
                                                    data-target="#sociallife" class="btn btn-primary shadow btn-xs sharp"><i class="fa fa-pencil"></i></a>
                                                <a href="javascript:;" @click.prevent="deleteRecord(ref.id)" title="delete BLog" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
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
        <div class="modal fade" id="sociallife">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add Record</h5>
                            <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                            </button>
                        </div>
                        <form action="">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Select Platform</label>
                                    <select v-model="social.platform_name" class="form-control">
                                        <option value="">Select</option>
                                        <option v-for="(plat) in platforms" :value="plat" :key="plat" v-text="plat"></option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Enter Username</label>
                                    <input type="text" v-model="social.username" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label>Enter profile ink</label>
                                    <input type="text" v-model="social.profile_link" class="form-control"/>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
                                <button type="button" @click="saveRecord" class="btn btn-primary">Save</button>
                            </div>
                        </form>
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
                social: {
                    platform_name: '',
                    username: '',
                    profile_link: '',
                },
                from:'',
                to:'',
                platforms: [],
                table: undefined,
                type_class: [
                    'warning',
                    'success',
                ]
            }
        },
        components: { Datepicker },
        mounted() {
            this.getSocialLife();
        },
        methods: {
            saveRecord(){
                axios.post('social-life', this.social)
                    .then(({data}) => {
                        this.$toastr.success(data.message, 'Success');
                        $('#sociallife').modal('hide');
                        this.social = {};
                        this.getSocialLife();
                    }).catch( e => {
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach(key=>{
                        this.$toastr.error(errors[key], "Error!");
                    });
                });
            },
            getSocialLife() {
                if (this.table !== undefined)
                    this.table.destroy();

                axios.get(`/social-life`)
                    .then(({data}) => {
                        this.data = data.records;
                        this.platforms = data.platform;
                        setTimeout(() => this.table = $('#socialTable').DataTable(), 100);
                    });
            },
            deleteRecord(id){
                this.$dialog.confirm(`Are you sure you want to delete this record ? The Action is irreversible`).then(
                    dialog => {
                        axios.delete(`/social-life/${id}`).then(d => {
                            this.getSocialLife();
                            this.$toastr.success(d.data.message, 'Success', {});
                            dialog.close();
                        }).catch(d => {});
                    })
            }
        },
        watch: {
        }
    }
</script>

