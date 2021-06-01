<template>
  <!-- 하나의 태그 먼저 존재해야함 -->
  <div>
    <h1>This is Home page</h1>
    <p>{{ name }}</p>
    <!-- <MoonSun title="home title" /> -->
        <MoonSun/>

    <!-- 자식데이터 부모로 넘겨서 값변경 적용 -->
    <form action="">
      <!-- <InputField :name="name" @update-name="name = $event.target.value" /> -->
      <!-- @update-name="updateName" -->
      <InputField v-model="name" />
      <br><button>Submit</button>
    </form>
    {{ name }}

  </div>
</template>

<script>

import MoonSun from '@/components/MoonSun.vue';
import InputField from '@/components/InputField.vue';

export default {
  components:{
    MoonSun,
    InputField,
  },
  data(){
    return {
      // name : 'MoonSun'
      name: ''
    }
  },
  // methods:{
  //   updateName(name){
  //     this.name = name;
  //   }
  // }
}
</script>

// scoped : template안의 html안에서만 css적용
<style scoped>
  h1{
    color: pink;
  }
</style>