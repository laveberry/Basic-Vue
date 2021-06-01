<template>
  <div class="about">
    <h1>This is an about page?</h1>
    <MoonSun :title="title" name="달해" />
  </div>
</template>
<script>

import MoonSun from '@/components/MoonSun.vue';

export default {
  components: {
    MoonSun
  },
  data(){
    return {
      // 숫자로 넘길땐 이부분 숫자설정
      title: "About Title"
    }
  }
}
</script>

