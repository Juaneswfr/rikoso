<template>
    <div class="header">
        <router-link :to="{path:'/'}" class="logo">
            <img src="@/assets/ico.svg" clss="ico" width="64px" alt="">
            <p><span>Rik</span>oso</p>
        </router-link>
        <slot name="headerInto"></slot>
    </div>
</template>


<script>
    export default {
        name: "MainHeader",
        inject: ["otroTexto"],
        data(){
            return {show:false}
        }
    }
</script>
<style>
.header{ z-index: 2; background-color: white; width: 100%; padding: 2px 15px; }
.header .logo{display: flex; align-items: center; justify-content: start; text-decoration:unset;}
.header .logo img{width: 100%; max-width: 45px;}
.header .logo p {
  color: var(--brand-blue);
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  margin-left: 10px
}
.header p span {
  color: var(--brand-green);
}
</style>