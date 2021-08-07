<template>
    <div class="container-fluid">
        <!-- Add Project -->
        <div class="row page-titles mx-0">
            <div class="col-sm-6 p-md-0">
                <div class="welcome-text">
                    <h4>{{ $route.query.qt ? $route.query.qt : $route.meta.title }}

                        ( {{ data.length }} )
                    </h4>
                </div>
            </div>
            <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                <input type="text" v-model="query" @change="getTask()" class="search-task form-control" placeholder="Search By Task Title">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">All Task</a></li>
                </ol>
            </div>
            <div class="col-12 text-right pull-right mt-4 mr-0 pr-0">
                <router-link class="btn btn-handy-task mr-0 btn-sm" :to="{ name: 'task.create'}">
                    Create task
                </router-link>
            </div>
        </div>
        <!-- row -->

        <div class="row">
            <div v-for="(task, index) in data" :key="index" class="col-xl-6">
                <div class="card task-card">
                    <div class="card-header justify-content-between align-items-center">
                        <h5>TASK ID: {{ task.id }}</h5>
                        <h5 class="card-title">Status :
                           <span>
                            {{ task.status_value }}</span></h5>
                        <p :style="`background-color:${task.color}`" class="text-white p-1 date-time-task m-0">
                            <b>{{ task.task_type_value }}</b>
                        </p>
                    </div>
                    <div class="card-body">
                        <div class="row mb-2">
                            <div class="col-12">
                                <h4 class="heading-badge text-white">Subject:</h4>
                                <p class="card-text task-subject">
                                    {{ task.title }}
                                </p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-12">
                                <h4 class="heading-badge text-white">Task Description:</h4>
                                <p class="" v-text="task.toggle ? task.description : task.mini"></p>
                                <a href="javascript:;"
                                    @click="task.toggle = !task.toggle"
                                    v-text="task.toggle ? 'Read Less' : 'Read More'"></a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-sm-flex justify-content-between align-items-center">
                        <div class="card-footer-link mb-4 mb-sm-0">
                            <p class="card-text d-inline">Task Created:
                                {{ task.created_date}}
                            </p>
                        </div>
                        <div class="d-flex" >
                            <router-link :to="{ name: 'task.edit', params: { id:  task.id } }" title="View Task"
                                class="btn btn-warning shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></router-link>
                            <router-link :to="{ name: 'task.show', params: { id:  task.id } }" title="View Task"
                                class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-eye"></i></router-link>
                            <a href="javascript:;" @click.prevent="deleteTask(task.id)" title="View Task" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 pl-4 " v-if="data.length == 0">
                No task found
            </div>

        </div>

    </div>
</template>
<style>
    .search-task{
        max-width: 200px;
        margin-right: 10px;
        border-radius: 0px;
    }

</style>
<script>
    import Datepicker from 'vuejs-datepicker';
    export default {
        data() {
            return {
                data: [],
                from: '',
                to: '',
                query: '',
                table: undefined,
                type_class: [
                    'default',
                    'success',
                    'warning',
                    'danger',
                ]
            }
        },
        components: {
            Datepicker
        },
        mounted() {
            this.getTask();
        },
        methods: {
            getTask() {
                if (this.table !== undefined)
                    this.table.destroy();
                let query = {
                    status: typeof this.$route.query.status !== 'undefined' ? this.$route.query.status : '',
                    excess: typeof this.$route.query.excess !== 'undefined' ? this.$route.query.status : '',
                    extensive: typeof this.$route.query.extensive !== 'undefined' ? this.$route.query.status : '',
                    recurring: typeof this.$route.query.recurring !== 'undefined' ? this.$route.query.status : '',
                    title: this.query
                }
                axios.get(`/task?${this.buildqueryparams(query)}`)
                    .then(({
                        data
                    }) => {
                        this.data = data;
                        setTimeout(() => this.table = $('#tasktable').DataTable(), 100);
                    });
            },
            deleteTask(id) {
                this.$dialog.confirm(`Are you sure you want to delete this task ? The Action is irreversible`).then(
                    dialog => {
                        axios.delete(`/task/${id}`).then(d => {
                            this.getTask();
                            this.$toastr.success(d.data.message, 'Success', {});
                            dialog.close();
                        }).catch(d => {});
                    })
            }
        },
        watch: {
            '$route': function () {
                this.getTask();
            },
            // 'excess' : function() {
            //     this.getTask();
            // },
            // 'extensive' : function() {
            //     this.getTask();
            // },
            // 'recurring' : function() {
            //     this.getTask();
            // },
        }
    }
</script>
