import {consumptionStore} from '@/store/consumptionStore';
import {labelStore} from '@/store/labelStore';

const store ={
    ...consumptionStore,
    ...labelStore
}
console.log(store);
export {store}