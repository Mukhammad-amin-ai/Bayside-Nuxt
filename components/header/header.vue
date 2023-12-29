<template >
    <Header-notice/>
    <div id="header">
        <div id="header-menu-wrap">
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>


#header {
    width: 100%;
    height: auto;
    min-height: 100vh;
}

#header-menu-wrap {
    position: fixed;
    width: 100%;
    padding: 65px 80px 15px 80px;
    z-index: 500;
    transition: all 0.35s ease-out;
}
</style>