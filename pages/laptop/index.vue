<template>
  <div class="laptops">
    <h2>Laptop</h2>Quantity:
    <input v-model="quantity" type="number" />
    Price: {{ laptopPrice }}
    Total: {{ calculateTotal() }}
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class Laptop extends Vue {
  laptopPrice: number = 1400
  quantity: number = 0
  total: number = 0
  mounted() {
    this.calculateTotal()
  }
  calculateTotal(): number {
    return this.laptopPrice * this.quantity
  }
}
</script>