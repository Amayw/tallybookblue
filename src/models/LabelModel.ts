import {labelItem} from '@/custom';
const labelList = [
    {id: 1, icon: 'icon-food4', name: '餐饮'},
    {id: 2, icon: 'icon-book2', name: '书籍'},
    {id: 3, icon: 'icon-travel1', name: '旅游'},
    {id: 4, icon: 'icon-wine2', name: '烟酒'},
    {id: 5, icon: 'icon-daily1', name: '日用'},
    {id: 6, icon: 'icon-vegetable2', name: '蔬菜'},
    {id: 7, icon: 'icon-fruit4', name: '水果'},
    {id: 8, icon: 'icon-pet1', name: '宠物'},
    {id: 9, icon: 'icon-lottery1', name: '彩票'},
    {id: 10, icon: 'icon-traffic5', name: '交通'},
    {id: 11, icon: 'icon-snack4', name: '零食'},
    {id: 12, icon: 'icon-home3', name: '住房'},
    {id: 13, icon: 'icon-medical1', name: '医疗'},
    {id: 14, icon: 'icon-fun2', name: '娱乐'},
    {id: 15, icon: 'icon-baby2', name: '母婴'},
    {id: 16, icon: 'icon-car2', name: '汽车'},
    {id: 17, icon: 'icon-parent1', name: '长辈'},
    {id: 18, icon: 'icon-gift1', name: '礼物'},
    {id: 19, icon: 'icon-clothes5', name: '服饰'},
    {id: 20, icon: 'icon-digital2', name: '数码'},
    {id: 21, icon: 'icon-lend1', name: '借出'},
    {id: 22, icon: 'icon-beauty2', name: '美容'},
    {id: 23, icon: 'icon-social2', name: '社交'},
    {id: 24, icon: 'icon-communication1', name: '通讯'},
    {id: 25, icon: 'icon-wage2', name: '工资'}
];
const localStorageName='label';
const labelModel={
    data:(JSON.parse(window.localStorage.getItem(localStorageName)!)||labelList),
    fetch(){
        return this.data;
    },
    add(data: labelItem){
        this.data.push(data);
        this.save(this.data);
    },
    save(data: labelItem){
        window.localStorage.setItem(localStorageName,JSON.stringify(data));
    },
    clone(data: labelItem){
        return JSON.parse(JSON.stringify(data)) as labelItem;
    }
}

export {labelModel};