<template>
    <div class="numberWrapper">
        <div class="inputs">
            <input class="left" placeholder="备注" />
            <input class="right" placeholder="元">
        </div>
        <div class="buttons"   @click="sumMoney" >
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button class="delete">删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button>1</button>
            <button class="ok">完成</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Number extends Vue{

        sumMoney(e: any){
            console.log(e.target);
            console.log(e.currentTargett);
        }
    }
</script>

<style lang="scss" scoped>
    .numberWrapper{
        background-color: #a1c8bb;
        >.inputs{
            display: flex;
            justify-content: center;
            margin: 4px 0 2px 0;
            >input{
                border: 1px solid #000;
                padding: 10px 5px;
                outline: none;
                background: #fefefe;
                font-size: 8px;
                &.left{
                    width: 60vw;
                    border-right: red;
                    border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;
                }
                &.right{
                    width: 30vw;
                    border-left: #fefefe;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    text-align: right;
                }
            }
        }
        >.buttons{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            /*padding: 8px;*/
            >button{
                background-color: #fefefe;
                font-size: 12px;
                padding: 8px 4px;
                border: 1px solid #000;
                border-radius: 8px;
                width: 21%;
                margin: 4px 0;
                outline: none;
                &.delete{
                    background: #f19c99;
                }
                &.ok{
                    background-color: #f8ce48;
                }
            }
        }
    }

</style>