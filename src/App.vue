<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex items-center justify-between py-0 shadow-lg px-44">
    <a href="" class="rounded-full size-10">
      <img alt="Vue logo" class="w-full h-full" src="@/assets/logo.svg" width="125" height="125" />
    </a>
    <nav class="flex gap-5 ">
      <RouterLink to="/" class="text-green-700 hover:text-green-600">Home</RouterLink>
      <RouterLink to="/about" class="text-green-700 hover:text-green-600">About</RouterLink>
      <RouterLink to="/dashboard" class="text-green-700 hover:text-green-600">Dashboard</RouterLink>
      <RouterLink to="/login" class="text-green-700 hover:text-green-600">Login</RouterLink>
    </nav>
  </header>
  <main class="py-12 px-14">
    <div class="w-screen h-screen rounded-md shadow-md">
      <RouterView />
    </div>
  </main>

</template>

<style></style>
