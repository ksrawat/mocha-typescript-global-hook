/// <reference path="../typings/mocha/mocha.d.ts" />
import Calculator from '../index';
export function beforeeach(){
        var number1 = 2;
        var subject : Calculator;
        //return number1;
        return subject = new Calculator();
}

 