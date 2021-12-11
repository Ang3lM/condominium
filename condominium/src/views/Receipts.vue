<template>
    <div>
        <MainNav/> 
        <div class="container">
            <div class="menu-receipts">
                <b-nav vertical >
                    <b-nav-item to="receipts" active>receipts</b-nav-item>
                    <b-nav-item to="#">Another Link</b-nav-item>
                    <b-nav-item to="#" >Disabled</b-nav-item>
                </b-nav>
            </div>
            <div class="receipts">
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    import MainNav from '@/components/MainNav';

    export default {
        name: 'Receipts',
        data(){
            return {

            }
        },
        components : {
            MainNav
        }
    }
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: repeat(2, 18% 82%);
		border-color: rgb(30, 255, 0);
        gap: 5%;
        margin-top: 1%;

    }
    .container .menu-receipts{
        border-style: solid;
		border-color: blue;
    }
    .container .receipts{
        border-style: solid;
		border-color: red;
        margin-right: 6%;
    }
    .menu-receipts .nav-item .nav-link:focus{
        background-color: grey;
        color: black;

    }
</style>