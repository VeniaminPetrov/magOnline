
<template>
  <header>
    <div class="cart-items" @click="router.push({name:'cartVue'})">
      <p>Item in Cart: {{store.cart.length}}</p>
    </div>
  </header>
<main>
  <RouterView/>
</main>

</template>

<script setup>


import {useRouter} from "vue-router";
import {productsStore} from "@/stores/products.js";

const store = productsStore()
const router = useRouter()
</script>


<style scoped>
.cart-items{
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
</style>
