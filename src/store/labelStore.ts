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

const labelStore={
    tagsList : [] as LabelItem[],
    fetchLabel(){
        this.tagsList=JSON.parse(window.localStorage.getItem(localStorageName)!)||labelList!;
        return this.tagsList;
    },
    addLabel(label: LabelItem){
        const newLabel = this.cloneLabel(label);
        this.tagsList?.push(newLabel);
        this.saveLabel();
        return 'success';
    },
    findLabel(id: string){
        return this.tagsList?.filter((item: LabelItem)=>String(item.id)===id)[0];
    },
    updateLabel(id: number, name: string, icon: string){
        const label=this.findLabel(String(id));
        if(label===undefined) return "nolabel";
        label.name=name;
        label.icon=icon;
        this.saveLabel();
        return 'success';
    },
    saveLabel(){
        window.localStorage.setItem(localStorageName,JSON.stringify(this.tagsList));
    },
    cloneLabel:(data: LabelItem)=>{
        return JSON.parse(JSON.stringify(data)) as LabelItem;
    }
}

labelStore.fetchLabel();
export {labelStore}