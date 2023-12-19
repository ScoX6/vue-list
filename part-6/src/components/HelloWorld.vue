<template>
  <h3>
    key 属性添加到v-for中
  </h3>
  <p v-for="(item, index) of names" :key="index">{{ item }}</p>
  <ol>
    <li v-for="user of users" :key="user.id">{{ user.name }}</li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      names: ["Tom", "Rose", "Jack", "Taylor"],
      users: [
        {
          id: 1,
          name: "Tom",
          pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
        },
        {
          id: 2,
          name: "Rose",
          pic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
        },
        {
          id: 3,
          name: "Jack",
          pic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 4,
          name: "Taylor",
          pic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
        },
      ],
    }
  }
}
</script>


