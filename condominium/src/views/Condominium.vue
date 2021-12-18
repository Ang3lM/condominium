<template>
    <div>
        <div class="container">
            <div class="menu-condominium">
                <b-nav vertical pills>
                    <b-nav-item to="condominiums" active>condominium</b-nav-item>
                    <b-nav-item to="#">propiedades</b-nav-item>
                </b-nav>
            </div>
            <div class="condominium">
                <b-card
                class="condominium-card-img"
                >
                    <img class="condominium-img" src="@/assets/condominium.jpeg" alt="">
                    <div class="condominium-text">
                        <h4>Condominio los jardines</h4>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
                    </div>
                </b-card>

                <b-card
                    title="Condominio los Valles"
                    img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.dDHLPnxdona_zwVlASgIxQHaEH%26pid%3DApi&f=1"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
                </b-card>

                <b-card
                    title="Condominio 14 de Febrero"
                    img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.PBCek292DeLEOsGEO-GDvQHaE8%26pid%3DApi&f=1"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
                </b-card>

                <b-card
                    title="Condominio los rosales"
                    img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VGy3gqwCnZMfqQlJWU63XQHaEG%26pid%3DApi&f=1"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
                </b-card>

                <b-card
                    title="Condominio jirajara"
                    img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.32PMfR5fBS7Z7yqc_xRjGgHaE8%26pid%3DApi&f=1"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
                </b-card>

                <b-card
                    title="Condominio las Torres"
                    img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.G0TzCDV9-mvJEQpRU8C4fQHaD7%26pid%3DApi&f=1"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'condominium',
        data() {
            return {

            }
        },

    }
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: repeat(2, 18% 82%);
		border-color: rgb(255, 238, 0);
        gap: 5%;
        margin-top: 1%;
        min-height: 100vh;

    }
    /* .container .menu-condominium{
        border-style: solid;
		border-color: blue;
    } */
    .container .condominium{
        display: grid;
        border-style: solid;
		border-color: red;
        margin-right: 6%;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
    .menu-condominium .nav-item .nav-link:focus{
        background-color: grey;
        color: black;

    }
    .container .condominium .condominium-card-img .card-body{
        /* border-style: solid;
		border-color: red; */
        margin:0;
        padding:0;
        
        /* max-width: 50%; */
        /* margin-right: 70%; */
    }
    .container .condominium .condominium-card-img .condominium-img{
        /* border-style: solid;
		border-color: red; */
        /* border-top-left-radius: calc(1px);
        border-top-right-radius: calc(1px) */

        max-width: 100%;
        /* margin-right: 70%; */
    }
    .container .condominium .condominium-card-img .condominium-text{
        flex: 1 1 auto;
        padding: 1rem 1rem;
    }
    
</style>