<script setup lang="ts">
import CartHeader from "./CartHeader.vue";
import CartBill from "./CartBill.vue";
import CartProduct from "./CartProduct.vue";
import { Product } from "../model/Product";
import { CartItem } from "../model/CartItem";

defineProps({
  cartItems: {
    type: Array as () => CartItem[],
    required: true,
  },
});
</script>

<template>
  <div class="d-flex gap-4">
    <div style="flex: 2">
      <CartHeader :cartItems="cartItems" />
      <div v-for="(item, index) in cartItems" :key="item.product.id">
        <CartProduct :cartItem="item" />
      </div>
    </div>
    <div style="flex: 1" class="bg-white border px-3 py-4">
      <CartBill :cartItems="cartItems" />
    </div>
  </div>
</template>

<style scoped></style>
