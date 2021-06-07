<template>
    <div class="mb-2 d-flex">
        <div>
            <!-- <input type="checkbox" :checked="todo.checked"> -->
            {{ todo.checked }}
            <input type="checkbox" 
                :checked="todo.checked"
                @change="toggleCheckBox"
            >
        </div>

        <span 
            class="ml-3 flex-grow-1"
            :class="todo.checked ? 'text-muted' : ''"
            :style="todo.checked ? 'text-decoration: line-through':''"
        >
          {{ todo.text }}
        </span>
        <button 
            class="btn btn-danger btn-sm"
            @click="clickDelete"
        >Delete</button>

        {{ numberOfCompletedTodo }}
    </div>
</template>

<script>
export default {
    props:{
        todo:{
            type : Object,
            require : true
        }
    },
    methods:{
        toggleCheckBox(e){
            // console.log("토글박스안")
            // this.$emit('toggle-checkbox',{
            //     id : this.todo.id,
            //     checked : e.target.checked
            // })

            // this.$store.commit('TOGGLE_TODO',{
            //     id : this.todo.id,
            //     checked : e.target.checked
            // })

            this.$store.dispatch('todo/toggleTodo', {
                id : this.todo.id,
                checked : e.target.checked
            });

        },
        clickDelete(){
            // this.$emit('click-delete',this.todo.id)
            // this.$store.commit('DELETE_TODO', this.todo.id);
            // this.$store.dispatch('deleteTodo', this.todo.id);
            this.$store.dispatch('todo/deleteTodo', this.todo.id);
        }
    },
    computed:{
        numberOfCompletedTodo(){
            // return this.$store.getters.numberOfCompletedTodo;
            return this.$store.getters['todo/numberOfCompletedTodo'];
        }
    }
}
</script>

<style>

</style>