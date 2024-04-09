<template>
    <div class="container-fluid">
        <router-link :to="{path:'/'}" class="go-back">
            <i class="fa-solid fa-arrow-left"></i> Regresar atras
        </router-link>
        <form v-on:submit.prevent="agregarRegistro">
            <div class="title">
                <h2>Agrega tu personaje</h2>
            </div>
            <label for="image" class="image">
                <img src="@/assets/add_Profileimage.svg" width="120px" alt="">
                <input type="file" id="image" hidden accept="image/png,image/jpg">
                <span>Selecciona una imagen</span>
            </label>
        
            <div class="form-row row">
                <div class="form-group col-6">
                    <label for="name">Nombre</label>
                    <input class="form-control" id="name" v-model="character.nombre" required placeholder="Ingresa el nombre">
                </div>
                <div class="form-group col-6">
                    <label for="status">Estado</label>
                    <input type="text" class="form-control" v-model="character.status" id="status" placeholder="Vivo, Muerto">
                </div>
            </div>
            <div class="form-row row">
                <div class="form-group col-6">
                    <label for="especie">Especie</label>
                    <input type="text" class="form-control" v-model="character.especie" name="especie" id="especie" placeholder="Humano, alien, algo">
                </div>
                <div class="form-group col-6">
                    <label for="genero">Genero</label>
                    <input type="text" class="form-control" v-model="character.gender" name="gender" id="gender" placeholder="Hombre, Mujer, Algo">
                </div>            
            </div>
            <div class="form-group mt-4">
                <button type="submit" class="btn btn-primary text-center">Agregar</button>
            </div>
        </form>
    </div>

  </template>

  <script>

  export default{
    data(){
        return{
            character:{
                name: '',
                status: '',
                especie: '',
                gender: '',
                image: '',
            }
        }
    },
    methods:{
        agregarRegistro(){
            console.log(this.character)
            let datos = {nombre:this.character.name}
            /*
            fetch('url',{
                method:"POST",
                body:JSON.stringify(datos)
            })
            */
        }
    }
  }

  </script>

<style>
.image{display: block; margin-bottom: 20px; }
.image img{display: block; }
.image span{display: block;}


</style>