<template>
    <img src="https://qms.dvl.to/storage/apperal/1719379972-t1w9i.jpeg" alt="">
    <!-- <Listbox v-model="customer" :options="dataSource" optionLabel="name" class="w-full md:w-56" /> -->
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