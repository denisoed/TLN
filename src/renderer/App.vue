<template>
  <div id="app">
    <div class="main-wrapper">
      <flash-message class="flash-message"></flash-message>
      <top-line />
      <aside-bar />
      <router-view class="component"></router-view>
      <active-sprint />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tln',
  }
</script>

<style lang="scss" src="./assets/styles/index.scss"></style>
