import { expect } from "chai";
import { mathEnforcer } from "../mathEnforcer.js"

describe('addFive', () => {

    it('return undefined if not num', () => {

        expect(mathEnforcer.addFive('not a num')).to.be.undefined;
        expect(mathEnforcer.addFive([])).to.be.undefined
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        expect(mathEnforcer.addFive(null)).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;

    });

    it('If parameter is number', () => {
        expect(mathEnforcer.addFive(10)).to.equal(15);
        expect(mathEnforcer.addFive(-2)).to.equal(3);
        expect(mathEnforcer.addFive(1.5)).to.equal(6.5);
        expect(mathEnforcer.addFive(0)).to.equal(5);
    });

});

describe('subtractTen', () => {

    it('if not number - undefined', () => {
        expect(mathEnforcer.subtractTen('not a num')).to.be.undefined;

        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen('')).to.be.undefined;
        expect(mathEnforcer.subtractTen(null)).to.be.undefined;
    })

    it('if parameter is num', () => {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
        expect(mathEnforcer.subtractTen(5.5)).to.equal(-4.5);
        expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        expect(mathEnforcer.subtractTen(-2)).to.equal(-12);
    })

});

describe('sum', () => {

    it('if only 1 par is not a num', () => {
        expect(mathEnforcer.sum('not a num', 12)).to.be.undefined;
        expect(mathEnforcer.sum(10, [])).to.be.undefined;
        expect(mathEnforcer.sum({}, 12)).to.be.undefined;
        expect(mathEnforcer.sum(undefined, 7)).to.be.undefined;
        expect(mathEnforcer.sum(null, 1)).to.be.undefined;
    });

    it('both numbers, return sum', () => {
        expect(mathEnforcer.sum(5, 6)).to.equal(11)
        expect(mathEnforcer.sum(-5, 1)).to.equal(-4)
        expect(mathEnforcer.sum(1.5, 1)).to.equal(2.5)
        expect(mathEnforcer.sum(-0.5, 0.1)).to.equal(-0.4)
    })

})