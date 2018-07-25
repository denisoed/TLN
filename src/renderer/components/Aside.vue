<template>
  <div class="sidebar">
    <div class="logo">
    </div>
    <div class="menu">
        <div class="menu_icons">
          <a href="#"><icon name="clone" size="lg"></icon></a>
          <a href="#"><icon name="user-friends"></icon></a>
          <a href="#"><icon name="user"></icon></a>
          <a href="#"><icon name="file-alt"></icon></a>
          <a href="#"><icon name="comments"></icon></a>
          <a href="#"><icon name="cog"></icon></a>
        </div>
    </div>
  </div>
</template>

<script>
  import CreateAction from './blocks/createAction'
  
  export default {
    name: 'side-bar',
    data: function () {
      return {
      }
    },
    components: {
    },
    methods: {
      },
    }
</script>
