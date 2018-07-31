<template>
  <div class="sidebar">
    <a href="/" class="logo">
      <img src="../assets/time_logo.svg" alt="">
    </a>
    <div class="menu">
        <div class="menu_icons">
          <router-link to="/sprints"><icon name="th-large"/></router-link>
          <a href="#"><icon name="bolt"></icon></a>
          <a href="#"><icon name="user"></icon></a>
          <a href="#"><icon name="clipboard-list"></icon></a>
          <a href="#"><icon name="calendar-alt"></icon></a>
          <a href="#"><icon name="clock"></icon></a>
        </div>
    </div>
    <button class="settings_button"><icon name="cog"></icon></button>
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
