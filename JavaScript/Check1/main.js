let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
for(let i = 0; i < numbers.length; i++) {
    console.log(isEven(numbers[i]));
}
function isEven(num) {
    if (num % 2 === 0)  {
    console.log(num + 'は偶数です');
}
}

// 【要件】
// ・インスタンス化した時にガソリンとナンバーがセットされるようなCarクラスを作成する
// ・「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数を作成する

class car {
    constructor(gass, num) {
        this.gass = gass;
        this.num = num;
    }getNumGas() {
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です`);
    }
}

let a = new car(1, 1);
a.getNumGas();
