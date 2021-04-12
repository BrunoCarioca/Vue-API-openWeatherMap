<template> 
    <div class=" section-grafico " > 
      <Nascerdosol 
      :sunrise="this.gp.current.sunrise" 
      :sunset="this.gp.current.sunset" 
      :current="this.gp.current.dt">
      </Nascerdosol>
      <div class="q-py-sm q-px-md" v-if="this.temp != ''"> 
          <div class="row">
                <div class="column q-pl-md col 6">
                <span class="text-weight-light gray">Sensação</span>
                <h6 class="q-ma-none white">{{ this.temp }}°C</h6>
                </div>
                <div class="column q-pl-xl col 6">
                <span class="text-weight-light gray">Umidade</span>
                <h6 class="q-ma-none white">{{ this.gp.current.humidity }}%</h6>
                </div>
            </div>
            <div class="row">
                <div class="column q-pl-md col 6">
                <span class="text-weight-light gray ">Probabilidade de chuva</span>
                <h6 class="q-ma-none white">{{ pop }}%</h6>
                </div>
                <div class="column q-pl-xl col 6">
                <span class="text-weight-light gray">Pressão</span>
                <h6 class="q-ma-none white">{{ this.gp.current.pressure }}mbar</h6>
                </div>
            </div>
            <div class="row">
                <div class="column q-pl-md col 6">
                <span class="text-weight-light gray">Vel. do vento</span>
                <h6 class="q-ma-none white">{{ this.gp.current.wind_speed }}km/h</h6>
                </div>
                <div class="column q-pl-xl col 6">
                <span class="text-weight-light gray">Indice UV</span>
                <h6 class="q-ma-none white">{{ this.gp.current.uvi }}</h6>
                </div>
          </div>
      </div>
    </div>
</template>

<style>

     .section-grafico{
        width: 360px;
        height: 330px;
        background-color: rgba(55, 55, 55, 0.8);
        border-radius: 5%;
        margin: auto;
    }

    .white{
        color: white;
    }

    .gray{
        color: rgb(186, 178, 158);
        font-size: 12px;
    }


</style>

<script>
    import Nascerdosol from "./graficos/nascerdosol.vue"

    export default {
        name: "Timeline",
        props: ['gp', 'pop'], 

        components: { 

            Nascerdosol,

        },

        date() {
            return{
                temp:'',
                hour:'',

            }
        },

        created(){
            console.log(this.gp.current);
            this.temp = Math.round(this.gp.current.feels_like); 
            
        }
    }
</script>
