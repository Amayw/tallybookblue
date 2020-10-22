<template>
    <Layout>
        <div class="money">
            <Category :category.sync="consumption.category"/>
            <Tags :tagsList="tagsList" :selectedTagId.sync="consumption.selectedTagId"/>
            <NumberPad :money.sync="consumption.money" :notes.sync="consumption.notes" @submit="addConsumption"/>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Tags from '@/components/money/Tags.vue';
    import NumberPad from '@/components/money/NumberPad.vue';
    import {Component, Watch} from 'vue-property-decorator';
    import Category from '@/components/money/Category.vue';


    @Component({
        components: {Category, Tags, NumberPad}
    })
    export default class Money extends Vue {
        get consumptionList() {
            return this.$store.state.consumptionList;
        }

        get tagsList() {
            return this.$store.state.tagsList;
        }

        //每次记账的消费记录
        consumption: ConsumptionItem = {
            category: '1',
            selectedTagId: 1,
            money: '0',
            notes: ''
        };

        created() {
            this.$store.commit('fetchConsumption');
            //标签数据
            this.$store.commit('fetchLabel');
        }


        addConsumption() {
            this.$store.commit('addConsumption', this.consumption);
            window.alert('记账成功！' + this.consumption.notes + ' ' + this.consumption.money + '元');
        }

        @Watch('consumptionList')
        onConsumptionListChange() {
            this.consumption.money='0';
            this.consumption.notes='';
        }
    }
</script>

<style lang="scss" scoped>
    .money {
        height: 92vh;
        display: flex;
        flex-direction: column;

        .tags {
            flex-grow: 1;
        }
    }

</style>