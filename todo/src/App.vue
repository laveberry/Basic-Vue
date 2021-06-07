<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <!-- <input 
      v-model="todoText"
      type="text"
      class="w-100 p-2" 
      placeholder="Type todo"
      @keyup.enter="addTodo"
    > -->

    <CompletedTodo :todos="todos"/>
    <br>
    <!-- <AddTodo @add-todo="addTodo" /> -->
    <AddTodo />

    <hr>

    <!-- <Todo
      v-for="todo in todos" 
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckBox"
      @click-delete="deleteTodo"
    /> -->


    <!-- <TodoList 
      :todos="todos"
      @toggle-checkbox="toggleCheckBox"
      @click-delete="deleteTodo"
     /> -->
    <!-- <TodoList 
      @toggle-checkbox="toggleCheckBox"
      @click-delete="deleteTodo"
     /> -->
    
    <TodoList />

    <UserList />


    {{ todos }}

  </div>
</template>

<script>
// import Todo from '@/components/Todo.vue';
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo';
import CompletedTodo from '@/components/CompletedTodo';
import UserList from '@/components/UserList';


export default{
  components: {
    // Todo
    TodoList,
    AddTodo,
    CompletedTodo,
    UserList
  },
  data(){
    return{
      todoText: '',
      // todos: [
      //   {id:1, text: 'buy a car', checked: false},
      //   {id:2, text: 'play game', checked: false},
      // ]
    }
  },

  methods:{
    // deleteTodo(id){
      //store로 이동
      // const index = this.todos.findIndex(todo =>{
      //   return todo.id === id;
      // });
      // this.todos.splice(index, 1);

      // this.todos = this.todos.filter(todo => todo.id !== id);
    // },
    // addTodo(value){
      // console.log(e.target.value)

      // store로 이동!
      // this.todos.push({
      //   id : Math.random(),
      //   text : value,
      //   checked : false
      // });
// 
    //   this.todoText = '';
    // },
    
    // 자식에서 보낸 데이터 바로 받아오기
  //   toggleCheckBox({id, checked}){
  //     console.log(id, checked);
  //     // 인덱스 찾기
  //     const index = this.todos.findIndex(todo => {
  //       return todo.id === id;
  //   });
  //   this.todos[index].checked = checked;
  //   }
  }
}
</script>
