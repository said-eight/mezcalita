<template>
  <div id="app">



<b-container  fluid class="bv-example-row mt-3" id="nav">
 <b-row  > 
    <b-col class="text-center " >
      <img src="iconos/header/Logo-Header.svg"  
    width="38" id="logo" class="nomovil" >
     <b-row>
      <div class="container" style="max-width:1200px" id="menu"> 

  <b-navbar bg-transparent toggleable="lg" class="px-auto" type="dark" >
    <b-navbar-brand id="brand" ><img src="iconos/header/Logo-Header.svg"  height="42"
    width="53" id="logo"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse  id="nav-collapse" is-nav>
      <b-navbar-nav  >
   
        <b-nav-item class="pl-3"  href="#menu_mezcalita" > Menú</b-nav-item>
        <b-nav-item  class="pl-3" > Reservaciones</b-nav-item>
         <b-nav-item class="pl-3"  >Eventos</b-nav-item>
         <b-nav-item class="pl-3"   >Franquicias</b-nav-item>
         <b-nav-item class="pl-3"  >Promociones</b-nav-item>
         <b-nav-item class="pl-3"  >Bolsa de trabajo</b-nav-item>
         <b-nav-item class="pl-3"  >Facturación</b-nav-item>
         <b-nav-item class="pl-3"  >Contacto</b-nav-item>

      </b-navbar-nav>
  
    </b-collapse>
  </b-navbar>

           </div> 
             </b-row>
       </b-col>

   
  </b-row>
</b-container>



    <headercomp></headercomp>
     
     <nosotros></nosotros>
      <a name="menu_mezcalita"></a>
     <menu2 ></menu2>
     <promociones></promociones>
     <reservaciones></reservaciones>
<br>
  <carrusel></carrusel>
  <franquicias></franquicias>
    <router-view/>
  </div>
</template>


<script>

import headercomp from '@/components/headercomp.vue'
import nosotros from '@/components/nosotros.vue'
import reservaciones from '@/components/reservaciones.vue'
import menu2 from '@/components/menu2.vue'
import promociones from '@/components/promociones.vue'
import carrusel from '@/components/carrusel.vue'
import franquicias from '@/components/franquicias.vue'


export default {
  name: 'app',
  components:{
    headercomp,
    nosotros,
    menu2,
    reservaciones,
    promociones,
    carrusel,
    franquicias
  },
  
}
</script>
