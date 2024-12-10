export const getErrorMessage = (err) => {
    switch (err.name) {
        case "ValidationError":
            return Object.values(err.errors).at(0).message 
            // vru6ta masiv ot vsi4kite gre6ki na koito nie 6te vzemem purvata gre6ka
    
        default:
            return err.message;
    }
};

// tova e samo za gre6kata, tova 6te priema error i 6te 4ete gre6ka ako ima, svurzano e i s main hbs
// case ValidationError - taka se kazva gre6kata koqto se hvurlq ot mongoose