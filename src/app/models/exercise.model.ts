export class Exercise {
    id: number;
    name: string;
    amount: any;
    description: string;
    createdAt: any;
    owner: any;

    constructor(name: string, desc?: string, amount?: any) {
        this.name = name;
        this.description = desc;
        this.amount = amount;
    }
}
