<template>
    <div class="container-fluid border-1 border-radius-2 " v-if="character">
        <router-link :to="{path:'/'}" class="go-back">
            <i class="fa-solid fa-arrow-left"></i> Regresar atras
        </router-link>
        <figure class="image mt-2">
            <img :src="character.image" alt="">
        </figure>
        <div class="card m-auto mt-3" style="width: 18rem;" >
            <div class="card-header text-center">
                <h2>{{ character.name }}
                    <figure class="add-favorite" @click="toggleFavorite(character.id)">
                        <img src="@/assets/star.png" alt="añadir a favoritos">
                    </figure>
                </h2>
                <span>{{ formatDate }}</span>
                
            </div>
            <ul class="list-group list-group-flush ">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    Estado <span class="badge text-bg-primary rounded-pill">{{ character.status }}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    Especie <span class="badge text-bg-primary rounded-pill">{{ character.species }}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    Genero <span class="badge text-bg-primary rounded-pill">{{ character.gender }}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    Tipo <span class="badge text-bg-primary rounded-pill">{{ character.type }}</span>
                </li>
            </ul>
        </div>

    </div>
    <div class="container-loading" v-else>
        <lottie-player src="https://lottie.host/70ddd57a-1a50-4b4d-8407-c016d30e3f85/1wKnuj3UM3.json" background="##ffffff" speed="1" style="width: 300px; height: 300px" loop autoplay direction="1" mode="normal"></lottie-player>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute  } from 'vue-router';
import { actions } from '../store';

export default {
  data() {
    return {
      character: null
    };
  },
  methods: {
    fetchCharacterData(id) {
      let URL = 'https://rickandmortyapi.com/api/character/'+id;
      actions.fetchCharacters(URL).then(data => {
        this.character = data;
        console.log(this.character)
      });
    },
    toggleFavorite(id){
        console.log(id)
    }
  },
  computed:{
    formatDate: function() {    
        let date = this.character.created
        // Crear un objeto Date a partir de la cadena ISO 8601
        const fecha = new Date(date);
        // Obtener el día, mes y año
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1; // El método getMonth() devuelve el mes en base 0, por lo que sumamos 1 para obtener el mes real
        const año = fecha.getFullYear();

        // Formatear la fecha como 'dd/mm/yyyy'
        const fechaFormateada = `${dia}/${mes}/${año}`;
        return fechaFormateada;
    }
  },
  // Llama a fetchCharacterData cuando el componente está montado
  mounted() {
    const route = useRoute();
    let id = route.params.id;
    this.fetchCharacterData(id);
  }
};
</script>

<style>
.add-favorite{display: inline;}
.add-favorite img{max-width: 24px; filter: grayscale(1); transition: .4s all;}
.title{margin-bottom: 20px;}
.image{text-align: center; margin: auto;}
.image img{margin: auto; max-width: 125px; border-radius: 50%;}
.go-back{color: gray; font-size: .8rem; text-decoration: unset;}
</style>