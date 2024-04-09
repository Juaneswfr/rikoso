<template>
    <div>
        <div class="navLink-container" >
            <router-link :to="{path:'/character/add'}" class="navLink">
                <img src="@/assets/plus.svg" alt="">
                <span>Personaje</span>
            </router-link>
            <router-link :to="{path:'/'}" class="navLink">
                <img src="@/assets/home.svg" alt="">
                <span>Home</span>
            </router-link>
            <router-link :to="{path:'/character/'}" class="navLink">
                <img src="@/assets/star.png" alt="">
                <span>Favoritos</span>
            </router-link>
        </div>
    </div>
</template>

<script>
</script>


<style>
.navLink-container{width: 100%; display: flex; justify-content: space-between;}
.navLink-container .navLink{text-align:center; padding: 10px; margin: 0 10px; color: #a3a3a3; text-decoration: unset;}
.navLink-container .navLink img{width: 32px; display: block; margin: auto; filter: grayscale(1); transition: .4s all;}
.navLink-container .navLink.router-link-active img,
.navLink-container .navLink:hover img{ filter: grayscale(0);}

</style>