<template>
    <div class="active-day">
        <div class="active-day_header">
            <h4>Active day of sprint</h4>
            <div class="toggle-active-day">
                <icon name="sort-up"></icon>
            </div>
        </div>
        <div class="active-day_body">
            <div class="active-day_info">
                12:34
            </div>
            <div class="active-day_control-panel">
                <button class="pause-active-action"><icon name="pause"></icon></button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'active-day',
    props: ['activeDay'],
    data: function () {
      return {
        // isRunning: false,
      }
    },
  }
</script>

<style>

</style>
