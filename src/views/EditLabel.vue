<template>
    <div class="wrapper">
        <header>
            <div class="left">
<!--                <Icon name="icon-jia"/>-->
                <span>返回</span>
            </div>
            <div class="center">编辑标签</div>
            <div class="right">保存</div>
        </header>
        <div class="edit">
            <Icon :name="tag.icon"/>
            <input placeholder="标签名称" :value="tag.name"/>
        </div>
        <Tags class="icons" :tags-list="iconList" :selected-tag-id.sync="selectedId"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tags from '@/components/money/Tags.vue';
    import {labelModel} from '@/models/LabelModel';
    import {LabelItem} from '@/custom';
    @Component({
        components: {Tags}
    })
    export default class EditLabel extends Vue {
        iconList = [{id: 1, icon: 'icon-food4'},
            {id: 2, icon: 'icon-book2'},
            {id: 3, icon: 'icon-travel1'},
            {id: 4, icon: 'icon-wine2'},
            {id: 5, icon: 'icon-daily1'},
            {id: 6, icon: 'icon-vegetable2'},
            {id: 7, icon: 'icon-fruit4'},
            {id: 8, icon: 'icon-pet1'},
            {id: 9, icon: 'icon-lottery1'},
            {id: 10, icon: 'icon-traffic5'},
            {id: 11, icon: 'icon-snack4'},
            {id: 12, icon: 'icon-home3'},
            {id: 13, icon: 'icon-medical1'},
            {id: 14, icon: 'icon-fun2'},
            {id: 15, icon: 'icon-baby2'},
            {id: 16, icon: 'icon-car2'},
            {id: 17, icon: 'icon-parent1'},
            {id: 18, icon: 'icon-gift1'},
            {id: 19, icon: 'icon-clothes5'},
            {id: 20, icon: 'icon-digital2'},
            {id: 21, icon: 'icon-lend1'},
            {id: 22, icon: 'icon-beauty2'},
            {id: 23, icon: 'icon-social2'},
            {id: 24, icon: 'icon-communication1'},
            {id: 25, icon: 'icon-wage2'},
            {id: 26, icon: 'icon-car2'},
            {id: 27, icon: 'icon-parent1'},
            {id: 28, icon: 'icon-gift1'},
            {id: 29, icon: 'icon-clothes5'},
            {id: 30, icon: 'icon-digital2'},
            {id: 31, icon: 'icon-lend1'},
            {id: 32, icon: 'icon-beauty2'},
            {id: 33, icon: 'icon-social2'},
            {id: 34, icon: 'icon-communication1'},
            {id: 35, icon: 'icon-wage2'},
            {id: 36, icon: 'icon-car2'},
            {id: 37, icon: 'icon-parent1'},
            {id: 38, icon: 'icon-gift1'},
            {id: 39, icon: 'icon-clothes5'},
            {id: 40, icon: 'icon-digital2'}
        ]
        tag: LabelItem={
            id:5,
            icon:'icon-food2',
            name:''
        };
        created(){
            const id: string=this.$route.params.id;
            this.tag=labelModel.find(id);
            if(this.tag){
                console.log(this.tag);
            }else{
                this.$router.replace('/404');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
        >header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 10px;
            height: 8vh;
            .left{
                color:#ababab;
            }
            .center{
                color: #4e4e4e;
            }

        }

        >.edit{
            margin: 10px;
            display: flex;
            >.icon{
                width: 36px;
                height: 36px;
                margin-right: 10px;
            }
            >input{
                width: 90vw;
                outline: none;
                border: none;
            }
        }

        >.icons{
            flex-grow: 1;
            background: #f9f9f6;
        }
    }


</style>