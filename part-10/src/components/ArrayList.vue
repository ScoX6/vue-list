<template>
    <p>数组变化侦听</p>
    <ul>
        <li v-for="(item, index) of names" :key="index">{{ item }}</li>
    </ul>
    <button @click="addJohn">添加 John</button>
    <br><br>
    <h3>数组1</h3>
    <p v-for="(item, index) of nums1" :key="index">{{ item }}</p>
    <h3>数组2</h3>
    <p v-for="(item, index) of nums2" :key="index">{{ item }}</p>
    <button @click="mergeNum2to1">合并数组2到数组1</button>
</template>

<script>
export default {
    data() {
        return {
            names: [
                "Rose", "Tom", "Jack", "Taylor"
            ],
            nums1: [1,2,3,4,5],
            nums2: [6,7,8,9,10],
        }
    },
    methods: {
        addJohn() {
            this.names.push("John");
            // this.names.concat(["John"]); // 不会引起UI自动刷新
            // this.names = this.names.concat(["John"]);
        },
        mergeNum2to1() {
            this.nums1 = this.nums1.concat(this.nums2);
        }
    }
}
</script>

