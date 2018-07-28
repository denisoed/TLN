<template>
    <section class="sprint">
      <div class="sprint-header">
        <h2>Sprints</h2>
        <div class="new-sprint">
          <createSprint @EventCloseSprintModal="closeSprintModal" v-if="sprintModal"/>
        </div>
      </div>
      <div class="sprint-body">
        <div class="sprint-list">
          <sprintItem @EventDeleteSprint="deleteSprint" v-if="sprintItemsList.length > 0" v-for="(item, index) in sprintItemsList" :key="`sprint-${index}`" :sprintInfoData="item"/>
        </div>
      </div>
      <button class="create-new-sprint" @click="openSprintModal"><icon name="plus" /></button>
    </section>
</template>

<script>
  import CreateSprint from './blocks/createSprint'
  import SprintItem from './blocks/sprintItem'
  import localDB from '../services/localDB'

  export default {
    name: 'sprint',
    data: function () {
      return {
        sprintModal: false,
        sprintItemsList: []
      }
    },
    components: {
      createSprint: CreateSprint,
      sprintItem: SprintItem,
    },
    methods: {
      openSprintModal() {
        this.sprintModal = true
      },
      closeSprintModal(event) {
        this.sprintModal = event;
        this.gelAllSprints();
      },
      gelAllSprints() {
        localDB.getSprints().then(sprints => {
          this.sprintItemsList = sprints;
        })
      },
      deleteSprint(id) {
        localDB.delSprint(id).then(response => {
          console.log("Success: " + response);
          this.gelAllSprints();
        })
      }
    },
    mounted() {
      this.gelAllSprints();
    },
  }
</script>