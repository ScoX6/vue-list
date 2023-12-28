<template>
    <h3>Parent</h3>
    <Child :pInt="pInt" :pFloat="pFloat" :pString="pString" :pArray="pArray" :pObject="pObject" />
</template>
<script>
import Child from './Child.vue'
export default {
    data() {
        return {
            pInt: 12,
            pFloat: 12.5,
            pString: "Hello World",
            pArray: [
                "Hello",
                "World"
            ],
            pObject: {
                name: "John",
                age: 25
            }
        }
    },
    components: {
        Child
    }
}
</script>