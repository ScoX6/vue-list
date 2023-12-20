<template>
  <p :class="{ 'active': isActive, 'text-danger': hasError }">class样式绑定1</p>
  <p :class="classObject">class样式绑定2</p>
  <p :class="[arrActive, arrHasError]">class样式绑定3</p>
  <p :class="[isActive ? 'active' : '', arrHasError]">class样式绑定4</p>
  <p :class="[{'active': isActive}, arrHasError]">class样式绑定5</p>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: true,
      classObject: {
        'active': true,
        'text-danger': true,
      },
      arrActive: "active",
      arrHasError: "text-danger",
    }
  }
}
</script>

<style>
.active {
  font-size: 30px;
}
.text-danger {
  color: red;
}
</style>