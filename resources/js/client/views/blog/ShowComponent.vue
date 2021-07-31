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
                    <li class="breadcrumb-item"><a href="javascript:void(0)">All Blog</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Manage Blog</a></li>
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

                                <div class="col-sm-6 mb-2">
                                    <input type="text" v-model="blog.title" class="form-control" placeholder="Enter Blog title" name="title">
                                </div>
                                <div class="col-sm-6 mb-2">
                                    <input type="text" v-model="blog.author_name" class="form-control" placeholder="Enter Author Name" name="author_name">
                                </div>
                                <div class="col-sm-12 mb-2">
                                    <textarea v-model="blog.mini_description" class="form-control" placeholder="Enter Blog Mini Description"></textarea>
                                </div>
                                <div class="col-sm-12 mb-2">
                                    <input type="text" v-model="blog.meta_title" class="form-control" placeholder="Enter Meta title" name="meta_title">
                                </div>
                                <div class="col-sm-12 mb-2">
                                    <input type="text" v-model="blog.meta_keywords" class="form-control"
                                        placeholder="Enter Meta keywords e.g abc, def, ghi" name="meta_keywords">
                                </div>
                                <div class="col-sm-12 mb-2">
                                    <textarea v-model="blog.meta_description" class="form-control" placeholder="Enter Meta Description"></textarea>
                                </div>
                                <div class="col-sm-12 mb-2">
                                    <editor
                                        v-model="blog.body"
                                        api-key="no-api-key"
                                        :init="{
                                            height: 500,
                                            menubar: false,
                                            plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                            ],
                                            toolbar:
                                            'undo redo | formatselect | bold italic backcolor | \
                                            alignleft aligncenter alignright alignjustify | \
                                            bullist numlist outdent indent | removeformat | help'
                                        }"
                                        />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 col-sm-12 mt-5 mg-t-10">
                                    <button type="button" class="btn btn-primary float-right"
                                        @click="update">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


        </div>

    </div>
</template>

<script>

    import Editor from '@tinymce/tinymce-vue'
    export default {
        data() {
            return {
                blog: {
                    title: '',
                    author_name: '',
                    mini_description: '',
                    meta_title: '',
                    meta_keywords: '',
                    meta_description: '',
                },
                image: '',
                cv: '',
                baseUrl : window.axios.defaults.baseURL,

            }
        },
        components: {
            'editor': Editor
        },
        mounted() {
            this.getBlog();
        },
        methods: {
            getBlog(){
                axios.get(`/blog/${this.$route.params.id}`).then(({data}) => { this.blog = data });
            },
            update(){
                axios.post(`/blog/${this.$route.params.id}`, this.blog)
                    .then(({data}) => {
                        this.$toastr.success(data.message, 'Success');
                        this.$router.push({name: 'blog'});
                    }).catch( e => {
                    let errors = e.response.data.errors;
                    Object.keys(errors).forEach(key=>{
                        this.$toastr.error(errors[key], "Error!");
                    });
                });
            }
        },
        watch: {}
    }
</script>
