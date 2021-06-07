export default{
    namespaced: true,
    // 데이터 들어가는 곳
    state:{
        todos: [
            {id:1, text: 'buy a car', checked: false},
            {id:2, text: 'play game', checked: false},
        ],
        // users: [],
    },
    // state안의 데이터 바꾸는곳 (commit으로 연결)
    mutations:{

        ADD_TODO(state, value){
            state.todos.push({
                id : Math.random(),
                text : value,
                checked : false
            });
        },
        TOGGLE_TODO(state, {id, checked}){
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId){
            const index = state.todos.findIndex(todo =>{
                return todo.id === todoId;
              });
            state.todos.splice(index, 1);
        }
    },
    // axios 설치
    // 비동기작업 & state 데이터 변경 (dispatch로 연결)
    actions:{

        // context(commit, dispatch 포함), payload(데이터)
        addTodo({commit}, value){
            setTimeout(function(){
                commit('ADD_TODO', value);
            }, 500);
        },
        toggleTodo({commit}, payload){
            setTimeout(function(){
                commit('TOGGLE_TODO', payload);
            }, 500);        
        },
        deleteTodo({commit}, todoId){
            setTimeout(function(){
                commit('DELETE_TODO', todoId);
            }, 500);
        },
    },
    getters:{
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
}