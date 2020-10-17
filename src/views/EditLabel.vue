<template>
    <div class="wrapper">
        <header>
            <div class="left" @click="back">
<!--                <Icon name="icon-jia"/>-->
                <span>返回</span>
            </div>
            <div class="center">编辑标签</div>
            <div class="right" @click="updateLabel">保存</div>
        </header>
        <div class="edit">
            <Icon :name="iconList[selectedId-1].icon"/>
            <input placeholder="标签名称" :value="tag.name" @input="newName=$event.target.value"/>
        </div>
        <Tags class="icons" :tags-list="iconList" :selected-tag-id.sync="selectedId"  />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tags from '@/components/money/Tags.vue';
    import {labelModel} from '@/models/LabelModel';
    @Component({
        components: {Tags}
    })
    export default class EditLabel extends Vue {
        iconList = [{id: 1, icon: 'icon-flower'},
            {id: 2, icon: 'icon-high-heels'},
            {id: 3, icon: 'icon-wanju'},
            {id: 4, icon: 'icon-shouyinji'},
            {id: 5, icon: 'icon-yinle'},
            {id: 6, icon: 'icon-qiqiu'},
            {id: 7, icon: 'icon-youxiji'},
            {id: 8, icon: 'icon-mofang'},
            {id: 9, icon: 'icon-taiyang'},
            {id: 10, icon: 'icon---'},
            {id: 11, icon: 'icon-niunai'},
            {id: 12, icon: 'icon-glass'},
            {id: 13, icon: 'icon-neiyi'},
            {id: 14, icon: 'icon-yanjing'},
            {id: 15, icon: 'icon-yanjing1'},
            {id: 16, icon: 'icon-wanju1'},
            {id: 17, icon: 'icon-hongbao'},
            {id: 18, icon: 'icon-pintu'},
            {id: 19, icon: 'icon-zhiwu'},
            {id: 20, icon: 'icon-youxiji1'},
            {id: 21, icon: 'icon-shopping'},
            {id: 22, icon: 'icon-gaogenxie'},
            {id: 23, icon: 'icon-dangao'},
            {id: 24, icon: 'icon-hua'},
            {id: 25, icon: 'icon-huahua'},
            {id: 26, icon: 'icon-cube'},
            {id: 27, icon: 'icon-gangqin'},
            {id: 28, icon: 'icon-communication1'},
            {id: 29, icon: 'icon-daily1'},
            {id: 30, icon: 'icon-baby2'},
            {id: 31, icon: 'icon-clothes1'},
            {id: 32, icon: 'icon-digital2'},
            {id: 33, icon: 'icon-lottery1'},
            {id: 34, icon: 'icon-medical1'},
            {id: 35, icon: 'icon-medical2'},
            {id: 36, icon: 'icon-communication4'},
            {id: 37, icon: 'icon-fun2'},
            {id: 38, icon: 'icon-beauty2'},
            {id: 39, icon: 'icon-fruit6'},
            {id: 40, icon: 'icon-vegetable6'},
            {id: 41, icon: 'icon-vegetable2'},
            {id: 42, icon: 'icon-book2'},
            {id: 43, icon: 'icon-car2'},
            {id: 44, icon: 'icon-clothes8'},
            {id: 45, icon: 'icon-vegetable3'},
            {id: 46, icon: 'icon-traffic4'},
            {id: 47, icon: 'icon-digital4'},
            {id: 48, icon: 'icon-wage1'},
            {id: 49, icon: 'icon-car4'},
            {id: 50, icon: 'icon-travel1'},
            {id: 51, icon: 'icon-food4'},
            {id: 52, icon: 'icon-traffic5'},
            {id: 53, icon: 'icon-car5'},
            {id: 54, icon: 'icon-digital5'},
            {id: 55, icon: 'icon-daily3'},
            {id: 56, icon: 'icon-clothes3'},
            {id: 57, icon: 'icon-gift3'},
            {id: 58, icon: 'icon-travel2'},
            {id: 59, icon: 'icon-fruit8'},
            {id: 60, icon: 'icon-home4'},
            {id: 61, icon: 'icon-food3'},
            {id: 62, icon: 'icon-home3'},
            {id: 63, icon: 'icon-beauty6'},
            {id: 64, icon: 'icon-beauty3'},
            {id: 65, icon: 'icon-vegetable5'},
            {id: 66, icon: 'icon-fruit4'},
            {id: 67, icon: 'icon-pet1'},
            {id: 68, icon: 'icon-digital3'},
            {id: 69, icon: 'icon-car6'},
            {id: 70, icon: 'icon-car7'},
            {id: 71, icon: 'icon-clothes6'},
            {id: 72, icon: 'icon-book3'},
            {id: 73, icon: 'icon-daily2'},
            {id: 74, icon: 'icon-pet2'},
            {id: 75, icon: 'icon-parent1'},
            {id: 76, icon: 'icon-clothes5'},
            {id: 77, icon: 'icon-parent2'},
            {id: 78, icon: 'icon-traffic6'},
            {id: 79, icon: 'icon-fun6'},
            {id: 80, icon: 'icon-wage2'}
        ]
        selectedId=1;
        newName='';
        tag: LabelItem={
            id:200,
            icon:'icon-fruit8',
            name:''
        };
        created(){
            const id: string=this.$route.params.id;
            this.tag=window.findLabel(id);
            if(this.tag){
                this.selectedId=this.iconList.filter(item=>item.icon===this.tag.icon)[0].id;
            }else{
                this.$router.replace('/404');
            }
        }
        back(){
            this.$router.replace('/labels');
        }


        updateLabel(){
            if(this.newName===''){
                this.newName=this.tag.name;
            }
            const res=window.updateLabel(this.tag.id,this.newName,this.iconList[this.selectedId-1].icon);
            if(res==='success'){
                this.back();
            }else if(res==='nolabel'){
                window.alert('标签不存在！');
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
            margin: 20px;
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