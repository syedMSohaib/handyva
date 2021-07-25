<template>
    <section id="configuration" class="search view-cause category-management">
        <div class="row">
            <div class="col-12">
                <div class="card rounded pad-20">
                    <div class="card-content collapse show">
                        <div class="card-body card-dashboard">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12">
                                    <div class="left">
                                        <h1 class="pull-left">CATEGORY MANAGEMENT</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-12">
                                    <h2 class="blue">Add New Category</h2>
                                    <form action="" _lpchecked="1">
                                        <div class="row">
                                            <div class="col-12">
                                                <input type="text" v-model="cat.name" placeholder="Keyword" class="form-control">
                                            </div>
                                            <div class="col-12 text-center">
                                                <button @click="addCategory" class="blue-btn" 
                                                type="button">{{ current ? "Update Category" : "Add Category"}}</button>
                                                <button v-if="current" @click="reset" class="green-btn" 
                                                type="button" >Reset</button>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-12 col-lg-8 table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Category Name</th>
                                                <th># of Products in this category</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-bind:key="index" v-for="(category, index) in categories">
                                                <td>{{ category.title }}</td>
                                                <td>{{ category.products_count }}</td>
                                                <td>
                                                    <span :class="Number(category.status) ? 'green' : 'red'">
                                                        {{ Number(category.status) ? "Active" : "Inactive" }}
                                                    </span>                                                    
                                                </td>
                                                <td>
                                                    <div class="btn-group mr-1 mb-1">
                                                        <button type="button" class="btn  btn-drop-table btn-sm"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false"> <i
                                                                class="fa fa-ellipsis-v"></i></button>
                                                        <div class="dropdown-menu" x-placement="bottom-start"
                                                            style="position: absolute; transform: translate3d(0px, 22px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                            <a class="dropdown-item" @click.prevent="blockRow(category.id, Number(category.status))"><i
                                                                class="fa fa-ban"></i>{{ Number(category.status) ? 'InActive': 'Active'}}</a>
                                                            <a class="dropdown-item" href="#" @click="populate(category)"
                                                             ><i class="fa fa-edit"></i>edit</a>
                                                        </div>
                                                    </div>
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
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                disabled: false,
                blocked: false,
                categories: [],
                current: null,
                cat: {
                    name: '',
                    description: '',
                    id: '',
                },
                table: undefined
            }
        },
        mounted() {
            this.getCategories();
        },
        methods: {
            getCategories() {
                if (this.table !== undefined)
                    this.table.destroy();

                axios.get(`/categories?all=1`)
                    .then(data => {
                        this.categories = data.data;
                    });
            },
            reset(){
                this.current = null;
                this.cat = {
                    name: '',
                    description: '',
                    id: '',
                };                
            },
            populate(row) {
                this.current = row;
                this.cat.name = row.title;
                this.cat.id = row.id;
            },
            inactive(id) {
                this.$dialog.confirm(`Are you sure you want to inactive this category?`).then(dialog => {
                    axios.post(`/categories/inactive/${id}`).then(d => {
                        this.getCategories();
                        this.$toastr.success(d.data.message, 'Success', {});
                        dialog.close();
                    }).catch(d => {
                        this.$toastr.error('Can not perform this action now, contact support/admin',
                            'Error', {});
                        dialog.close();
                    });
                })
            },
            blockRow(id, status) {
                let state = (status) ? 'Inactive' : 'Active';
                this.$dialog.confirm(`Are you sure you want to ${state} this category?`).then(dialog => {
                    axios.delete(`/categories/${id}`).then(d => {
                        this.getCategories();
                        this.$toastr.success(d.data.message, 'Success', {});
                        dialog.close();
                    }).catch(d => {});
                })
            },

            addCategory() {
                axios.post(`/categories`, this.cat)
                    .then(data => {
                        this.getCategories();
                        this.current = null;
                        this.cat = {
                            name: '',
                            description: '',
                            id: '',
                        };
                        this.$toastr.success('Category is added Successfully', 'Success', {});
                        // $('#addCategoryModal').modal('toggle');
                    }).catch(e => {
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
        margin: 30px 10px 0 0 !important;
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

    button.dg-btn:hover {
        background: #993e99 !important;
        color: white !important;
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
        /*background: url("/images/block.png") no-repeat center;*/
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

    @media (max-height: 700px) {
        .dg-content-cont--floating {
            top: 50% !important;
            transform: translateY(-50%);
        }
    }
</style>