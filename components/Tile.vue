<template>
  <div class="tile">
    <nuxt-link :to="item.link" class="item">
      {{ item.name }}
      <img :src="require(`~/assets/images/${item.image}`)" />
      <ul class="list">
        <li>Number of Items: {{ quantity }}</li>
        <li>Brand: {{ brand }}</li>
        <li>Type: {{ type }}</li>
        <li>Stock: {{ stock }}</li>
      </ul>
      <button :disabled="quantity <= 0">{{ buttonText}}</button>
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class Tile extends Vue {
  @Prop({ required: true }) readonly item!: object
  @Prop() quantity!: number
  @Prop({ default: 'Apple' }) brand!: string
  @Prop(String) readonly type!: string
  @Prop({ required: false, type: String, default: 'Available' })
  readonly stock!: string

  get buttonText(): string {
    if (this.quantity) {
      return 'Buy Now!'
    } else {
      return 'Coming Soon!'
    }
  }
}
</script>

<style scoped>
img {
  height: 200px;
}

.item {
  border: 1px solid #ccc;
  margin: 50px;
  display: flex;
  flex-flow: column;
  padding: 20px;
}

.list {
  text-align: left;
}
</style>