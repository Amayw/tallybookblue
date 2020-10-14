import {labelItem} from '@/custom';

const localStorageName='consumption';
const consumptionModel={
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageName)||'[]') as labelItem[];
    },
    save(data: labelItem[]){
        window.localStorage.setItem(localStorageName,JSON.stringify(data));
    },
    clone(data: labelItem){
        return JSON.parse(JSON.stringify(data)) as labelItem;
    }
}

export {consumptionModel};