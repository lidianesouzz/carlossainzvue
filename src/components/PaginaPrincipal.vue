<template>
    <ImagensPrincipal />
    <VideoUnico />
    <TabelaDiversos />
</template>

<script>

import ImagensPrincipal from '@/components/ImagensDiversas.vue';
import VideoUnico from '@/components/VideoUnico.vue';
import TabelaDiversos from '@/components/TabelaDiversos.vue';
export default {
    name: 'PaginaPrincipal',
    components: {
        ImagensPrincipal, VideoUnico, TabelaDiversos,
    },
    props: {
        msg: String
    }
}
</script>

<!--Add "scoped" atribute to limite css to this component only-->
<style scoped></style>