<template>
    <div>
        <Todo
            v-for="todo in todos" 
            :key="todo.id"
            :todo="todo"
            @toggle-checkbox="toggleCheckBox"
            @click-delete="deleteTodo"
        />
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
    components:{
        Todo
    },
    // props:{
    //     todos:{
    //         type: Array,
    //         required : true
    //     }
    // },

    computed:{
      todos(){
        //   return this.$store.state.todos;
        // 모듈화 적용 후
          return this.$store.state.todo.todos;
      }  
    },

    methods:{
        // Todo 컴포넌트에서 이미 보낸것을 List에서 다시 받아서 App으로 올려줌
        toggleCheckBox(value){
            this.$emit('toggle-checkbox', value)
        },
        deleteTodo(todoId){
            this.$emit('click-delete', todoId)
        }
    }
}
</script>

<style>

</style>