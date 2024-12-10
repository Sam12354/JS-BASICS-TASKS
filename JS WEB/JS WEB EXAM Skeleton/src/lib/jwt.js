import util from 'util';
import jsonwebtoken from 'jsonwebtoken';


const verify = util.promisify(jsonwebtoken.verify)
const sign = util.promisify(jsonwebtoken.sign)
const decode = util.promisify(jsonwebtoken.decode)

// verify proverqva dali tokena ne e bil podpraven i dali e validen
// sign suzdava nov token s danni polzvan za vlizane na podrebitel

const jwt = {
    verify,
    sign,
    decode
};

export default jwt