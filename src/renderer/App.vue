<template>
  <div id="app">
    <div class="main-wrapper">
      <aside-bar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tln'
  }
</script>

<style lang="scss" src="./assets/styles/index.scss"></style>
