<template>
    <div class="container-fluid d-flex  " id="reservaciones">
    <div class="container " style="max-width:520px">
    
      <ul class="list-group bg-transparent border-0  pt-2" >
        <li class="list-group-item  bg-transparent border-0 text-center ">
          <h5 id="titulob"  >HAZ TU RESERVACIÓN</h5>
<h5 id="parrafoa" >
    Es el momento de que disfrutes de los mejores platillos tradicionales, y mixología de destilados y Mezcales que tenemos para ti.
</h5>

        </li>
    
        <li class="list-group-item  bg-transparent border-0 text-center ">
           <form class="inline">  
          
      <select id="select" class="buttonborde mr-3">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
      
        <button class="buttonrojo" type="submit">Reserva aquí</button>

</form>

        </li>
        
      </ul>
      
    

  </div>
</div>   
</template>
<script>
export default {
    name:'reservaciones'
}
</script>