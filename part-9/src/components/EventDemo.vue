<template>
  <h3>事件修饰符</h3>
  <a @click="clickHandle" href="https://www.google.co.jp">Google</a>
  <br>
  <a @click.prevent="clickHandle2" href="https://www.google.co.jp">Google</a>
  <br>
  <div @click="clickDiv">
    <p @click.stop="clickP">测试冒泡</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    clickHandle(e) {
      e.preventDefault(); // 通过event阻止默认事件
      console.log("点击了");
    },
    clickHandle2() {
      console.log("点击了");
    },
    clickDiv() {
      console.log("div标签被点击了");
    },
    clickP() {
      console.log("p标签被点击了");
    }
  }
}
</script>