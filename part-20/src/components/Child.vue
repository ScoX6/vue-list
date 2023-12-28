<template>
    <h3>Child</h3>
    <p>{{ title }}</p>
    <p>{{ msg }}</p>
    <p>{{ msg2 }}</p>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: [
        "title",
        "msg",
        "msg2",
    ],
}
</script>