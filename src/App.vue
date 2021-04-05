<template>
  <q-layout view="hHh Lpr lFf" class="bg fixed-center">
   <q-page-container>
      <Header></Header>
      <q-scroll-area style="height: 95vh; max-width: 394px;">
      <Banner  v-if="this.temperatura != ''"  :list="this.list" :temp="this.temperatura" :weather="this.weather" ></Banner>
    </q-scroll-area>
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
      apiKey: '659a7c441c879ac7b407d1570ecc744d',
      city: 'Dourados',
      coord:{ 
        city_lat: '',
        city_long: ''
      },
      tempo: [],
      list: [],
      days: [],
      temperatura: '',
      weather: [],
      
     
    }
  },

  created(){
     
    this.currentRequest();
    setTimeout(() => {
        this.temperatura = Math.round(this.list["main"]["temp"]);
        console.log("lat: " + this.coord.city_lat + " long:" + this.coord.city_long);
        this.forecastRequest(this.coord.city_lat, this.coord.city_long);
    },3000);


  },

  methods:{

    currentRequest: function(){
      setTimeout(() => {
        this.$http.get(`http://api.openweathermap.org/data/2.5/find?q=${this.city}&lang=pt_br&units=metric&appid=${this.apiKey}`)
      .then(res => res.json())
      .then(tempo => {
        this.tempo = tempo;
        this.list = this.tempo.list[0];
        this.weather = this.list.weather[0];
        this.coord.city_lat = this.list["coord"]["lat"];
        this.coord.city_long = this.list["coord"]["lon"];
      });
      },1000);
    },

    forecastRequest: function (lat, long){
      setTimeout(() => {
        this.$http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&lang=pt_br&appid=${this.apiKey}`)
        .then(res => res.json())
        .then(tempo => {
          this.tempo = tempo;
          this.days  = tempo.daily;
          console.log(this.days[0]["dt"]);
        });
      }, 1000);
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
