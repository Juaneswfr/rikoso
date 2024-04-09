<template>
    <div class="container-fluid">
        <router-link :to="{name:'ViewC', param:{id:character.id}}" class="go-back">
            <i class="fa-solid fa-arrow-left"></i> Regresar atras
        </router-link>
        <form v-on:submit.prevent="editarRegistro">
            <div class="title">
                <h2>Edita tu personaje</h2>
            </div>
            <label for="image" class="image">
                <input type="file" id="image"  hidden accept="image/png,image/jpg">
                <img :src="character.image" width="150px" alt="">
                <span>Selecciona una imagen</span>
            </label>
        
            <div class="form-row row">
                <div class="form-group col-6">
                    <label for="name">Nombre</label>
                    <input class="form-control" id="name" v-model="character.name" required placeholder="Ingresa el nombre">
                </div>
                <div class="form-group col-6">
                    <label for="status">Estado</label>
                    <input type="text" class="form-control" v-model="character.status" id="status" placeholder="Vivo, Muerto">
                </div>
            </div>
            <div class="form-row row">
                <div class="form-group col-6">
                    <label for="especie">Especie</label>
                    <input type="text" class="form-control" v-model="character.species" name="especie" id="especie" placeholder="Humano, alien, algo">
                </div>
                <div class="form-group col-6">
                    <label for="genero">Genero</label>
                    <input type="text" class="form-control" v-model="character.gender" name="gender" id="gender" placeholder="Hombre, Mujer, Algo">
                </div>            
            </div>
            <div class="form-group mt-4">
                <button type="submit" class="btn btn-primary text-center">Modificar</button>
            </div>
        </form>
    </div>

  </template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute  } from 'vue-router';
import { actions } from '../store';

export default {
  data() {
    return {
      character: {}
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
    editarRegistro(){
        console.log(this.character)
        let datos = {id:this.character.id, nombre:this.character.name}
        /*
        fetch('url/edit/?id'+this.character.id, {
            method:"POST",
            body:JSON.stringify(datos)
        })
        .then(res=>respuesta.json())
        .then(datosRespuesta=>(
            console.log(datosRespuesta)
            window.location.href= "";
        ))
        */
    },
    toggleFavorite(id){
        console.log(id)
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
.image{display: block; margin-bottom: 20px; }
.image img{display: block; }
.image span{display: block;}


</style>