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
    <div class="containerComponent">
        <CategorieComponent @showElement="categories =$event"/>
        <div>
            <HeroComponent />
            <div class="container">
                <div class="items" v-for="post in postsFilter" :key="post.id" @click="showAriticle(post.id)">
                    <div class="divImg">
                        <img :src="post.images[0]" :alt="post.title" class="product-img" />
                    </div>
                    <h3 class="product-title">{{ post.title }}</h3>
                    <!-- <p class="product-category">Categorie : {{ post.category }}</p> -->
                    <!-- <p class="product-brand">Marque : {{ post.brand }}</p> -->
                    <!-- <p class="product-desc">{{ post.description }}</p> -->
                    <!-- <p class="product-rating"><span v-for="value in Math.floor(post.rating || 0)">⭐</span>{{ post.rating }} -->
                    <!-- </p> -->
                    <div class="marqueBtn">
                        <p class="product-price">{{ post.price }} $</p>
                        <button class="btn-add">Ajouter</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.containerComponent {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
}

.container {
    padding: 8px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    font-family: "Poppins", sans-serif;
}

.items {
    border: 1px solid #c7c7c78e;
    padding: 15px;
    cursor: pointer;
    transition: 0.3s;
}

.items:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.btn-add {
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 1rem ;
    border: 1px solid red;
    background: white;
    color: red;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
}

.btn-add:hover {
    background-color: red;
    color: white;
}

img {
    margin-top: 0;
}

.product-img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: 20px;
}

.product-title {
    font-size: 0.9rem;
    margin: 10px 0;
}

.product-price {
    font-size: 1.5rem;
    color: black;
    font-weight: 700;
}

.product-brand {
    padding: 0.3rem;
}

.product-category {
    display: inline;
    margin-top: 5rem;
    padding: 0.3rem;
    background-color: #ebf7ee;
}

.product-rating {
    margin-top: 1rem;
}

.btn-add:hover {
    color: white;
}

.marqueBtn {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>