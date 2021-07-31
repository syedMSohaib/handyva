<template>
    <div class="container-fluid" v-if="user" >
        <div class="row page-titles mx-0">
            <div class="col-sm-6 p-md-0">
                <div class="welcome-text">
                    <h4>{{ $route.meta.title }}</h4>
                </div>
            </div>
            <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Profile</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->
        <div class="row">
            <div class="col-lg-12">
                <div class="profile card card-body px-3 pt-3 pb-0">
                    <div class="profile-head">
                        <div class="photo-content">
                            <div class="cover-photo"
                                :style="
                                `background: url('${cover}') center center / cover;`"></div>
                        </div>
                        <div class="profile-info">
                            <div class="profile-photo">
                                <img :src="profile" class="img-fluid rounded-circle" alt="">
                            </div>
                            <div class="profile-details">
                                <div class="profile-name px-3 pt-2">
                                    <h4 class="text-primary mb-0">{{ user.name }}</h4>
                                    <p>Name</p>
                                </div>
                                <div class="profile-email px-2 pt-2">
                                    <h4 class="text-muted mb-0">{{ user.email }}</h4>
                                    <p>Email</p>
                                </div>
                                <div class="dropdown ml-auto">
                                    <a href="#" class="btn btn-primary light sharp" data-toggle="dropdown"
                                        aria-expanded="true">
                                        <i class="fi-rr-pencil"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <input accept="image/*" ref="profile_pic" type="file" @change="handleProfilePicture" style="display:none;">
                                        <input accept="image/*" ref="cover_pic" type="file" @change="handleCover" style="display:none;">
                                        <li
                                        @click="$refs.profile_pic.click()"
                                        class="dropdown-item"><i class="fi-rr-camera mr-2"></i> Update Profile Picture
                                        </li>
                                        <li
                                        @click="$refs.cover_pic.click()"
                                        class="dropdown-item"><i class="fi-rr-gallery mr-2"></i>
                                            Update Cover Photo</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-body">
                        <div class="profile-tab">
                            <div class="custom-tab-1">
                                <ul class="nav nav-tabs">

                                    <li class="nav-item "><a href="#about-me" data-toggle="tab"
                                            class="nav-link show active">About Me</a>
                                    </li>
                                    <li class="nav-item"><a href="#profile-settings" data-toggle="tab"
                                            class="nav-link">Edit Profile</a>
                                    </li>
                                    <li class="nav-item"><a href="#plan-settings" data-toggle="tab"
                                            class="nav-link">Plan Settings</a>
                                    </li>
                                </ul>
                                <div class="tab-content">

                                    <div id="about-me" class="tab-pane fade active show">
                                        <div class="profile-about-me">
                                            <div class="pt-4 border-bottom-1 pb-3">
                                                <!-- <h4 class="text-primary">About Me</h4> -->
                                                <p class="mb-2">{{ user.about }}</p>
                                            </div>
                                        </div>
                                        <div class="profile-skills mb-5">
                                            <h4 class="text-primary mb-2">Skills</h4>
                                            <a v-for="(skill, sindex) in user.skills.split(',')" :key="sindex" href="javascript:void(0);"
                                                class="btn btn-primary light btn-xs mb-1">{{skill}}</a>
                                        </div>
                                        <div class="profile-lang  mb-5">
                                            <h4 class="text-primary mb-2">Language</h4>
                                            <a v-for="(language, lindex) in user.language.split(',')" :key="lindex" href="javascript:void(0);"
                                                class="text-muted pr-3 f-s-16">{{language}}</a>
                                        </div>
                                        <div class="profile-personal-info">
                                            <h4 class="text-primary mb-4">Personal Information</h4>
                                            <div class="row mb-2">
                                                <div class="col-sm-3 col-5">
                                                    <h5 class="f-w-500">Name <span class="pull-right">:</span>
                                                    </h5>
                                                </div>
                                                <div class="col-sm-9 col-7"><span>{{ user.name }}</span>
                                                </div>
                                            </div>
                                            <div class="row mb-2">
                                                <div class="col-sm-3 col-5">
                                                    <h5 class="f-w-500">Email <span class="pull-right">:</span>
                                                    </h5>
                                                </div>
                                                <div class="col-sm-9 col-7"><span>{{ user.email }}</span>
                                                </div>
                                            </div>
                                            <div class="row mb-2">
                                                <div class="col-sm-3 col-5">
                                                    <h5 class="f-w-500">Availability <span class="pull-right">:</span>
                                                    </h5>
                                                </div>
                                                <div class="col-sm-9 col-7"><span>{{ user.availability}}</span>
                                                </div>
                                            </div>
                                            <div class="row mb-2">
                                                <div class="col-sm-3 col-5">
                                                    <h5 class="f-w-500">Age <span class="pull-right">:</span>
                                                    </h5>
                                                </div>
                                                <div class="col-sm-9 col-7"><span>{{ user.age }}</span>
                                                </div>
                                            </div>
                                            <div class="row mb-2">
                                                <div class="col-sm-3 col-5">
                                                    <h5 class="f-w-500">Location <span class="pull-right">:</span></h5>
                                                </div>
                                                <div class="col-sm-9 col-7"><span>{{ user.address }}</span>
                                                </div>
                                            </div>
                                            <div class="row mb-2">
                                                <div class="col-sm-3 col-5">
                                                    <h5 class="f-w-500">Field Experience <span
                                                            class="pull-right">:</span></h5>
                                                </div>
                                                <div class="col-sm-9 col-7"><span>{{ user.experience}} Year Experiences</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="profile-settings" class="tab-pane fade">
                                        <div class="pt-3">
                                            <div class="settings-form">
                                                <!-- <h4 class="text-primary">Account Setting</h4> -->
                                                <form>
                                                    <div class="form-group">
                                                        <label>About Me</label>
                                                        <textarea v-model="user.about" placeholder="Say something about yourself"
                                                            class="form-control"></textarea>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-4">
                                                            <label>My Availability</label>
                                                            <input type="text" v-model="user.availability" placeholder="Enter your availability e.g Full Time (Freelancer)"
                                                                class="form-control">
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                            <label>Age</label>
                                                            <input type="number" :min="0" v-model="user.age" placeholder="Enter your age"
                                                                class="form-control">
                                                        </div>
                                                        <div class="form-group col-md-4">
                                                            <label>Year of Experience</label>
                                                            <input type="number" :min="0" v-model="user.experience" placeholder="Enter your experience"
                                                                class="form-control">
                                                        </div>

                                                        <div class="form-group col-md-6">
                                                            <label>Skills</label>
                                                            <input type="text" v-model="user.skills" placeholder="Enter your skills. e.g, PHP, Laravel, Java"
                                                                class="form-control">
                                                        </div>
                                                        <div class="forum-geroup col-md-6">
                                                            <label>Language</label>
                                                            <input type="text" v-model="user.language" placeholder="How many languages do you know ? e.g English, French, Urdu"
                                                                class="form-control">
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Address</label>
                                                        <input type="text" v-model="user.address" placeholder="1234 Main St"
                                                            class="form-control">
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-3">
                                                            <label>Country</label>
                                                            <select class="form-control" v-model="user.country">
                                                                <option v-for="country in countries" :key="country.id" :value="country.iso">{{country.nicename}}</option>
                                                            </select>
                                                        </div>

                                                        <div class="form-group col-md-3">
                                                            <label>City</label>
                                                            <input type="text" v-model="user.city" class="form-control">
                                                        </div>
                                                        <div class="form-group col-md-3">
                                                            <label>State</label>
                                                            <input type="text" v-model="user.state" class="form-control">
                                                        </div>
                                                        <div class="form-group col-md-3">
                                                            <label>Zip</label>
                                                            <input type="text" v-model="user.zipcode" class="form-control">
                                                        </div>
                                                    </div>

                                                    <button class="btn btn-primary" @click="updateProfile" type="button">Update</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="plan-settings" class="tab-pane fade">
                                        <div class="row mt-4">
                                            <div class="col-12">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="not-check">
                                                    <label class="custom-control-label" for="not-check">
                                                        Notify me when the task is received</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-12">
                                                <div class="profile-personal-info">
                                                    <h4 class="text-primary mb-4">Plan Information</h4>
                                                    <div class="row mb-2">
                                                        <div class="col-sm-3 col-5">
                                                            <h5 class="f-w-500">Current Plan <span
                                                                    class="pull-right">:</span>
                                                            </h5>
                                                        </div>
                                                        <div class="col-sm-9 col-7">
                                                            <span class="">{{ user.plan.title }} ({{ user.plan.no_of_task}}
                                                                Tasks)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row mb-2 mt-4">
                                            <div class="col-12">
                                                <h5 class="f-w-500">Add Tasks
                                                </h5>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="flex-cust1">
                                                    <span class="minus">-</span>
                                                    <input class="task-input custom-form-control task_count" type="text"
                                                        value="1">
                                                    <span class="plus">+</span>
                                                </div>
                                                <div class="flex-c">
                                                    <button type="submit" class="btn btn-handy-task"
                                                        onclick="chargeTask('5')">Charge Now</button>
                                                    <p class="total-charge">($4) will be charged</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row mb-2 mt-4">
                                            <div class="col-12">
                                                <h5 class="f-w-500">Upgrade Plan
                                                </h5>
                                            </div>
                                            <div class="col-12">
                                                <p class="total-charge">Plan can be upgraded on next renewal
                                                    subscription ({{ user.billing_date }})</p>
                                            </div>
                                            <div class="col-12">

                                                <div class="flex-c">
                                                    <button type="submit" class="btn btn-handy-task" data-toggle="modal"
                                                        data-target="#upgrade-plan">Upgrade
                                                        Plan</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="upgrade-plan">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Upgrade Plan</h5>
                                            <button type="button" class="close"
                                                data-dismiss="modal"><span>&times;</span></button>
                                        </div>
                                        <div class="modal-body py-2 px-4">
                                            <h4 class="selectplan mb-2">
                                                Please select plan from the dropdown
                                            </h4>
                                            <div class="row">
                                                <div class="col-12">
                                                    <select class="dropdown-groups">
                                                        <optgroup label="Group Name">
                                                            <option>Nested option 1</option>
                                                            <option>Nested option 2</option>
                                                            <option>Nested option 3</option>
                                                        </optgroup>
                                                        <optgroup label="Another Group Name">
                                                            <option>Nested option 1</option>
                                                            <option>Nested option 2</option>
                                                            <option>Nested option 3</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mt-2">
                                                <div class="col-12">
                                                    <p class="">$15 will be charged</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger light"
                                                data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Upgrade</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                user: undefined,
                profile: '',
                cover: '',
                types : {
                    'img' : ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp', 'image/gif'],
                },
                pr: {},
                countries: window.info.countries,
            }
        },
        mounted() {
            this.me();
        },
        methods: {
            updateProfile(){
                axios.post('update', this.user)
                    .then(({data}) => {
                      this.$toastr.success(data.message, "Success !")
                    })
            },
            me(){
                axios.get('dashboard/my/info').then(({data}) => {
                    this.user = data;
                    this.profile = user.image;
                    this.cover = user.cover;
                });
            },
            submit(scope) {
                this.$validator.validateAll(scope).then((result) => {
                    if (!result)
                        return;
                    this.changePassword();
                });
            },
            toBase64(file){
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });
            },
            async handleFileChange(e, elem){
                let file = e.target.files[0];
                console.log(file);
                let types = this.types;
                if(types.img.includes(file.type)){
                    let result = await this.toBase64(file).catch(e => Error(e));
                    if(result instanceof Error) {
                        console.log('Error: ', result.message);
                        return;
                    }else
                        this[elem] = result;
                }
            },
            async handleProfilePicture(e){
                await this.handleFileChange(e, 'profile');
                let formData = new FormData();
                formData.append('image', e.target.files[0]);
                axios.post(`update-profilepic`, formData).then(({data}) => this.$toastr.success(data.message, "Success !") );
            },
            async handleCover(e){
                await this.handleFileChange(e, 'cover');
                let formData = new FormData();
                formData.append('cover', e.target.files[0]);
                axios.post(`update-cover`, formData).then(({data}) => this.$toastr.success(data.message, "Success !") );
            },
            changePassword() {
                axios.post(`/update-password`, this.pr)
                    .then(data => {
                        this.pr = {};
                        $('#changePasswordModal').modal('hide');
                        this.$toastr.success(data.data.message, "Success !");
                    }).catch(e => {
                        let errors = e.response.data.errors;
                        Object.keys(errors).forEach(key => {
                            this.$toastr.error(errors[key], "Error!");
                        });
                    });
            },
        },
        watch: {}
    }

</script>

<style>

</style>
