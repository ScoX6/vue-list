<template>
    <h3>ComponentB</h3>
    <p>{{ message }}</p>
    <button @click="updateHandle">更新数据</button>
    <br>
</template>
<script>
export default {
    data() {
        return {
            message: "默认数据"
        }
    },
    beforeUnmount() {
        console.log("ComponentB 即将被卸载");
    },
    unmounted() {
        console.log("ComponentB 已经被卸载");
    },
    methods: {
        updateHandle() {
            this.message = "Hello world";
        }
    },
}
</script>