import * as readline from 'readline';

let flags: boolean[] = new Array(20).fill(false);
let wordDict: { [key: number]: string} = {};
let outputArray: string[] = [];

function populateDict() {
    wordDict[3] = 'Fizz';
    wordDict[5] = 'Buzz';
    wordDict[7] = 'Bang';
    wordDict[11] = 'Bong';
    wordDict[13] = 'Fezz';
}

function check(numberToCheck: number, ruleNumber: number, flags: boolean[], outputArray: string[]) {
    if (numberToCheck % ruleNumber == 0 && flags[ruleNumber]) {
        outputArray.push(wordDict[ruleNumber]);
    }
}

function readInput(question: string) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(question, ans => {
        rl.close();
        let convertToNumber: number = Number(ans);
        resolve(convertToNumber);
    }))
}

function getFlags() {
    let args = process.argv.slice(2);
    console.log(args);
    for (let arg of args) {
        flags[Number(arg)] = true;
    }
}

async function count() {
    let i: number = 1;
    let n = await readInput("Input Number: ") as number;
    for(i = 1; i <= n; i++) {
        outputArray = [];
        if (i % 11 == 0 && flags[11]) {
            check(i, 11, flags, outputArray);
            continue;
        }
        if (i % 17 == 0 && flags[17]) {
            reverseOutput(true, i, flags);
        } else {
            reverseOutput(false, i, flags);
        }
    }
}

function reverseOutput(isReveresed: boolean, numberToCheck: number, flags: boolean[]) {
    if (isReveresed) {
        check(numberToCheck, 7, flags, outputArray);
        check(numberToCheck, 5, flags, outputArray);
        check(numberToCheck, 13, flags, outputArray);
        check(numberToCheck, 3, flags, outputArray);
        print(outputArray, numberToCheck);
        return;

    }
    check(numberToCheck, 3, flags, outputArray);
    check(numberToCheck, 13, flags, outputArray);
    check(numberToCheck, 5, flags, outputArray);
    check(numberToCheck, 7, flags, outputArray);
    print(outputArray, numberToCheck);
}

function print(output: string[], numberToCheck: number) {
    if (output.length == 0) {
        console.log(numberToCheck);
        return;
    }
    for (let el of output) {
        process.stdout.write(el);
    }
    process.stdout.write('\n');
}

populateDict();
getFlags();
count();