<template>
  <h3>{{ user.name }}</h3>
  <p>{{ hobbyContent }}</p>
  <p>{{ hobbyContentWithMethod() }}</p>
</template>
<script>
export default {
    data() {
        return {
            user: {
                name: "Tom",
                age: 12,
                avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                gender: "male",
                hobby: [
                    "PingPong", "Basketball", "Football"
                ],
            }
        }
    },
    methods: {
        hobbyContentWithMethod() {
            return this.user.hobby.length > 0 ? "YES" : "No";
        }
    },
    computed: {
        hobbyContent() {
            return this.user.hobby.length > 0 ? "YES" : "NO";
        }
    }
}
</script>