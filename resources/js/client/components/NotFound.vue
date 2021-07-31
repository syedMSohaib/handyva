<template>
    <div class="row">
        <div class="col-12">
            <div class="card rounded pad-20">
                <div class="card-content collapse show">
                    <div class="card-body table-responsive card-dashboard">
                        <div class="row">
                            <div class="col-md-6 col-12">
                                <h1 class="pull-left">Oops!... </h1>
                            </div>
                        </div>

                        <h3>The page are your looking for is looks like missing or not found.</h3>
                        <router-link to="/dashboard" class="btn btn-primary">Back to Home</router-link>
                    </div>
                </div>
                <!--main card end-->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                base_url: window.base_url,
                blocked: false,
            }
        }
    }

</script>
