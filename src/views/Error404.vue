<template>
<div>
    <div>您输入的页面不存在，请检查网址</div>
    <div>
        <router-link to="/money">点击返回首页</router-link>
    </div>
</div>
</template>

<script lang="ts">
    export default {
        name: 'Error404'
    };
</script>

<style lang="scss" scoped>

</style>