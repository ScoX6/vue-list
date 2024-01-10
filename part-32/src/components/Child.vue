<template>
    <h3>Child</h3>
    <p>{{ title }}</p>
    <p>{{ title2 }}</p>
    <p>{{ fullMessage }}</p>
    <p>{{ rootMessage }}</p>
</template>
<script>
export default {
    data() {
        return {
            fullMessage: this.title
        }
    },
    props: {
        title: {
            type: String
        }
    },
    inject: [
        "title2",
        "rootMessage"
    ]
}
</script>