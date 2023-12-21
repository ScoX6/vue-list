<template>
  <h3>表单输入绑定</h3>
  <form>
    <input type="text" v-model.lazy="message">
    <br>
    <input type="checkbox" id="checkbox" v-model="checked"/>
    <p>{{ message }}</p>
    <p>是否选中：{{ checked }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      checked: false,
    }
  }
}
</script>