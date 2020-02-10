class ThingClass {
    private name: string;
    private completed: boolean;

    constructor(name: string){
        this.name = name;
    }

    public complete() {
        this.completed = true;
    }
    checkIfComplete() {
        return this.completed;
    }
    getName() {
        return this.name;
    }
}

export { ThingClass };