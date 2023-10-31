import {describe, it} from "mocha";
import  { expect } from "chai";
import sumValues from "../sumValues.js";

describe("sumValues",function(){
    it("Dati due numeri interi dovrebbe restituire la somma dei due numeri",function(){
        const test_number1=5;
        const test_number2=6;
        expect(sumValues(test_number1,test_number2)).to.equal(11);
    })
})
