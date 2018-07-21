<template>
    <section class="home">
      <div class="acrion-item_list">
        <actionItem v-if="actionItems.length > 0" v-for="(item, index) in actionItems" :key="`action-${index}`" :actionInfoData="item"/>
      </div>
    </section>
</template>

<script>
  import ActionItem from './blocks/actionItem'

  export default {
    name: 'home',
    data: function () {
      return {
        actionItems: [
          {
            title: 'Dead line',
            time: '1h 40m'
          },
          {
            title: 'Go home',
            time: '4h 10m'
          },
        ],
      }
    },
    components: {
      actionItem: ActionItem,
    }
  }
</script>

<style>

</style>
