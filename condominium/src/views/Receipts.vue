<template>
    <div>
        <!-- <MainNav/>  -->
        <div class="container">
            <div class="menu-receipts">
                <b-nav vertical pills>
                    <b-nav-item to="receipts" active>recibos abiertos</b-nav-item>
                    <b-nav-item to="#">recibos pagados</b-nav-item>
                    <b-nav-item to="#" >recibos cancelados</b-nav-item>
                </b-nav>
            </div>
            <div class="receipts">
                <b-card no-body class="overflow-hidden card-receipts">
                     <template #header>
                        <b-row class="date-receipts">
                            <b-col class="input-date">
                                <span>Fecha de Factura</span>
                                <input type="date" value="2021-11-01">
                            </b-col>
                            <b-col class="input-date">
                                <span>Fecha de Vencimiento</span>
                                <input type="date" value="2021-11-07">
                            </b-col>
                            <b-col>
                                <div>
                                    <span>State:</span>
                                    <span class="state-receipts">Abierto</span>
                                    
                                </div>

                            </b-col>
                        </b-row>
                    </template>
                    <b-card-body>
                        <b-row class="receipts-inquilinos">
                            <b-col>
                                <b-card-text>Inquilino:</b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>Maturin </b-card-text>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-card-text>
                                    Servicio
                                </b-card-text>
                                <b-card-text>
                                    Luz
                                </b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>
                                    Cuenta
                                </b-card-text>
                                <b-card-text>
                                    5111001 Servicio Electrico
                                </b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>
                                    Cantidad
                                </b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>
                                    Monto del Impuesto
                                </b-card-text>
                                <b-card-text>
                                    5,62Bs
                                </b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>
                                    Subtotal
                                </b-card-text>
                                <b-card-text>
                                    5,62Bs
                                </b-card-text>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <template  #footer>
                        <div class="footer-receipts">
                            <div class="receipts-modal">
                                <b-button id="show-btn" @click="$bvModal.show('bv-modal-example1')">Pagar</b-button>
                                <b-modal id="bv-modal-example1"  hide-backdrop size="xl" hide-footer>
                                    <template #modal-title>
                                        Validar Pagos
                                    </template>
                                    <form>
                                        <b-row>
                                            <b-col>
                                                <p>Fecha de Pago</p>
                                                <p>08/09/2021</p>
                                            </b-col>
                                            <b-col>
                                                <p>Reference</p>
                                                <p>4565456623</p>
                                            </b-col>
                                            <b-col>
                                                <p>Amount</p>
                                                <p>225.346.454,00</p>
                                            </b-col>
                                            <b-col>
                                                <p>conciled</p>
                                                <b-form-checkbox
                                                id="checkbox-1"
                                                v-model="status"
                                                name="checkbox-1"
                                                >
                                                </b-form-checkbox>
                                            </b-col>
                                            <b-col>
                                                <p>Banck account</p>
                                                <p>Banesco-0134-040110-4011110596</p>
                                            </b-col>
                                        </b-row>
                                    </form>
                                    
                                    
                                    <!-- <div class="d-block text-center">
                                    <h3>Hello From This Modal!</h3>
                                    </div> -->
                                    <b-button @click="hideModal('bv-modal-example1')">Close Me</b-button>
                                    <b-button @click="toggleModal('bv-modal-example1')">Toggle Me</b-button>
                                </b-modal>
                            </div>
                            <div class="receipts-price">
                                <b-row>
                                    <b-col>
                                        <p>Base Imponible</p>
                                    </b-col>
                                    <b-col>
                                        5,62Bs
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <p>Impuesto</p>
                                    </b-col>
                                    <b-col>
                                        0,00Bs
                                        <hr class="linea-receipts">
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <p>Total</p>
                                    </b-col>
                                    <b-col>
                                        5,62Bs
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </template>
                </b-card>


                <b-card no-body class="overflow-hidden card-receipts">
                     <template #header>
                        <b-row class="date-receipts">
                            <b-col class="input-date">
                                <span>Fecha de Factura</span>
                                <input type="date" value="2021-11-09">
                            </b-col>
                            <b-col class="input-date">
                                <span>Fecha de Vencimiento</span>
                                <input type="date" value="2021-11-16">
                            </b-col>
                            <b-col>
                                <span>State:</span>
                                <span class="state-receipts">Abierto</span>
                            </b-col>
                        </b-row>
                    </template>
                    <b-card-body>
                        <b-row class="receipts-inquilinos">
                            <b-col>
                                <b-card-text>Inquilino:</b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>Pepe </b-card-text>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-card-text>
                                    Servicio
                                </b-card-text>
                                <b-card-text>
                                    Agua
                                </b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>
                                    Cuenta
                                </b-card-text>
                                <b-card-text>
                                    6784543 Servicio de Agua
                                </b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>
                                    Monto del Impuesto
                                </b-card-text>
                                <b-card-text>
                                    7,62Bs
                                </b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>
                                    Subtotal
                                </b-card-text>
                                <b-card-text>
                                    7,62Bs
                                </b-card-text>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <template  #footer>
                        <div class="footer-receipts">
                            <div class="receipts-modal">
                                <b-button id="show-btn" @click="$bvModal.show('bv-modal-example2')">Pagar</b-button>
                                <b-modal id="bv-modal-example2"  hide-backdrop size="xl" hide-footer>
                                    <template #modal-title>
                                        validar pagos
                                    </template>
                                    <form>
                                        <b-row>
                                            <b-col>
                                                <p>Fecha de Pago</p>
                                                <p>08/09/2021</p>
                                            </b-col>
                                            <b-col>
                                                <p>Reference</p>
                                                <p>4565456623</p>
                                            </b-col>
                                            <b-col>
                                                <p>Amount</p>
                                                <p>225.346.454,00</p>
                                            </b-col>
                                            <b-col>
                                                <p>conciled</p>
                                                <b-form-checkbox
                                                id="checkbox-2"
                                                v-model="status"
                                                name="checkbox-2"
                                                >
                                                </b-form-checkbox>
                                            </b-col>
                                            <b-col>
                                                <p>Banck account</p>
                                                <p>Banesco-0134-040110-4011110596</p>
                                            </b-col>
                                        </b-row>
                                    </form>
                                    <b-button @click="hideModal('bv-modal-example2')">Close Me</b-button>
                                    <b-button @click="toggleModal('bv-modal-example2')">Toggle Me</b-button>
                                </b-modal>
                            </div>
                            <div class="receipts-price">
                                <b-row>
                                    <b-col>
                                        <p>Base Imponible</p>
                                    </b-col>
                                    <b-col>
                                        7,62Bs
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <p>Impuesto</p>
                                    </b-col>
                                    <b-col>
                                        0,00Bs
                                        <hr class="linea-receipts">
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <p>Total</p>
                                    </b-col>
                                    <b-col>
                                        7,62Bs
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </template>
                </b-card>

                <b-card no-body class="overflow-hidden card-receipts">
                     <template #header>
                        <b-row class="date-receipts">
                            <b-col class="input-date">
                                <span>Fecha de Factura</span>
                                <input type="date" value="2021-11-18">
                            </b-col>
                            <b-col class="input-date">
                                <span>Fecha de Vencimiento</span>
                                <input type="date" value="2021-11-25">
                            </b-col>
                            <b-col>
                                <span>State:</span>
                                <span class="state-receipts">Abierto</span>
                            </b-col>
                        </b-row>
                    </template>
                    <b-card-body>
                        <b-row class="receipts-inquilinos">
                            <b-col>
                                <b-card-text>Inquilino:</b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>Alex</b-card-text>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-card-text>
                                    Servicio
                                </b-card-text>
                                <b-card-text>
                                    Gas
                                </b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>
                                    Cuenta
                                </b-card-text>
                                <b-card-text>
                                    8754321 Servicio de Gas
                                </b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>
                                    Monto del Impuesto
                                </b-card-text>
                                <b-card-text>
                                    4,50Bs
                                </b-card-text>
                            </b-col>
                            <b-col>
                                <b-card-text>
                                    Subtotal
                                </b-card-text>
                                <b-card-text>
                                    4,50Bs
                                </b-card-text>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <template  #footer>
                        <div class="footer-receipts">
                            <div class="receipts-modal">
                                <b-button id="show-btn" @click="$bvModal.show('bv-modal-example3')">Pagar</b-button>
                                <b-modal id="bv-modal-example3"  hide-backdrop  size="xl" hide-footer>
                                    <template #modal-title>
                                        Validar Pagos
                                    </template>
                                    <form>
                                        <b-row>
                                            <b-col>
                                                <p>Fecha de Pago</p>
                                                <p>08/09/2021</p>
                                            </b-col>
                                            <b-col>
                                                <p>Reference</p>
                                                <p>4565456623</p>
                                            </b-col>
                                            <b-col>
                                                <p>Amount</p>
                                                <p>225.346.454,00</p>
                                            </b-col>
                                            <b-col>
                                                <p>conciled</p>
                                                <b-form-checkbox
                                                id="checkbox-1"
                                                v-model="status"
                                                name="checkbox-1"
                                                >
                                                </b-form-checkbox>
                                            </b-col>
                                            <b-col>
                                                <p>Banck account</p>
                                                <p>Banesco-0134-040110-4011110596</p>
                                            </b-col>
                                        </b-row>
                                    </form>
                                    <b-button @click="hideModal('bv-modal-example3')">Close Me</b-button>
                                    <b-button @click="toggleModal('bv-modal-example3')">Toggle Me</b-button>
                                </b-modal>
                            </div>
                            <div class="receipts-price">
                                <b-row>
                                    <b-col>
                                        <p>Base Imponible</p>
                                    </b-col>
                                    <b-col>
                                        4,50Bs
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <p>Impuesto</p>
                                    </b-col>
                                    <b-col>
                                        0,00Bs
                                        <hr class="linea-receipts">
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <p>Total</p>
                                    </b-col>
                                    <b-col>
                                        4,50Bs
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </template>
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
                status: ''
            
            }
        },
        methods: {
            showModal() {
                this.$root.$emit('bv::show::modal', 'bv-modal-example1')
            },
            hideModal(modalId) {
                console.log('hideModallllllllllllllllllllllllllllll');
                console.log(modalId)
                this.$root.$emit('bv::hide::modal', modalId)
            },
            toggleModal(modalId) {
                console.log('toggleModallllllllllllllllllllllllllll');
                console.log(modalId);
                this.$root.$emit('bv::toggle::modal', modalId)
            }
        }
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
        min-height: 100vh;


    }
    /* .container .menu-receipts{
        border-style: solid;
		border-color: blue;
    } */
    .container .receipts{
        /* border-style: solid;
		border-color: red; */
        margin-right: 6%;
    }
    .menu-receipts .nav-item .nav-link:focus{
        background-color: grey;
        color: black;

    }
    .receipts .footer-receipts{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        /* max-width: 40%;
        margin-left: 65%; */
        /* border-style: solid;
		border-color: red; */
    }
    .receipts .receipts-price{
        /* border-style: solid;
		border-color: rgb(4, 0, 255); */
        /* max-width: 40%; */
        margin-left: 30%;
        
    }
    .receipts .receipts-price .row{
        margin-bottom: -15px;
    }
    .receipts .date-receipts .input-date{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .receipts .card-body .receipts-inquilinos{
        margin-bottom: 30px;
    }
    .receipts .state-receipts{
        border: 2px solid blue;
        /* background-color:blue; */
        border-radius: 25px;
        margin-left: 10px;
    }
    .receipts .card{
        margin-bottom: 50px;
    }
    /* .receipts .receipts-modal{
        border-style: solid;
		border-color: rgb(94, 255, 0);
    } */
    .receipts #show-btn{
        width: 40%;
        height: 60%;
    }
</style>