<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

</script>

<template>
    <div class="login-container">
        <div class="login-card">
            <h1 class="title"> Connexion</h1>

            <label for="mail">Email</label>
            <input type="email" id="mail" name="mail" placeholder="Entrez votre email" v-model="email" />

            <label for="pass">Mot de passe</label>
            <input type="password" id="pass" name="pass" placeholder="Entrez votre mot de passe" v-model="password" />

            <button @click="login" class="btn">Se connecter</button>
        </div>
    </div>
</template>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f5f7fa;
}

.login-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 350px;
}

.title {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #555;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 1.2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
}

input:focus {
    border-color: #4271b8;
    outline: none;
    box-shadow: 0 0 5px rgba(66, 184, 131, 0.3);
}

.btn {
    width: 100%;
    background: #42b883;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.btn:hover {
    background: #36976d;
}
</style>
