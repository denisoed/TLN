<template>
  <div id="app">
    <div class="main-wrapper">
      <flash-message class="flash-message"></flash-message>
      <top-line />
      <aside-bar />
      <router-view class="component" @EventUpdateActiveSprint="updateActiveSprint"></router-view>
      <active-sprint v-drag :sprintInfo="sprintData"/>
    </div>
  </div>
</template>

<script>
  import localDB from './services/localDB'
  import drag from '@branu-jp/v-drag'

  export default {
    name: 'tln',
    data: function () {
      return {
        sprintData: '',
      }
    },
    directives: { 
      drag 
    },
    methods: {
      getActiveSprint() {
        localDB.GetSprint({ active: 'true' }).then(sprint => {
          this.sprintData = sprint;
        }).catch(error => {
          this.flash(error, 'error');
        })
      },
      updateActiveSprint(id) {
        this.getActiveSprint();
      }
    },
    mounted() {
      this.getActiveSprint();
    },
  }
</script>

<style lang="scss" src="./assets/styles/index.scss"></style>
