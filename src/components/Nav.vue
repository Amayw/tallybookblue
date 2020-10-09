<template>
    <div class="nav">
        <router-link to="/labels">
            <Icon name="1" />
            标签
        </router-link>
        <router-link to="/money">
            <Icon name="2"/>
            记账
        </router-link>
        <router-link to="/statistics">
            <Icon name="3"/>
            统计
        </router-link>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Nav'
    };
</script>

<style lang="scss" scoped>
.nav{
    display: flex;
    justify-content: space-around;
    border: 1px solid olivedrab;
}
</style>