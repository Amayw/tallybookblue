<template>
    <Layout>
        <div class="statisticsCategoryWrapper">
            <Tabs :category.sync="category" :types="['支出','收入']" class-prefix="statisticsCategory"/>
        </div>
        <Tabs :category.sync="categoryTime" :types="['按天','按周','按月']"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Category from '@/components/money/Category.vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';

    @Component({
        components: {
            Tabs,
            Category
        }
    })
    export default class Statistics extends Vue {
        category = '支出';
        categoryTime='按天';
    }
</script>

<style lang="scss" scoped>
    .statisticsCategoryWrapper ::v-deep .statisticsCategory-item {
    }
</style>