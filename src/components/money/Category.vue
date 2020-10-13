<template>
    <div class="category">
        <ul  >
            <li :class="category==='1'&&'active'" @click="changeCategory('1')">支出</li>
            <li :class="category==='2'&&'active'" @click="changeCategory('2')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Category extends Vue{
        @Prop(String) readonly category!: '1'|'2';//'1'表示支出，'2'表示收入
        changeCategory(type: string){
            if(type!=='1'&&type!=='2'){
                return new Error('type is  unknown');
            }
            //通知父组件改值
            this.$emit('update:category',type);
        }
    }
</script>

<style lang="scss" scoped>
    .category{
        background: #fefefe;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        >ul{
            background: #ededed;
            display: flex;
            flex-direction: row;
            padding: 2px;
            border-radius: 8px;
            >li{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 8px;
                padding: 4px 20px;
                border-radius: 8px;
            }
            >li.active{
                background: #fefefe;
            }
        }
    }
</style>