<template>
    <q-page class="white" delay="1000"> 
        <div class="row  q-pa-xs">  
            <q-icon name="add" class="col-2 " style="font-size: 30px;" />
            <div class="col-8 text-center">
                <h6 class="q-ma-none">{{ today["name"] }}</h6>
            </div>
            <q-icon name="more_vert" class="col-2 " style="font-size: 30px;" />
        </div>
        <div class="column">
            <h1 class="q-ma-none q-pt-xl q-mt-xl text-center col-8">{{ temp }}°c</h1>
            <h6  class="q-ma-none q-py-sm text-center col-auto test">{{  this.today['weather'][0]['description'] }}</h6>
            <div class="col-auto q-py-sm text-center">
            <q-btn flat rounded style="background-color: rgba(240,240,240,0.3);" icon="eco" label="IQA 17"/>
            </div>
            <div class="q-pt-xl  ">
                <div class="text-right q-pr-sm">
                  <span class="text-center" style="font-size: 16px">Mais detalhes 
                      <q-icon name="keyboard_arrow_right" style="font-size: 28px;"></q-icon>
                  </span>
                </div>
                <div v-for=" infos in this.arInfo " v-bind:key="infos.id" class="q-px-md q-pt-sm  row items-center test">
                <span class="col-10 f15 "> 
                    <q-icon size="md" v-bind:name="infos.icon" />
                     {{ infos.day }} - {{ infos.description }}
                </span>
                <span class="col-2 f15 q-pb-xs">    
                    {{ infos.temp_max }}° / {{ infos.temp_min }}°
                </span> 
                </div>
            </div>
        </div>
    </q-page>
</template>

<style>
    .white{
        color: white;
    }

    .test{
        text-transform: capitalize;
    }

    .f32{
        font-size: 32px;
    }

    .f15{
        font-size: 15px;
    }

</style>

<script>
    export default {
        name: 'Banner',
        props: ['today', 'temp', 'forecast' ],

        data(){
            return{
               apiKey: '',
               date: '',
               arInfo: [],
               day: '',
            }
        },

        created(){
    
            setTimeout(() => {
                this.convertDate(this.forecast[2]["dt"]);
                this.makeBanner(1, this.today['weather'][0]['icon'], "hoje", this.today['weather'][0]['description'], this.today['main']['temp_max'], this.today['main']['temp_min']);
                this.makeBanner(2, this.forecast[1]['weather'][0]['icon'], "amanhã", this.forecast[1]['weather'][0]['description'], this.forecast[1]['temp'].max, this.forecast[1]['temp'].min);
                this.makeBanner(3, this.forecast[2]['weather'][0]['icon'], this.day , this.forecast[2]['weather'][0]['description'], this.forecast[2]['temp'].max, this.forecast[2]['temp'].min);

                
            },2500);
           

        
        },

        methods:{

            makeBanner(id, icon, day, description ,temp_max, temp_min){
                
                let obj = {
                    id: id,
                    icon: "img:https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/"+ icon + ".png" ,
                    day: day,
                    description: description,
                    temp_max: Math.round(temp_max),
                    temp_min: Math.round(temp_min),
                }

                this.arInfo.push(obj);                
                
            },

            convertDate: function(dt){
                this.date = new Date(dt*1000);
                this.day = this.whatIsWeekDay(this.date.getDay()); 
            },

            whatIsWeekDay: function(number){

                    switch (number) {
                        case 1:
                            return "Segunda-Feira";
                        case 2:
                            return "Terça-Feira";
                        case 3:
                            return "Quarta-Feira";
                        case 4:
                            return "Quinta-Feira";
                        case 5:
                            return "Sexta-Feira";
                        case 6:
                            return "Sabado";
                        case 0:
                            return "Domingo";
                        default:
                            break;
                    }
                
            }
            
        }

    }
</script>