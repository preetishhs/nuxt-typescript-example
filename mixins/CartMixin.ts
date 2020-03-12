import { Component, Vue } from 'nuxt-property-decorator'
@Component
class CartMixin extends Vue {
  public cartProducts: Array<object> = [
    {
      name: 'laptop',
      quantity: 4
    }
  ]
  get numberOfProductsInCart(): number {
    return this.cartProducts.length
  }
  public addToCart(newItem: object): void {
    console.log('here')
    this.cartProducts.push(newItem)
    console.log(this.cartProducts)
  }
}
export default CartMixin
