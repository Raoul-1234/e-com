<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import CategorieComponent from '@/components/CategorieComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';

const router = useRouter()
const url = 'https://dummyjson.com/products'
const posts = ref([])
const categories = ref('all')
const postsFilter = computed(() => {
    if(categories.value === 'all'){
        return posts.value
    }
    return posts.value.filter(el => el.category === categories.value)
})

function showAriticle(id){
    router.push({
        name: 'article',
        params: {id}
    })
}

onMounted(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            posts.value = data.products
            console.log(data.products)
        })
        .catch(error => {
            error => console.error(error)
        })
})




</script>


<template>
    <HeroComponent />
    <div class="containerComponent">
        <CategorieComponent @showElement="categories =$event"/>
        <div class="container">
            <div class="items" v-for="post in postsFilter" :key="post.id" @click="showAriticle(post.id)">
                <div class="divImg">
                    <img :src="post.images[0]" :alt="post.title" class="product-img" />
                </div>
                <h3 class="product-title">{{ post.title }}</h3>
                <p class="product-brand">Marque : {{ post.brand }}</p>
                <p class="product-category">Categorie : {{ post.category }}</p>
                <!-- <p class="product-desc">{{ post.description }}</p> -->
                <p class="product-rating"><span v-for="value in Math.floor(post.rating || 0)">⭐</span>{{ post.rating }}
                </p>

                <div class="marqueBtn">
                    <p class="product-price">{{ post.price }} $</p>

                    <button class="btn-add">Ajouter</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.containerComponent {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    /* margin-left: 15rem; */
}

.container {
    /* width: 70%; */
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
     font-family: "Poppins", sans-serif;
}

.items {
    height: 470px;
    border: 1px solid #c7c7c7;
    border-radius: 10px;
    padding: 15px;
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
    background-color: white;
    cursor: pointer;
}

img {
    transition: transform 0.2s ease;
}

.items:hover .product-img {

    transform: scale(1.1);
}

.product-img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: 8px;
}

.product-title {
    font-size: 1.2rem;
    margin: 10px 0;
}

.product-price {
    font-size: 1.4rem;
    color: rgb(255, 0, 0);
    font-weight: bold;
    background-color: #ffe8ee;
}

.product-brand {
    padding: 0.3rem;
    /* background-color: #ebf7ee; */
}
.product-category {
    padding: 0.3rem;
    background-color: #ebf7ee;
}

.product-rating {
    margin-top: 1rem;
}

.btn-add {
    margin-top: 10px;
    padding: 8px 12px;
    border: 2px solid #3633ff;
    background: white;
    color: #3633ff;
    border-radius: 20px;
    cursor: pointer;
}

.btn-add:hover {
    background-color: #3633ff;
    color: white;
}

.marqueBtn {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>