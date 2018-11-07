export class Training {
    id: number;
    name: string;
    weeks: string;
    timesPerWeek: number;
    exercises: any[];
    description: string;
    createdAt: any;
    owner: any;

    constructor(name: string) {
        this.name = name;
    }
}
