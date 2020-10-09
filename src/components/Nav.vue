<template>
    <nav>
        <router-link class="item" active-class="selected" to="/labels">
            <Icon name="1" />
            标签
        </router-link>
        <router-link class="item" active-class="selected" to="/money">
            <Icon name="2"/>
            记账
        </router-link>
        <router-link class="item" active-class="selected" to="/statistics">
            <Icon name="3"/>
            统计
        </router-link>
    </nav>
</template>

<script lang="ts">
    export default {
        name: 'Nav'
    };
</script>

<style lang="scss" scoped>
nav{
    display: flex;
    justify-content: space-around;
    background: #f6f7f2;
    >.item{
        color: #d6d6d6;
        padding: 6px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 12px;
        >.icon{
            width: 26px;
            height: 26px;
        }
    }

    >.item.selected{
        color: #a3c7bb;
    }
}
</style>