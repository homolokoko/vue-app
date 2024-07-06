
<template>
    <div class="flex justify-center card">
        <!-- <Toast /> -->
        <FileUpload mode="basic" name="file" url="https://qms.dvl.to/api/customer/images-upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
    </div>
</template>

<script setup>
// import { useToast } from "primevue/usetoast";
// const toast = useToast();

const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
</script>
