<template>
  <button @click="count++">Add by inner</button>
  <br>
  <button @click="methodCountAdd">Add by method</button>
  <br>
  <button @dblclick="methodCountAdd2">Add 2 by method</button>
  <p>count: {{ count }}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    methodCountAdd() {
      this.count++;
    },
    methodCountAdd2() {
      this.count += 2;
    },
  }
}
</script>
