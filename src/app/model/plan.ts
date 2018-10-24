export class Plan{
    constructor(public pid:number,
        public type:string,
        public amount:number,
        public validity:number,
        public dataUsage:number,
        public dataSpeed:number,
        public voiceInMin:number,
        ){

    }
}