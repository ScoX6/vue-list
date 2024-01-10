<template>
    <h3>Parent</h3>
    <Child :title="title"/>
    <p>{{ rootMessage }}</p>
</template>
<script>
import Child from './Child.vue';
export default {
    data() {
        return {}
    },
    components: {
        Child,
    },
    props: {
        title: {
            type: String
        }
    },
    inject: [
        "rootMessage",
    ],
}
</script>