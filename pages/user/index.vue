<template>
  <div class="user">
    <div class="title">Welcome {{ fullName }}</div>
    <div>
      First:
      <input type="text" v-model="localData.first" />
    </div>
    <button @click="update">Update Info</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
const user = namespace('user')
@Component
export default class User extends Vue {
  public localData: object = {}

  @user.State
  public info!: object

  @user.Getter
  public fullName!: string

  @user.Mutation
  public updateUserInfo!: (data: object) => void

  mounted() {
    this.localData = { ...this.localData, ...this.info }
  }

  public update(): void {
    this.updateUserInfo(this.localData)
  }
}
</script>