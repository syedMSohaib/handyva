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
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Contacts</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->


        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <a href="javascript:;" @click="social={}" data-toggle="modal" data-target="#contactModal"
                            class="mt-2"><h4 class="card-title">Add contacts</h4></a>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="contactTable" class="table display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Created at</th>
                                        <th>Name</th>
                                        <th>Contact No</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Note</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(ref, index) in data" :key="index">
                                        <td>{{ref.id}}</td>
                                        <td>{{ref.created_date}}</td>
                                        <td>{{ref.name}}</td>
                                        <td>{{ref.contact_no}}</td>
                                        <td>{{ref.email}}</td>
                                        <td>{{ref.address}}</td>
                                        <td>{{ref.note}}</td>
                                        <td>
                                            <div class="d-flex">
                                                <a href="javascript:;" @click.prevent="social = ref" data-toggle="modal"
                                                    data-target="#contactModal" class="btn btn-primary shadow btn-xs sharp"><i class="fa fa-pencil"></i></a>
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
        <div class="modal fade" id="contactModal">
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
                                    <label>Enter name</label>
                                    <input type="text" v-model="contact.name" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label>Enter Contact No</label>
                                    <input type="text" v-model="contact.contact_no" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label>Enter Email</label>
                                    <input type="email" v-model="contact.email" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label>Enter Address</label>
                                    <input type="text" v-model="contact.address" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label>Enter Note</label>
                                    <textarea v-model="contact.note" class="form-control" />
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
                contact: {
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
            this.getContacts();
        },
        methods: {
            saveRecord(){
                axios.post('contacts', this.contact)
                    .then(({data}) => {
                        this.$toastr.success(data.message, 'Success');
                        $('#contactModal').modal('hide');
                        this.contact = {};
                        this.getContacts();
                    }).catch( e => {
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach(key=>{
                        this.$toastr.error(errors[key], "Error!");
                    });
                });
            },
            getContacts() {
                if (this.table !== undefined)
                    this.table.destroy();

                axios.get(`/contacts`)
                    .then(({data}) => {
                        this.data = data;
                        setTimeout(() => this.table = $('#contactTable').DataTable(), 100);
                    });
            },
            deleteRecord(id){
                this.$dialog.confirm(`Are you sure you want to delete this record ? The Action is irreversible`).then(
                    dialog => {
                        axios.delete(`/contacts/${id}`).then(d => {
                            this.getContacts();
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


