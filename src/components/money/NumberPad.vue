<template>
    <div class="numberWrapper">
        <div class="inputs">
            <!--<input class="left" placeholder="备注" v-model="notes"/>-->
            <input label="notes" class="left" placeholder="备注" :value="notes" @input="onNotesChange($event.target.value)"/>
            <!--<input class="left" placeholder="备注" :value="notes" @input="$emit('update:notes',$event.target.value)"/>-->
            <div class="right">{{output}}元</div>
        </div>
        <div class="buttons" @click="sumMoney">
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
            <button>清除</button>
            <button class="ok">完成</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class NumberPad extends Vue {
        @Prop(String) money!: string;
        @Prop(String) notes!: string;
        output = this.money!;

        onNotesChange(newNotes: string) {
            this.$emit('update:notes', newNotes);
        }

        add(str: string) {
            const arr = str.split('+');
            return this.isFloat(String(Number(arr[0]) + Number(arr[1])));
        }

        sub(str: string) {
            const arr = str.split('-');
            const res = Number(arr[0]) - Number(arr[1]);
            if (res > 0) {
                return this.isFloat(String(res));
            } else {
                window.alert('金额不能为负数哦~');
                return '0';
            }
        }

        isNum(str: string) {
            if (str.indexOf('.') === str.length - 1) {
                window.alert('请检查输入金额，小数点不应在金额末尾！');
                return false;
            } else {
                return true;
            }
        }

        isPoints(str: string[], text: string) {
            if (str.indexOf(text) >= 0) {
                return;
            } else {
                this.output += text;
            }
        }

        isZero(res: string | undefined, text: string) {
            if (res === '0') {
                this.output = res;
            } else {
                this.output = res + text;
            }
        }

        isFloat(str: string) {
            if (str.indexOf('.')) {
                return String(Number(str).toFixed(2));
            }
        }

        sumMoney(e: MouseEvent) {
            const button = (e.target as HTMLButtonElement);
            const text = button.textContent!;

            if ('0123456789'.indexOf(text) >= 0) {
                //输入数字
                if (this.output === '0') {
                    this.output = text;
                } else {
                    this.output += text;
                }
            } else if ('+-'.indexOf(text) >= 0) {
                //输入'+''-'
                if (this.output.indexOf('+') >= 0 || this.output.indexOf('-') >= 0) {
                    //第二次输入加或减，那么先要计算前面的结果
                    if (text === '+') {
                        if (this.output.indexOf('-') >= 0) {
                            //前面的计算是减，所以需要判断一下是否负数
                            //若是负数，弹出提示框
                            //若是正数，继续计算
                            this.isZero(this.sub((this.output)), text);
                        } else {
                            this.output = this.add(this.output) + '+';
                        }
                    } else if (text === '-') {
                        if (this.output.indexOf('+') >= 0) {
                            this.output = this.add(this.output) + '-';
                        } else {
                            this.isZero(this.sub(this.output), text);
                        }
                    } else {
                        return;
                    }
                } else {
                    //第一次输入加或减
                    if (this.isNum(this.output)) {
                        //输入减需要判断一下是不是负数
                        if (text === '-' && this.output === '0') {
                            alert('金额不能输入负数哦~');
                        } else {
                            this.output += text;
                        }
                    } else {
                        //输入加则继续输入
                        return;
                    }
                }
            } else if (text === '清除') {
                this.output = '0';
            } else if (text === '删除') {
                if (this.output.length === 1) {
                    this.output = '0';
                } else {
                    this.output = this.output.slice(0, this.output.length - 1);
                }
            } else if (text === '.') {
                //输入点
                if (this.output.indexOf(text) >= 0) {
                    //一个数字中只能一个点
                    if (this.output.indexOf('+') >= 0) {
                        //如果有加号，则加号之后的数字中可以有一个点
                        const num1 = this.output.split('+');
                        const arr1 = Array.from(num1[1]);
                        this.isPoints(arr1, text);
                    } else if (this.output.indexOf('-') >= 0) {
                        //如果有减号，则减号之后的数字中可以有一个点
                        const num2 = this.output.split('-');
                        const arr2 = Array.from(num2[1]);
                        this.isPoints(arr2, text);
                    } else {
                        return;
                    }
                    return;
                } else {
                    this.output += text;
                }
            } else if (text === '完成') {
                if (this.output.indexOf('+') >= 0) {
                    //判断是否有待计算的加运算
                    this.output = this.add(this.output)!;
                } else if (this.output.indexOf('-') >= 0) {
                    //判断是否有待计算的减运算
                    this.output = this.sub(this.output)!;
                } else if (this.isNum(this.output)) {
                    //判断金额是否为数字，排除'3.'这种情况
                    window.alert('记账成功！' + this.notes +'  消费'+ this.isFloat(this.output)+'元');
                    this.$emit('update:money', this.output);
                    this.$emit('submit',this.output);
                    this.output=this.money;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .numberWrapper {
        background-color: #a1c8bb;

        > .inputs {
            display: flex;
            justify-content: center;
            margin: 6px 0 2px 0;

            > input, div {
                border: 1px solid #000;
                padding: 8px;
                outline: none;
                background: #fefefe;
                font-size: 8px;

                &.left {
                    width: 60vw;
                    border-right: red;
                    border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;
                }

                &.right {
                    width: 30vw;
                    border-left: #fefefe;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    text-align: right;
                }
            }
        }

        > .buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            /*padding: 8px;*/
            > button {
                background-color: #fefefe;
                font-size: 12px;
                padding: 8px 4px;
                border: 1px solid #000;
                border-radius: 8px;
                width: 21%;
                margin: 4px 0;
                outline: none;

                &.delete {
                    background: #f19c99;
                }

                &.ok {
                    background-color: #f8ce48;
                }
            }
        }
    }

</style>