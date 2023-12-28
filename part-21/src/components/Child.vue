<template>
    <h3>Child</h3>
    <p>{{ pInt }}</p>
    <p>{{ pFloat }}</p>
    <p>{{ pString }}</p>
    <p v-for="item in pArray">{{ item }}</p>
    <p v-for="(item, index) in pObject">{{ index }}: {{ item }}</p>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props: [
        "pInt", "pFloat", "pString", "pArray", "pObject"
    ],
}
</script>