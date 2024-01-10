<template>
  <h3>Ancestors</h3>
  <Parent :title="message"/>
</template>
<script>
import Parent from './components/Parent.vue';
export default {
  data() {
    return {
      message: "Hello",
    }
  },
  components: {
    Parent,
  },
  // provide: {
  //   title2: "Hello Provide",
  // }
  provide() {
    return {
      title2: this.message,
    }
  }
}
</script>