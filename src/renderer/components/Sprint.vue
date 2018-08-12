<template>
    <section class="sprint">
      <div class="sprint-header">
        <h2>Sprints</h2>
        <transition name="slide">
          <createSprint @EventCloseSprintModal="closeSprintModal" v-if="sprintModal"/>
        </transition>
      </div>
      <div class="sprint-body">
        <div class="sprint-list">
          <sprintItem @EventSetActiveSprint="setActiveSprint" @EventDeleteSprint="deleteSprint" v-if="sprintItemsList.length > 0" v-for="(item, index) in sprintItemsList" :key="`sprint-${index}`" :sprintInfoData="item"/>
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
        this.sprintModal = !this.sprintModal;
      },
      closeSprintModal(event) {
        this.sprintModal = event;
        this.gelAllSprints();
      },
      gelAllSprints() {
        localDB.GetSprints().then(sprints => {
          this.sprintItemsList = sprints;
        }).catch(error => {
          this.flash(error, 'error');
        })
      },
      deleteSprint(id) {
        localDB.DelSprint(id).then(response => {
          this.flash('Sprint deleted', 'success');
          this.gelAllSprints();
        }).catch(error => {
          this.flash(error, 'error');
        })
      },
      setActiveSprint(id) {
        const data = {
          key: 'id',
          id: id,
          modifyValue: { active: 'true' },
        }

        for (let i = 0; i < this.sprintItemsList.length; i++) {
          this.updateSprints(this.sprintItemsList[i].id);
        }

        localDB.UpdateSprint(data).then(response => {
          this.flash('Sprint updated', 'success');
        }).catch(error => {
          this.flash(error, 'error');
        })
      },
      updateSprints(id) {
        const data = {
          key: 'id',
          id: id,
          modifyValue: { active: 'false' },
        }
        localDB.UpdateSprint(data).then(response => {
          this.flash('Sprints updated', 'success');
        }).catch(error => {
          this.flash(error, 'error');
        })
      },
    },
    mounted() {
      this.gelAllSprints();
    },
  }
</script>