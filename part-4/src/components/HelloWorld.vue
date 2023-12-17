<template>
  <h3 v-if="ifFlag1">条件渲染</h3>
  <h3 v-else>ifFlag1为假</h3>
  <h3 v-if="ifFlag2">ifFlag2为真</h3>
  <h3 v-if="ifFlag3==1">ifFlag3 为1</h3>
  <h3 v-else-if="ifFlag3==2">ifFlag3 为2</h3>
  <h3 v-else>ifFlag3 既不为1也不为2</h3>
  <h3 v-show="showFlag">showFlag为真</h3>
</template>

<script>
  export default {
    data() {
      return {
        ifFlag1: false,
        ifFlag2: true,
        ifFlag3: 3,
        showFlag: false,
      }
    },
  } 
</script>
