<template >
    <div id="main">
        <div id="progress_bar"></div>
        <Banner />
        <div id="gallery_s" style="max-height: 0; position: relative; top: -40px"></div>
        <Photos/>


    </div>
</template>
<script setup>
import Banner from './banner.vue'
import Photos from './photos-top.vue'


</script>
<style scoped></style>