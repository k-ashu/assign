import React from 'react'

import './compensation.scss'

function Compensation () {
    return(
        <div className="compensation">
            <h2 className="title">Compensation</h2>
            <table >
                <tr>
                    <th>Component</th>
                    <th>Monthly</th>
                    <th>Annually</th>
                </tr>
                <tr>
                    <td>Basic</td>
                    <td>30000</td>
                    <td>260000</td>
                </tr>
                <tr>
                    <td>PF</td>
                    <td>2400</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>HRA</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Special Allowance</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>Bonus</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>

            </table>
        </div>
        )
}

export default Compensation