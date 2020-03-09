import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab: 1,
    subtab: 1,
    cat_menu20:[
    {
      id:1,
      nombre:'tacos'
    },
    {
      id:2,
      nombre:'tostadas'
    },
    {
      id:3,
      nombre:'lonches'
    },
    {
      id:4,
      nombre:'tortitas'
    },
    {
      id:5,
      nombre:'sopes '
    },
    {
      id:6,
      nombre:'botanas '
    }
  ],
  carrusel: ['imagenes/carrusel/carrusel-1.jpg','imagenes/carrusel/carrusel-2.jpg','imagenes/carrusel/carrusel-3.jpg','imagenes/carrusel/carrusel-4.jpg'],

  promos:
  [
    {
      promoid:1,
      preview_imagen:'imagenes/imagenes promo/preview/preview-lunes.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-lunes.jpg'
    },
    {
      promoid:2,
      preview_imagen:'imagenes/imagenes promo/preview/preview-martes.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-martes.jpg'
    },
    {
      id:3,
      preview_imagen:'imagenes/imagenes promo/preview/preview-miercoles.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-miercoles.jpg'
    },
    {
      promoid:4,
      preview_imagen:'imagenes/imagenes promo/preview/preview-jueves.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-jueves.jpg'
    },
    {
      promoid:5,
      preview_imagen:'imagenes/imagenes promo/preview/preview-chupitos.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-chupitos.jpg'
    },
    {
      promoid:6,
      preview_imagen:'imagenes/imagenes promo/preview/preview-cumple.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-cumple.jpg'
    },
  ]

  },
  mutations: {
    activartab(state, selectedtab)
    {
      state.tab=selectedtab
    },
    activarsubtab(state, selectedtab)
    {
      state.subtab=selectedtab
    }
  },
  actions: {
  },
  modules: {
  }
})
