<script setup lang="ts">
import { CartItem } from "../model/CartItem";

const tax = 0.08;

const props = defineProps({
  cartItems: {
    type: Array as () => CartItem[], // Sử dụng hàm mũi tên để khai báo kiểu
    required: true,
  },
});

const handleAmount = () => {
  return props.cartItems.reduce((accumulator, currentValue, index) => {
    if (props.cartItems[index].isSelected) {
      return accumulator + currentValue.getTotalPrice();
    } else {
      return 0;
    }
  }, 0);
};

const handleTax = () => {
  return handleAmount() * tax;
};
</script>

<template>
  <div class="text-start">
    <p>Order Summary</p>
    <ul class="mt-3">
      <template v-for="(item, index) in cartItems">
        <li
          class="d-flex justify-content-between text-secondary mt-2"
          v-if="item.isSelected"
        >
          <div>x{{ item.quantity }} {{ item.product.name }}</div>
          <div>${{ item.getTotalPrice() }}</div>
        </li>
      </template>
    </ul>
    <hr class="mt-4 border border-dark" />
    <div>
      <p class="text-secondary">Delivery today with</p>
      <div class="d-flex mt-4 gap-2">
        <i class="fa-solid fa-truck"></i>
        <p>Skinny Express</p>
      </div>
      <div class="d-flex mt-3 gap-2">
        <i class="fa-solid fa-location-dot"></i>
        <p>Deliver to <span class="fw-bold">Jakarta, Indonesia</span></p>
      </div>
    </div>
    <hr class="mt-4 border border-dark" />
    <div class="d-flex justify-content-between text-secondary">
      <p>Amount</p>
      <p>${{ handleAmount() }}</p>
    </div>
    <div class="d-flex justify-content-between text-secondary mt-3">
      <p>Tax</p>
      <p>${{ handleTax() }}</p>
    </div>
    <hr class="mt-4 border border-dark" />
    <div class="d-flex justify-content-between fw-bold mt-3">
      <p>Order Total</p>
      <p class="fs-5">${{ handleAmount() + handleTax() }}</p>
    </div>
  </div>
</template>

<style scoped></style>
