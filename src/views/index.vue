<template>
    <div>
        <h2 class="headColor">v这是首页</h2>
        <button @click="$router.push({path: '/login'})" >点击跳转到登录页</button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        handleClick() {
            this.$router.push({ path: '/login' })
        }
    }
}
</script>

<style scoped>

</style>
