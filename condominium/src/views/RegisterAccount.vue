<template>
    <div>
        <main class="login-desing">
            <div class="waves">
                <img src="@/assets/Apartmentt1.png" alt="">
            </div>
            <div class="login">
                <div class="login-data">
                    <img src="@/assets/apartmenttt.png" alt="">
                    <h1>register account</h1>
                    <b-form class="login-form">
                        <b-input-group>
                            <b-form-input
                            id="name"
                            v-model="name"
                            placeholder="Name"
                            >
                            </b-form-input>

                            <b-form-input
                            id="surname"
                            v-model="surname"
                            placeholder="surname"
                            >
                            </b-form-input>
                        
                        </b-input-group>
                        <b-input-group>
                            <b-form-input
                            id="email"
                            v-model="email"
                            placeholder="email"
                            >
                            </b-form-input>
                            
                            <b-form-input
                            id="password"
                            v-model="password"
                            placeholder="password"
                            >
                            </b-form-input>
                            
                        </b-input-group>
                        <b-link href="/login">¿Iniciar Session?</b-link>
                        <b-button class="btn-account">Registrar cuenta</b-button>

                    </b-form>
                </div>
            </div>

        </main>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return {
                name: '',
                surname: '',
                email: '',
                password: '',
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
        display: flex;
        position: relative;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 1.5rem;
        gap: 20px;
    }
    
    .input-group input {
        border: none;
        border-bottom: 3px solid rgb(158, 33, 158);
        

    }
    /*.input-group input:focus{
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
    } */

    
</style>