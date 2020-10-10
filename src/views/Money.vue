<template>
<Layout>
    <Category/>
    <Tags/>
    <Number/>
</Layout>
</template>

<script lang="ts">
    import Category from '@/components/money/Category.vue';
    import Tags from '@/components/money/Tags.vue';
    import Number from '@/components/money/Number.vue';
    export default {
        name: "Money",
        components: {Number, Tags, Category},
    };
</script>

<style lang="scss" scoped>
</style>