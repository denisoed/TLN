<template>
    <section class="sprint-single">
        <h1>Sprint Single: {{ this.sprintID }}</h1>
        <div class="sprint-days">
          <div class="list-actions" v-for="(sprint, index) in sprintData.sprintDuration" :key="`day-${index}`">
            <div class="list-actions_info">
              <div class="days">
                Day: {{ index + 1 }}
              </div>
              <button class="settings_day"><icon name="cog"></icon></button>
            </div>
            <actionItem v-if="actionItems.length > 0" v-for="(item, index) in actionItems" :key="`action-${index}`" :actionInfoData="item"/>
          </div>
        </div>
    </section>
</template>

<script>
  import localDB from '../services/localDB';
  import ActionItem from './blocks/actionItem';

  export default {
    name: 'sprint-single',
    data: function () {
      return {
        sprintID: this.$route.params.id, 
        sprintModal: false,
        sprintData: '',
        actionItems: '',
      }
    },
    components: {
      actionItem: ActionItem,
    },
    methods: {
      getActionsBySprintID() {
        localDB.GetActionsBySprintID(this.sprintID).then(actions => {
          this.actionItems = actions;
        }).catch(error => {
          this.flash(error, 'error');
        })
      },
      getSprintData() {
        localDB.GetSprint(this.sprintID).then(sprint => {
          this.sprintData = sprint;
        }).catch(error => {
          this.flash(error, 'error');
        })
      },
    },
    mounted() {
      this.getSprintData();
      this.getActionsBySprintID();
    },
  }
</script>

<style>

</style>
