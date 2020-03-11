<template>
    <div class="container text-center " style="max-width:1400px;"> 
    
                <h5 id="tituloc"  >promociones</h5>
                <h5 class="rectangulo"  ></h5>
                  <h5 id="parrafoa"  >¡Promociones todos los días!</h5>

<b-row>
 <b-col cols="3">
   <img :src="imagen" class="infopromo">
 </b-col>
 <b-col cols="9">
     <b-row cols="3" no-gutters>

    <b-col v-for="promo in promos" 
             :key="promo.promoid"
           >
   <a ><img  :src="promo.preview_imagen" class="imagenpromo"  @mouseover="updatepreview(promo.info_imagen)"> </a>

   </b-col>
  
  </b-row>
 </b-col>
</b-row>
    </div>
      
</template>
<script>
import {mapState} from 'vuex';

export default {
    name: 'promociones',
    data(){
    return {
      imagen: 'imagenes/imagenes promo/info/info-lunes.jpg'
    }
    },
computed:{
      ...mapState(['promos'])
    },
    methods:{
        updatepreview(selectedpreview)
        {
            this.imagen = selectedpreview
        }
    }
}
</script>