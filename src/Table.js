import React, {Component} from 'react';
import Nbp from './Nbp.js';

class Table extends Component {
    state = {
        data: []
      }

    async componentDidMount() {
        var nbp = new Nbp();
        var promise = nbp.getLastCurrencyTable('A')
        promise.then(resp => {
            this.setState({ data: resp });
        });
    }


    render() {
        const { data } = this.state;
        var result = [];

        if (data[0]) {
            var result = data[0].rates.map((val, idx) => {
                return <tr key={idx}>
                        <td>{val.currency}</td>
                        <td>{val.code}</td>
                        <td>{val.mid}</td>
                    </tr>
            })
        }
        
        return (
            <table>
                    <thead>
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
        );
    }
}

export default Table
