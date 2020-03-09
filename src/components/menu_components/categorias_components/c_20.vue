<template>
      <div>

 <div class="jumbotron">
       <div id="carouselExampleFade" class="carousel slide " data-ride="carousel">
  <div class="carousel-inner">


    <div class="carousel-item active">
     <div class="row">
       <div class="col-3">
         <img src="deals1.jpg" class="img-thumbnail">
       </div>

       <div class="col-3">
         <img src="deals2.jpg" class="img-thumbnail">
       </div>

       <div class="col-3">
         <img src="deals3.jpg" class="img-thumbnail">
       </div>

       <div class="col-3">
         <img src="deals4.jpg" class="img-thumbnail">
       </div>

     </div>
    </div>

    <div class="carousel-item">
     <div class="row">
       <div class="col-3">
         <img src="deals5.jpg" class="img-thumbnail">
       </div>

       <div class="col-3">
         <img src="deals6.jpeg" class="img-thumbnail">
       </div>

       <div class="col-3">
         <img src="deals7.jpg" class="img-thumbnail">
       </div>

       <div class="col-3">
         <img src="deals8.jpg" class="img-thumbnail">
       </div>

     </div>
    </div>



  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
     </div>


    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      background="#000000"
      img-width="1200"
      img-height="350"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
   
      <!-- Slides with image only -->
     

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide  img-blank  >
  <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="3">
    <b-col > 
      <b-card no-body class="overflow-hidden bg-transparent mb-2" style="max-width: 600px;">
    <b-row no-gutters>
      <b-col md="4">
        <b-card-img src="imagenes/fotos menu/tacos/arrachera.jpg" ></b-card-img>
      </b-col>
      <b-col md="8">
        <b-card-body>
          <b-card-text>
                        <p class="parrafoa">Tacos de arrachera</p>
                                                <p class="parrafoa">preparados con tortilla taquera</p>


          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>    
    </b-col>

    <b-col>
   <b-card no-body class="overflow-hidden bg-transparent" style="max-width: 400px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="imagenes/fotos menu/tacos/arrachera.jpg" class="w-400"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text>
                        <p class="parrafoa">Tacos de arrachera</p>

          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>    
    </b-col>
  
  
  
    <b-col> <b-card no-body class="overflow-hidden" style="max-width: 400px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
      
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </b-col>



    <b-col> <b-card no-body class="overflow-hidden" style="max-width: 400px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
           
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </b-col>
 
  </b-row>

      </b-carousel-slide>
    </b-carousel>

  </div>
</template>
<script>
export default {
    name: 'c_20',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>