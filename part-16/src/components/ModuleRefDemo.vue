<template>
  <div ref="container" class="container">{{ content }}</div>
  <button @click="getElementHandle">获取container元素</button>
</template>
<script>
export default {
  data() {
    return {
      content: "内容"
    }
  },
  methods: {
    getElementHandle() {
      console.log(this.$refs.container);
      this.$refs.container.innerHTML = "哈哈哈";
    }
  }
}
</script>



