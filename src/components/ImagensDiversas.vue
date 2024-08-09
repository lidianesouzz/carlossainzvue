
<template>
    <div class="containerImagem">
        <img src="https://s2-ge.glbimg.com/DMMkHjGriAvwVTd-98A9EBQmRtI=/0x0:1024x684/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/c/s/g5Dav7T1m2V5P7UBdeEg/gettyimages-1628183683.jpg" alt="imagem 1"
            class="ImagemUnicaAltura400px">
    </div>

    <div class="containerImagem">
        <div class="divImagemMeiaTela">
            <img src="https://naspistas.com/wp-content/uploads/2023/06/carlos-sainz-ferrari.jpg" alt="imagem 2"
                style="max-width: 100%;">
        </div>
        <div class="divImagemMeiaTela">
            <img src="https://cdn-8.motorsport.com/images/amp/6O1RkPm2/s1000/carlos-sainz-ferrari-1.jpg" alt="imagem 3"
                style="max-width: 100%;">
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name: 'ImagensDiversos',
        props: {
            msg: String 
        }
    }
    </script>
    
    <!--Add "scoped" atribute to limite css to this component only-->
    <style scoped></style>