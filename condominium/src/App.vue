<template>
  <div id="app">
    <HomeNav/>
    <router-view/>
  </div>
</template>

<script>
  import HomeNav from './components/HomeNav';

  export default{
    name: 'App',
    components:{
      HomeNav

    }
  }
</script>