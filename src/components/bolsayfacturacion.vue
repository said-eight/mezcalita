<template>
    <div class="container text-center " style="max-width:750px;"> 
        <b-row cols="1" cols-md="2"  no-gutters>
         <b-col>

        <b-card
       img-src="iconos/bolsayfacturacion/facturacion.svg"
    img-alt="Image"
    img-top
    tag="article"
    img-width="42"
    img-height="53"
   bg-variant="transparent"

  >
    <b-card-text>
      <h5 id="titulod">facturación</h5>
      <p id="parrafoa">¿Quieres facturar tu consumo en La Mezcalita?
Asegúrate de tener el ticket a la mano. </p>
    </b-card-text>
    
        <button class="buttonbordeblanco">FACTURAR</button>
  </b-card>

         </b-col>
         <b-col>

        <b-card
       img-src="iconos/bolsayfacturacion/bolsa.svg"
    img-alt="Image"
    img-top
    tag="article"
        img-width="42"
    img-height="53"
 bg-variant="transparent"
  >
    <b-card-text>
            <h5 id="titulod">bolsa de trabajo</h5>
 <p id="parrafoa">Cada día crecemos y buscamos gente como tu
Para unirse al equipo La Mezcalita. </p>
    </b-card-text>
    
        <button class="buttonbordeblanco">VACANTES</button>
  </b-card>

         </b-col>

        </b-row>
        
        
    </div>
</template>
<script>
export default {
    name:  'bolsayfacturacion'
}
</script>