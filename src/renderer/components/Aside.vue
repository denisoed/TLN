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

<style>
  .sidebar  {
    width: 100px;
    height: 1000px;
    background-color: #fff;
    border-right: 1px solid #D3D3D3
  }
  .logo {
    height: 110px;
  }
  .menu {
    height: 100%;
    margin-top: 40px;
  }
  .menu_icons {
    display: flex;
    flex-direction: column;
  }
  .menu_icons a {
    text-decoration: none;
    color: #20B2AA;
    width: 100%;
    height: 60px;
    border: 5px solid transparent;
  }
  .menu_icons svg {
    height: 22px;
    width: 22px;
    margin: 20px 35px;
  }
  .menu_icons a:hover {
    border-left: 5px #20B2AA solid;
  }
</style>
