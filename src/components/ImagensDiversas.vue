<template>
    <div class="containerImagem">
        <img v-lazy="imageSrc" alt="imagem 1" class="ImagemUnicaAltura400px">
    </div>

    <div class="containerImagem">
        <div class="divImagemMeiaTela">
            <img src="@/assets/Mercedes.jpg" alt="imagem 2" style="max-width: 100%;">
        </div>
        <div class="divImagemMeiaTela">
            <img src="@/assets/carlos.jpg" alt="imagem 3" style="max-width: 100%;">
        </div>
    </div>
    <picture>
        <source srcset="imagem-grande.webp" type="image/webp">
        <img src="imagem-grande.jpg" alt="Descrição da imagem">
    </picture>
    <!-- <img :src="cloudinaryUrl(imageSrc)" alt="Descrição da imagem" /> -->
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'ImagensDiversos',
    props: {
        msg: String,
    },
    setup() {
        const imageSrc = ref('@/assets/redbull.jpg'); // Defina o caminho correto
        return { imageSrc };
    },
}
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
