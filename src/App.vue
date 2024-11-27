<script setup lang="ts">
import { provide, ref } from "vue";
import Cart from "./components/Cart.vue";
import { Product } from "./model/Product";
import { CartItem } from "./model/CartItem";

const products = [
  new Product(
    1,
    "Product 1",
    "Product description 1",
    "Toner",
    10,
    100,
    "https://cdn.tgdd.vn/2021/06/CookProduct/1(1)-1200x676-1.jpg"
  ),
  new Product(
    2,
    "Product 2",
    "Product description 2",
    "Toner",
    20,
    120,
    "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%203.jpg"
  ),
  new Product(
    3,
    "Product 3",
    "Product description 2",
    "Toner",
    20,
    120,
    "https://saodieu.vn/media/Bai%20Viet%20-%20T62016/Saodieu%20-%2010%20mon%20an%203.jpg"
  ),
];

const cartItems = ref<CartItem[]>([
  new CartItem(products[0], 2),
  new CartItem(products[1], 3),
  new CartItem(products[2], 3),
]);

const removeItem = (cartItemInput: CartItem) => {
  console.log(cartItemInput.product.id);
  const index = cartItems.value.findIndex(
    (cartItem) => cartItem.product.id == cartItemInput.product.id
  );
  cartItems.value.splice(index, 1);
};

const selectItem = (cartItemInput: CartItem) => {
  const index = cartItems.value.findIndex(
    (cartItem) => cartItem.product.id == cartItemInput.product.id
  );
  cartItems.value[index].isSelected = !cartItems.value[index].isSelected;
  console.log(cartItems.value);
};

provide("removeItem", removeItem);
provide("selectItem", selectItem);
</script>

<template>
  <Cart :cartItems="cartItems" />
</template>

<style scoped></style>
