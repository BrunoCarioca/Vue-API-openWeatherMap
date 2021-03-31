<template>
    <q-page class="white">
        <div class="row  q-pa-xs">  
            <q-icon name="add" class="col-2 " style="font-size: 30px;" />
            <div class="col-8 text-center">
                <h6 class="q-ma-none">Dourados</h6>
            </div>
            <q-icon name="more_vert" class="col-2 " style="font-size: 30px;" />
        </div>
        <div class="column">
            <h1 class="q-ma-none q-pt-xl q-mt-xl text-center col-8">26°c</h1>
            <h6 class="q-ma-none q-py-sm text-center col-auto">Limpo</h6>
            <div class="col-auto q-py-sm text-center">
            <q-btn flat rounded style="background-color: rgba(240,240,240,0.3);" icon="eco" label="IQA 17"/>
            </div>
        </div>
    </q-page>
</template>

<style>
    .white{
        color: white;
    }
</style>

<script>
    export default {
        name: 'Banner'
    }
</script>