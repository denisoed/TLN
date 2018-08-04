<template>
    <section class="sprint-single">
        <h1>Sprint Single: {{ this.sprintID }}</h1>
        <div class="list-actions">
          <actionItem v-if="actionItems.length > 0" v-for="(item, index) in actionItems" :key="`action-${index}`" :actionInfoData="item"/>
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
        actionItems: '',
      }
    },
    components: {
      actionItem: ActionItem,
    },
    methods: {
      getActionsBySprintID() {
        localDB.getActionsBySprintID(this.sprintID).then(actions => {
          this.actionItems = actions;
        }).catch(error => {
          this.flash(error, 'error');
        })
      }
    },
    mounted() {
      this.getActionsBySprintID();
    },
  }
</script>

<style>

</style>
