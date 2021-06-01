<template>
    <div>
        <label for="">Name</label>
        <!--   
            @input="updateName"
            @input="$emit('update-name', $event.target.value)"

         -->
        <input 
            type="text" 
            :value="name"
            style="padding: 30px; border: 2px solid green;"
            @input="$emit('update-name', $event)"
        >
        <input 
            type="text" 
            :value="value"
            style="padding: 30px; border: 2px solid green;"
            @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    // props: 자식쪽(컴포넌트쪽) 선언, 부모쪽에서 받아오는 데이터
    props:{
        name:{
            type:String,
            requred: true,
        },
        value:{
            type:String,
            requred: true,
        }
    },
    methods:{
        updateName(e){
            console.log(e.target.value);
            this.$emit('update-name', e.target.value);
        }
    }
}
</script>
<style>

</style>