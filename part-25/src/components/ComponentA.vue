<script>
import ComponentB from './ComponentB.vue';
export default {
    data() {
        return {
            receiveMsg: ""
        }
    },
    components: {
        ComponentB
    },
    methods: {
        dataFn(data) {
            console.log(data)
            this.receiveMsg = data
        }
    }
}
</script>
<template>
    <h3>Component A</h3>
    <ComponentB title="标题" :onEvent="dataFn"/>
    <p>{{ receiveMsg }}</p>
</template>