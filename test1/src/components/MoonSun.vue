<template>
    <div>
        <h1>{{ title }}</h1>
        <p> {{ name }}</p>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
export default {
    // props:['title'],
    props:{
        title: {
            type: String, //타입설정
            default: 'default title',
            required : true, //무조건 보내야함
        },
        name:{
            type:String,
            default: 'default name',
            // required: false,
        }
    },
    data(){
        return {
            // name : 'moonsun!!',
        }
    },
    methods:{
        // 이런식으로 변경하지말고 이벤트로 부모에게보내서 변경
        updateName(){
            this.name = 'moonsun update';
        }
    }
}
</script>

<style>

</style>