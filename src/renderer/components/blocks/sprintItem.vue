<template>
    <div class="sprint-item">
        {{ this.sprintInfoData.title }}
        {{ this.sprintInfoData.maxDay }}
    </div>
</template>

<script>
  export default {
    name: 'sprint-item',
    props: ['sprintInfoData'],
    data: function () {
      return {
        // isRunning: false,
      }
    },
  }
</script>

<style>

</style>
