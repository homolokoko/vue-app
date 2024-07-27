<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="flex items-center justify-between shadow-lg lg:px-36 md:px-10">
    <a href="" class="size-14">
      <img alt="Vue logo" class="w-full h-full" src="@/assets/logo.svg" />
    </a>
    <nav class="flex gap-5 ">
      <RouterLink to="/" class="text-green-600 hover:text-green-500">Home</RouterLink>
      <RouterLink to="/about" class="text-green-600 hover:text-green-500">About</RouterLink>
      <RouterLink to="/dashboard" class="text-green-600 hover:text-green-500">Dashboard</RouterLink>
      <RouterLink to="/login" class="text-green-600 hover:text-green-500">Login</RouterLink>
    </nav>
  </header>
  <main class="p-10">
    <div class="h-auto p-5 mx-auto lg:w-full bg-white rounded-md border shadow-lg">
      <RouterView />
    </div>
  </main>

</template>

<style></style>
