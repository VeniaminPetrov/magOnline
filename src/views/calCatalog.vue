<template>
  <h1>
    Catalog
  </h1>
  <div class="products-list">
    <div
        class="product"
        v-for="product in productStore.products"
        :key="product.id"
        @click="goToProductPage(product.id)"
    >
      <img   :src="product.thumbnail" alt="img">
      <h2>Brand :  {{product.brand}}</h2>
      <p>Description : {{product.description}}</p>
      <p>Price  : ${{product.price}}</p>

    </div>
  </div>
</template>
<script>

import {defineComponent} from "vue";
export default  defineComponent ({
  name: 'CatalogVue'
})

</script>

<script setup>
import {onMounted , computed} from "vue";
import {productsStore} from "@/stores/products.js"
import {useRouter } from "vue-router";

const productStore = productsStore()
const router = useRouter()

const goToProductPage =  (id)=>{
  router.push({name : 'productDetail' , params: {id} })
}





onMounted(async ()=>{
  console.log('MOUNTED>>>>>>>>>>')
  await productStore.fetchProductsFromDB()

})
</script>


<style scoped>
.products-list{
    display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product{
  flex-basis: 20%;
  margin: 8px;
  padding: 16px;
  box-shadow: 0 0 14px 1px #2c3e50 ;
  cursor: pointer;
}
.product img{
  width: 70%;
}


</style>