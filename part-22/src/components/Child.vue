<template>
    <h3>Child</h3>
    <p>{{ title }}</p>
    <p>{{ message }}</p>
    <p v-for="name in names">{{ name }}</p>
    <p>{{ age }}</p>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: {
            type: [String, Number, Array, Object],
            default: 'default title'
        },
        message: {
            type: String,
            default: 'default message',
        },
        // 数字和字符串可以直接default, 但是如果是数组和对象，必须通过工厂函数返回默认值
        names: {
            type: Array,
            default() {
                return ['Null']
            }
        },
        age: {
            type: Number,
            required: true,
        }
    }
}
</script>