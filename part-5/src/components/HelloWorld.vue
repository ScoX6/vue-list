<template>
  <div>
    <p v-for="name in names">{{ name }}</p>
    <br/>
    <p v-for="name of names">{{ name }}</p>
    <br/>
    <ul>
      <li v-for="(item, index) in items">
        {{ index }} - {{ item.message }}
      </li>
    </ul>
    <div v-for="user in users">
      <p>{{ user.name }}</p>
      <img :src="user.pic" width="100" height="100" style="object-fit: cover;">
    </div>
    <div>
      <p v-for="(value, key, index) of userInfo">
        {{ key }} - {{ value }} - {{ index }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["Tom", "Rose", "Jack"],
      items: [
        {message: "Foo"},
        {message: "Bar"}
      ],
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
        }
      ],
      userInfo: {
        name: "iwen",
        age: 20,
      },
    }
  }
}
</script>