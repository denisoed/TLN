<template>
    <section class="sprint">
      <div class="sprint-header">
        <h2>Sprints</h2>
        <div class="new-sprint">
          <button class="create-new-sprint" @click="openSprintModal"><icon name="plus" /> New Sprint</button>
          <createSprint @EventCloseSprintModal="closeSprintModal" v-if="sprintModal"/>
        </div>
      </div>
      <div class="sprint-body">
        <div class="sprint-list">
          <!-- Strint item -->
        </div>
      </div>
    </section>
</template>

<script>
  import CreateSprint from './blocks/createSprint'

  export default {
    name: 'sprint',
    data: function () {
      return {
        sprintModal: false,
      }
    },
    components: {
      createSprint: CreateSprint,
    },
    methods: {
      openSprintModal() {
        this.sprintModal = true
      },
      closeSprintModal(event) {
        this.sprintModal = event;
      }
    },
  }
</script>

<style>

</style>
