let number = 0;
while(number <= 100) {
     if(number % 15 === 0) {
        console.log('FizzBuzz!!');
        number++;
        continue;
    }
    else if(number % 3 === 0) {
        console.log('Fizz!');
        number++;
        continue;
    }
    else if(number % 5 === 0) {
        console.log('Buzz!');
        number++;
        continue;
    }
    else {
        console.log(number);
        number++;
        continue;
    }
}