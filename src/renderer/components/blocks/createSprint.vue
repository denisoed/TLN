<template>
    <section class="modal-create modal-create-sprint">
      <div class="wrap-modal-create wrap-modal-create-sprint">
        <button class="close-modal-create close-modal-create-sprint" @click="closeSprintModal"><icon name="times"/></button>
        <input type="text" placeholder="Title" v-model="sprint.title">
        <input type="text" placeholder="Your Work Time" v-model="sprint.workTime">
        <div class="interval-time">
          <label>
            <input type="radio" name="interval" value="minutes" v-model="sprint.notificationInterval.type">
            Minutes
          </label>
          <label>
            <input type="radio" name="interval" value="hours" v-model="sprint.notificationInterval.type">
            Hours
          </label>
          <input type="text" placeholder="Notification interval" v-model="sprint.notificationInterval.value">
        </div>
        <input type="text" placeholder="Days" v-model.number="sprint.sprintDuration">
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
          notificationInterval: {
            type: 'minutes',
            value: '',
          },
          sprintDuration: '',
          active: false,
          done: false,
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
      gelAllSprints() {
        localDB.GetSprints().then(sprints => {
          this.sprintItemsList = sprints;
        }).catch(error => {
          this.flash(error, 'error');
        })
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
        if (this.sprint.notificationInterval.type == 'minutes') {
          const interval = this.generateIntervalValue(this.sprint.notificationInterval.value);
          this.generateActions(interval);
        } else {
          const interval = this.generateIntervalValue(this.sprint.notificationInterval.value * 60);
          this.generateActions(interval);
        }
      },
      generateActions(array) {
        for (let i = 0; i < array.length; i++) {
          this.action.minutes = array[i];
          localDB.CreateAction(this.action).then(res => {
            this.flash("Action created", 'success');
          }).catch(error => {
            this.flash(error, 'error');
          });  
        }
      },
      generateIntervalValue(minutes) {
        const intervalArray = [];

        let workTimeToMinutes = this.sprint.workTime * 60,
            intervalInteger = Math.floor((workTimeToMinutes / minutes)),
            intervalRemainder = workTimeToMinutes - (intervalInteger * minutes);
        
        for (let i = 0; i < intervalInteger; i++) {
          intervalArray.push(Number(minutes))
        }

        if (intervalRemainder != 0) {
          intervalArray.push(intervalRemainder);
        }

        return intervalArray;
      },
    },
  }
</script>

<style>

</style>
