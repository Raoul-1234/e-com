<script setup>

</script>

<template>
  <nav>
    <!-- Logo -->
    <div class="navTitle">
      <span class="navShop">Shop</span>izi
    </div>

    <!-- Navigation -->
    <div class="navItem">
      <RouterLink to="/" class="nav-link">Accueil</RouterLink>
      <RouterLink to="/produits" class="nav-link">Produits</RouterLink>

      <!-- Bouton Login -->
      <RouterLink to="/login" class="login-link">
        <i class="fa-solid fa-user"></i>
        <span>Se connecter</span>
      </RouterLink>

      <!-- Panier -->
      <div class="cart-container">
        <i class="fa-solid fa-cart-shopping"></i>
        <span class="cart-text">Mon Panier</span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.lien-actif {
  border-bottom: 2px solid white;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-family: "Poppins", sans-serif;
  background-color: #131921;
  color: white;
}

/* Logo */
.navTitle {
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
}

.navShop {
  background-color: #F43F5E;
  color: white;
  padding: 0 6px;
  border-radius: 4px;
}

/* Items nav */
.navItem {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Liens */
.nav-link {
  padding: 6px 0;
  text-decoration: none;
  font-weight: 500;
  color: #E0E7FF;
  transition: color 0.3s ease;
  /* border-radius: 6px; */
}

.nav-link:hover {
  color: #FFFFFF;
  background-color: #E0E7FF;
  color: #1E3A8A;
}

/* Bouton login */
.login-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 0;
  color: #E0E7FF;
  transition: all 0.3s ease;
  text-decoration: none;
}

.login-link:hover {
  background-color: #E0E7FF;
  color: #1E3A8A;
}

.login-link i {
  font-size: 1rem;
}

/* Panier */
.cart-container {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: #E0E7FF;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;
}

.cart-container:hover {
  color: #FACC15;
  transform: scale(1.05);
}
</style>
