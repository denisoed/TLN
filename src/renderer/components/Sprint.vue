<template>
    <section class="sprint">
      <div class="sprint-header">
        <h2>Sprints</h2>
        <button><icon name="plus" /> New sprint</button>
      </div>
      <div class="sprint-body">
        <div class="sprint-list">
          <!-- Strint item -->
        </div>
      </div>
    </section>
</template>

<script>
  export default {
    name: 'sprint',
    data: function () {
      return {
        actionModal: false,
      }
    },
  }
</script>

<style>

</style>
