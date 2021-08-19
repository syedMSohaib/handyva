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
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Employee</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Permissions</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <div class="col-6">
                            <div class="form-group">
                                <label><b>Select Role</b></label>
                                <select v-model="role_id" @change="fetchPermissions" class="form-control">
                                    <option value="">Select Role</option>
                                    <option v-for="(role, index) in data" :key="index" :value="role.id"
                                        v-text="role.name"></option>
                                </select>
                            </div>
                        </div>


                        <table class="mt-2 ml-2 table text-center tr-rounded order-tbl">
                            <thead>
                                <tr>
                                    <th class="text-left">Permission</th>
                                    <th class="text-right">Access</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(p, index) in permissions" :key="index">
                                    <td class="text-left" v-text="p"></td>
                                    <td class="text-right">
                                        <div class="form-group mb-0">
                                            <label class="radio-inline mr-3">
                                                <input type="radio" v-model="rp.p[index]"  value="1" :name="`permission_${index}`"> Allow</label>
                                            <label class="radio-inline mr-3">
                                                <input type="radio" v-model="rp.p[index]"  value="0" :name="`permission_${index}`"> Deny</label>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="2">
                                        <button v-if="role_id" type="button" class="btn-sm btn btn-primary float-right"
                                            @click="save">Save</button>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>


                    </div>
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
                role: {},
                role_id: '',
                permissions: window.info.permissions,
                rp: {
                    p: []
                }
            }
        },
        components: {
            Datepicker
        },
        mounted() {
            this.getRoles();
        },
        methods: {
            save() {
                axios.post(`/permissions/${this.role_id}`, this.rp)
                    .then(({
                        data
                    }) => {
                        this.$toastr.success(data.message, 'Success');
                        this.getRoles();
                        window.location.reload();
                    }).catch(e => {
                        let errors = e.response.data.errors;
                        Object.keys(errors).forEach(key => {
                            this.$toastr.error(errors[key], "Error!");
                        });
                    });

            },
            fetchPermissions() {
                axios.get(`/permissions/${this.role_id}`)
                    .then(({
                        data
                    }) => {
                        if(data.length)
                            this.rp.p = data.map(o => o["status"]);
                        else
                            this.rp.p = [];

                    });
            },
            getRoles() {
                axios.get(`/roles`)
                    .then(({
                        data
                    }) => {
                        this.data = data;
                    });
            },
        },
        watch: {
            '$route': function () {
                this.getRoles();
            },
        }
    }

</script>
