class Taiyaki {
    constructor(contents) {
        this.contents = contents;
    }
        eat() {
            console.log(`中身は${this.contents}です`);
        }
    
}
let anko = new Taiyaki('あんこ');
anko.eat();

let cream = new Taiyaki('クリーム');    
cream.eat();

let cheese = new Taiyaki('チーズ');
cheese.eat();
