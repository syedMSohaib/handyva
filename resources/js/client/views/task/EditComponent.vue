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
                    <li class="breadcrumb-item"><a href="javascript:void(0)">All Task</a></li>
                    <li v-if="$route.params.id" class="breadcrumb-item active"><a href="javascript:void(0)">Edit Task</a></li>
                    <li v-else class="breadcrumb-item active"><a href="javascript:void(0)">Create Task</a></li>
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
                                <div class="col-sm-6">
                                    <input type="text" v-model="task.title" class="form-control" placeholder="Enter Subject" name="subject">
                                </div>
                                <div class="col-sm-12 mg-t-10">
                                    <textarea v-model="task.description" class="form-control" name="Enter description" rows="6" placeholder="Description"
                                        style="resize: none;"></textarea>
                                </div>
                                <div class="col-sm-6 mg-t-10">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" v-model="task.type" id="none" name="task_type" class="custom-control-input"
                                            checked="" :value="0">
                                        <label class="custom-control-label" for="none">None</label>
                                    </div>
                                </div>
                                <div class="col-sm-6 mg-t-10">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" v-model="task.type" id="calling" name="task_type" class="custom-control-input"
                                            :value="1">
                                        <label class="custom-control-label" for="calling">Calling</label>
                                    </div>
                                </div>
                                <div class="col-sm-6 mg-t-10">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" v-model="task.type" id="priority" name="task_type" class="custom-control-input"
                                            :value="2">
                                        <label class="custom-control-label" for="priority">Priority</label>
                                    </div>
                                </div>
                                <div class="col-sm-6 mg-t-10">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" v-model="task.type" id="ScheduleOrRecurring" name="task_type"
                                            class="custom-control-input" :value="3">
                                        <label class="custom-control-label" for="ScheduleOrRecurring">Schedule
                                            Or
                                            Recurring</label>
                                    </div>
                                </div>
                            </div>
                            <div v-if="task.type == 3" class="row row-sm mg-b-10" id="schedule">
                                <div class="col-sm-6 mg-t-10">
                                    <input type="date" v-model="task.date" class="form-control" placeholder="Choose date" id="date"
                                        name="date">
                                </div>
                                <div class="col-sm-2 mg-t-10">
                                    <select class="form-control" v-model="task.time_hour" name="timeHour">
                                        <option value="">Hour</option>
                                        <option v-for="hour in hours" :key="hour" :value="hour">{{hour}}</option>
                                    </select>
                                </div>
                                <div class="col-sm-2 mg-t-10">
                                    <select class="form-control"  v-model="task.time_minutes" name="timeMinutes">
                                        <option value="">Minutes</option>
                                        <option v-for="minute in minutes" :key="minute" :value="minute">{{minute}}</option>
                                    </select>
                                </div>
                                <div class="col-sm-2 mg-t-10">
                                    <select class="form-control"  v-model="task.time_second" name="timeSeconds">
                                        <option value="">Seconds</option>
                                        <option v-for="second in minutes" :key="second" :value="second">{{second}}</option>

                                    </select>
                                </div>
                                <div class="col-sm-12 mg-t-10">
                                    <select class="form-control time-zoneee"  v-model="task.timezone" name="time_zone">
                                        <option value="">::Time Zone::</option>
                                        <option v-for="timezone in timezones" :key="timezone.timezone" :value="timezone.timezone"
                                            >(GMT {{ timezone.gmt_offset.indexOf('-') > -1 ? timezone.gmt_offset : '+'+timezone.gmt_offset }}) {{timezone.timezone}}</option>
                                    </select>
                                </div>
                            </div>
                            <div v-if="task.type == 3" class="row">
                                <div class="col-sm-12 mt-4">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="is_repeat"
                                            name="is_repeat"  v-model="task.is_repeat" :value="1">
                                        <label class="custom-control-label tx-bold" for="is_repeat">Repeat</label>
                                    </div>
                                </div>
                                <div v-if="task.is_repeat == true" class="col-md-12 my-2" id="show-on-repeat">
                                    <div class="row align-items-center">
                                        <div class="col-lg-2 col-md-2">
                                            <p class="handy-p tx-bold">Repeats</p>
                                        </div>
                                        <div class="col-md-3">
                                            <select class="form-control repeat_type" v-model="task.repeat_type" name="repeat_type">
                                                <option value="hourly">Hourly</option>
                                                <option value="daily">Daily</option>
                                                <option value="weekly">Weekly</option>
                                                <option value="monthly">Monthly</option>
                                                <option value="yearly">Yearly</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mt-4">
                                        <div class="col-lg-2 col-md-2">
                                            <p class="handy-p tx-bold">Repeat Every</p>
                                        </div>
                                        <div class="col-md-3 col-9">
                                            <select class="form-control mr-3 repeat_every" v-model="task.repeat_every" name="repeat_every">
                                                <option v-for="hour in hours" :key="hour" :value="hour">{{hour}}</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-1 col-md-2 col-3">
                                            <p class="handy-p tx-xs-bold">Hours</p>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mt-4">
                                        <div class="col-lg-2 col-md-2 mb-2">
                                            <p class="handy-p tx-bold">Repeat On</p>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="weekDays-selector">
                                                <input type="checkbox" v-model="task.repeat_on"  id="weekday-mon" class="weekday"
                                                    name="is_day" :value="1">
                                                <label for="weekday-mon">M</label>
                                                <input type="checkbox" v-model="task.repeat_on" id="weekday-tue" class="weekday"
                                                    name="is_day" :value="2">
                                                <label for="weekday-tue">T</label>
                                                <input type="checkbox" v-model="task.repeat_on" id="weekday-wed" class="weekday"
                                                    name="is_day" :value="3">
                                                <label for="weekday-wed">W</label>
                                                <input type="checkbox" v-model="task.repeat_on" id="weekday-thu" class="weekday"
                                                    name="is_day" :value="4">
                                                <label for="weekday-thu">T</label>
                                                <input type="checkbox" v-model="task.repeat_on" id="weekday-fri" class="weekday"
                                                    name="is_day" :value="5">
                                                <label for="weekday-fri">F</label>
                                                <input type="checkbox" v-model="task.repeat_on" id="weekday-sat" class="weekday"
                                                    name="is_day" :value="6">
                                                <label for="weekday-sat">S</label>
                                                <input type="checkbox" v-model="task.repeat_on" id="weekday-sun" class="weekday"
                                                    name="is_day" :value="7">
                                                <label for="weekday-sun">S</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row align-items-center mt-4">
                                        <div class="col-md-12">
                                            <p class="handy-p tx-bold mb-2">Ends</p>
                                        </div>
                                        <div class="col-lg-5 col-md-5">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" v-model="task.end_type" id="never-radio" name="end_type"
                                                            class="custom-control-input end_type" :value="0"
                                                            checked="">
                                                        <label class="custom-control-label"
                                                            for="never-radio">Never</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col-12">
                                                    <div class="custom-control custom-radio mt-2">
                                                        <input type="radio" v-model="task.end_type" id="after-radio" name="end_type"
                                                            class="custom-control-input end_type" :value="1">
                                                        <label class="custom-control-label"
                                                            for="after-radio">After</label>
                                                    </div>
                                                </div>
                                                <div class="col-7 my-2" v-if="task.end_type == 1">
                                                    <select class="form-control repeat_time" v-model="task.occurrence" name="repeat_time">
                                                        <option value="1">1 Tasks</option>
                                                        <option value="2">2 Tasks</option>
                                                        <option value="3">3 Tasks</option>
                                                        <option value="4">4 Tasks</option>
                                                        <option value="5">5 Tasks</option>
                                                        <option value="6">6 Tasks</option>
                                                        <option value="7">7 Tasks</option>
                                                        <option value="8">8 Tasks</option>
                                                        <option value="9">9 Tasks</option>
                                                        <option value="10">10 Tasks</option>
                                                        <option value="11">11 Tasks</option>
                                                        <option value="12">12 Tasks</option>
                                                        <option value="13">13 Tasks</option>
                                                        <option value="14">14 Tasks</option>
                                                        <option value="15">15 Tasks</option>
                                                        <option value="16">16 Tasks</option>
                                                        <option value="17">17 Tasks</option>
                                                        <option value="18">18 Tasks</option>
                                                        <option value="19">19 Tasks</option>
                                                        <option value="20">20 Tasks</option>
                                                    </select>
                                                </div>
                                                <div class="col-5 pl-0" v-if="task.end_type == 1">
                                                    <p class="handy-p tx-bold">Occurrences</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="custom-control custom-radio mt-2">
                                                        <input type="radio" v-model="task.end_type" id="on-radio" name="end_type"
                                                            class="custom-control-input end_type" :value="2">
                                                        <label class="custom-control-label" for="on-radio">On</label>
                                                    </div>
                                                </div>
                                                <div class="col-12 my-2" v-if="task.end_type == 2">
                                                    <input type="date" class="form-control end_date"
                                                        placeholder="Choose date" v-model="task.end_date" id="date-repeat" name="end_date">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 col-sm-12 mg-t-10">
                                    <div class="">
                                        <!-- <input type="file" class="custom-file-input" id="customFile" name="task_file[]"
                                            multiple=""> -->
                                        <vue2Dropzone
                                            v-on:vdropzone-queue-complete="onDropzoneUploadComplete"
                                            ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" :useCustomSlot=true>
                                                <!-- <button class="main-blue-btn2">Upload file</button> -->
                                                <p>Drag and drop any image or document that might be helpful in explaining your
                                                    task</p>

                                        </vue2Dropzone>
                                        <!-- <label class="custom-file-label" for="customFile">Choose file</label> -->
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
<style>
    #dropzone{
        background: none;
        border: 2px dashed #01AEEE;
        border-radius: 15px;
        padding: 15px;
        text-align: center;
        margin: 0 0 20px 0;
    }
    .vue-input-tag-wrapper .input-tag{
        list-style-type: none;
        display: inline-block;
        margin: 10px 5px 0 0;
        border-radius: 25px;
        border: 2px solid #CFD2E4;
        padding: 10px 15px;
        font-size: 13px;
        color: #7D8094;
        font-weight: 500;
        background: #CFD2E4;
    }

</style>
<script>
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import vue2Dropzone from 'vue2-dropzone'

    export default {
        data() {
            return {
                task: {
                    client_id: '',
                    time_hour: '',
                    time_minutes: '',
                    time_second: '',
                    timezone: '',
                    repeat_on: [],
                },
                countries: window.info.countries,
                timezones: window.info.timezones,
                hours: [...Array(24).keys()],
                minutes: [...Array(60).keys()],
                clients: [],
                baseUrl : window.axios.defaults.baseURL,
                dropzoneOptions: {
                    autoProcessQueue: false,
                    url: window.axios.defaults.baseURL+`task/1/files/upload`,
                    thumbnailWidth: 250,
                    headers:{"Authorization":'Bearer ' + this.getCookie('p_token')},
                    addRemoveLinks: true,
                },

            }
        },
        components: {
            vue2Dropzone
        },
        mounted() {
            this.fetchTask();
            this.getTaskPreData();
        },
        methods: {
            fetchTask(){
                axios.get(`/task/${this.$route.params.id}`)
                    .then(({
                        data
                    }) => {
                        this.task = data;
                        let t = data.time.split(":");
                        this.task.time_hour =  Number(t[0]);
                        this.task.time_minutes =  Number(t[1]);
                        this.task.time_second =  Number(t[2]);

                    })
            },
            getCookie(name){
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for(var i=0;i < ca.length;i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1,c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
                }
                return null;
            },
            getTaskPreData(){
                axios.get('/listing/task-pre-data')
                    .then(({data}) => {
                        this.clients = data.clients;
                    })
            },
            onDropzoneUploadComplete(){
                this.$toastr.success("Task is created succesfully", "Success!");
                this.$router.push({name: 'task'});
            },
            submitFiles(){
                this.$refs.myVueDropzone.myVueDropzone();
            },
            store(){
                if(this.$refs.myVueDropzone.getAcceptedFiles().length == 0){
                    this.$toastr.error("Please attach document to proceed", "Error!");
                    return;
                }

                axios.post('task', this.task)
                    .then(({data}) => {
                        this.$refs.myVueDropzone.dropzone.options.url =
                            window.axios.defaults.baseURL + `task/${data.data.id}/files/upload`;
                        setTimeout(() => {
                            this.$refs.myVueDropzone.processQueue();
                        }, 500);

                    }).catch(e => {
                        console.log(e);
                        let errors = e.response.data.errors;
                        Object.keys(errors).forEach(key => {
                            this.$toastr.error(errors[key], "Error!");
                        });
                    });

            }
        },
        watch: {}
    }
</script>
