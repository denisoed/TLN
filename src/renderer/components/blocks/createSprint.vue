<template>
    <section class="modal-create modal-create-sprint">
      <div class="wrap-modal-create wrap-modal-create-sprint">
        <button class="close-modal-create close-modal-create-sprint" @click="closeSprintModal"><icon name="times"/></button>
        <input type="text" placeholder="Enter sprint title" v-model="sprint.title">
        <input type="text" placeholder="Enter sprint duration" v-model="sprint.maxDay">
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
          maxDay: '',
        }
      }
    },
    methods: {
      closeSprintModal() {
        this.$emit('EventCloseSprintModal', this.sprintModalStatus)
      },
      createSprint() {
        localDB.CreateSprint(this.sprint).then(function (response) {
          console.log("Success: " + response);
        }).catch(function (error) {
          console.log("Ooops: " + error);
        });
      }
    },
  }
</script>

<style>

</style>
