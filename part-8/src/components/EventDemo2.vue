<template>
    <h3>事件传参</h3>
    <p v-for="(item, index) of names" :key="index" @click="getNameHandle(item, $event)">
        {{ item }}
    </p>
</template>
<script>
export default {
    data() {
        return {
            names: ["iwen", "ime", "frank"]
        }
    },
    methods: {
        getNameHandle(name, e) {
            console.log(e);
            console.log(name);
        }
    }
}
</script>