<script setup lang="ts">
import { inject } from "vue";
import { CartItem } from "../model/CartItem";
import { Product } from "../model/Product";

const props = defineProps({
  cartItem: {
    type: CartItem,
    required: true,
  },
});

const increaseQuantity = () => {
  props.cartItem.quantity++;
};

const decreaseQuantity = () => {
  props.cartItem.quantity--;
};

const removeItem = inject("removeItem") as (cartItem: CartItem) => void;
const selectItem = inject("selectItem") as (cartItem: CartItem) => void;

const handleRemove = () => {
  if (removeItem) {
    removeItem(props.cartItem);
  }
};

const handleSelect = () => {
  if (selectItem) {
    selectItem(props.cartItem);
  }
};
</script>

<template>
  <hr class="my-4 border border-dark" />
  <div class="d-flex align-items-start gap-2">
    <input type="checkbox" name="product" id="" @change="handleSelect" />
    <div class="text-start">
      <h3 class="fs-5">{{ cartItem.product.name }}</h3>
      <p class="text-secondary">{{ cartItem.product.category }}</p>
      <div class="d-flex gap-3">
        <div class="" style="flex: 1">
          <img class="w-100" :src="cartItem.product.image" alt="" />
        </div>
        <div
          class="d-flex flex-column align-items-start justify-content-between"
          style="flex: 2"
        >
          <p class="text-secondary">{{ cartItem.product.description }}</p>
          <p>Original price ${{ cartItem.product.price }}</p>
          <p class="badge rounded-pill bg-warning text-dark">
            {{ cartItem.product.size }} ml
          </p>
          <div class="d-flex justify-content-between w-100">
            <p>${{ cartItem.getTotalPrice() }}</p>
            <div class="d-flex gap-2">
              <i @click="handleRemove" class="fa-solid fa-trash"></i>
              <button
                :disabled="cartItem.quantity == 1"
                class="btn btn-outline-dark rounded-circle d-flex p-2 justify-content-center align-items-center"
                @click="decreaseQuantity"
              >
                <span>-</span>
              </button>
              <p>{{ cartItem.quantity }}</p>
              <button
                class="btn btn-outline-dark rounded-circle d-flex p-2 justify-content-center align-items-center"
                @click="increaseQuantity"
              >
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  width: 1px;
  height: 1px;
}
</style>
