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
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      localData: {}
    }
  },

  computed: {
    ...mapState('user', ['info']),
    ...mapGetters('user', ['fullName'])
  },

  mounted() {
    this.localData = { ...this.localData, ...this.info }
  },

  methods: {
    ...mapMutations('user', ['updateUserInfo']),
    update() {
      this.updateUserInfo(this.localData)
    }
  }
}
</script>