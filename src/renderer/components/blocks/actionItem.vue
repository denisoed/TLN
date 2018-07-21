<template>
    <div class="action-item">
        <div class="action-item_info">
            <h4>{{ this.actionInfoData.title }}</h4>
            <p>{{ this.actionInfoData.time }}</p>
        </div>
        <button class="start-action"><icon name="stopwatch"/></button>
    </div>
</template>

<script>
  export default {
    name: 'action-item',
    props: ['actionInfoData']
  }
</script>

<style>

</style>
