<template>
    <section class="modal-create modal-create-sprint">
      <div class="wrap-modal-create wrap-modal-create-sprint">
        <button class="close-modal-create close-modal-create-sprint" @click="closeSprintModal"><icon name="times"/></button>
        <input type="text" placeholder="Title" v-model="sprint.title">
        <input type="text" placeholder="Your Work Time" v-model="sprint.workTime">
        <input type="text" placeholder="Notification interval" v-model="sprint.notificationInterval">
        <input type="text" placeholder="Days" v-model="sprint.sprintDuration">
        <button class="modal-button addSprint" @click="createSprint">Add Sprint</button>
      </div>
    </section>
</template>

<script>
  import localDB from '../../services/localDB'
  
  export default {
    name: 'create-sprint',
    data: function () {
      return {
        sprintModalStatus: false,
        sprint: {
          id: Math.random().toString(15).substring(4),
          title: '',
          workTime: '',
          notificationInterval: '',
          sprintDuration: '',
        },
        action: {
          title: '',
          minutes: '',
          sprintID: '',
        }
      }
    },
    methods: {
      closeSprintModal() {
        this.$emit('EventCloseSprintModal', this.sprintModalStatus)
      },
      createSprint() {
        localDB.CreateSprint(this.sprint).then(res => {
          this.flash("Sprint created", 'success');
          this.createActions();
        }).catch(error => {
          this.flash(error, 'error');
        });
      },
      createActions() {
        this.action.sprintID = this.sprint.id;
        this.action.minutes = this.sprint.notificationInterval;

        for (let i = 0; i < this.sprint.sprintDuration; i++) {
          for (let j = 0; j < this.sprint.workTime / this.sprint.notificationInterval; j++) {
            localDB.CreateAction(this.action).then(res => {
              this.flash("Action created", 'success');
            }).catch(error => {
              this.flash(error, 'error');
            });    
          }
        }
      },
    },
  }
</script>

<style>

</style>
