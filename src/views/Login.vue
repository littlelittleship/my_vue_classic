<template>
    <div class="page">
        <div class="loginPage">
            <div class="show">LOGIN</div>
            <label for="username">账号</label>
            <input type="text" id="username" v-model="form.username" />
            <br/>
            <label for="password">密码</label>
            <input type="password" id="password" v-model="form.password" />
            <br/>
            <button @click="handleLogin">asign in</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    created() {

    },
    methods: {
        handleLogin() {
            if (this.form.username === 'admin' && this.form.password === '123456') {
                console.log('登录成功, 准备跳转到首页')
                this.$router.push({ path: '/index' })
            } else {
                console.log('用户名或密码错误!!!, 滚!')
            }
        }
    }
}
</script>

<style scoped lang="scss">
// .header {
//     color: red;
//     .item {
//         color: aqua;
//     }
// }
</style>
