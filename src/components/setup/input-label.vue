<template>
    <div class="relative ">
        <label for="" class="absolute -top-4 left-10"><span class=" px-2 rounded-md border-2 bg-white border-green-500 py-0.5 text-sm font-semibold">Name</span> &nbsp; <span class="text-green-500">{{name}}</span></label>
        <div class="w-full max-w-xs mx-auto">
            <input type="text" attribute="v-model" class="flex w-full h-10 px-3 py-5 text-sm bg-white border-2 border-green-500 rounded-md ring-offset-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:cursor-not-allowed disabled:opacity-50" />
        </div>
    </div>
</template>
<script>
    export default{
        props:['label','slot']
    }
</script>