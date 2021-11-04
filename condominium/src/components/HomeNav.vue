<template>
	<div>
	  <b-navbar toggleable="sm" type="dark" variant="dark">
	    <b-navbar-toggle v-b-toggle.sidebar-no-header target="nav-collapse"></b-navbar-toggle>
	    <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <template class="practi">
      	<b-sidebar class="ang" id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
	        <template #default="{ hide }">
	          <div class="p-3">
	            <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
	            <p id="parrafoo">
	              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
	              in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
	            </p>
	            <nav class="mb-3">
	              <b-nav vertical>
	                <b-nav-item active @click="hide">Active</b-nav-item>
	                <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
	                <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
	              </b-nav>
	            </nav>
	            <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
	          </div>
	        </template>
      	</b-sidebar>
      </template>

	    <!-- <b-collapse id="nav-collapse" is-nav>
	      <b-navbar-nav>
	        <b-nav-item href="#">Link</b-nav-item>
	        <b-nav-item class="d-block d-sm-block d-sm-none" href="#" v-if="">Inicie sesion</b-nav-item>
	      </b-navbar-nav>

	    </b-collapse> -->
      <b-navbar-nav class="d-none d-xs-none d-sm-block" right>
				<b-nav-item href="#">Inicie sesion</b-nav-item>
      </b-navbar-nav>
	  </b-navbar>
	</div>
</template>

<script>
	export default{
		name: 'HomeNav'
	}
</script>

<style scoped>
	.ang > .b-sidebar {
    position: fixed;
    bottom: -65px;
	}


</style>