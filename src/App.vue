<template>
  <q-layout view="hHh Lpr lFf" class="bg fixed-center">
   <q-page-container>
      <Header></Header>
      <Banner></Banner>
    </q-page-container>
  </q-layout>
</template>

<script>

import Header from './components/Header.vue'
import Banner from './components/Banner.vue'

export default {
  

  name: 'LayoutDefault',

  components: {
    Header,
    Banner    
  },

  data () {
    return { 
      api_key: '659a7c441c879ac7b407d1570ecc744d',
    }
  }
}
</script>

<style>

  .bg {
    background-image: url('./assets/bg.jpg');
    max-width: 394px;
  }

</style>
