class Persons {
    constructor(name:any) {
        this.name=name;
        console.log(this.name + " constructor");
    }
    static Talk(){
        console.log("this static is talk ");
    }
    public run(){
        console.log("this is person run");
    }

}
let p=new Persons("TEDU")
p.run();
Persons.Talk();
