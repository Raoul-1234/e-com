<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const posts = ref(null)
const url = `https://dummyjson.com/products/${route.params.id}`;

onMounted(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            posts.value = data
        })
        .catch(error => {
            error => console.error(error)
            
        })
})



</script>


<template>
    <div class="container" v-if="posts">
        <img :src="posts.images[0]" alt="">
    </div>


</template>


<style scoped>


</style>