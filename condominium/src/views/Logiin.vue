<template>
    <div>
        <main class="login-desing">
            <div class="waves">
                <img src="@/assets/Apartmentt1.png" alt="">
            </div>
            <div class="login">
                <div class="login-data">
                    <img src="@/assets/apartmenttt.png" alt="">
                    <h1>Inicio de Session</h1>
                    <b-form class="login-form">
                        <b-input-group>
                            <label for="email" class="input-fill">
                            <span>Email</span>
                            </label>
                            <b-form-input
                            id="email"
                            v-model="email"
                            >
                            </b-form-input>
                        
                        </b-input-group>
                        <b-input-group>
                            <label for="password" class="input-fill">
                                <span>Contraseña</span>
                            </label>
                            <b-form-input
                            id="password"
                            v-model="password"
                            >
                            </b-form-input>
                            
                        </b-input-group>
                        <b-link to="signup">¿No tienes cuenta?</b-link>
                        <b-button 
                        class="btn-login"
                        @click="setSession()"
                        >Iniciar Session</b-button>

                    </b-form>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        name: 'Login',
        data(){
            return {
                email: '',
                password: '',
            }
        },
        computed: {
            ...mapState('login', ['session']),
        },
        methods: {
            ...mapMutations('login', ['setSessionUser', 'setNav']),
            setSession(){
                this.setSessionUser(true);
                this.setNav('main');

                this.$router.push('/news');
            }
        }
        
        
    }
</script>

<style scoped>
    .login-desing {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        height: 100vh;
        
    }
    .waves{
        background: url('../assets/logi.png') no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .waves img {
        width: 60%;
    }
    .login-data img{
        width: 150px;
    }
    .login-data{
        text-align: center;
        width: 80%;
        
    }
    .input-group{
        position: relative;
        width: 60%;
        margin: 0 auto;
        margin-bottom: 1.5rem;
    }
    
    .input-group input {
        border: none;
        border-bottom: 3px solid rgb(158, 33, 158);
        width: 100%;
        height: 2rem;
        padding-left: 2rem;
        line-height: 147%;
        padding-top: 1rem;
        padding-bottom: 0.5rem;

    }
    .input-group input:focus{
        outline: none;
        border-color: #7A7A7A;
    }
    .login-form a{
        display: block;
        width: 85%;
        text-align: right;
        text-decoration: none;
        color: rgb(158, 33, 158);
        margin-bottom: 1.3rem;
        transition: 0.3s ease-in-out all;
    }
    .login-form a:hover{
        color: #7A7A7A;
    }

    
</style>