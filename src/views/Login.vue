<template>
    <!-- <UserCreate></UserCreate> -->
    <UserIndex></UserIndex>
</template>
<script>
import UserCreate from '../views/user/create.vue'
import UserIndex from '../views/user/index.vue'
export default{
        name:'Login',
        components: {UserIndex}
}
</script>