import {ConsumptionItem} from '@/custom';

const localStorageName='consumption';
const consumptionModel={
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageName)||'[]') as ConsumptionItem[];
    },
    save(data: ConsumptionItem[]){
        window.localStorage.setItem(localStorageName,JSON.stringify(data));
    },
    clone(data: ConsumptionItem){
        return JSON.parse(JSON.stringify(data)) as ConsumptionItem;
    }
}

export {consumptionModel};