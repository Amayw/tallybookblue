<template>
<div class="wrapper">
    <div>您输入的页面不存在</div>
    <div>请检查网址</div>
    <div>
        <router-link class="back" to="/money">点击返回首页</router-link>
    </div>
</div>
</template>

<script lang="ts">
    export default {
        name: 'Error404'
    };
</script>

<style lang="scss" scoped>
    .wrapper{
        margin-left: 50%;
        margin-top: 50%;
        transform: translate(-50%,-50%);
        padding: 20px;
        >div{
            text-align: center;
            .back{
                color: #9fc4b7;
                font-weight: 550;
            }
        }
    }
</style>