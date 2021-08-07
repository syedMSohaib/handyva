<template>
    <div id="wrappper" :class="`show ${show ? 'menu-toggle' : ''}`">
        <div class="nav-header">
            <a href="/admin/dashboard" class="brand-logo">
                <Img style="width:100%" src="/images/logo-black.png" />
            </a>
            <div class="nav-control">
                <div :class="`hamburger ${show ? 'is-active' : ''}`" @click="show = !show">
                    <span class="line"></span><span class="line"></span><span class="line"></span>
                </div>
            </div>
        </div>
        <top-header></top-header>
        <side-navbar></side-navbar>
		<div class="content-body">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                show: false,
            }
        },
        mounted() {}
    }
</script>
