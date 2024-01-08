<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: {
            type: String
        },
        onEvent: {
            type: Function
        }
    }
}
</script>
<template>
    <h3>Component B</h3>
    <p>{{ title }}</p>
    <p>{{ onEvent('传递数据') }}</p>
</template>