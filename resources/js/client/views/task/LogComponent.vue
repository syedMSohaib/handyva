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
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Task Detail</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Task Log</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->

        <div class="row" v-if="task">
            <div class="col-xl-12">
                <div class="card task-card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-6 text-md-left text-center">
                                <h4 class="client_name">{{task.client.name}}</h4>
                                <h6 class="client_email">{{task.client.email}}</h6>
                            </div>
                            <div class="col-md-6 text-md-right text-center mt-3 mt-md-0">
                                <p class="date-time-task">
                                    <b>Task Created on</b>: {{ task.created_date}}
                                </p>
                                <p class="date-time-task" v-if="task.type == 3">
                                    {{task.date}} | {{ task.time}}
                                </p>

                                <h5 v-if="task.type == 0" class="badge tx-5">
                                    <span class="badge light badge-default">
                                        Task Type: <b>NONE</b>
                                    </span>
                                </h5>
                                <h5 v-if="task.type == 1" class="badge tx-5">
                                    <span class="badge light badge-success">
                                        Task Type: <b>CALLING</b>
                                    </span>
                                </h5>
                                <h5 v-if="task.type == 2" class="badge tx-5">
                                    <span class="badge light badge-warning">
                                        Task Type: <b>PRIORITY</b>
                                    </span>
                                </h5>

                                <h5 v-if="task.type == 3" class="badge tx-5">
                                    <span class="badge light badge-danger">
                                        Task Type: <b>SCHEDULE OR RECURRING</b>
                                    </span>
                                </h5>

                            </div>
                        </div>


                        <div class="row mt-4">
                            <div class="col-lg-12">
                                <p class="task--description">
                                    <strong>Subject:</strong> <br>
                                    {{ task.title }}
                                </p>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-lg-12">
                                <h5 class="tx-bold">Task Details</h5>
                                <div id="showmore-1" data-showmore="" style="">
                                    <div class="custom-css">
                                        <pre><p>{{ task.description}}</p></pre>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-12 mt-lg-0 mt-3">
                                <h5 class="tx-bold">Activity Logs</h5>
                                <div class="notes-wrap">
                                    <div v-for="(log, lindex) in task.logs" :key="lindex" class="note row">
                                        <div class="col-md-12 col-sm-11 col-xs-11">
                                            <p class="post-response">
                                                {{ log.description}}
                                            </p>
                                            <small class="posted-by">
                                                on {{ dateFormatLaravel(log.created_at) }}
                                            </small>

                                        </div>
                                    </div>
                                </div>

                                <!-- <div class="row notes-div" style="display: none;">
                                    <div class="col-12 post-a-note">
                                        <textarea name="" id="note-text" cols="30" class="form-control" rows="4"
                                            maxlength="1200"></textarea>
                                        <button class="btn btn-handy-task mt-2"
                                            onclick="addInternalNotes('6')">Post</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 text-right mt-3">
                                        <button class="btn btn-handy-task" onclick="ShowAndHideNoteDiv()">ADD
                                            NOTE</button>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row my-2">
                            <div class="col-12 text-center">
                                <router-link :to="{ name: 'task.show', params: { id: task.id } }" class="btn btn-handy-task mr-md-2 mr-0"
                                    >Go Back</router-link>

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
        data() {
            return {
                charge: 1,
                task: undefined,
                users: [],
                countries: window.info.countries,
                timezones: window.info.timezones,
                hours: [...Array(24).keys()],
                minutes: [...Array(60).keys()],
                clients: [],
                baseUrl: window.axios.defaults.baseURL,
            }
        },
        components: {},
        mounted() {
            this.getTask();
            this.getUser();
        },
        methods: {
            changeStatus(id){
                axios.post(`/task/${this.$route.params.id}/update-status`, {
                    status: this.task.status,
                }).then(({
                    data
                }) => {
                    this.getTask();
                })
            },
            getUser() {
                axios.get(`/user`)
                    .then(({
                        data
                    }) => {
                        this.users = data;
                    })
            },
            getTask() {
                axios.get(`/task/${this.$route.params.id}`)
                    .then(({
                        data
                    }) => {
                        this.task = data;
                    })
            },
            store() {
                if (this.$refs.myVueDropzone.getAcceptedFiles().length == 0) {
                    this.$toastr.error("Please attach document to proceed", "Error!");
                    return;
                }

                axios.post('task', this.task)
                    .then(({
                        data
                    }) => {
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
