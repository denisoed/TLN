<template>
    <section class="modal-create modal-create-action">
      <div class="wrap-modal-create wrap-modal-create-action">
        <button class="close-modal-create close-modal-create-action" @click="closeActionModal"><icon name="times"/></button>
        <input type="text" placeholder="Enter action title" v-model="action.title">
        <input type="text" placeholder="Enter action minutes" v-model="action.minutes">
        <input type="text" placeholder="Enter sprint" v-model="action.sprint">
        <button class="modal-button addAction" @click="createAction">Add Action</button>
      </div>
    </section>
</template>

<script>
  
  export default {
    name: 'create-action',
    data: function () {
      return {
        actionModal: false,
        action: {
          title: '',
          minutes: '',
          sprintID: '',
        }
      }
    },
    methods: {
      closeActionModal() {
        this.$emit('EventCloseActionModal', this.actionModal)
      },
      createAction() {
        this.$store.dispatch('updateActionList', this.action);
      }
    }
  }
</script>

<style>

</style>
