<template>
  <h3>侦听器</h3>
  <p>{{ message }}</p>
  <button @click="updateHandle">修改数据</button>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello" 
    }
  },
  methods: {
    updateHandle() {
      this.message = "World";
    }
  },
  watch: {
    message(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
}
</script>
