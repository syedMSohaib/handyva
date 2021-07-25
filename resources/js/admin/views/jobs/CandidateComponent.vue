<template>
    <section id="configuration">
        <div class="row">
            <div class="col-12">
                <h1 class="">
                    <router-link :to="{ name: 'usermg' }" class="back">
                        <i class="fa fa-angle-left"></i>
                    </router-link> {{ $route.meta.title }}</h1>                
            </div>
            <div class="col-lg-6 col-md-6 col-12">
                <h5 class="mb-0">Job Title</h5>
                <p>Job id - {{job.id}}</p>
            </div>
            <div class="col-lg-6 col-md-6 col-12 text-md-right text-left">
                <h5 class="mb-0">Status</h5>
                <p>{{ job.status_value}}</p>
            </div>
            <div class="col-12 mt-4">
                <div class="card p-1">
                    <div class="card-content collapse show">
                        <div class="card-dashboard top">
                            <div class="maain-tabble table-responsive data-hide">
                                <table class="table table-striped table-bordered zero-configuration" id="userTable">
                                    <thead>
                                        <tr>
                                            <th>s.no</th>
                                            <th>customer ID</th>
                                            <th>customer name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(candidate, index) in job.candidates" v-bind:key="index">
                                            <td>
                                                <img :src="candidate.image">
                                                <h5 class="mb-0">User</h5>
                                                <p>{{ candidate.name }}</p>
                                            </td>
                                            <td>
                                                <h5 class="mb-0">User id</h5>
                                                <p>{{ candidate.id}}</p>
                                            </td>
                                            <td colspan="6">
                                                <router-link class="profile-anchor"
                                                    :to="{ name: 'usermg.customer.show', params: { id: candidate.id } }">
                                                    View Profile
                                                </router-link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import {
        TheMask
    } from 'vue-the-mask'
    export default {
        data() {
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
            getJob() {
                axios.get(`/jobs/${this.$route.params.id}/candidates`)
                    .then(data => {
                        this.job = data.data.data;
                        setTimeout(() => this.table = $('#userTable').DataTable(), 100);

                    });
            },
        }
    }
</script>