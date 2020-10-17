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
    tagsList: LabelItem[];
    addLabel: (label: LabelItem) => string;
    findLabel: (id: string) => LabelItem;
    updateLabel: (id: number,name: string,icon: string) => 'success'|'nolabel';
}

