<template>
    <h3>Parent</h3>
    <Child title="来自parent的关爱" msg="Hi 儿子" :msg2="msg"/>
</template>
<script>
import Child from './Child.vue'
export default {
    components: {
        Child,
    },
    data() {
        return {
            msg: "Hi 儿子"
        }
    }
}
</script>