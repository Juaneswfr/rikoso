import { createStore } from 'vuex'
import { reactive, toRef } from 'vue'

const store = reactive({
  info: null,
  characters: [],
  favorites:[],
  created:[],
  isLoading: false
})

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  modules: {
  }
})

export const setters = {
  setItem (payload, item) {
    store[item] = payload
  }
}
export const actions = {
  async fetchCharacters (URL) {
    store.isLoading = true
    const response = await fetch(URL)
    const data = await response.json()
    store.isLoading = false
    return data;
  }
}