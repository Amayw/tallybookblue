<template>
    <Layout>
        <div class="staContent">
            <Category :category.sync="category"/>
            <Tabs :categoryTime.sync="categoryTime"/>
            <div v-if="JSON.stringify(result)===JSON.stringify({})" class="noRecord">
                <div>空空如也</div>
                <div>
                    <span>快去</span>
                    <router-link class="addRecord" to="/money">记一笔</router-link>
                    <span>吧</span>
                </div>
            </div>
            <ol v-else class="displayHash">
                <li class="hashItem" v-for="hash in result" :key="hash.date">
                    <ol class="displayRecord">
                        <li class="recordTitle">{{hash.title}}</li>
                        <li class="recordItems" :key="record.createAt" v-for="record in hash.items">
                            <div class="iconAddName">
                                <Icon :name="tagsList[record.selectedTagId-1].icon"></Icon>
                                {{tagsList[record.selectedTagId-1].name}}
                            </div>
                            <div class="money">￥{{record.money}}</div>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Category from '@/components/money/Category.vue';
    import Tabs from '@/components/Tabs.vue';

    @Component({
        components: {
            Tabs,
            Category
        }
    })
    export default class Statistics extends Vue {
        category = '1';
        categoryTime = 'day';

        get consumptionList() {
            return this.$store.state.consumptionList;
        }

        get tagsList() {
            return this.$store.state.tagsList;
        }

        get result() {
            const {consumptionList} = this;
            type HashTableValue = { title: string; items: ConsumptionItem[] };
            const hashTable: { [key: string]: HashTableValue } = {};
            for (let i = 0; i < consumptionList.length; i++) {
                const [date, time] = consumptionList[i].createAt.split('T');
                hashTable[date] = hashTable[date] || {title: date, items: []};
                hashTable[date].items.push(consumptionList[i]);
            }
            return hashTable;
        }

        created() {
            this.$store.commit('fetchConsumption');
            //标签数据
            this.$store.commit('fetchLabel');
        }

    }
</script>

<style lang="scss" scoped>
    .staContent {
        height: 92vh;
        overflow: hidden;
        > .noRecord {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            height: 81vh;
            flex-direction: column;

            .addRecord {
                color: #a4c9c1;
                font-weight: 600;
            }

        }

        > .displayHash {
            display: flex;
            flex-direction: column;
            overflow: auto;
            height: 81vh;
            padding: 10px 0;
            > .hashItem {
                display: flex;

                > .displayRecord {
                    width: 100vw;

                    > li {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        &.recordTitle {
                            padding-left: 14px;
                            color: #a4c9c1;
                        }

                        &.recordItems {
                            background: #f8f9f4;
                            padding: 10px;
                            margin: 4px;
                            display: flex;
                            justify-content: space-between;
                            border-radius: 6px;

                            > .iconAddName {
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                > .icon {
                                    width: 24px;
                                    height: 24px;
                                    margin-right: 4px;
                                }
                            }
                        }
                    }
                }

            }
        }
    }

</style>