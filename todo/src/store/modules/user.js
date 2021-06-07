import axios from 'axios';

export default{
    // 필수
    namespaced: true,
    state:{
        users: [],
    },
    mutations:{
        SET_USERS(state, users){
            state.users = users;
        },
    },
    actions:{
        getUsers({ commit }){
            axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
                // 2. 뒤에응답
                // this.users = res.data;
                commit('SET_USERS', res.data);
            });
        },
    }
}