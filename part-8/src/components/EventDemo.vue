<template>
  <h3>内联事件处理器</h3>
  <button @click="addCount">Add (不带参数)</button>
  <br>
  <button @click="addCount2(2)">Add (带参数)</button>
  <p>{{ count }}</p>
</template>
<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    addCount(e) {
      // Vue中的event对象，就是原生JS事件的event对象
      e.target.innerHTML = "Add （不带参数）" + this.count;
      this.count++;
    },
    addCount2(num) {
      this.count += num;
    },
  }
}
</script>