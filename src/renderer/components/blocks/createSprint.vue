<template>
    <section class="modal-create modal-create-sprint">
      <div class="wrap-modal-create wrap-modal-create-sprint">
        <button class="close-modal-create close-modal-create-sprint" @click="closeSprintModal"><icon name="times"/></button>
        <input type="text" placeholder="Enter sprint title" v-model="sprint.title">
        <input type="text" placeholder="Enter sprint duration" v-model="sprint.maxDay">
        <button class="addSprint" @click="createSprint">Add Sprint</button>
      </div>
    </section>
</template>

<script>
  
  export default {
    name: 'create-sprint',
    data: function () {
      return {
        sprintModal: false,
        sprint: {
          title: '',
          maxDay: '',
        }
      }
    },

    methods: {
      closeSprintModal() {
        this.$emit('EventCloseSprintModal', this.sprintModal)
      },
      createSprint() {
        this.$store.dispatch('updateSprintList', this.sprint)
      }
    }
  }
</script>

<style>

</style>
