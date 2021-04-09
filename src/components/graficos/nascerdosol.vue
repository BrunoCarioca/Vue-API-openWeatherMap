<template>  
    <div> 
        <svg width=" 360px" height="150px">
            <path d="M 20 80 q170 -120 320 2 " stroke="white" stroke-width="3" fill="none"/>
            <circle v-bind:cx="x" v-bind:cy="y" r="15" fill="yellow" />
            <text x="5" y="115" fill="white">Nascer do sol {{ this.rise }} </text>
            <text x="250" y="115" fill="white">Por do sol {{ this.set }}</text>
        </svg>
    </div>
</template>
<style>
</style>
<script>

    export default{
        name: "nascerdosol",
        props:['sunrise','sunset'],
        date() {
            return{
                x:'',
                y:'',
                rise:'',
                set:'',
            }
        },

        created(){
            this.rise = this.convertHours(this.sunrise);
            this.set = this.convertHours(this.sunset);
            this.graphicSun(this.sunset);
        },

        methods: {
            convertHours: function(hour){
                let date = new Date (hour*1000);
                return date.toLocaleTimeString().substring(0,5);
            },

            graphicSun: function(current){
                let date = new Date (current*1000);
                let num = parseInt(date.toLocaleTimeString().substring(0,2));
                if(num <= 6 ){
                    this.x = '20';
                    this.y = '80';
                } else if(num >= 17 ){
                    this.x = '340';
                    this.y = '80';
                }
            }
        }
    }
</script>
