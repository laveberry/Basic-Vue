<template>
    <div>
    Completed Todo: {{ numberOfCompletedTodo }}
    {{ todos }}
    </div>
</template>

<script>
export default {
    // props:{
    //     todos:{
    //         type: Array,
    //         required : true
    //     }
    // },
    
    // state값 가져올때 작성
    computed:{
        // todos(){
        //     return this.$store.state.todos;
        // },
        numberOfCompletedTodo(){
            // return this.todos.filter(todo => todo.checked).length;
            // return this.$store.getters.numberOfCompletedTodo;
            return this.$store.getters['todo/numberOfCompletedTodo'];
        }
    }
}
</script>

<style>

</style>