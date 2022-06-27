import * as readline from 'readline';

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
async function count() {
    let i: number = 1;
    let n = await readInput("Input Number: ") as number;
    for(i = 1; i <= n; i++) {
        if (i % 13 && i % 11 && i % 7 && i % 5 && i % 3) {
            console.log(i);
            continue;
        }
        if (i % 11 == 0) {
            console.log("Bong");
        } else {
            if (i % 17 == 0) {
                if (i % 7 == 0) {
                    process.stdout.write("Bang");
                }
                if (i % 5 == 0) {
                    process.stdout.write("Buzz")
                }
                if (i % 13 == 0) {
                    process.stdout.write("Fezz");
                }
                if (i % 3 == 0) {
                    process.stdout.write("Fizz");
                }
            } else {
                if (i % 3 == 0) {
                    process.stdout.write("Fizz");
                }
                if (i % 13 == 0) {
                    process.stdout.write("Fezz");
                }
                if (i % 5 == 0) {
                    process.stdout.write("Buzz")
                }
                if (i % 7 == 0) {
                    process.stdout.write("Bang");
                }
            }
            process.stdout.write("\n");
        }
    }
}

count();