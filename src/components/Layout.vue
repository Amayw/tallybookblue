<template>
    <div class="layout-wrapper">
        <div class="content">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    import Nav from '@/components/Nav.vue';
    export default {
        name: 'Layout',
        components: {Nav}
    };
</script>

<style lang="scss" scoped>
    .layout-wrapper{
        display:flex;
        flex-direction: column;
        height: 100vh;
        > .content{
            flex-grow: 1;
            height: 92vh;
        }
        >nav{
            height: 8vh;
        }
    }
</style>