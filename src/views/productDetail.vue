<template>
  <button @click="router.push({name: 'CatalogVue'})">Back to catalog</button>
<div class="productDetail">
  <div class="product-img">
    <img :src="selectedProduct.thumbnail" alt="">
  </div>
  <div class="product-details">
    <p>Brand :  {{selectedProduct.brand}}</p>
    <p>Description : {{selectedProduct.description}}</p>
    <h2>Price  : ${{selectedProduct.price}}</h2>

  </div>

</div>
  <button @click="addToCart">ADD to cart</button>
</template>

<script>
import {defineComponent } from "vue";
export default defineComponent({
  name:'productDetail'
})
</script>


<script setup>
import {computed} from "vue";
import {productsStore} from "@/stores/products.js";
import {useRoute , useRouter} from "vue-router";


const router = useRouter()
const route = useRoute()
const store = productsStore()

const selectedProduct = computed(() => {
  return  store.products.find((item) => item.id === Number(route.params.id))
})
const addToCart = ()=>{
  store.addToCart(selectedProduct.value)
  console.log('test')
  router.push({name : 'cartVue'})
  }

</script>


 <style>

 .productDetail{
   display: flex;
margin-top: 50px;
   justify-content: space-between;
   flex-wrap: wrap;
 }
.product-details{
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  flex-wrap: wrap;
}

 .product-img{
   width: 24px;
 }
 </style>