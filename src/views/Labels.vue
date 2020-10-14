<template>
<Layout>
    <header>
        <Icon name="" />
        标签管理
        <div @click="addLabel">
            <Icon name="icon-jia" />
        </div>
    </header>
    <ol class="labels">
        <li v-for="tag in tagsList" :key="tag.id">
            <div class="left">
                <Icon :name="tag.icon"/>
            </div>
            <div class="right">
                <span>{{tag.name}}</span>
                <Icon class="more" name="icon-gengduo1"/>
            </div>
        </li>
    </ol>
</Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from 'vue-property-decorator';
    import {labelModel} from '@/models/LabelModel';
    import {labelItem} from '@/custom';

    @Component
    export default class Labels extends Vue{
        tagsList=labelModel.fetch();
        label: labelItem={
            id:100,
            name:'',
            icon:'icon-food4'
        }
        addLabel(){
            const name=window.prompt('请输入新标签名');
            if(name!==null){
                this.label.name=name;
            }
            labelModel.add(this.label);
        }
    }
</script>

<style lang="scss" scoped>
    header{
        height: 6vh;
        color: #4e4e4e;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon{
            color: #131313;
            margin-right: 10px;
        }
    }
    .labels{
        background: #fefefe;
        overflow: auto;
        height: 86vh;
        display: flex;
        flex-direction: column;
        >li{
            margin: 10px 10px 10px 2px;
            display: flex;
            .left{
                width: 16vw;
                display: flex;
                justify-content: space-around;
                .icon{
                    width: 40px;
                    height: 40px;
                }
            }
            .right{
                flex-grow: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                >.more{
                    color: #9e9e9e;
                }
            }
        }
    }
</style>