<template>
  <div class="container text-center " style="max-width:1100px;"> 
<b-row cols="1" cols-md="2" > 
<b-col md="4"> 
      <h5 id="tituloc" class="text-left">sucursales</h5>
  <ul class="nav flex-column text-left"  >
<li class=" nav-item  " v-for="(sucursal, index) in sucursales" 
                     :key="sucursal.sucid" >
       <a class="nav-link tabsuc" :class="{tabsucclick: tabsuc==index}"   @click="activartabsuc(index)"  href="#sucursales"  >
                <i class="fas fa-map-marker-alt"></i>      {{sucursal.nombre}} 
                       <p class="sucdireccion" :class="{sucdireccionclick: tabsuc==index}">{{sucursal.direccion}}</p>
                     </a>
      
                     </li>
  </ul>
</b-col>


<b-col md="6">
<b-row cols="2" no-gutters> 

<b-col md="5">
 <img src="imagenes/sucursales/sucursal.jpg" width="223" >
</b-col>


<b-col md="2">
<div v-for="(sucursal, index) in sucursales" 
                     :key="sucursal.sucid" >
<iframe v-if="tabsuc==index" :src="sucursal.maps" width="550" height="342" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
</b-col>
</b-row>
</b-col>
</b-row>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';

export default {
    name: 'sucursales',
     computed:
    {
      ...mapState(['sucursales','tabsuc'])
    },
    methods:
  { 
    ...mapMutations(['activartabsuc'])


    }

}
</script>