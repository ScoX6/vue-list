<template>
    <h3>ComponentA</h3>
</template>
<script>
export default {
    data() {
        return {}
    },
    beforeUnmount() {
        console.log("ComponentA 即将被卸载");
    },
    unmounted() {
        console.log("ComponentA 已经被卸载");
    },
}
</script>