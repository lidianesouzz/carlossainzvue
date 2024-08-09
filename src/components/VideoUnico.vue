<template>

  <div class="iframe">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/SpQCuE1wTxg?si=0X-J0A4SURzp9Xp1"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>

  </div>
</template>

<script>
export default {
  name: 'VideoUnico',
  props: {
    msg: String
  }
}
</script>

<!--Add "scoped" atribute to limite css to this component only-->
<style scoped></style>