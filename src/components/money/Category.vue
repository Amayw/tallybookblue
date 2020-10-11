<template>
    <div class="category">
        <ul  >
            <li :class="category==='1'?'active':''" @click="changeCategory('1')">支出</li>
            <li :class="category==='2'?'active':''" @click="changeCategory('2')">收入</li>
        </ul>
    </div>
</template>

<script lang="js">
    export default {
        name: 'Category',
        // props:['category'],
        data(){
            return {
                category:'1'//'1'表示支出，'2'表示收入
            }
        },
        methods:{
            changeCategory(type){
                this.category = type;
            }
        }
    };
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