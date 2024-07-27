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
            <div class="flex justify-center gap-3">
                <!-- <button class="px-4 py-1 text-sm font-semibold text-gray-500 uppercase bg-gray-100 rounded-md hover:bg-gray-200" @click="clear">clear</button>
                <button class="px-4 py-1 text-sm font-semibold text-gray-100 uppercase bg-green-500 rounded-md hover:bg-green-600">save</button>
                <button class="px-4 py-1 text-sm font-semibold text-gray-100 uppercase bg-green-500 rounded-md hover:bg-green-600" @click="add">push</button> -->
                <Button label="clear"  @click="clear" />
                <Button label="save"  @click="save" raised  />
                <Button label="push up"  @click="pushUp" />
            </div>
        </div>

        <DataTable :value="users" tableStyle="min-width: 50rem" showGridlines paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}">
            <Column field="id" header="Id" sortable ></Column>
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="password" header="Password"></Column>
            <Column header="Delete" field="id">
            <template  #body="{ data }">
                <button  @click="popOut(data.id)">
                    <TrashCanIcon />
                </button>
                <!-- <Button label="delete" @click="popOut(data.id)"/> -->
            </template>
        </Column>
        </DataTable>

        <!-- <div class="p-5 space-y-5 border rounded-lg md:w-1/2">
            <div class="w-full overflow-auto bg-scroll max-h-96">
                <div class="table w-full rouded-lg ">
                    <div class="sticky top-0 table-header-group border border-collapse bg-slate-300">
                        <div class="table-row text-sm font-bold text-gray-500">
                            <div class="table-cell px-5 py-4 text-sm font-bold text-left text-gray-500 border border-slate-400">Id</div>
                            <div class="table-cell px-5 py-4 text-sm font-bold text-left text-gray-500 border border-slate-400">Name</div>
                            <div class="table-cell px-5 py-4 text-sm font-bold text-left text-gray-500 border border-slate-400">Email</div>
                            <div class="table-cell px-5 py-4 text-sm font-bold text-left text-gray-500 border border-slate-400">Password</div>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-row " v-for="user in users" :key="user.id">
                            <div class="table-cell px-5 py-4 text-sm font-medium text-gray-500 border border-slate-400"> {{user.id}} </div>
                            <div class="table-cell px-5 py-4 text-sm font-medium text-gray-500 border border-slate-400"> {{user.name}} </div>
                            <div class="table-cell px-5 py-4 text-sm font-medium text-gray-500 border border-slate-400"> {{user.email}} </div>
                            <div class="table-cell px-5 py-4 text-sm font-medium text-gray-500 border border-slate-400"> {{user.password}} </div>
                        </div>
                    </div>
                    <div class=""></div>
                </div>
            </div>
        </div> -->

        

    </div>
</template>
<script>
import _ from 'lodash';
    export default{
        name: 'user-create',
        data(){
            return {
                users:[],
                id:0,
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
            pushUp(){
                this.id++
                this.users.push({id:this.id,name:this.name,email:this.email,password:this.password})
                // this.clear()
            },
            popOut(id){
                _.remove(this.users,function(usr){return usr.id==id})
            }
        },

    }
</script>