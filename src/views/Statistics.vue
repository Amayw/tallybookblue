<template>
    <Layout>
        <div class="staContent">
            <Category :category.sync="category"/>
<!--            <Tabs :displayMode.sync="displayMode"/>-->
            <div v-if="group.length===0" class="noRecord">
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
                        <li class="recordTitle">
                            <span>{{beauty(hash.title)}}</span>
                            <span>￥{{hash.total}}</span>
                        </li>
                        <li class="recordItems" :key="record.createAt" v-for="record in hash.items">
                            <div class="iconAddName">
                                <Icon :name="tagsList[record.selectedTagId].icon"></Icon>
                                <span class="name">{{tagsList[record.selectedTagId].name}}</span>
                                <span class="notes">{{record.notes}}</span>
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
            type HashTable={title: string; total?: string; items: ConsumptionItem[]};
            const newList=clone(consumptionList).filter((item: ConsumptionItem)=>item.category===this.category).sort((a: ConsumptionItem, b: ConsumptionItem)=>dayjs(b.createAt).valueOf()-dayjs(a.createAt).valueOf());
            if(newList.length===0) {return [];}
            const finalArray: HashTable[]=[{title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), items:[newList[0]]}]
            for(let i=1;i<newList.length;i++){
                const day=dayjs(newList[i].createAt).format('YYYY-MM-DD');
                if(day===finalArray[finalArray.length-1].title){
                    finalArray[finalArray.length-1].items.push(newList[i]);
                }else{
                    finalArray[finalArray.length]={title:day,items:[newList[i]]};
                }

            }
            finalArray.map(item=>item.total=item.items.reduce((sum,item)=>{
                console.log(sum);
                console.log(item.money);
                return sum+parseFloat(item.money);
            },0.00).toFixed(2).toString())
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
            height: 82vh;
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
                            padding-right: 10px;
                            margin-right: 4px;
                        }

                        &.recordItems {
                            background: #f8f9f4;
                            padding: 10px;
                            margin: 8px;
                            border-radius: 6px;

                            > .iconAddName {
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                >span{
                                    overflow: hidden;
                                    white-space: nowrap;
                                    &.name{
                                        max-width: 20vw;
                                    }

                                    &.notes{
                                        color: #9e9e9e;
                                        font-size: 12px;
                                        margin-left: 4px;
                                        max-width: 40vw;
                                        text-overflow: ellipsis;
                                    }
                                }

                                > .icon {
                                    width: 24px;
                                    height: 24px;
                                    margin-right: 8px;
                                }
                            }

                            >.money{
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                max-width: 20vw;
                            }
                        }
                    }
                }

            }
        }
    }

</style>