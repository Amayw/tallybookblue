const localStorageName = 'consumption';

const consumptionStore = {
    consumptionList: [] as ConsumptionItem[],
    fetchConsumption(){
        this.consumptionList=JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as ConsumptionItem[];
        return this.consumptionList;
    },
    addConsumption(consumption: ConsumptionItem){
        const newConsumption = this.cloneConsumption(consumption);
        newConsumption.createAt = new Date();
        this.consumptionList?.push(newConsumption);
        this.saveConsumption();
        return 'success';
    },
    saveConsumption(){
        window.localStorage.setItem(localStorageName, JSON.stringify(this.consumptionList));
    },
    cloneConsumption(data: ConsumptionItem){
        return JSON.parse(JSON.stringify(data)) as ConsumptionItem;
    }
};
consumptionStore.fetchConsumption();

export {consumptionStore};