<template> 
    <div class=" section-grafico " > 
      <Nascerdosol :sunrise="this.gp.current.sunrise" :sunset="this.gp.current.sunset" ></Nascerdosol>
    </div>
</template>

<style>

     .section-grafico{
        width: 360px;
        height: 400px;
        background-color: rgba(55, 55, 55, 0.8);
        border-radius: 5%;
        margin: auto;
    }


</style>

<script>
    import Nascerdosol from "./graficos/nascerdosol.vue"

    export default {
        name: "Timeline",
        props: ['gp'], 

        components: { 

            Nascerdosol,

        },

        date() {
            return{
                status: true,
                hour:'',
            }
        },

        created(){
            this.hour = '2';
            
        }
    }
</script>
