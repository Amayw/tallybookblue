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

interface Window {
    consumptionList: ConsumptionItem[];
    addConsumption: (consumption: ConsumptionItem) => string;
}
