<template>
    <h3>Parent</h3>
    <Child :title="title" :message="message" :names="names" :age="age" />
</template>
<script>
import Child from './Child.vue';
export default {
    data() {
        return {
            title: 12,
            message: "Hello World",
            names: ["John", "Jane", "Jim"],
            age: 22
        }
    },
    components: {
        Child,
    }
}
</script>