<template>
    <p>数组变化侦听</p>
    <ul>
        <li v-for="(item, index) of names" :key="index">{{ item }}</li>
    </ul>
    <button @click="addJohn">添加 John</button>
</template>

<script>
export default {
    data() {
        return {
            names: [
                "Rose", "Tom", "Jack", "Taylor"
            ]
        }
    },
    methods: {
        addJohn() {
            this.names.push("John");
            // this.names.concat(["John"]); // 不会引起UI自动刷新
            // this.names = this.names.concat(["John"]);
        }
    }
}
</script>

