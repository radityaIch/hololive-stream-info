<script setup>
import SideNav from "@/components/SideNav.vue";

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<template>
  <SideNav />
  <router-view />
</template>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
</style>
