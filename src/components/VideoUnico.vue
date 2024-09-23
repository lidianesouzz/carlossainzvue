<template>
  <div class="iframe">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/SpQCuE1wTxg?si=0X-J0A4SURzp9Xp1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoUnico',
  props: {
    msg: String,
  },
}
</script>

<style scoped>
.iframe {
  display: flex;
  justify-content: center; /* Centraliza o iframe */
  margin: 20px 0; /* Adiciona margem */
}
</style>
