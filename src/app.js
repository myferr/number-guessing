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
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const crypto_1 = require("crypto");
const console_1 = require("console");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function play() {
    const correct_answer = (0, crypto_1.randomInt)(1, 11);
    console.log(`the answer is: ${correct_answer}`);
    console.log("Guess a number from one to ten. (1 - 10)");
    rl.question(">", (ua) => {
        if (parseInt(ua) === correct_answer) {
            console.log("You got it correct!!");
        }
        else {
            failure();
        }
    });
}
function failure() {
    console.log("Sorry, you got it incorrect.");
    console.log("Play again? [y/n]");
    rl.question("[y/n] >", (playagain) => {
        if (playagain === "y") {
            play();
        }
        else if (playagain === "n") {
            console.log("Okay.");
            setTimeout(() => {
                (0, console_1.clear)();
                rl.close();
            }, 3000);
        }
        else {
            console.log("Sorry, y and n are the only supported answers.");
        }
    });
}
play();
