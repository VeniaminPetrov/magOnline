<template>
  <button @click="router.push({name:'CatalogVue'})">Back to Catalog</button>
<div v-if="!store.cart.length" style="text-align: center" >
  <h1>
    Empty Cart...
  </h1>

</div>
<div class="cart-items" v-else>
  <div
      class="cart-item"
  v-for="item in store.cart"
      :key="item.id"
  >
    <div class="item-details">
      <img :src="item.thumbnail" alt="img">
      <span>Brand :  {{item.brand}}</span>
      <span>Description : {{item.description}}</span>
      <span>Price  : ${{item.price}}</span>
      <button @click="remFromCart(item.id)" >Remove</button>
    </div>

  </div>
</div>

  <div class="cartView"></div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  name:'cartVue'


})
</script>
<script setup>
import {useRouter} from "vue-router";
import {productsStore} from "@/stores/products.js";

const store = productsStore()
const router = useRouter()


const remFromCart = (id) =>{
store.removeFromCart(id)
}



</script>
<style>

.item-details{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 0 17px 6px #2c3e50;
  border-radius: 8px;
  padding: 16px;

}
.item-details img{
  width: 20%;
}

</style>