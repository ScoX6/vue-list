<template>
  <keep-alive>
    <component :is="tabComponent"></component>
  </keep-alive>
  <button @click="switchTabComponent">切换</button>
</template>
<script>
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'
export default {
  data() {
    return {
      tabComponent: "ComponentA",
    }
  },
  components: {
    ComponentA,
    ComponentB,
  },
  methods: {
    switchTabComponent() {
      this.tabComponent = this.tabComponent == "ComponentA" ? "ComponentB" : "ComponentA";
    }
  }
}
</script>