<template>  
    <div> 
        <svg width=" 360px" height="150px">
            <path d="M 20 80 q170 -120 320 2 " stroke="white" stroke-width="3" fill="none"/>
            <circle v-bind:cx="x" v-bind:cy="y" r="15" fill="yellow" />
            <text x="5" y="115" fill="white">Nascer do sol </text>
            <text x="260" y="115" fill="white">Por do sol </text>
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
            }
        },

        created(){
            this.x = '20';
            this.y = '80';
        },
    }
</script>
