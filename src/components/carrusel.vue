<template>
    <div class="container text-center" style="max-width:1400px;"> 
    
                <h5 id="tituloc"  >el mejor ambiente</h5>
                <h5 class="rectangulo"  ></h5>
                  <h5 id="parrafoa"  >¡Síguenos en nuestras redes sociales!</h5>


<br>


     <b-row cols="2" cols-md="4" no-gutters>

    <b-col v-for="(imagen, index) in carrusel" 
         :key="index"  >
   <a ><img  :src="imagen" class="card-img"  > </a>

   </b-col>
     </b-row>
    </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
    name: 'carrusel',
    computed:
    {
      ...mapState(['carrusel'])
    }
}
</script>