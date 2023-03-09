<template>
    <main-header />
    <div class="main-container">
        <main-menu />
        <div class="main-content">
            <router-view />
        </div>
    </div>
    <main-footer />
</template>

<script lang="ts" setup>
import MainFooter from './MainFooter.vue'
import MainHeader from './MainHeader.vue'
import MainMenu from './MainMenu.vue'
</script>

<style lang="scss" scoped>
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 120px);
    .main-content {
        width: calc(100% - 120px);
        height: 100%;
    }
}
</style>
