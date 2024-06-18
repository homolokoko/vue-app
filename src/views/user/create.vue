<template>
    <div class="flex justify-center w-full p-5">

        <div class="p-5 space-y-5 border rounded-lg md:w-1/2">
            <div class="flex justify-center w-full ">
                <h1 class="text-xl font-bold text-green-500 uppercase" >Create User</h1>
            </div>
            <div class="relative max-w-xs mx-auto">
                <label for="" class="absolute -top-4 left-5"><span class=" px-2 rounded-md border-2 bg-white border-green-500 py-0.5 text-green-500 text-sm font-semibold">Name</span></label>
                <div class="w-full">
                    <input type="text" v-model="name" class="flex w-full h-10 px-3 py-5 text-sm bg-white border-2 border-green-500 rounded-md ring-offset-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
            </div>
            <div class="relative max-w-xs mx-auto ">
                <label for="" class="absolute -top-4 left-5"><span class=" px-2 rounded-md border-2 bg-white border-green-500 py-0.5 text-green-500 text-sm font-semibold">Email</span></label>
                <div class="w-full">
                    <input type="eamil" v-model="email" class="flex w-full h-10 px-3 py-5 text-sm bg-white border-2 border-green-500 rounded-md ring-offset-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
            </div>
            <div class="relative max-w-xs mx-auto">
                <label for="" class="absolute -top-4 left-5"><span class=" px-2 rounded-md border-2 bg-white border-green-500 py-0.5 text-green-500 text-sm font-semibold">Password</span></label>
                <div class="w-full">
                    <input type="password" v-model="password" class="flex w-full h-10 px-3 py-5 text-sm bg-white border-2 border-green-500 rounded-md ring-offset-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
            </div>
            <div class="flex justify-end gap-3">
                <button class="px-4 py-1 text-sm font-semibold text-gray-500 uppercase bg-gray-100 rounded-md hover:bg-gray-200" @click="clear">clear</button>
                <button class="px-4 py-1 text-sm font-semibold text-gray-100 uppercase bg-green-500 rounded-md hover:bg-green-600" @click="save">save</button>
                <button class="px-4 py-1 text-sm font-semibold text-gray-100 uppercase bg-green-500 rounded-md hover:bg-green-600" @click="add">push</button>
            </div>
        </div>

        <div class="p-5 space-y-5 border rounded-lg md:w-1/2">
            <div class=""></div>
        </div>

    </div>
</template>
<script>
import InputLabel from '@/components/setup/input-label.vue'
    export default{
        name: 'user-create',
        data(){
            return {
                users:[],
                name:null,
                email:null,
                password:null,
            }
        },
        methods:{
            save(){
                console.log(this.users)
            },
            clear(){
                this.name=null
                this.email=null
                this.password=null
            },
            add(){
                this.users.push({name:this.name,email:this.email,password:this.password})
            }
        }
    }
</script>