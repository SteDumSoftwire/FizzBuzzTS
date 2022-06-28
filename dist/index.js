"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
let flags = new Array(20).fill(false);
let wordDict = {};
let outputArray = [];
function populateDict() {
    wordDict[3] = 'Fizz';
    wordDict[5] = 'Buzz';
    wordDict[7] = 'Bang';
    wordDict[11] = 'Bong';
    wordDict[13] = 'Fezz';
}
function check(numberToCheck, ruleNumber, flags, outputArray) {
    if (numberToCheck % ruleNumber == 0 && flags[ruleNumber]) {
        outputArray.push(wordDict[ruleNumber]);
    }
}
function readInput(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => rl.question(question, ans => {
        rl.close();
        let convertToNumber = Number(ans);
        resolve(convertToNumber);
    }));
}
function getFlags() {
    let args = process.argv.slice(2);
    console.log(args);
    for (let arg of args) {
        flags[Number(arg)] = true;
    }
}
function count() {
    return __awaiter(this, void 0, void 0, function* () {
        let i = 1;
        let n = yield readInput("Input Number: ");
        for (i = 1; i <= n; i++) {
            outputArray = [];
            if (i % 11 == 0 && flags[11]) {
                check(i, 11, flags, outputArray);
                continue;
            }
            if (i % 17 == 0 && flags[17]) {
                reverseOutput(true, i, flags);
            }
            else {
                reverseOutput(false, i, flags);
            }
        }
    });
}
function reverseOutput(isReveresed, numberToCheck, flags) {
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
function print(output, numberToCheck) {
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
//# sourceMappingURL=index.js.map