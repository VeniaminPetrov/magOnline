import { createRouter, createWebHistory } from 'vue-router'

import productDetail from "@/views/productDetail.vue";
import calCatalog from "@/views/calCatalog.vue";
import cart from "@/views/cart.vue"




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CatalogVue',
      component: calCatalog
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/cart',
      name:'cartVue' ,
      component:cart
    }

  ]
})

export default router
