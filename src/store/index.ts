import Vue from 'vue';
import Vuex from 'vuex';
import {clone} from '@/lib/clone';

Vue.use(Vuex);
const labelList = [
    {id: 0, icon: 'icon-clothes5', name: '服饰'},
    {id: 1, icon: 'icon-food4', name: '餐饮'},
    {id: 2, icon: 'icon-book2', name: '书籍'},
    {id: 3, icon: 'icon-travel1', name: '旅游'},
    {id: 4, icon: 'icon-beauty6', name: '美容'},
    {id: 5, icon: 'icon-daily1', name: '日用'},
    {id: 6, icon: 'icon-vegetable3', name: '蔬菜'},
    {id: 7, icon: 'icon-fruit8', name: '水果'},
    {id: 8, icon: 'icon-pet1', name: '宠物'},
    {id: 9, icon: 'icon-lottery1', name: '彩票'},
    {id: 10, icon: 'icon-traffic5', name: '交通'},
    {id: 11, icon: 'icon-wage2', name: '工资'},
    {id: 12, icon: 'icon-home3', name: '住房'},
    {id: 13, icon: 'icon-medical2', name: '医疗'},
    {id: 14, icon: 'icon-fun2', name: '娱乐'},
    {id: 15, icon: 'icon-baby2', name: '母婴'},
    {id: 16, icon: 'icon-car2', name: '汽车'},
    {id: 17, icon: 'icon-parent1', name: '长辈'},
    {id: 18, icon: 'icon-communication4', name: '通讯'},
    {id: 19, icon: 'icon-digital2', name: '数码'}
];

type RootState = {
    consumptionList: ConsumptionItem[];
    tagsList: LabelItem[];
    currentTag?: LabelItem;
}

const store = new Vuex.Store({
    state: {
        consumptionList: [],
        tagsList: [],
        currentTag: undefined
    } as RootState,
    mutations: {
        //consumption
        fetchConsumption(state) {
            state.consumptionList = JSON.parse(window.localStorage.getItem('consumption') || '[]');
        },
        addConsumption(state, consumption) {
            const newConsumption = clone(consumption);
            newConsumption.createAt = new Date().toISOString();
            state.consumptionList.push(newConsumption);
            store.commit('saveConsumption');
        },
        saveConsumption(state) {
            window.localStorage.setItem('consumption', JSON.stringify(state.consumptionList));
        },
        //label
        fetchLabel(state) {
            state.tagsList = JSON.parse(window.localStorage.getItem('label')!) ||labelList;
        },
        addLabel(state, label: LabelItem) {
            const newLabel = clone(label);
            state.tagsList.push(newLabel);
            store.commit('saveLabel');
        },
        updateLabel(state, payload: LabelItem) {
            const {id,name,icon}=payload;
            const label = state.tagsList.filter((item: LabelItem) => item.id === id)[0];
            label.name = name;
            label.icon = icon;
            store.commit('saveLabel');
        },
        removeLabel(state,id: string){
            const ids=state.consumptionList.filter(item=>item.selectedTagId===parseInt(id));
            console.log(ids);
            if(ids.length>0){
                console.log('here');
                window.alert('当前标签有消费记录，不能删除哦~')
            }else{
                console.log('there');
                console.log(id);
                state.tagsList=state.tagsList.filter(item=>item.id!==parseInt(id));
                store.commit('saveLabel');
                console.log('成功');
            }
        },
        saveLabel(state) {
            window.localStorage.setItem('label', JSON.stringify(state.tagsList));
        },
        setCurrentTag(state, id: string) {
            state.currentTag = state.tagsList.filter((item: LabelItem) => String(item.id) === id)[0];
        }

    }
});
export default store;