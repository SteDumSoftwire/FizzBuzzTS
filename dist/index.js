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
function count() {
    return __awaiter(this, void 0, void 0, function* () {
        let i = 1;
        let n = yield readInput("Input Number: ");
        for (i = 1; i <= n; i++) {
            if (i % 13 && i % 11 && i % 7 && i % 5 && i % 3) {
                console.log(i);
                continue;
            }
            if (i % 11 == 0) {
                console.log("Bong");
            }
            else {
                if (i % 17 == 0) {
                    if (i % 7 == 0) {
                        process.stdout.write("Bang");
                    }
                    if (i % 5 == 0) {
                        process.stdout.write("Buzz");
                    }
                    if (i % 13 == 0) {
                        process.stdout.write("Fezz");
                    }
                    if (i % 3 == 0) {
                        process.stdout.write("Fizz");
                    }
                }
                else {
                    if (i % 3 == 0) {
                        process.stdout.write("Fizz");
                    }
                    if (i % 13 == 0) {
                        process.stdout.write("Fezz");
                    }
                    if (i % 5 == 0) {
                        process.stdout.write("Buzz");
                    }
                    if (i % 7 == 0) {
                        process.stdout.write("Bang");
                    }
                }
                process.stdout.write("\n");
            }
        }
    });
}
count();
//# sourceMappingURL=index.js.map