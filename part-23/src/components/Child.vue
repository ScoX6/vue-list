<script>
export default {
    data() {
        return {
            msg: "Hello，parent"
        }
    },  
    methods: {
        clickEventHandle() {
            console.log("clickEventHandle")
            this.$emit("someEvent", this.msg)
        }
    }
}
</script>
<template>
    <h3>Child</h3>
    <button @click="clickEventHandle">传递数据</button>
</template>