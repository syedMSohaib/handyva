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
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Travels</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <a href="javascript:;" @click="social={}" data-toggle="modal" data-target="#travelModal"
                            class="mt-2"><h4 class="card-title">Add travels</h4></a>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="travelTable" class="table display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Created at</th>
                                        <th>Airline</th>
                                        <th>Hotel Name</th>
                                        <th>Name</th>
                                        <th>Expiry date</th>
                                        <th>Note</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ref, index) in data" :key="index">
                                        <td>{{ref.id}}</td>
                                        <td>{{ref.created_date}}</td>
                                        <td>{{ref.airline}}</td>
                                        <td>{{ref.hotel}}</td>
                                        <td>{{ref.name}}</td>
                                        <td>{{ref.expiry_date}}</td>
                                        <td>{{ref.note}}</td>
                                        <td>
                                            <div class="d-flex">
                                                <a href="javascript:;" @click.prevent="social = ref" data-toggle="modal"
                                                    data-target="#travelModal" class="btn btn-primary shadow btn-xs sharp"><i class="fa fa-pencil"></i></a>
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
        <div class="modal fade" id="travelModal">
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
                                    <label>Enter Airline Name</label>
                                    <input type="text" v-model="travel.airline" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label>Enter Hotel</label>
                                    <input type="text" v-model="travel.hotel" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label>Enter Name</label>
                                    <input type="text" v-model="travel.name" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label>Enter Number</label>
                                    <input type="text" v-model="travel.number" class="form-control"/>
                                </div>

                                <div class="form-group">
                                    <label>Enter Expiry</label>
                                    <input type="date" v-model="travel.expiry_date" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label>Enter Note</label>
                                    <textarea v-model="travel.note" class="form-control" />
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
                travel: {
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
            this.getTravels();
        },
        methods: {
            saveRecord(){
                axios.post('travels', this.travel)
                    .then(({data}) => {
                        this.$toastr.success(data.message, 'Success');
                        $('#travelModal').modal('hide');
                        this.travel = {};
                        this.getTravels();
                    }).catch( e => {
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach(key=>{
                        this.$toastr.error(errors[key], "Error!");
                    });
                });
            },
            getTravels() {
                if (this.table !== undefined)
                    this.table.destroy();

                axios.get(`/travels`)
                    .then(({data}) => {
                        this.data = data;
                        setTimeout(() => this.table = $('#travelTable').DataTable(), 100);
                    });
            },
            deleteRecord(id){
                this.$dialog.confirm(`Are you sure you want to delete this record ? The Action is irreversible`).then(
                    dialog => {
                        axios.delete(`/travels/${id}`).then(d => {
                            this.getTravels();
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

