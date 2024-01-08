<template>
    <h3>Slots Fifth</h3>
    <slot name="header" :msg="childMessage"></slot>
</template>
<script>
export default {
    data() {
        return {
            childMessage: "子元素数据"
        }
    }
}
</script>