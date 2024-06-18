<template>
    <div class="w-auto h-auto">
    <div v-if="open" @click="open=false"
    class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 ">
        <div class="flex items-center justify-center w-full h-full">
            <div class="relative p-5 bg-white rounded-lg">
                <span class="absolute px-3 py-2 font-medium text-white bg-green-700 rounded-lg top-1 left-10">{{section.title}}</span>
                <div class="px-12 border-4 border-green-700 rounded-lg py-9">
                    <span>{{section.text}}</span>
                    <div class="">
                        <slot name="other"/>
                    </div>
                </div>
                <div class="absolute flex p-1 bg-green-600 rounded-lg bottom-1 right-10">
                    <button @click="open=false" class="px-2 py-1 text-green-700 bg-white rounded-lg hover:text-white hover:bg-green-700">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    <button @click="open=true" class="px-3 py-2 border rounded-lg ">open</button>
</div>
</template>
<script>
    export default{
        props: ['section', 'other'],
        data(){
            return{open:false}
        }
    }

</script>