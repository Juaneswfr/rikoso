<template>
  <Suspense>
    <template #default>
      <Layout>
        <template #header>
          <Header></Header>
        </template>
        <template #content>
          <router-view :characters="characters" :locations="locations"></router-view>
        </template>
        <template #nav>
          <NavApp></NavApp>
        </template>
      </Layout>
    </template>
    <template #fallback>
      <SplashScreen></SplashScreen>
    </template>
  </Suspense>
</template>
<script>
import axios from 'axios'
import SplashScreen from "@/components/SplashScreen.vue";
import Header from "@/components/MainHeader.vue";
import NavApp from "@/components/NavApp.vue";
//import ActionView from "@/components/ActionView.vue";

import { defineAsyncComponent , ref } from "vue";
export default {
  setup(){
    const characters = ref(null);
    return {
      characters
    };
  },
  components: {
    SplashScreen,
    Header: Header,
    NavApp: NavApp,
    //ActionView: ActionView,
    Layout: defineAsyncComponent(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(import("./components/LayoutView.vue"));
          }, 2500);
        })
    ),
  },
  methods: {
    reload() {
      location.reload();
    },
    getCharacters(){
      this.cargando = true;
      axios.get('https://rickandmortyapi.com/api/character/').then(
        res => {
          this.characters = ref(res.data.results);
          this.cargando = false;
        }
      )
    },
    getlocations(){
      this.cargando = true;
      axios.get('https://rickandmortyapi.com/api/location/').then(
        res => {
          this.locations = res.data.results;
        }
      )
    }
  },
  mounted(){
    this.getCharacters();
    this.getlocations();
  },
  data(){
    return{
      locations:null,
      cargando:false
    }
  },
  provide() {
    return {otroTexto: 'Hola amiguitos'}
  }
};
export const setters = {
  setItem (payload, item) {
    store[item] = payload
  }
}
export const actions = {
  async fetchCharacters (URL) {
    //store.isLoading = true
    const response = await fetch(URL)
    const data = await response.json()
    setters.setItem(data.info, 'info')
    setters.setItem(data.results, 'characters')
    //store.isLoading = false
  }
}

</script>


<style>
html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
* {
  --brand-green: #04b500;
  --brand-blue: #0689b0;
}

.loader {position: absolute;top: 0;z-index: 2;width: 100%;  height: 100%;background: white;display: flex;justify-content: center;}
</style>
