/// <reference path="../typings/mocha/mocha.d.ts" />
import Calculator from '../index';
import {beforeeach} from './helper';

// describe('Calculator', () => {
    

    /*beforeEach(function () {
        subject = new Calculator();
    });*/

    describe('#add', () => {
        it('should add two numbers together', () => {
            //var subject : Calculator;
            console.log(beforeeach());
            //var n1 = beforeeach();
            //var result : number = subject.add(2, 3);
            var subjectobj = beforeeach();
            var result : number = subjectobj.add(2,3);
            if (result !== 5) {
                throw new Error('Expected 2 + 3 = 5 but was ' + result);
            }
        });
    });
// });