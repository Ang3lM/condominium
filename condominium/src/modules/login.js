export default{
    namespaced: true,
    state: {
        session: false,
        nav: ''
    },
    mutations: {
        setSessionUser(state, value){
            state.session = value;
        },
        setNav(state, value){
            state.nav = value;
        }
    },
    actions: {
       
    },
    getters:{

    }
}