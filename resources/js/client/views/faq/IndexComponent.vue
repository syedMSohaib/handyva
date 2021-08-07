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
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">FAQs</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->

        <div class="row">
            <div class="col-12 card rounded pad-20">
                <div class="card-content collapse show">
                    <div class="card-body table-responsive card-dashboard">
                        <div class="panel-group" id="accordion">
                            <div v-for="(faq, index) in data" :key="index">

                                <div class="faqHeader">
                                    <h2>{{ index }}</h2>
                                </div>

                                <div v-for="(rec, qindex) in faq" :key="qindex" class="panel panel-default">
                                    <div class="panel-heading bg-primary p-2 mb-2">
                                        <h4 class="panel-title ">
                                            <a class="text-white accordion-toggle collapsed" data-toggle="collapse"
                                                data-parent="#accordion" :href="`#collapse${rec.id}`" aria-expanded="false">
                                                {{ rec.question }}
                                            </a>
                                        </h4>
                                    </div>
                                    <div :id="`collapse${rec.id}`" class="mb-3 panel-collapse collapse" :class="qindex == 0 ? 'show' : ''" aria-expanded="false">
                                        <div class="panel-body">
                                            {{ rec.answer }}
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
</template>

<script>
    export default {
        data() {
            return {
                data: [],
            }
        },
        components: {},
        mounted() {
            this.fetchFaq();
        },
        methods: {
            fetchFaq(){
                axios.get('faqs').then(({data}) => this.data = data );
            }
        },
        watch: {}
    }

</script>
