<script>
import Child from './Child.vue';
export default {
    components: {
        Child
    },
    methods: {
        getHandle(msg) {
            console.log("触发了")
            this.message = msg
        }
    },
    data() {
        return {
            message: ""
        }
    }
}
</script>
<template>
    <h3>组件事件</h3>
    <Child @someEvent="getHandle"/>
    <p>来自child的数据: {{ message }}</p>
</template>