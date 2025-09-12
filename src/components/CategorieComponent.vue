<script setup>
import { ref } from 'vue';

const categories = ref('all')
const emit = defineEmits(['showElement'])

function show(event) {
    categories.value = event.target.value
    // console.log(categories.value);
    emit('showElement', categories.value)

}

</script>


<template>
    <div class="containerCategorie">
        <span class="title">Menu</span>

        <ul>
            <div class="secondTitle">affiner par</div>
            <li>
                <div class="filter">Catégorie</div>
                <ul>
                    <li>
                        <div class="divInput">
                            <label for="all">Tous les produits</label>
                            <input type="radio" id="all" name="products" value="all" checked @click="show">
                        </div>
                    </li>
                    <li>
                        <div class="divInput">
                            <label for="beauty">Beauté</label>
                            <input type="radio" id="beauty" name="products" value="beauty" @click="show">
                        </div>
                    </li>
                    <li>
                        <div class="divInput">
                            <label for="furniture">Meubles</label>
                            <input type="radio" id="furniture" name="products" value="furniture" @click="show">
                        </div>
                    </li>
                    <li>
                        <div class="divInput">
                            <label for="fragances">Parfums</label>
                            <input type="radio" id="fragances" name="products" value="fragrances" @click="show">
                        </div>
                    </li>
                    <li>
                        <div class="divInput">
                            <label for="groceries">Epicerie</label>
                            <input type="radio" id="groceries" name="products" value="groceries" @click="show">
                        </div>
                    </li>
                </ul>
            </li>
            <li>
                <div class="filter">Prix</div>
                <ul>
                    <div class="divInput">
                        <label for=""><10$</label>
                        <input type="radio">
                    </div>
                    <div class="divInput">
                        <label for="">10 à 50$</label>
                        <input type="radio">
                    </div>
                    <div class="divInput">
                        <label for="">50 à 500$</label>
                        <input type="radio">
                    </div>
                    <div class="divInput">
                        <label for="">500 à 1000$</label>
                        <input type="radio">
                    </div>
                    <div class="divInput">
                        <label for="">1000 à 3000$</label>
                        <input type="radio">
                    </div>
                </ul>
            </li>
        </ul>

    </div>
</template>


<style scoped>
.containerCategorie {
  width: 20%;
  height: 100vh;
  padding: 1.5rem;
  margin-top: 20px;
  font-size: 0.95rem;
  font-family: "Poppins", sans-serif;
  border: 1px solid rgba(214, 210, 210, 0.4);
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
}

.title {
  display: block;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #3633ff;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(54, 51, 255, 0.3);
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.secondTitle {
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  color: #444;
  margin: 1rem 0 0.5rem;
}

.filter {
  margin: 1rem 0 0.5rem;
  font-weight: 600;
  color: #3633ff;
}

.divInput {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.divInput:hover {
  background-color: rgba(54, 51, 255, 0.07);
  transform: translateX(1px);
}

.divInput input[type="radio"] {
  accent-color: #3633ff; 
  cursor: pointer;
  width: 16px;
  height: 16px;
}

</style>