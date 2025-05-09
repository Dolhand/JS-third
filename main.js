console.log('#3. JavaScript homework example file')

const userObj = {
    firstName: 'Andrii',
    lastName: 'Dolhanin',
    age: 30
};

console.log(userObj);

userObj.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};

console.log(userObj.fullName());




function defUpperStr(str) {
    return (str || 'default text').toUpperCase();
}

console.log(defUpperStr('hello world'));
console.log(defUpperStr());



function evenFn(n) {
    const nubmers = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            nubmers.push(i);
        }
    }
    return nubmers;
}

console.log(evenFn(10))
console.log(evenFn(13))
console.log(evenFn(22))



function weekFn(n) {
    if(typeof n !== 'number' || !Number.isInteger(n) || n < 1 || n > 8) {
        return null;
    }

    switch (n) {
        case 1: return 'Понеділок';
        case 2: return 'Вівторок';
        case 3: return 'Середа';
        case 4: return 'Четвер';
        case 5: return 'П’ятниця';
        case 6: return 'Субота';
        case 7: return 'Неділя';
        default: return null;
    }
}

console.log(weekFn(1))
console.log(weekFn(3))
console.log(weekFn(7))
console.log(weekFn(9))
console.log(weekFn(1.5))
console.log(weekFn('2'))



function ageClassification(n) {
    return (typeof n !== 'number' || n < 0 || n > 122) ? null :
            n <= 24 ? 'Дитинство' :  
            n <= 44 ? 'Молодість' :
            n <= 65 ? 'Зрілість' :
            n <= 75 ? 'Старість' :
            n <= 90 ? 'Довголіття' :
            'Рекорд';         
}

console.log('    -1 :', ageClassification(-1))
console.log('     0 :', ageClassification(0))
console.log('     1 :', ageClassification(1))
console.log('    24 :', ageClassification(24))
console.log(' 24.01 :', ageClassification(24.01))
console.log('    44 :', ageClassification(44))
console.log(' 44.01 :', ageClassification(44.01))
console.log('    65 :', ageClassification(65))
console.log('  65.1 :', ageClassification(65.1))
console.log('    75 :', ageClassification(75))
console.log(' 75.01 :', ageClassification(75.01))
console.log('    90 :', ageClassification(90))
console.log(' 90.01 :', ageClassification(90.01))
console.log('   122 :', ageClassification(122))
console.log('122.01 :', ageClassification(122.01))
console.log('   150 :', ageClassification(150))

 console.log('    -1 :', ageClassification(-1) === null);
 console.log('     0 :', ageClassification(0) === null);
 console.log('     1 :', ageClassification(1) === 'Дитинство');
 console.log('    24 :', ageClassification(24) === 'Дитинство');
 console.log(' 24.01 :', ageClassification(24.01) === 'Молодість');
 console.log('    44 :', ageClassification(44) === 'Молодість');
 console.log(' 44.01 :', ageClassification(44.01) === 'Зрілість');
 console.log('    65 :', ageClassification(65) === 'Зрілість');
 console.log('  65.1 :', ageClassification(65.1) === 'Старість');
 console.log('    75 :', ageClassification(75) === 'Старість');
 console.log(' 75.01 :', ageClassification(75.01) === 'Довголіття');
 console.log('    90 :', ageClassification(90) === 'Довголіття');
 console.log(' 90.01 :', ageClassification(90.01) === 'Рекорд');
 console.log('   122 :', ageClassification(122) === 'Рекорд');
 console.log('122.01 :', ageClassification(122.01) === null);
 console.log('   150 :', ageClassification(150) === null);



 function oddFn(n) {
    let i = 1;
    const numbers = [];

    while (i <= n) {
        numbers.push(i);
        i += 2;
    }

    return numbers;
 }


console.log(oddFn(10))
console.log(oddFn(15))
console.log(oddFn(20))




function mainFunc(a, b, cb) {
    if (typeof cb !== 'function') {
        return false;
    }
    return cb(a, b);
}

function cbRandom(min, max) {
    return Math.floor (Math.random() *(max - min + 1)) + min;
}

function cbPow(num, pow) {
    return Math.pow(num, pow);
}

function cbAdd(a, b) {
    return a + b;
}



console.log(mainFunc(2, 5, cbRandom))
console.log(mainFunc(2, 5, cbPow))
console.log(mainFunc(2, 5, cbAdd))
console.log(mainFunc(2, 5, 'not a func'))