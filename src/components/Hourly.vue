<template>
    <div class="bg-teste text-center white q-pa-sm ">
        <q-btn flat rounded style="background-color: rgba(240,240,240,0.3);"  label="Previsão para 5 dias"/>
        <div class="row q-pa-md">
            <div class="column col-3" v-for="hora in this.h" v-bind:key="hora.hour">
                <span class="f12"> {{ hora.hour }} </span>
                <span class="f12"> {{ hora.temp }}°</span>
                <span>
                    <q-icon v-bind:name="hora.icon" size="md"/>
                </span>
                <span class="f12">
                    <q-icon name="near_me" size="xs"/> 
                    {{ hora.wind }} km/h                
                </span>
            </div>
        </div>
    </div> 
</template>

<style>
    .bg-teste{
       /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100;Neutral+Density */
        background: -moz-linear-gradient(top,  rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
        width: 100%;   
    }

    .f12{
        font-size: 12px;
    }

</style>

<script>
    export default{
        name: 'Hourly',
        props: ['hourly'],
        data(){
            return{
                h: [],
            }
        },
        
        created(){
            for (let index = 0; index < 4; index++) {
                if(index == 0){
                    this.createArray("Agora", this.hourly[index]);
                }else{
                    this.createArray(this.convertHourly(this.hourly[index].dt) + " h", this.hourly[index])
                }
            }
        },

        methods: {
            convertHourly(date){
                let  day = date;
                let event = new Date(day*1000);
                return event.toLocaleTimeString().substring(0,5);
            },

            createArray(t ,hourly){
                
                let obj = {
                    hour: t,
                    temp: hourly.temp,
                    icon: "img:https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/"+ hourly.weather[0].icon + ".png",
                    wind: hourly.wind_speed,
                }
                this.h.push(obj);
            }
        }
    }
</script>

