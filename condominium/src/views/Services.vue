<template>
    <div>
        <div class="container">
            <div class="menu-services">
                <b-nav vertical pills>
                    <b-nav-item to="services" active>services</b-nav-item>
                    <b-nav-item to="#">provedor</b-nav-item>
                </b-nav>
            </div>
            <div class="services">
                <b-card
                    title="Servicio de Gas Domestico"
                    img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.2NpY0bjDSZNQOi7v8WLCIwHaHa%26pid%3DApi&f=1"
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
                    title="Servicio de Telefonia"
                    img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Fi8U_qC7ZCBWpq-YCQvTsAHaEq%26pid%3DApi&f=1"
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
                    title="Servicio de Internet"
                    img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-FO5x6W1Pj3X7_S24MqaRQHaE0%26pid%3DApi&f=1"
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
                    title="Servicio de Luz"
                    img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Bz90iR2kG-UPbgDVqwASpQHaGH%26pid%3DApi&f=1"
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
                    title="servicio de Agua"
                    img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.yma7UVzqQkqDM2yZeUTyyQHaE7%26pid%3DApi&f=1"
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
                    title="Cable Imagen"
                    img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.LBtA_M9Gm_VcVgkRch9ZOQHaEK%26pid%3DApi&f=1"
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
        name: 'Services',
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
    /* .container .menu-services{
        border-style: solid;
		border-color: blue;
    } */
    .container .services{
        display: grid;
        border-style: solid;
		border-color: red;
        margin-right: 6%;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
    .menu-services .nav-item .nav-link:focus{
        background-color: grey;
        color: black;

    }
    
</style>