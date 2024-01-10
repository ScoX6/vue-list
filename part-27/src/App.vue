<template>
  <h3>组件的生命周期</h3>
  <p>{{ message }}</p>
  <button @click="update">Update</button>
</template>
<script>
/**
 * 生命周期函数
 *    创建期: beforeCreate、created
 *    挂载期: beforeMount、mounted
 *    更新期: beforeUpdate、updated
 *    销毁期: beforeUnmount、unmounted
 */
export default {
  data() {
    return {
      message: ""
    }
  },
  methods: {
    update() {
      this.message = "Hello"
    }
  },
  beforeCreate() {
    console.log("组件创建之前");
  },
  created() {
    console.log("组件已经完成创建");
  },
  beforeMount() {
    console.log("组件装载之前");
  },
  mounted() {
    console.log("组件已经完成装载");
  },
  beforeUpdate() {
    console.log("组件更新之前");
  },
  updated() {
    console.log("组件已完成更新");
  },
  beforeUnmount() {
    console.log("组件卸载之前");
  },
  unmounted() {
    console.log("组件已完成卸载");
  },
}
</script>