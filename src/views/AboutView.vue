<script>
  import { ref } from 'vue'
export default {
  data() {
    // var count = ref(0)
    return { 
      count:0
     }
    }
  }
</script>

<template>
  <div class="about">
    <div class="max-w-sm px-8 py-8 mx-auto space-y-2 bg-white shadow-md rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <!-- <img class="block h-24 mx-auto rounded-full sm:mx-0 sm:flex-shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face"> -->
      <div class="space-y-2 text-center sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg font-semibold text-black">
            Erin Lindford
          </p>
          <p class="font-medium text-green-500 border rounded-full text-semibold">
            Count : {{ count }}
          </p>
          <p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
        </div>
        <button @click="count++" class="px-4 py-1 text-sm font-semibold text-purple-600 border border-purple-200 rounded-full hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
      </div>
    </div>
  </div>
</template>
