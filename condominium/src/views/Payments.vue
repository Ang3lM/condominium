<template>
    <div>
        <!-- <MainNav/>  -->
        <div class="container">
            <div class="menu-payments">
                <b-nav vertical pills>
                    <b-nav-item to="payments" active>pagos pagados</b-nav-item>
                    <b-nav-item to="#">pagos cancelados</b-nav-item>
                </b-nav>
            </div>
            <div class="payments">
                <b-card no-body class="overflow-hidden card-receipts">
                     <template #header>
                        <b-row class="date-payments">
                            <b-col>
                                <span>State:</span>
                                <span class="state-payments">Pagado</span>
                            </b-col>
                        </b-row>
                    </template>
                    <b-card-body>
                        <b-row class="payments-inquilinos">
                            <b-col>
                                <span>Inquilino:</span>
                                <span class="data-inquilino">Alex</span>
                            </b-col>
                            <b-col>
                                <span>Fecha de pago:</span>
                                <input class="data-inquilino" type="date" value="2021-11-27">
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <span>Persona:</span>
                                <span class="data-inquilino">Cliente</span>
                            </b-col>
                            <b-col>
                                <span>Code:</span>
                                <span class="data-inquilino">ANZMS/REC/2021/22594</span>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <span>Cantidad Pagada:</span>
                                <span class="data-inquilino">4,50Bs</span>
                            </b-col>
                            <b-col>
                                <span>Referencia:</span>
                                <span class="data-inquilino">7835613921</span>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>

                <b-card no-body class="overflow-hidden card-receipts">
                     <template #header>
                        <b-row class="date-payments">
                            <b-col>
                                <span>State:</span>
                                <span class="state-payments">Pagado</span>
                            </b-col>
                        </b-row>
                    </template>
                    <b-card-body>
                        <b-row class="payments-inquilinos">
                            <b-col>
                                <span>Inquilino:</span>
                                <span class="data-inquilino">Maturin</span>
                            </b-col>
                            <b-col>
                                <span>Fecha de pago:</span>
                                <input class="data-inquilino" type="date" value="2021-11-29">
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <span>Persona:</span>
                                <span class="data-inquilino">Cliente</span>
                            </b-col>
                            <b-col>
                                <span>Code:</span>
                                <span class="data-inquilino">ANZMS/REC/2021/56345</span>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <span>Cantidad Pagada:</span>
                                <span class="data-inquilino">7,62Bs</span>
                            </b-col>
                            <b-col>
                                <span>Referencia:</span>
                                <span class="data-inquilino">9846216543</span>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    import MainNav from '@/components/MainNav';

    export default {
        name: 'Payments',
        data(){
            return {

            }
        },
        // components : {
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
    /* .container .menu-payments{
        border-style: solid;
		border-color: blue;
    } */
    .container .payments{
        /* border-style: solid;
		border-color: red; */
        margin-right: 6%;
    }
    .menu-payments .nav-item .nav-link:focus{
        background-color: grey;
        color: black;

    }
    .payments .date-payments .input-date{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .payments .state-payments{
        border: 2px solid blue;
        /* background-color:blue; */
        border-radius: 25px;
        margin-left: 10px;
    }
    .payments .card .data-inquilino{
        margin-left: 10px;

    }
    .payments .card{
        margin-bottom: 50px;
    }
</style>