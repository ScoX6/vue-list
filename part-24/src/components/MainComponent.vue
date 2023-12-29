<script>
import SearchComponent from './SearchComponent.vue'
export default {
  data() {
    return {
      search: ""
    }
  },
  components: {
    SearchComponent
  },
  methods: {
    getSearch(data) {
        this.search = data
    }
  }
}
</script>
<template>
    <h3>Main</h3>
    <SearchComponent @searchEvent="getSearch"/>
    <p>搜索内容：{{ search }}</p>
</template>