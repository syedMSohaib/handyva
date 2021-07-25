<template>
    <section id="configuration">
        <div class="row">
            <div class="col-12">
                <h1 class="">
                    <router-link :to="{ name: 'jobs' }" class="back">
                        <i class="fa fa-angle-left"></i>
                    </router-link> {{ $route.meta.title }}</h1>                
            </div>
            <div class="col-12 mt-4">
                <div class="card " v-if="job">
                    <div class="card-content collapse show">
                        <div class="card-dashboard top p-2">

                            <ul class="jobs">
                                <li>
                                    <h5>Job title</h5>
                                    <p>{{ job.title }}</p>
                                </li>
                                <li>
                                    <h5>Job Category</h5>
                                    <p>{{ job.category_id}}</p>
                                </li>
                                <li>
                                    <h5>Status</h5>
                                    <p>{{ job.status_value}}</p>
                                </li>

                                <li>
                                    <h5>Experience</h5>
                                    <p>{{ job.experience}}</p>
                                </li>

                                <li>
                                    <i class="fa fa-book-open"></i>
                                    <p>{{ job.minimum_requirment}}</p>
                                </li>

                                <li>
                                    <i class="fa fa-clock"></i>
                                    <p>{{ job.created_date}}</p>
                                </li>

                                <li>
                                    <i class="fas fa-hand-holding-usd"></i>
                                    <p>USD {{ new Intl.NumberFormat().format(job.salary) }}</p>
                                </li>

                            </ul>
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12">
                                    <h5 class="mb-0">Organization Name</h5>
                                    <p>{{ job.jobable.name }}</p>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <h5 class="mb-0">Project name</h5>
                                    <p>{{ job.project_title}}</p>
                                </div>
                            </div>
                            <h5 class="mb-0 mt-1">Description</h5>

                            {{ job.description}}

                            <h5 class="mb-0 mt-2">Skills</h5>
                            <p v-bind:key="index" v-for="(skill, index) in job.skills" class="mb-0">{{ skill }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {TheMask} from 'vue-the-mask'
    export default {
        data(){
            return {
                job: undefined,
            }
        },
        components: {
            TheMask
        },
        mounted() {
            this.getJob();
        },
        methods: {
            getJob(){
                axios.get(`/jobs/${this.$route.params.id}`)
                    .then(data => {
                        this.job = data.data.data;
                    });
            },
        }
    }
</script>
