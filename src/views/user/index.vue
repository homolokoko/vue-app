<template>
    <Listbox v-model="customer" :options="dataSource" optionLabel="text" class="w-full md:w-56" />
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