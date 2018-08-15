<template>
    <div class="sprint-item">
      <label>
        Active
        <input @click="setActiveSprint(sprintInfoData.id)" type="radio" name="active-sprint" :checked="this.sprintInfoData.active == 'true'">
      </label>
      <h4>{{ this.sprintInfoData.id }}</h4>
      <h4>{{ this.sprintInfoData.title }}</h4>
      <ul class="selected-days">
        <li v-if="sprintInfoData.length > 0" v-for="(item, index) in parseInt(this.sprintInfoData.sprintDuration)" :key="`item-${index}`">
          {{ index }}
        </li>
      </ul>
      <button class="remove-sprint" @click="deleteSprint(sprintInfoData.id)">Remove sprint</button>
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
    methods: {
      deleteSprint(id) {
        this.$emit('EventDeleteSprint', id);
      },
      setActiveSprint(id) {
        this.$emit('EventSetActiveSprint', id);
      }
    }
  }
</script>

<style>

</style>
