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
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Task Detail</a></li>
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
                                <h4 v-can="4" class="client_name">{{task.client.name}}</h4>
                                <h6 v-can="5" class="client_email">{{task.client.email}}</h6>
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
                            <div v-can="2" class="col-lg-12 mt-lg-0 mt-3">
                                <h5 class="tx-bold">Internal Notes</h5>
                                <div class="notes-wrap" >
                                    <div v-for="(note, nid) in task.notes" :key="nid" class="note row">
                                        <div class="col-md-11 col-sm-11 col-xs-11">
                                            <p class="post-response">
                                                {{ note.note }}
                                            </p>
                                            <small class="posted-by">By <span>{{ note.user.name }}</span>
                                                on {{ note.created_date}}
                                            </small>

                                        </div>
                                        <div v-can="3" class="col-md-1 col-sm-1 col-xs-1">
                                            <p v-if="note.isauthor"  class="delete">
                                                <a @click="deleteNote(note.id)" href="javascript:void(0)">
                                                    <i class="fa fa-times"></i>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            <div class="row notes-div">
                                    <div class="col-12 post-a-note">
                                        <textarea v-model="note" id="note-text" cols="30" class="form-control" rows="4"
                                            maxlength="1200"></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 text-right mt-3">
                                        <button class="btn btn-handy-task" @click="addNote()">ADD
                                            NOTE
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row mt-4">
                            <div class="col-lg-4 col-md-6">
                                <label for="" class="task-d-label">Status</label>
                                <select v-model="task.status" class="form-control status" name="status_id"
                                    id="status_id">
                                    <option value="0">Pending</option>
                                    <option value="1">Active</option>
                                    <option value="2">WIP</option>
                                    <option value="3">Complete</option>
                                    <option value="4">Cancel</option>
                                </select>

                                <div class="flex-c">
                                    <button @click="changeStatus(task.id)" class="btn btn-handy-task">Change
                                    </button>
                                    <span class="update-meta"></span>
                                </div>


                            </div>


                            <div v-can="12" class="col-lg-4 col-md-6">
                                <label for="" class="task-d-label">Assign</label>
                                <select class="form-control" v-model="task.user_id" name="resource_id" id="resource_id">
                                    <option value="">::Resource::</option>
                                    <option v-for="(user, index) in users" :key="index" :value="user.id">{{ user.name }}
                                    </option>
                                </select>

                                <div class="flex-c">
                                    <button @click="assignResource(task.id)" class="btn btn-handy-task">Assign
                                    </button>
                                    <span class="update-meta"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-lg-4 col-md-6">
                                <label for="" class="task-d-label">Charge by Tasks:</label>
                                <div class="d-flex">
                                    <span class="minus" @click="charge == 1 ? charge=1 : charge--"
                                        style="height: 38px; margin: 0px;">-</span>
                                    <input type="text" @change="charge < 1 ? charge=1 : charge " v-model="charge"
                                        class="m-0 task-input custom-form-control task_count"
                                        style="border-radius: 0px;">
                                    <span style="height: 38px;" @click="charge++" class="plus">+</span>
                                </div>
                                <div class="flex-c">
                                    <button type="submit" class="btn btn-handy-task" onclick="chargeTask('6')">Charge
                                        Now</button>
                                </div>
                            </div>
                            <!-- <div class="col-lg-4 col-md-6">
                                <label for="" class="task-d-label">Charged by:</label>
                                <p class="tx-c-common">By sajjad ali | Date &amp; Time:
                                    24 Jul, 2021 | 01:07 AM
                                </p>
                            </div> -->
                        </div>

                        <div class="row mt-4" >
                            <div class="col-lg-12 col-md-12">
                                <div class="read-content-attachment">
                                    <h6><i class="fa fa-download mb-2"></i> Attachments
                                        <span>({{ task.media.length }})</span></h6>
                                    <div class="row attachment">
                                        <div v-for="(media, mindex) in task.media" :key="mindex" class="col-auto">
                                            <a download :href="media.full_url" class="text-muted">{{ media.file_name}}</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row my-2">
                            <div class="col-12 text-center">
                                <!-- <button class="btn btn-handy-task mr-md-2 mb-md-0 mb-2 d-md-inline-block d-table mx-auto" onclick="addExcess('6')">Excess Task</button> -->
                                <button
                                v-can="1"
                                @click="makeTaskExtensive"
                                v-text="Number(task.is_extensive) ? 'Make Task Non Extensive' : 'Make Task Extensive'"
                                :class="Number(task.is_extensive) ? 'bg-warning' : 'bg-danger'"
                                class="btn btn-handy-task mr-md-2 mr-0"></button>

                                <router-link :to="{ name: 'task.logs', params: { id: task.id } }"
                                    class="btn btn-handy-task mr-md-2 mr-0">View Activity Logs</router-link>

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
                note: '',
                baseUrl: window.axios.defaults.baseURL,
            }
        },
        components: {},
        mounted() {
            this.getTask();
            this.getUser();
        },
        methods: {
            makeTaskExtensive(){
                axios.get(`/task/${this.$route.params.id}/extensive-task`)
                .then( ( {data} ) => {
                    this.$toastr.success(data.message, 'Success', {});
                    this.getTask();
                }).catch(e => {
                    console.log(e);
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach(key => {
                        this.$toastr.error(errors[key], "Error!");
                    });
                });
            },
            deleteNote(id){
                this.$dialog.confirm(`Are you sure you want to this internal note ? The Action is irreversible`).then(
                    dialog => {
                        axios.delete(`/task/${id}/delete-note`).then(d => {
                            this.getTask();
                            this.$toastr.success(d.data.message, 'Success', {});
                            dialog.close();
                        }).catch(d => {});
                    })
            },
            addNote() {
                axios.post(`/task/${this.$route.params.id}/add-note`, {
                    user_id: this.task.user_id,
                    note: this.note,
                    task_id: this.$route.params.id,
                }).then(({
                    data
                }) => {
                    this.note = "";
                    this.getTask();
                }).catch(e => {
                    console.log(e);
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach(key => {
                        this.$toastr.error(errors[key], "Error!");
                    });
                });

            },
            changeStatus(id) {
                axios.post(`/task/${this.$route.params.id}/update-status`, {
                    status: this.task.status,
                }).then(({
                    data
                }) => {
                    this.getTask();
                })
            },
            assignResource(id) {
                if (!this.task.user_id) {
                    this.$toastr.error("Please select resource to assign", "Error!");
                    return;
                }

                axios.post(`/task/${this.$route.params.id}/assign-resource`, {
                    user_id: this.task.user_id,
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
