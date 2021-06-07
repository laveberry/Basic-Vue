<template>
  <div>
      User List
      <div v-for="user in users" :key="user.id">
          {{user.name}}
      </div>
  </div>
</template>

<script>
// import axios from 'axios';
import {mapState, mapActions} from 'vuex';

export default {
    // data(){
        // return{
        //     users: []
        // }
    // },
    created(){
        // promise리턴되고 then으로 받을 수 있음
            this.getUsers();

        const a = 1;
        // 1. 먼저응답
        console.log(a);
    },
    computed:{
        // users(){
        //     return this.$store.state.users;
        // },
        // todos(){
        //     return this.$store.state.todos;
        // },

        // store의 state 자동매핑
        // ...mapState(
        //     // [
        //     // 'users',
        //     // //todos의 이름 바꾸기(객체형태)
        //     // {do : 'todos'}
        //     // ]
        //     {users : state => state.user.users}
        // )

        // user를 앞에 적어주고 뒤에 빼기
        // ...mapState('user',{users: state => state.users})
        // 같은 명칭 사용시 줄이기
        ...mapState('user', ['users'])
    },
    methods: {
        // getUsers(){
        //     // store로 이동
        //     // axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
        //     //     // 2. 뒤에응답
        //     //     console.log(res);
        //     //     this.users = res.data;
        //     // });

        //     this.$store.dispatch('getUsers');
        // }

        // ...mapActions(['getUsers'])
        // 앞에 모듈이름 써주기
        ...mapActions('user', ['getUsers'])
    }
}
</script>

<style>

</style>