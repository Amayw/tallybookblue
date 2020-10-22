<template>
    <Layout>
        <div class="staContent">
            <Category :category.sync="category"/>
<!--            <Tabs :displayMode.sync="displayMode"/>-->
            <div v-if="JSON.stringify(group)===JSON.stringify([])" class="noRecord">
                <div>空空如也~</div>
                <div>
                    <span>快去</span>
                    <router-link class="addRecord" to="/money">记一笔</router-link>
                    <span>吧</span>
                </div>
            </div>
            <ol v-else class="displayHash">
                <li class="hashItem" v-for="(hash,index) in group" :key="index">
                    <ol class="displayRecord">
                        <li class="recordTitle">{{beauty(hash.title)}}</li>
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
    import dayjs from 'dayjs';
    import {clone} from '@/lib/clone';

    @Component({
        components: {
            Tabs,
            Category
        }
    })
    export default class Statistics extends Vue {
        category = '1';
        displayMode = 'day';

        get consumptionList() {
            return this.$store.state.consumptionList;
        }

        get tagsList() {
            return this.$store.state.tagsList;
        }

        get group() {
            const {consumptionList} = this;
            if(consumptionList.length===0) {return [];}
            type HashTableValue={title: string; items: ConsumptionItem[]};
            const hashTable: HashTableValue[]=[];
            const newList=clone(consumptionList).sort((a: ConsumptionItem, b: ConsumptionItem)=>dayjs(b.createAt).valueOf()-dayjs(a.createAt).valueOf());
            const finalArray=[{title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), items:[newList[0]]}]
            for(let i=1;i<newList.length;i++){
                const day=dayjs(newList[i].createAt).format('YYYY-MM-DD');
                if(day===finalArray[finalArray.length-1].title){
                    finalArray[finalArray.length-1].items.push(newList[i]);
                }else{
                    finalArray[finalArray.length]={title:day,items:[newList[i]]};
                }

            }
            return finalArray;
        }

        created() {
            this.$store.commit('fetchConsumption');
            //标签数据
            this.$store.commit('fetchLabel');
        }

        beauty(title: string){
            const day=dayjs(title);
            const now=dayjs();
            if(day.isSame(now,'day')){
                return '今天';
            }else if(day.isSame(now.subtract(1,'day'),'day')){
                return '昨天';
            }else if(day.isSame(now.subtract(2,'day'),'day')){
                return '前天'
            }else{
                if(day.isSame(now,'year')){
                    return day.format('MM月DD日');
                }else{
                    return day.format('YYYY年MM月D日');
                }
            }

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