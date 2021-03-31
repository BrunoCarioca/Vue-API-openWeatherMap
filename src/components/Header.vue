<template>
    <q-header elevated> 
         <div class="row q-pa-sm bg no-shadow">
          <div class="col-6 "><span>17:23|0.2KB/s
            <span class="material-icons">
                alarm computer   
            </span>
          </span></div>
          <div class="col-6  q-pr-sm text-right">
            <span class="material-icons">
                bluetooth
                signal_cellular_alt
                wifi
                <svg width="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="battery-three-quarters" class="svg-inline--fa fa-battery-three-quarters fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-144 96H96v128h320V192z"></path></svg>
            </span>
          </div>    
         </div><!--row-->
      </q-header>
</template>

<style>
 .bg{
     background-color: rgba(0, 0, 0, 0.0);
 }
</style>

<script>
    export default {
        name: 'Header'
    }
</script>
