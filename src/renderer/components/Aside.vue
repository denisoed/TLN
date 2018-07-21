<template>
    <aside class="aside-bar">
      <button @click="openActionModal"><icon name="plus"/></button>
    </aside>
</template>

<script>
  export default {
    name: 'aside-bar',
    methods: {
      openActionModal() {
        console.log('Open!');
      }
    },
  }
</script>

<style>

</style>
