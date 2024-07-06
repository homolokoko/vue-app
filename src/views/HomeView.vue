

<template>
  <main>
    <div class="w-full h-auto space-y-5">
      <Toolbar>
        <template #start>
          <upload></upload>
        </template>
        <template #end> <Button label="save" @click="save" /></template>
      </Toolbar>
        <div class="grid grid-cols-4 gap-4">
          <div
            v-for="item in dataSource" :key="item.id"
           class="flex overflow-hidden rounded-lg">
           <div class="relative flex flex-col gap-6 px-3 py-2 bg-fuchsia-50">
            <img :src="item.image" alt="" srcset="">
            <span class="absolute top-3 right-5"> <Checkbox v-model="selection" :value="item.id" /> </span>
            <div class="flex justify-between">
              <p>title</p> <p>{{item.date}}</p>
            </div>
            <div class="flex justify-between">
              <p>price</p> <span><Button text  label="View" severity="info" v-on:click="order(item.id)" /></span>
            </div>
           </div>
          </div>
        </div>
        
    </div>
  </main>
</template>


<script>
import upload from '../components/setup/file-upload.vue';
export default{
        name: 'home',
        components:{upload},
        data(){
            return {
                buttons:['save'],
                selection:[],
                dataSource:[]
            }
        },
        mounted(){
          fetch("http://qms.dvl.to/api/customer")
            .then(result => result.json())
            .then(data => this.dataSource=data)
        },
        methods:{
            order(id){
              alert(id)
            },
            save(){
              alert(this.selection)
            }
        }
    }
</script>