<template>
  <component :is="tabComponent"></component>
  <button @click="switchComponentHandle">切换</button>
</template>
<script>
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';
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
    switchComponentHandle() {
      if (this.tabComponent == "ComponentA") {
        this.tabComponent = "ComponentB"
      }else {
        this.tabComponent = "ComponentA"
      }
    }
  }
}
</script>