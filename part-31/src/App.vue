<template>
  <component :is="tabComponent"></component>
  <button @click="switchTabComponent">切换</button>
</template>
<script>
import { defineAsyncComponent } from 'vue';
import ComponentA from './components/ComponentA.vue';
const ComponentB = defineAsyncComponent(() => import('./components/ComponentB.vue'))
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
  },
}
</script>