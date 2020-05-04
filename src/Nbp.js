//Constants:
const NBP_API_URL = 'https://api.nbp.pl/api';

class Nbp {
    
    //constructor() {};

    something = () => {
        console.log('This is something method.');
    };

    /**
     *  
     *  variable: table - course table type (A, B, or C)
     *  
     *  return response
     */
    getLastCurrencyTable = (table) => {
        var query = NBP_API_URL + '/exchangerates/tables/' + table +'/';
        return this.sendRequest(query);
    };


    sendRequest = (query) => {
        return fetch(query)
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export default Nbp;
