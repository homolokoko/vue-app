

<template>
        <modal :section="modal">
            <template v-slot:other>{{other}}</template>
        </modal>

    <span>{{text}}</span>
</template>

<script>
import modal from '../components/setup/modal.vue'
  export default{
    name: 'Dashboard',
    components:{modal},
    data(){
        return {
            open: false,
            text: 'I am dashboard',
            other:'Hello',
            modal: {
                title: 'I am modal',
                text: 'Hello, This is reuseable modal compoent!',

            }
        }
    },
    methods:{
    toggleModal(){
        this.open = !this.open
    }}
  }
</script>