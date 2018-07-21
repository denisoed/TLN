<template>
    <section class="modal-create-action">
      <div class="wrap-modal-create-action">
        <button class="close-modal-create-action" @click="closeActionModal"><icon name="times"/></button>
        <input type="text" placeholder="Enter action title" v-model="action.title">
        <input type="text" placeholder="Enter action time" v-model="action.time">
        <button class="addAction" @click="createAction">Add Action</button>
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
          time: '',
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
