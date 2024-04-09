<template>
    <div class="container-fluid mt-5">
    <div class="title">
      <h2>Selecciona tu personaje favorito</h2>
    </div>
    <div class="select input-group mt-4">
      <label for="">Filtrar por:</label>
      <select name="" id="filterLocation"  class="selectLocation" @change="filterCharacters($event)">
          <option v-for="(location, index) in locations" :key="index"  :value="location.id">
          {{ location.name }}
          </option>
      </select>
    </div>
  </div>
  <div class="container-fluid mt-3">
    <div v-show="isLoading" class="loader">
      <lottie-player src="https://lottie.host/70ddd57a-1a50-4b4d-8407-c016d30e3f85/1wKnuj3UM3.json" background="##ffffff" speed="1" style="width: 300px; height: 300px" loop autoplay direction="1" mode="normal"></lottie-player>
    </div>
    <div v-show="!isLoading" class="container-character">
        <router-link :to="{path:'/character/'+character.id}" class="card" v-for="(character, index) in charactersHome" :key="index">
        <div class="card-body">
          <h5 class="card-title">{{ character.name }}</h5>
          <img class="image" :src="character.image" alt="">
        </div>
      </router-link>
    </div>
  
  </div>
</template>

  <script setup>
  import { getters, actions } from '../store'
  // Importa la variable mensaje como prop
  import { defineProps, watch, defineEmits, ref, toRefs} from 'vue';
  // Define las props que se pasan al componente
  const props = defineProps({
    characters: Object, // Aquí puedes definir el tipo de dato esperado para mensaje
    locations: Object // Aquí puedes definir el tipo de dato esperado para mensaje
  });
  let isLoading = ref(false)
  
  // Definir un array reactivo de usuarios
  const charactersHome = ref(props.characters)
  const filterCharacters = (value) => {
    let locationID = value.target.value;
    filterCharactersByLocation(locationID);
  };

  function filterCharactersByLocation(id){
      var URL = '';
      fetch('https://rickandmortyapi.com/api/location/'+id)
      .then(response => response.json()) // Convertimos la respuesta a JSON
      .then(async data => {       
          const idCh = [];
          // Actualizamos el array de personajes con los datos obtenidos
          const numeros = data.residents.map(url => {
            let id = parseInt(url.match(/\d+/)[0])
            idCh.push(id);
          }
        );
        URL = 'https://rickandmortyapi.com/api/character/'+idCh;
        // Definimos una función async dentro del bloque then
        async function loadCharacters() {
          try {
            isLoading.value = true;
            // Simulamos una espera de 1 segundo para cargar los personajes (puedes reemplazar esto con tu lógica de carga real)
            await new Promise(resolve => setTimeout(resolve, 1000));
            const charactersData = await actions.fetchCharacters(URL);
            charactersHome.value = charactersData;
            isLoading.value = false;
          } catch (error) {
            console.error('Error al cargar los personajes:', error);
          }
        }
        // Llama a la función para cargar los personajes
        await loadCharacters();
      })
      .catch(error => {
        console.error('Error al obtener los personajes:', error);
      });
  }

</script>


<style escoped>
.selectLocation{    border-radius: 30px !important;color: #333;margin-left: 10px !important; padding: 2px 20px; max-width: 150px;}
.card{text-decoration: unset;}
.card-title{text-align: center;text-decoration: unset; margin-bottom: 18px !important; color: #333;}
.title h2{text-align: center; font-size: 1.2rem; }
.card-body{text-align: center;}
.container-fluid{position:relative;}
.container-fluid .container-character{gap:20px; display: flex; flex-wrap: wrap;}
.card{ width: 47%;}
.image{width: 100%; border-radius: 50%; max-width: 150px}



</style>