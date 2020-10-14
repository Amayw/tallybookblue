import {consumptionItem} from '@/custom';

const localStorageName='consumption';
const consumptionModel={
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageName)||'[]') as consumptionItem[];
    },
    save(data: consumptionItem[]){
        window.localStorage.setItem(localStorageName,JSON.stringify(data));
    },
    clone(data: consumptionItem){
        return JSON.parse(JSON.stringify(data)) as consumptionItem;
    }
}

export {consumptionModel};