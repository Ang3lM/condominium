<template>
  <div id="app">
    <HomeNav v-if="nav =='home'"/>
    <MainNav v-if=" nav =='main'"/>     
    <router-view/>
  </div>
</template>

<script>
  import HomeNav from './components/HomeNav';
  import MainNav from './components/MainNav';
  import {mapState, mapMutations} from 'vuex';


  export default{
    name: 'App',
    data(){
      return {

      }
    },
    components:{
			HomeNav,
      MainNav

    },
    computed: {
      ...mapState('login', ['session', 'nav'])
    },
    methods: {
      ...mapMutations('login', ['setNav']),
    },
    created(){
      this.setNav('home');
      console.log('xcvxcvxcv')
    }
  }
</script>