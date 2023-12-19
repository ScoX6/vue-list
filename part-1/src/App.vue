<template>
  <h3>模板语法</h3>
  <p>{{ msg }}</p>
  <p>{{ hello }}</p>
  <p>{{ number + 1 }}</p>
  <p>{{ ok ? "真" : "假" }}</p>
  <p>{{ msg.split('').reverse().join('') }}</p>
  <!-- <p>{{ var a = 10 }}</p> -->
  <!-- <p>{{ if (ok) { return msg } }}</p> -->
  <p>{{ rawHtml }}</p>
  <p v-html="rawHtml"></p>
</template>

<script>

export default {
  data() {
    return {
      msg: "模板语法",
      hello: "Hello, World",
      number: 10,
      ok: false,
      rawHtml: "<a href='https://www.baidu.com'>百度一下</a>"
    }
  }
}

</script>

