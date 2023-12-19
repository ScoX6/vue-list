<script>
export default {
    data() {
        return {
            msg: "active",
            dynamicId: "appId",
            dynamicTitle: "HaHa",
            buttonDisable: true,
            objectOfAtts: {
                class: "appClass",
                id: "appId"
            }
        }
    }
}
</script>

<template>
    <div>{{ msg }}</div>
    <div class="{{ msg }}" ></div>
    <div v-bind:class="msg"></div>
    <div v-bind:id="dynamicId"></div>
    <div v-bind:title="dynamicTitle"></div>
    <div :class="msg"></div>
    <div :id="dynamicId"></div>
    <div :title="dynamicTitle"></div>
    <button :disabled="buttonDisable">Button</button>
    <div v-bind="objectOfAtts"></div>
</template>