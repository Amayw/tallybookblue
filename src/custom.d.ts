type ConsumptionItem = {
    category: string;
    selectedTagId: number;
    money: string;
    notes: string;
    createAt?: Date;
}

type labelItem={
    id: number;
    icon: string;
    name: string;
}
export {consumptionItem,labelItem};