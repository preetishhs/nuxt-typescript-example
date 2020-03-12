<template>
  <div class="phones">
    <div class="item">
      <img src="@/assets/images/iphone-11.png" />
      <div>iphone 11</div>
      <button @click="add">Add to Cart</button>
    </div>
    <div class="cart">
      CART
      <div v-for="(item, i) in cartProducts" :key="i" class="item">
        <div>Item: {{ item.name}}</div>
        <div>Quantity: {{ item.quantity }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, mixins } from 'nuxt-property-decorator'
import CartMixin from '@/mixins/CartMixin'
@Component
export default class Phones extends mixins(CartMixin) {
  public add() {
    this.addToCart({ name: 'phone', quantity: 1 })
  }
}
</script>
<style scoped>
.item {
  width: 200px;
  padding: 20px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  flex-flow: column;
}
.item img {
  width: 160px;
}
.cart {
  margin-top: 50px;
}
</style>