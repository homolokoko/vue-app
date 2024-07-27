<template>
    <!-- <Listbox v-model="customer" :options="dataSource" optionLabel="text" class="w-full md:w-56" /> -->
    <div class="p-5 space-y-5 border rounded-lg md:w-1/2">
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
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'user-index',
    data(){
        return {
            customer: '',
            dataSource: []
        }
    },
    mounted (){
        try{
        fetch("https://qms.dvl.to/api/customer")
        .then(res => res.json()).then(data => this.dataSource=data)
        }catch(error){
            console.log(error)
        }
    },
    methods : {
    }
}
</script>