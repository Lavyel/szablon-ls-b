<template>
    <router-link :to="{ name: 'Home' }">Strona domowa</router-link>&nbsp;
    <router-link :to="{ name: 'MyView' }">Mój widok</router-link>&nbsp;
    <router-view></router-view>
</template>

<script setup>
    import Home from './views/Home.vue'
    import MyView from './views/MyView.vue'
</script>

<style>
</style>