<template>
  <div class="header">
    <div class="title">My Store</div>
    <nuxt-link to="user">{{ info.first }}</nuxt-link>
  </div>
</template>
<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
const user = namespace('user')
@Component
export default class Header extends Vue {
  @user.State
  public info!: object
}
</script>
<style scoped>
.header {
  width: 100%;
  text-align: center;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
}
.header div {
  width: 50%;
}
.title {
  font-size: 22px;
}
</style>