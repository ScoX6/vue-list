<template>
  <p :style="{color:activeColor, fontSize:fontSize}">style绑定1</p>
  <p :style="styleObject">style绑定2</p>
  <p :style="[styleObject]">style绑定3</p>
</template>
<script>
export default {
  data() {
    return {
      activeColor: 'green',
      fontSize: '30px',
      styleObject: {
        color: 'orange',
        fontSize: '36px',
      }
    }
  }
}
</script>