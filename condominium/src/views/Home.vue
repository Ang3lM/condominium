<template>
	<div>
    	<HomeNav/>
		<section class="home" id="home">
			<div class="content">
				<h3>fresh coffe in the morgin</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing, elit. Necessitatibus vel expedita impedit reiciendis quo, officia voluptatibus, nostrum delectus nulla quasi iure quod rerum rem fugiat quisquam illum, modi pariatur voluptatem?
				</p>
				<a href="#" class="btn">get yours</a>
			</div>
		</section>
	</div>
</template>


<script>
  	import HomeNav from '@/components/HomeNav';

	export default{
		name: 'Home',
		components:{
			HomeNav

    	}
	}
</script>

<style scoped>
	section{
		padding: 2rem 7%;
	}
	.home{
		min-height: 100vh;
		display: flex;
		align-items: center;
		background: url('../assets/condo6.jpg') no-repeat;
		background-size: cover;
		background-position: center;
	}
	.home .content{
		max-width: 60rem;
	}
	.home .content h3{
		font-size:  3rem;
		text-transform: uppercase;
		color: #33f5ff;
	}

</style>