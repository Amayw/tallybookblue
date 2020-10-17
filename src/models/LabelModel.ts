import {LabelItem} from '@/custom';
const labelList = [
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
    {id: 19, icon: 'icon-clothes5', name: '服饰'},
    {id: 20, icon: 'icon-digital2', name: '数码'}
];
const localStorageName='label';
const labelModel={
    data:JSON.parse(window.localStorage.getItem(localStorageName)!)||labelList,
    fetch(){
        return this.data;
    },
    add(data: LabelItem){
        this.data.push(data);
        this.save();
        return 'success';
    },
    save(){
        window.localStorage.setItem(localStorageName,JSON.stringify(this.data));
    },
    clone(data: LabelItem){
        return JSON.parse(JSON.stringify(data)) as LabelItem;
    },
    find(id: string){
        return this.data.filter((item: LabelItem)=>String(item.id)===id)[0];
    },
    update(id: number,name: string,icon: string){
        const label=this.find(String(id));
        if(label===undefined) return "nolabel";
        label.name=name;
        label.icon=icon;
        this.save();
        return 'success';
    }
}

export {labelModel};