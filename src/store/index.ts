import {createStore} from 'vuex'

interface State {
  user: String
}
export default createStore({
  state(): State {
    return {
      user: 'vuex'
    }
  }
})