const localStorageName='consumption';
const consumptionModel={
    data:JSON.parse(window.localStorage.getItem(localStorageName)||'[]') as ConsumptionItem[],
    fetch(){
        return this.data;
    },
    add(data: ConsumptionItem){
        const newConsumption = this.clone(data);
        newConsumption.createAt=new Date();
        this.data.push(newConsumption);
        consumptionModel.save(this.data);
        return 'success';
    },
    save(data: ConsumptionItem[]){
        window.localStorage.setItem(localStorageName,JSON.stringify(data));
    },
    clone(data: ConsumptionItem){
        return JSON.parse(JSON.stringify(data)) as ConsumptionItem;
    }
}

export {consumptionModel};