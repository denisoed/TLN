<template>
    <section class="modal-create-action">
      <div class="wrap-modal-create-action">
        <button class="close-modal-create-action" @click="closeActionModal"><icon name="times"/></button>
        <input type="text" name="title-action" placeholder="Enter action title">
        <button class="addAction">Add Action</button>
      </div>
    </section>
</template>

<script>
  export default {
    name: 'create-action',
    data: function () {
      return {
        actionModal: false,
      }
    },
    methods: {
      closeActionModal() {
        this.$emit('EventCloseActionModal', this.actionModal)
      }
    }
  }
</script>

<style>

</style>
