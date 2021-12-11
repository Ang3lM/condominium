<template>
	<div>
		<b-navbar toggleable="sm" type="dark" variant="dark">
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto w-100">
					<b-nav-item  class="news" href="news">News</b-nav-item>
					<b-nav-item  class="news" href="services">services</b-nav-item>
					<b-nav-item class="pagos" href="payments">Pagos</b-nav-item>
					<b-nav-item class="recibos" href="receipts">Recibos</b-nav-item>

					<b-nav-item-dropdown class="mierda">
						<!-- Using 'button-content' slot -->
						<template #button-content>
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="/">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
	export default{
		name: 'MainNav'
	}
</script>

<style scoped>
	.navbar-nav {
		border-style: solid;
		border-color: blue;
		margin-right: 124px;
		margin-left: 124px;	
			
	}
	.navbar-nav .mierda {
		border-style: solid;
		border-color: rgb(0, 255, 42);
		margin-left: 66%;
	}
	.navbar-collapse .navbar-nav .nav-link:focus{
        background-color: grey;
        color: white;

    }

</style>