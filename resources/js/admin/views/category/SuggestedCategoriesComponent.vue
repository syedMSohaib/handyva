<template>
    <section id="configuration" class="search view-cause">
        <div class="row">
            <div class="col-12">
                <div class="card rounded pad-20">
                    <div class="card-content collapse show">
                        <div class="card-body table-responsive card-dashboard">
                            <div class="row">
                                <div class="col-12 d-block d-sm-flex justify-content-between">
                                    <div class="left">
                                        <h1 class="pull-left">Suggested Categories</h1>
                                    </div>
                                    <div class="right">
                                        <router-link :to="{ name: 'categories'}" ><i class="fa fa-plus-circle" aria-hidden="true"></i> All Categories</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="maain-tabble mt-3">
                                <table class="table table-striped table-bordered zero-configuration" id="categoryTable">
                                    <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Trainers Name</th>
                                        <th>Course Category Name</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(row, index) in data">
                                        <td>{{ index+1 }}</td>
                                        <td class="name-td">
                                            <img class="avatar" :src="row.trainer.image" >&nbsp;&nbsp;<span>{{ row.trainer.name }}</span>
                                        </td>
                                        <td>{{ row.name }}</td>
                                        <td>{{ row.mini_description }}</td>
                                        <td>
                                            <div class="btn-group mr-1 mb-1">
                                                <button type="button" class="btn  btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fa fa-ellipsis-v"/>
                                                </button>
                                                <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(4px, 23px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                    <a class="dropdown-item" v-on:click="bindMe(row)"  data-toggle="modal" data-target="#addCategory"><i class="fa fa-check-circle" ></i>Accept</a>
                                                    <a class="dropdown-item" @click.prevent="blockRow(row.id)"><i class="fa fa-times-circle" ></i>Reject</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div class="login-fail-main user add-cat-modal">
                                    <div class="featured inner">
                                        <div class="modal fade bd-example-modal-lg" id="addCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" style="display: none;" aria-hidden="true">
                                            <div class="modal-dialog modal-lgg conf">
                                                <div class="modal-content">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">×</span>
                                                            </button>
                                                        </div>
                                                        <form action="">
                                                            <div class="payment-modal-main">
                                                                <div class="payment-modal-inner">
                                                                    <div class="row">
                                                                        <div class="col-12 text-center">
                                                                            <img :src="`${baseUrl}/images/add-cat-popup.png`" class="img-fluid" alt="">
                                                                            <h1>Are you sure you want to add this course as a new category?</h1>

                                                                        </div>
                                                                        <div class="col-12 form-group">
                                                                            <label>Category Name:</label>
                                                                            <p>{{cat.name}}</p>
                                                                            <label>Category Description:</label>
                                                                            <p>{{cat.description}}</p>
                                                                            <label class="check">Make Files Non-Downloadable
                                                                                <input spellcheck="true" v-model="cat.downloadable" type="checkbox" checked="checked">
                                                                                <span class="checkmark"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-12 text-center">
                                                                            <button type="button" class="can" data-dismiss="modal">Cancel</button>
                                                                            <button type="button" class="con" v-on:click="add()">Add Category</button>
                                                                        </div>
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                blocked: false,
                data: [],
                cat: {
                    id: '',
                    name:'',
                    description:'',
                    downloadable:0,
                },
                table: undefined
            }
        },
        mounted() {
            this.getCategories();
        },
        methods: {
            getCategories(){
                if(this.table !== undefined)
                    this.table.destroy();

                axios.get(`/categories?type=suggested`)
                    .then(data => {
                        this.data = data.data;
                        setTimeout(()=> this.table = $('#categoryTable').DataTable(), 100);
                    });
            },
            blockRow(id){
                this.$dialog.confirm(`Are you sure you want to reject this category request?`).then(dialog => {
                    axios.delete(`/categories/${id}?reject=true`).then( d => {
                        this.getCategories();
                        this.$toastr.error('Request rejected successfully', 'End', {});
                        dialog.close();
                        this.$router.push({name: 'categories'});
                    }).catch(d => {
                    });
                })
            },
            bindMe(row){
                this.cat.id = row.id;
                this.cat.name = row.name;
                this.cat.description = row.description;
                this.cat.downloadable = row.downloadable;
            },
            add(){
                console.log(this.cat);
                axios.put(`/categories/${this.cat.id}`, this.cat)
                    .then(data => {
                        // this.getCategories();
                        // this.$toastr.success(d.data.message, 'Success', {});
                        $('#addCategory').modal('toggle');
                        this.$toastr.success('Request accepted successfully', 'Success', {});
                        this.$router.push({name: 'categories'});
                    }).catch( e => {
                        let errors = e.response.data.errors;
                        Object.keys(errors).forEach(key=>{
                            this.$toastr.error(errors[key], "Error!");
                        });
                    });

            }
        },
        watch: {
        }
    }
</script>

<style>
    .dg-content-footer {
        text-align: center;
        border: none;
        padding: 0;
    }

    .dg-content-footer>button {
        float: none;
    }

    button.dg-btn {
        margin: 30px 10px 0 0!important;
        min-width: 130px;
        padding: 10px 40px;
        box-shadow: 0 0 0 0;
        background: transparent !important;
        color: #993e99;
        border: 1px solid #993e99;
        border-radius: 100px;
        float: none;
        font-weight: 500;
        font-size: 14px;
    }

    button.dg-btn.dg-btn--ok {
        background: transparent !important;
        border: 1px solid #993e99;
    }

    .dg-content-body {
        padding-bottom: 0 !important;
        border-bottom: none !important;
    }

    .dg-content {
        font-size: 16px !important;
        font-weight: 600;
        word-break: initial !important;
        text-align: center;

        color: #333333 !important;
        margin: 20px 0 0 0;
        text-transform: capitalize;
    }

    .dg-main-content {
        padding: 50px 20px !important;
        max-width: 500px !important;
        border-radius: 20px !important;
    }

    .dg-content:before {
        content: "";
        display: block;
        width: 100%;
        height: 80px;
        margin-bottom: 10px;
        background: url("/images/delete.png") no-repeat center;
    }

    .dg-btn-loader .dg-circle {
        background-color: #993e99 !important;
    }

    .dg-backdrop {
        background-color: rgba(0, 0, 0, 0.5) !important;
    }

    .media .swiper-container.swiper-container-initialized {
        width: 300px;
        display: block;
        margin-right: 12px;
    }

    @media (max-height: 700px){
        .dg-content-cont--floating {
            top: 50% !important;
            transform: translateY(-50%);
        }
    }

</style>
