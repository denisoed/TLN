<template>
  <div id="app">
    <div class="main-wrapper">
      <flash-message class="flash-message"></flash-message>
      <top-line />
      <aside-bar />
      <router-view class="component" @EventUpdateActiveSprint="updateActiveSprint"></router-view>
      <active-sprint :sprintInfo="sprintData"/>
    </div>
  </div>
</template>

<script>
  import localDB from './services/localDB'

  export default {
    name: 'tln',
    data: function () {
      return {
        sprintData: '',
      }
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
