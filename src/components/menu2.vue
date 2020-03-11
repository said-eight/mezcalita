<template>
    <div class="container-fluid" style="background-color: black;">
   <div class="container-fluid "   id="menu">

    <div class="container text-center" style="max-width:1000px">
   
              <h5 id="tituloc"  >menu</h5>
                <h5 class="rectangulo"  ></h5>

      <ul class="nav justify-content-center mb-1 "  >
  <li class="nav-item " >
    <a class="nav-link active tab" :class="{tabclick: tab==1}" @click="activartab(1)" href="#menu_mezcalita" >Menu de 20</a>
  </li>
  <li class="nav-item ml-4">
    <a class="nav-link tab" :class="{tabclick: tab==2}"  @click="activartab(2)" href="#menu_mezcalita"   >Especiales</a>
  </li>
    <li class="nav-item ml-4">
    <a class="nav-link tab " :class="{tabclick: tab==3}"  @click="activartab(3)" href="#menu_mezcalita"  >Bebidas</a>
  </li>
    <li class="nav-item ml-4">
    <a class="nav-link tab" :class="{tabclick: tab==4}"  @click="activartab(4)" href="#menu_mezcalita"  >Mixología</a>
  </li>
    <li class="nav-item ml-4">
    <a class="nav-link tab" :class="{tabclick: tab==5}"  @click="activartab(5)" href="#menu_mezcalita"  >Destilados</a>
  </li>
</ul>

     

  </div>
    </div>

    <div class="container mt-4" style="max-width:1400px;background-color: black;">

<div v-if="tab==1">
  <ul class="nav justify-content-center mb-1 ">
    <li class=" nav-item " v-for="(categoria, index) in cat_menu20" 
                     :key="categoria.id" :class="{subtabclick: subtab==index}"   @click="activarsubtab(index)" >
       <a class="nav-link subtab" href="#menu_mezcalita"  >
                     {{categoria.nombre}}
                     </a>
                     </li>
  </ul>
<c_20></c_20>
</div>
<div v-if="tab==2">
  <especiales></especiales>
</div>
<div v-if="tab==3">
  <bebidas></bebidas>
</div>
<div v-if="tab==4">
  <mixologia></mixologia>
</div>
<div v-if="tab==5">
  <destilados></destilados>
</div>
    </div>

    
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
 import c_20 from '@/components/menu_components/categorias_components/c_20.vue'
 
 import especiales from '@/components/menu_components/especiales.vue'
 import bebidas from '@/components/menu_components/bebidas.vue'
 import mixologia from '@/components/menu_components/mixologia.vue'
 import destilados from '@/components/menu_components/destilados.vue'


export default {
    name: 'menu2', 
  
    components:{
c_20,
        especiales,
        bebidas,
        mixologia,
        destilados

    },
    computed:
    {
      ...mapState(['tab','subtab','cat_menu20'])
    },
    methods:
  { 
    ...mapMutations(['activartab','activarsubtab'])


    }

    
}

</script>
<style scoped>
 .prev,
  .next {
    cursor: pointer;
    position:sticky;
    top: 40%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 3px 0;
    
  }
  
  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
</style>