<template>
    <h3>组件生命周期函数应用</h3>
    <p ref="name">P标签</p>
    <ul>
        <li v-for="(item, idnex) of users" :key="index">
            <h3>{{ item.name }}</h3>
            <p>gender: {{ item.gender }}</p>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            users: [

            ],
            fakeDatas: [
            {
                name: "Tom",
                age: 12,
                avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                gender: "male",
                hobby: [
                    "PingPong", "Basketball", "Football"
                ],
            },
            {
                name: "Rose",
                age: 12,
                avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                gender: "female",
                hobby: [
                    "PingPong", "Basketball", "Football"
                ],
            },
            {
                name: "Jack",
                age: 12,
                avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                gender: "male",
                hobby: [
                    "PingPong", "Basketball", "Football"
                ],
            },
            {
                name: "Tim",
                age: 12,
                avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                gender: "male",
                hobby: [
                    "PingPong", "Basketball", "Football"
                ],
            },
            ],
        }
    },
    beforeMount() {
        console.log(this.$refs.name)
    },
    mounted() {
        console.log(this.$refs.name)
    },
    created() {
        this.users = this.fakeDatas
    },
}
</script>