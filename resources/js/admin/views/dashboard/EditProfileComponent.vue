<template>
    <section id="configuration" class="search view-cause a-edit-profile">
        <div class="row">
            <div class="col-12">
                <h1 class="">
                    <router-link :to="{ name: 'profile' }" class="back">
                        <i class="fa fa-angle-left"></i>
                    </router-link> {{ $route.meta.title }}
                </h1>
            </div>            
            <div class="col-12">
                <div class="add-user">
                    <div class="card rounded pad-20">
                        <div class="card-content collapse show">
                            <div class="card-body card-dashboard">

                                <form data-vv-scope="submitProfile-form"  @submit.prevent="submitProfile">
                                <div class="row user-profile">
                                    <div class="col-md-12">
                                        <div class="attached">
                                            <img id="uimg" :src="user.image" class="img-full" :alt="user.name">
                                            <button type="button" class="camera-btn" onclick="document.getElementById('upload').click()">
                                                <i class="fa fa-camera"></i>
                                            </button>
                                            <input @change="onFileChange"  type="file" id="upload" name="file">
                                        </div>
                                        <div class="attached-bottom text-center">
                                            <h2>{{user.name}}</h2>
                                            <h3>{{user.email}}</h3>

                                        </div>
                                    </div>
                                </div>

                                <div>

                                    <div class="row">
                                        <div class="col-12 form-group">
                                            <label>First Name</label>
                                            <input v-validate="'required'" type="text" name="first name" v-model="user.first_name" 
                                            class="form-control" >
                                            <span class="text-danger">{{ errors.first(`first name`) }}</span>
                                        </div>

                                        <div class="col-12 form-group">
                                            <label>Last Name</label>
                                            <input v-validate="'required'"  type="text" v-model="user.last_name" 
                                            class="form-control" name="last name">
                                            <span class="text-danger">{{ errors.first(`last name`) }}</span>
                                        </div>
                                        <div class="col-12 form-group">
                                            <label for="">Phone </label>
                                            <the-mask :mask="'+1 (###) ###-####'" id="phone" v-validate="`required|numeric|digits:10`" v-model="user.phone" class="form-control" name="phone" placeholder="+1 (xxx)-xxx-xxxx"/>
                                            <span class="text-danger">{{ errors.first(`phone`) }}</span>
                                        </div>
                                        <div class="col-12 form-group">
                                            <label for="">Date of Birth</label>
                                            <datepicker v-validate="'required'"
                                                    :disabled-dates="{from : new Date(Date.now() - 8640000)}"
                                                    name="dob"
                                                    format="M-d-yyyy" v-model="user.dob"  placeholder="Enter Date of Birth"></datepicker>
                                            <span class="text-danger">{{ errors.first(`dob`) }}</span>
                                        </div>

                                        <div class="col-12 form-group">
                                            <label for="">Address</label>
                                            <input
                                                v-validate="'required'"
                                                ref="autocomplete"
                                                placeholder="Address"
                                                class="form-control"
                                                v-model="user.address"
                                                id="address"
                                                name="address"
                                                type="text" />
                                            <span class="text-danger">{{ errors.first(`address`) }}</span>
                                        </div>

                                        <div class="col-12 form-group">
                                            <label for="">Country</label>
                                            <input v-validate="'required'"  type="text" name="country" v-model="user.country" placeholder="Enter Country" id="country" class="form-control">
                                            <span class="text-danger">{{ errors.first(`country`) }}</span>
                                        </div>

                                        <div class="col-12 form-group">
                                            <label for="">State </label>
                                            <input v-validate="'required'"  type="text" name="state" v-model="user.state" placeholder="California" id="state" class="form-control">
                                            <span class="text-danger">{{ errors.first(`state`) }}</span>
                                        </div>

                                        <div class="col-12 form-group">
                                            <label for="">City </label>
                                            <input v-validate="'required'" type="text" name="city" v-model="user.city" placeholder="Maryland" id="city" class="form-control">
                                            <span class="text-danger">{{ errors.first(`city`) }}</span>
                                        </div>

                                        <div class="col-12 form-group">
                                            <label for="">Zip Code</label>
                                            <input v-validate="'required'" type="text" name="zipcode" v-model="user.zipcode" placeholder="7200" id="zipcode" class="form-control">
                                            <span class="text-danger">{{ errors.first(`zipcode`) }}</span>
                                        </div>

                                        <div class="col-12 form-group text-center">
                                            <button type="submit" class="blue-btn">Update</button>
                                        </div>
                                    </div>

                                </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BarChart from "./BarChart.vue";
    import {TheMask} from 'vue-the-mask'
    import Datepicker from 'vuejs-datepicker';

    export  default {
        components: { TheMask, Datepicker },
        data(){
            return {
                user: window.user,
            }
        },
        mounted() {
        },
        methods: {
            submitProfile(scope){
                this.$validator.validateAll(scope).then((result) => {
                    if (!result)
                        return;
                    this.save();
                });
            },
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                let this_ = this;
                if (files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        document.getElementById('uimg').setAttribute('src', e.target.result);
                        this_.user['image'] = e.target.result;
                    }
                    reader.readAsDataURL(files[0]);

                }
            },
            save(){
                console.log('bdf');
                axios.post(`/update-me`, this.user)
                    .then(data => {
                         this.$toastr.success(data.data.message, "Success !");
                         this.$router.push({name: 'profile'});
                    }).catch( e => {
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach(key=>{
                        this.$toastr.error(errors[key], "Error!");
                    });
                });
                //this.$toastr.success('success', 'hello world')
            },
        },
        watch: {
        }
    }
</script>

<style>

</style>
