<script setup lang="ts">
import { CartItem } from "../model/CartItem";

defineProps({
  cartItems: {
    type: Array as () => CartItem[], // Sử dụng hàm mũi tên để khai báo kiểu
    required: true,
  },
});
</script>

<template>
  <div
    class="d-flex justify-content-between bg-white border align-items-center px-4 py-2"
  >
    <div>My Cart {{ cartItems.length }}</div>
    <div class="d-flex">
      <div>All Cart <i class="fa-solid fa-caret-down"></i></div>
      <div>Filter <i class="fa-solid fa-caret-down"></i></div>
    </div>
  </div>
  <div>
    <div class="d-flex align-items-center mt-3 gap-2">
      <input type="checkbox" />
      <p>Choose All Product</p>
    </div>
  </div>
</template>

<style scoped></style>
