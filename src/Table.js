import React, {Component} from 'react';
import Nbp from './Nbp.js';

class Table extends Component {
    state = {
        data: []
      }

    async componentDidMount() {
        // var nbp = new Nbp();
        // var promise = nbp.getLastCurrencyTable('A')
        // promise.then(resp => {
        //     this.setState({ data: resp });
        // });
console.log('componentDidMount');
        var data = JSON.parse('[{"table":"A","no":"085/A/NBP/2020","effectiveDate":"2020-05-04","rates":[{"currency":"bat (Tajlandia)","code":"THB","mid":0.1285},{"currency":"dolar amerykański","code":"USD","mid":4.1646},{"currency":"dolar australijski","code":"AUD","mid":2.6712},{"currency":"dolar Hongkongu","code":"HKD","mid":0.5372},{"currency":"dolar kanadyjski","code":"CAD","mid":2.9534},{"currency":"dolar nowozelandzki","code":"NZD","mid":2.5209},{"currency":"dolar singapurski","code":"SGD","mid":2.9412},{"currency":"euro","code":"EUR","mid":4.5582},{"currency":"forint (Węgry)","code":"HUF","mid":0.0129},{"currency":"frank szwajcarski","code":"CHF","mid":4.3216},{"currency":"funt szterling","code":"GBP","mid":5.1780},{"currency":"hrywna (Ukraina)","code":"UAH","mid":0.1543},{"currency":"jen (Japonia)","code":"JPY","mid":0.039011},{"currency":"korona czeska","code":"CZK","mid":0.1674},{"currency":"korona duńska","code":"DKK","mid":0.6109},{"currency":"korona islandzka","code":"ISK","mid":0.028614},{"currency":"korona norweska","code":"NOK","mid":0.4000},{"currency":"korona szwedzka","code":"SEK","mid":0.4205},{"currency":"kuna (Chorwacja)","code":"HRK","mid":0.6011},{"currency":"lej rumuński","code":"RON","mid":0.9416},{"currency":"lew (Bułgaria)","code":"BGN","mid":2.3305},{"currency":"lira turecka","code":"TRY","mid":0.5930},{"currency":"nowy izraelski szekel","code":"ILS","mid":1.1769},{"currency":"peso chilijskie","code":"CLP","mid":0.004989},{"currency":"peso filipińskie","code":"PHP","mid":0.0823},{"currency":"peso meksykańskie","code":"MXN","mid":0.1682},{"currency":"rand (Republika Południowej Afryki)","code":"ZAR","mid":0.2214},{"currency":"real (Brazylia)","code":"BRL","mid":0.7591},{"currency":"ringgit (Malezja)","code":"MYR","mid":0.9653},{"currency":"rubel rosyjski","code":"RUB","mid":0.0552},{"currency":"rupia indonezyjska","code":"IDR","mid":0.0002758},{"currency":"rupia indyjska","code":"INR","mid":0.055094},{"currency":"won południowokoreański","code":"KRW","mid":0.003401},{"currency":"yuan renminbi (Chiny)","code":"CNY","mid":0.5897},{"currency":"SDR (MFW)","code":"XDR","mid":5.7387}]}]');
        this.setState({ data: data });
    }


    render() {
        const { data } = this.state;
        var result = [];
        var no = null;
        var effectiveDate = null;
        var table = null;

        if (data[0]) {
            var table = data[0].table;
            var no = data[0].no;
            var effectiveDate = data[0].effectiveDate;
            var result = data[0].rates.map((val, idx) => {
                return <tr key={idx}>
                        <td>{val.currency}</td>
                        <td>{val.code}</td>
                        <td>{val.mid}</td>
                    </tr>
            })
        }
        
        return (
            <div>
                <p>Table: {table}</p>
                <p>No: {no}</p>
                <p>Date: {effectiveDate}</p>
                <table class='table table-striped table-hover'>
                        <thead class="thead-dark">
                            <tr>
                                <th>Currency</th>
                                <th>Country</th>
                                <th>Cours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result}
                        </tbody>
                </table>
            </div>
        );
    }
}

export default Table
