<template>
    <div class="active-sprint">
        <div class="active-sprint_header">
            <h4>{{ this.sprintInfoData.title }}</h4>
            <div class="toggle-active-sprint">
                <icon name="sort-up"></icon>
            </div>
        </div>
        <div class="active-sprint_body">
            <div class="active-sprint_info">
                12:34
            </div>
            <div class="active-sprint_control-panel">
                <button class="pause-active-action"><icon name="pause"></icon></button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'active-sprint',
    props: ['sprintInfoData'],
    data: function () {
      return {
        // sprintData: '',
      }
    },
  }
</script>

<style>

</style>
