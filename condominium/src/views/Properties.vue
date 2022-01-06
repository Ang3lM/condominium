<template>
    <div>
        <div class="container">
            <div class="menu-properties">
                <b-nav vertical pills>
                    <b-nav-item to="properties" active>properties</b-nav-item>
                    <b-nav-item to="#">propiedades</b-nav-item>
                </b-nav>
            </div>
            <div class="properties">
                <b-card
                class="properties-card-img"
                >
                    <img class="properties-img" src="@/assets/apartamento7.jpeg" alt="">
                    <div class="properties-text">
                        <h4>Propiedad los jardines</h4>
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
                    </div>
                </b-card>

                <b-card
                    title="Propiedad los Valles"
                    img-src="https://forsalebyownercostarica.com/images/144_BA_1.jpg"
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
                    title="propiedad 14 de Febrero"
                    img-src="data:image/jpeg;base64,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"
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
                    title="propiedad los rosales"
                    img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGNiUF5sjK73gZwdHoeY1s_yiiWiVCjx0gQ&usqp=CAU"
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
                    title="propiedad jirajara"
                    img-src="data:image/jpeg;base64,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"
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
                    title="propiedad las Torres"
                    img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN3Q4eCST_n7dF7yE08g3UxrKep7v2PIhlwg&usqp=CAU"
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
        name: 'properties',
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
    /* .container .menu-properties{
        border-style: solid;
		border-color: blue;
    } */
    .container .properties{
        display: grid;
        border-style: solid;
		border-color: red;
        margin-right: 6%;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
    .menu-properties .nav-item .nav-link:focus{
        background-color: grey;
        color: black;

    }
    .container .properties .properties-card-img .card-body{
        /* border-style: solid;
		border-color: red; */
        margin:0;
        padding:0;
        
        /* max-width: 50%; */
        /* margin-right: 70%; */
    }
    .container .properties .properties-card-img .properties-img{
        /* border-style: solid;
		border-color: red; */
        /* border-top-left-radius: calc(1px);
        border-top-right-radius: calc(1px) */

        max-width: 100%;
        /* margin-right: 70%; */
    }
    .container .properties .properties-card-img .properties-text{
        flex: 1 1 auto;
        padding: 1rem 1rem;
    }
    
</style>