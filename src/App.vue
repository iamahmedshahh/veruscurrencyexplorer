

<template>
  <v-app class="grad-class">
  <v-main>
    <TheNavigation></TheNavigation>
  <v-container>
    <router-view>
    </router-view>
  </v-container>
  </v-main>
</v-app>
</template>

<script setup>
import TheNavigation from './components/TheNavigation.vue';

</script>
<style scoped>
</style>
