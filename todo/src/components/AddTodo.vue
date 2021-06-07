<template>
    <input 
      v-model="todoText"
      type="text"
      class="w-100 p-2" 
      placeholder="Type todo"
      @keyup.enter="addTodo"
    >
</template>

<script>
export default {
    data(){
        return{
            todoText: '',
        }
    },
    methods:{
        addTodo(e){
            // this.$emit('add-todo', e.target.value);
            // 커밋 : 뮤테이션
            // this.$store.commit('ADD_TODO', e.target.value);
            // 디스패치 : 액션
            this.$store.dispatch('todo/addTodo', e.target.value);
            this.todoText= '';

        }
    }

}
</script>

<style>

</style>