<template>
    <div> <!-- Use uma div ou outro elemento válido -->
        <h1>Pagina Principal</h1> <!-- Título opcional -->
        <ImagensPrincipal />
        <VideoUnico />
        <TabelaDiversos />
    </div>
</template>

<script>
import ImagensPrincipal from './ImagensDiversas.vue';
import VideoUnico from '@/components/VideoUnico.vue';
import TabelaDiversos from '@/components/TabelaDiversos.vue';

export default {
    name: 'PaginaPrincipal',
    components: {
        ImagensPrincipal,
        VideoUnico,
        TabelaDiversos,
    },
    props: {
        msg: String
    }
}
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
