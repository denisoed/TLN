<template>
    <div class="sprint-item">
      <h4>{{ this.sprintInfoData.id }}</h4>
      <h4>{{ this.sprintInfoData.title }}</h4>
      <ul class="selected-days">
        <li v-for="(item, index) in parseInt(this.sprintInfoData.maxDay)" :key="`item-${index}`">
          {{ index }}
        </li>
      </ul>
      <router-link :to="`/sprint-single/${this.sprintInfoData.id}`">Open Sprint</router-link>
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
