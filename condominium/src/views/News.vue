<template>
    <div>
        <!-- <MainNav/>  -->
        <div class="container">
            <div class="menu">
                <b-nav vertical pills>
                    <b-nav-item to="news" active>news</b-nav-item>
                    <b-nav-item to="#">Eventos</b-nav-item>
                    <b-nav-item to="#">Grupos</b-nav-item>
                    <b-nav-item to="#" >Reuniones</b-nav-item>
                </b-nav>
            </div>
            <div class="news">
                <b-card bg-variant="dark" text-variant="white" title="Remodelacion de Cancha">
                    <b-img src=""></b-img>
                    <b-card-text>
                        Para la remodelacion dela cancha se necesita de una colaboracion
                        con la cual se pintara y se le pondra alumbrado.
                    </b-card-text>
                    <b-button href="#" variant="primary">leer mas</b-button>
                </b-card>

                <b-card class="mt-4" bg-variant="secondary" text-variant="white" title="Nuevo miembro de la junta directiva">
                    <b-img src=""></b-img>
                    <b-card-text>
                        Se estara incomporando un nuevo miembro a la junta directiva, con el
                        cual se necesitara de la aprobacion de los residentes del condomio.
                    </b-card-text>
                    <b-button href="#" variant="primary">leer mas</b-button>
                </b-card>

                <b-card class="mt-4"  bg-variant="dark" text-variant="white" title="Decoracion navideña">
                    <b-img src=""></b-img>
                    <b-card-text>
                        Para la decoracion navideña a todo el resinto del condominio 
                        se necesitara del apoyo y la colaboracion de todos los residentes
                        del condominio.
                    </b-card-text>
                    <b-button href="#" variant="primary">leer mas</b-button>
                </b-card>
                <!-- <b-card
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
                </b-card> -->
            </div>
        </div>
    </div>
</template>

<script>
import MainNav from '@/components/MainNav';

export default {
    name: 'News',
    data(){
        return {
            
        }
    },
    // components: {
    //     MainNav
    // }
    
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
    /* .container .menu{
        border-style: solid;
		border-color: blue;
    } */
    .container .news{
        /* border-style: solid;
		border-color: red; */
        margin-right: 6%;
    }
    .menu .nav-item .nav-link:focus{
        background-color: grey;
        color: black;

    }
</style>