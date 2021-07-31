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
                    <li class="breadcrumb-item"><a href="javascript:void(0)">All Employee</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Create Employee</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->

        <div class="row">
            <div class="col-xl-12">
                <div class="card task-card">
                    <!-- <div class="p-4">
                        <a href="javascript:;" data-toggle="modal" data-target="" class="btn btn-primary pull-right">Cancel Task</a>
                    </div> -->
                    <div class="card-body">
                        <form id="form1" enctype="multipart/form-data">
                            <div class="row row-sm mg-b-10 first-parent">

                                <div class="col-sm-6 mb-2">
                                    <input type="text" v-model="employee.name" class="form-control" placeholder="Enter Full Name" name="name">
                                </div>
                                <div class="col-sm-6 mb-2">
                                    <input type="email" v-model="employee.email" class="form-control" placeholder="Enter Email" name="email">
                                </div>
                                <div class="col-sm-6 mb-2">
                                    <input type="password" v-model="employee.password" class="form-control" placeholder="Enter password" name="password">
                                </div>
                                <div class="col-sm-6 mb-2">
                                    <select class="form-control"  v-model="employee.gender" name="gender">
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div class="col-sm-6 mb-2">
                                    <input type="text" v-model="employee.phone" class="form-control" placeholder="Enter phone" name="phone">
                                </div>
                                <div class="col-sm-6 mb-2">
                                    <input type="text" v-model="employee.cnic" class="form-control" placeholder="Enter cnic" name="cnic">
                                </div>
                                <div class="col-sm-12 mb-2">
                                    <input type="text" v-model="employee.address" class="form-control" placeholder="Enter address" name="address">
                                </div>
                                <div class="col-sm-12 mb-3">
                                    <div class="custom-file">
                                        <input type="file" @change="handleFileChange" class="custom-file-input" id="customFile1" name="profile">
                                        <label class="custom-file-label" for="customFile">Upload Profile Image
                                            <small v-if="image"> (  {{ image.name }}  ) </small>
                                        </label>

                                    </div>
                                </div>

                                <div class="col-sm-12 mb-2">
                                    <div class="custom-file">
                                        <input type="file" @change="handleCVChange" class="custom-file-input" id="customFile1" name="profile">
                                        <label class="custom-file-label" for="customFile">Upload CV
                                            <small v-if="cv"> (  {{ cv.name }}  ) </small>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 col-sm-12 mt-5 mg-t-10">
                                    <button type="button" class="btn btn-primary float-right"
                                        @click="store">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


        </div>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                employee: {
                    gender: '',
                    name: '',
                    email: '',
                    password: '',
                    gender: '',
                    phone: '',
                    address: '',
                    cnic: '',
                },
                image: '',
                cv: '',
                baseUrl : window.axios.defaults.baseURL,

            }
        },
        components: {

        },
        mounted() {
        },
        methods: {
            handleFileChange(e){
                this.image = e.target.files[0];
                console.log(e.target.files[0]);
            },
            handleCVChange(e){
                this.cv = e.target.files[0];
            },
            store(){
                let formData = new FormData();

                formData.append("name", this.employee.name);
                formData.append("email", this.employee.email);
                formData.append("password", this.employee.password);
                formData.append("gender", this.employee.gender);
                formData.append("phone", this.employee.phone);
                formData.append("cnic", this.employee.cnic);
                formData.append("address", this.employee.address);
                formData.append("image", this.image);
                formData.append("cv", this.cv);
                axios.post(`/user`, formData)
                    .then(({data}) => {
                        $('#applyJob').modal('hide');
                        this.$toastr.success(data.message, 'Success');
                        this.fetchJob();
                    }).catch( e => {
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach(key=>{
                        this.$toastr.error(errors[key], "Error!");
                    });
                });
            }
        },
        watch: {}
    }
</script>
