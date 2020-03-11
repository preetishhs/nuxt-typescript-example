import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface UserData {
  first: string
  last: string
  address1: string
  address2: string
  state: string
  country: string
  phone: number
}

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true
})
export default class User extends VuexModule {
  public info: UserData = {
    first: 'Preetish',
    last: 'HS',
    address1: '',
    address2: '',
    state: '',
    country: '',
    phone: 9000000009
  }

  get fullName(): string {
    return this.info.first + ' ' + this.info.last
  }

  @Mutation
  public updateUserInfo(data: UserData) {
    this.info = { ...this.info, ...data }
  }
}
