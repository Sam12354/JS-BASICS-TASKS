import { expect } from "chai";
import { lookupChar } from "../lookupChar.js"

describe('lookupChar', () => {

    it('should return undefined if the first parameter is NOT a string or the second parameter is NOT a number', () => {
        expect(lookupChar(123, 'not a number')).to.be.undefined;
        expect(lookupChar(null, [])).to.be.undefined;
        expect(lookupChar(undefined, {})).to.be.undefined;
        expect(lookupChar('string', 1.5)).to.be.undefined; 
        expect(lookupChar('string', '2')).to.be.undefined; 
        expect(lookupChar('string', NaN)).to.be.undefined; 
        expect(lookupChar([], 1)).to.be.undefined; 
    });

    it('should return "Incorrect index" if the index is out of bounds or negative', () => {
        expect(lookupChar('string', 132)).to.equal('Incorrect index'); 
        expect(lookupChar('string', -1)).to.equal('Incorrect index'); 
        expect(lookupChar('string', 6)).to.equal('Incorrect index');  
    });

    it('should return the character at the specified index if both parameters are correct', () => {
        expect(lookupChar('string', 0)).to.equal('s');   
        expect(lookupChar('string', 2)).to.equal('r');   
        expect(lookupChar('string', 5)).to.equal('g');   
    });

});
