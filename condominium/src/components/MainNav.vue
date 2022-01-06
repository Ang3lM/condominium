<template>
	<div>
		<b-navbar toggleable="sm" type="dark" variant="dark">
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto w-100">
					<b-nav-item  class="news" to="/news">News</b-nav-item>
					<b-nav-item  class="services" to="/services">services</b-nav-item>
					<b-nav-item  class="condominium" to="/condominiums">condominios</b-nav-item>
					<b-nav-item class="payments" to="/properties">properties</b-nav-item>
					<b-nav-item class="receipts" to="/receipts">Recibos</b-nav-item>
					<b-nav-item class="payments" to="/payments">Pagos</b-nav-item>

					

					<b-nav-item-dropdown class="mierda">
						<!-- Using 'button-content' slot -->
						<template #button-content>
							<span>User</span>
						</template>
						<b-dropdown-item to="#">Profile</b-dropdown-item>
						<b-dropdown-item to="/" @click="SetSession">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default{
		name: 'MainNav',
		data (){
			return {

			}
		},
		methods: {
			...mapMutations('login', ['setSessionUser', 'setNav']),
			SetSession(){
				this.setSessionUser(false);
				this.setNav('home');

			}
		}
	}
</script>

<style scoped>
	.navbar-nav {
		/* border-style: solid;
		border-color: blue; */
		margin-right: 124px;
		margin-left: 124px;	
			
	}
	.navbar-nav .mierda {
		/* border-style: solid;
		border-color: rgb(0, 255, 42); */
		margin-left: 66%;
	}
	.navbar-collapse .navbar-nav .nav-link:focus{
        background-color: grey;
        color: white;

    }

</style>