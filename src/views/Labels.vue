<template>
    <Layout>
        <div class="labelContent">
            <header>
                <Icon name=""/>
                标签管理
                <div class="right" @click="addLabel">
                    <Icon name="icon-jia"/>
                </div>
            </header>
            <div class="labels">
                    <router-link v-for="tag in tagsList" :key="tag.id" class="link" :to="`labels/edit/${tag.id}`">
                        <div class="item">
                            <div class="left">
                                <Icon :name="tag.icon"/>
                            </div>
                            <div class="right">
                                <span>{{tag.name}}</span>
                                <Icon class="more" name="icon-gengduo1"/>
                            </div>
                        </div>
                    </router-link>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import {createId} from '@/lib/idCreator.ts';

    @Component({})
    export default class Labels extends Vue {
        get tagsList() {
            return this.$store.state.tagsList;
        }

        label: LabelItem = {
            id: 10000,
            icon: 'icon-fruit8',
            name: '',
        };

        created() {
            this.$store.commit('fetchLabel');
        }

        addLabel() {
            const name = window.prompt('请输入新标签名');
            if (!name) {
                window.alert('标签名不能为空哦~')
                return;
            }else if(name.length>4){
                window.alert('标签名称不能超过4个字符哦~');
                return;
            } else {
                this.label.name = name!;
                this.label.id = createId();
            }
            this.$store.commit('addLabel', this.label);
            window.alert('创建标签成功！');
        }
    }
</script>

<style lang="scss" scoped>
    .labelContent {
        height: 92vh;
        overflow: hidden;

        > header {
            height: 6vh;
            color: #4e4e4e;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .right {
                > .icon {
                    width: 20px;
                    height: 20px;
                    background: #a5c9c0;
                    color: #fff;
                    margin-right: 10px;
                    border-radius: 50%;
                    padding: 4px;
                }
            }

        }

        > .labels {
            background: #fefefe;
            display: flex;
            height: 86vh;
            flex-direction: column;
            overflow: auto;
            /*width: 100vw;*/;
            > .link {
                >.item{
                    display: flex;
                    padding: 10px 10px 10px 2px;
                    align-items: center;
                    > .left {
                        width: 16vw;
                        display: flex;
                        justify-content: space-around;
                        .icon {
                            width: 36px;
                            height: 36px;
                        }
                    }
                    > .right {
                        flex-grow: 1;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        > .more {
                            color: #9e9e9e;
                        }
                    }
                }

            }
        }
    }


</style>