<template>
    <section class="sprint-single">
        <h1>Sprint Single: {{ this.sprintID }}</h1>
    </section>
</template>

<script>
  export default {
    name: 'sprint-single',
    data: function () {
      return {
        sprintID: this.$route.params.id, 
        sprintModal: false
      }
    },
  }
</script>

<style>

</style>
