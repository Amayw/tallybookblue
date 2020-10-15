type ConsumptionItem = {
    category: string;
    selectedTagId: number;
    money: string;
    notes: string;
    createAt?: Date;
}

type LabelItem={
    id: number;
    icon: string;
    name: string;
}
export {ConsumptionItem,LabelItem};