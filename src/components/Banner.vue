<template>
    <q-page class="white" delay="1000"> 
        <div class="row  q-pa-xs">  
            <q-icon name="add" class="col-2 " style="font-size: 30px;" />
            <div class="col-8 text-center">
                <h6 class="q-ma-none">{{ list["name"] }}</h6>
            </div>
            <q-icon name="more_vert" class="col-2 " style="font-size: 30px;" />
        </div>
        <div class="column">
            <h1 class="q-ma-none q-pt-xl q-mt-xl text-center col-8">{{ temp }}°c</h1>
            <h6  class="q-ma-none q-py-sm text-center col-auto test">{{ weather['description'] }}</h6>
            <div class="col-auto q-py-sm text-center">
            <q-btn flat rounded style="background-color: rgba(240,240,240,0.3);" icon="eco" label="IQA 17"/>
            </div>
            <div class="q-pt-xl">
                <div class="text-right q-pr-sm">
                  <span class="text-center" style="font-size: 16px">Mais detalhes 
                      <q-icon name="keyboard_arrow_right" style="font-size: 28px;"></q-icon>
                  </span>
                </div>
                <div class="">
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
</style>

<script>
    export default {
        name: 'Banner',
        props: ['list', 'temp', 'weather'],

        data(){
            return{
               apiKey: '',
               date:'',
               day: '',
            }
        },

        created(){
    
            setTimeout(() => {
              this.convertDate(this.list["dt"]);
            },5000);
        
        },

        methods:{

            convertDate: function(dt){
                
            
                this.day = new Date(dt*1000);
                console.log(this.whatIsWeekDay(this.day.getDay()));
                
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