<template>
    <div>
        <!-- <label for="username">账号</label> -->
        <input type="text" id="username" v-model="form.username" />
        <br/>
        <!-- <label for="password">密码</label> -->
        <input type="password" id="password" v-model="form.password" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            }
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style scoped>

</style>
