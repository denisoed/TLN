<template>
    <div class="active-sprint">
        <div class="active-sprint_header">
            <h4 v-if="sprintData">{{ this.sprintData.title }}</h4>
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
  import localDB from '../../services/localDB'
  
  export default {
    name: 'active-sprint',
    data: function () {
      return {
        sprintData: '',
      }
    },
    methods: {
      getActiveSprint() {
        localDB.GetSprint({ active: 'true' }).then(sprint => {
          this.sprintData = sprint;
        }).catch(error => {
          this.flash(error, 'error');
        })
      }
    },
    mounted() {
      this.getActiveSprint();
    },
  }
</script>

<style>

</style>
