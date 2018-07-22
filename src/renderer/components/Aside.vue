<template>
    <aside class="aside-bar">
      <div class="create-new-action">
        <button class="open-action-modal" @click="openActionModal"><icon name="plus"/></button>
        <createAction @EventCloseActionModal="closeActionModal" v-if="actionModal"></createAction>
      </div>
      <router-link class="aside-item link-sprint" to="/sprint"><icon name="th-large"/></router-link>
    </aside>
</template>

<script>
  import CreateAction from './blocks/createAction'
  
  export default {
    name: 'aside-bar',
    data: function () {
      return {
        actionModal: false,
      }
    },
    components: {
      createAction: CreateAction,
    },
    methods: {
      openActionModal() {
        this.actionModal = true;
      },
      closeActionModal(event) {
        this.actionModal = event;
      }
    },
  }
</script>

<style>

</style>
